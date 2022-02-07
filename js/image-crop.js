( function( factory ) {
    'use strict';
    if ( typeof define === 'function' && define.amd ) {
        define( [
            'jquery',
            'jquery.ui.widget'
        ], factory );
    } else {
        factory( window.jQuery );
    }
} ( function( $ ) {
	$.fn.imageCrop = function( opts ) {
        let defaults = {
            selector: {
                cropImg: '.crop-image',
                cropImg_miniatureLayer: '.crop-miniature-layer',
                cropImg_miniature: '.crop-miniature-image',
                saveButton: '.button-crop-save'
            },

            canvas_minWidth: 100,
            canvas_minHeight: 100,

            imgSrc: ''
        };

        let settings = $.extend( true, {}, defaults, opts || {} );


        let mode = 'none';
        let action = 'none';

        let isResponseWaiting = false;

        let events = {
            change: [] 
        };

        // Содержит DOM плагина
        let $content;

        let thumbImg, cropLayerImg;
        
        let thumbImg_width, thumbImg_height;
        let thumbImg_width_prev, thumbImg_height_prev;

        let cropLayer,
            cropLayer_width,
            cropLayer_height,
            cropLayer_top,
            cropLayer_left;

        // Предыдущие значения положения миниатюры при изменении ее размеров
        let cropLayer_width_prev,
            cropLayer_height_prev,
            cropLayer_top_prev,
            cropLayer_left_prev;


        let mouse_x, mouse_y; // Текущие координаты курсора относительно окна
        let cropLayer_x, cropLayer_y; // Текущее смещение миниатюры относительно родительского контейнера
        let cropLayer_currentWidth, cropLayer_currentHeight; // Вычисленные новые размеры миниатюры в событии mousemove
        let cropLayer_aspectRatio;

        let cropLayer_maxTop, cropLayer_maxLeft; // Максимальное смещение миниатюры внутри родительского контейнера
        let cropLayer_maxWidth, cropLayer_maxHeight; // Максимальные высота и ширина при растягивании

        let cropLayer_minTop = 0, cropLayer_minLeft = 0;

        // Минимальные размеры миниатюры
        let cropLayer_minWidth,
            cropLayer_minHeight;

        let current_marker; // Текущий маркер изменения размера
        let marker_nw,
            marker_ne,
            marker_se,
            marker_sw;

        let templates = {
            photoCrop:
                '<div id="crop_layer" class="crop-layer">'+
                    '<div class="box-content">' +
                        '<div class="crop-image-layer">' +
                            '<div class="crop-image-wrap">' +
                                '<img class="crop-image" src="">' +

                                '<div class="crop-image-fade"></div>' +

                                '<div class="crop-miniature-layer">' +
                                    '<div class="crop-miniature-wrap">' +
                                        '<img class="crop-miniature-image">' +
                                    '</div>' +

                                    '<div class="crop-marker marker-nw"></div>' +
                                    '<div class="crop-marker marker-ne"></div>' +
                                    '<div class="crop-marker marker-se"></div>' +
                                    '<div class="crop-marker marker-sw"></div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +

                        '<div class="actions-layer">' +
                            '<div class="button blue button-crop-save">Сохранить</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
        };


        
        let window_onResize = function() {
            debugLog( 'window_onResize' );

            calculateValues();
        };


        let photoCropLayer_cropLayer_onDown = function( e ) {
            e.preventDefault();
            
            if ( $( e.target ).hasClass( 'crop-marker' ) && mode !== 'move' ) {
                mode = 'resize';
                current_marker = e.target;
            } else if ( e.currentTarget === cropLayer[ 0 ] && mode !== 'resize' ) {
                mode = 'move';
            }
        };


        let photoCropLayer_onMousedown = function( e ) {
            if ( e.button === 0 && e.buttons > 0 ) {
                mouse_x = e.screenX;
                mouse_y = e.screenY;

                onDown( mouse_x, mouse_y );
            }
        };

        let photoCropLayer_onTouchstart = function( e ) {
            // e.preventDefault();

            let touch = e.touches[ 0 ];
            mouse_x = touch.screenX;
            mouse_y = touch.screenY;

            onDown( mouse_x, mouse_y );
        };

        let onDown = function( mouse_x, mouse_y ) {
            debugLog( 'onDown' );

            // Текущее смещение миниатюры относительно родительского контейнера (холста)
            cropLayer_x = cropLayer.position().left;
            cropLayer_y = cropLayer.position().top;


            // Сохраняем предыдущие значения размера миниатюры
            cropLayer_width_prev = cropLayer_width;
            cropLayer_height_prev = cropLayer_height;

            // Текущие размеры миниатюры
            cropLayer_width = cropLayer.width();
            cropLayer_height = cropLayer.height();

            switch( mode ) {
                case 'move':
                    // Максимальное смещение миниатюры влево или вниз при перемещении
                    // (для предотвращения выхода миниатюры за пределы области видимости)
                    cropLayer_maxTop = cropLayerImg.height() - cropLayer_height;
                    cropLayer_maxLeft = cropLayerImg.width() - cropLayer_width;
                    break;
                case 'resize':
                    if ( current_marker === marker_nw ||
                        current_marker === marker_ne ) {
                        cropLayer_maxHeight = cropLayer_y + cropLayer_height;
                    }

                    if ( current_marker === marker_ne ||
                        current_marker === marker_se ) {
                        cropLayer_maxWidth = thumbImg_width - cropLayer_x;
                    }

                    if ( current_marker === marker_se ||
                        current_marker === marker_sw ) {
                        cropLayer_maxHeight = thumbImg_height - cropLayer_y;
                    }

                    if ( current_marker === marker_sw ||
                        current_marker === marker_nw ) {
                        cropLayer_maxWidth = cropLayer_x + cropLayer_width;
                    }


                    // if ( cropLayer_maxWidth > cropLayer_maxHeight ) {
                    //     cropLayer_maxWidth = cropLayer_maxHeight;
                    // } else if ( cropLayer_maxHeight > cropLayer_maxWidth ) {
                    //     cropLayer_maxHeight = cropLayer_maxWidth;
                    // }

                    debugLog( cropLayer_maxWidth, cropLayer_maxHeight );
            }
        };


        let photoCropLayer_onMousemove = function( e ) {
            // e.preventDefault();

            if ( e.button === 0 && e.buttons > 0 ) {
                let offset_x = e.screenX - mouse_x,
                    offset_y = e.screenY - mouse_y;

                onMove( offset_x, offset_y );
            }
        };

        let photoCropLayer_onTouchmove = function( e ) {
            // e.preventDefault();

            let touch = e.touches[ 0 ];

            let offset_x = touch.screenX - mouse_x,
                offset_y = touch.screenY - mouse_y;

            onMove( offset_x, offset_y );
        };

        let onMove = function( offset_x, offset_y ) {
            debugLog( 'mode', mode );
            


            cropLayer_top_prev = cropLayer_top;
            cropLayer_left_prev = cropLayer_left;

            cropLayer_top = cropLayer_y + offset_y;
            cropLayer_left = cropLayer_x + offset_x;

            switch( mode ) {
                case 'move':
                    if ( cropLayer_top <= cropLayer_minTop ) {
                        cropLayer_top = cropLayer_minTop;
                    } else if ( cropLayer_top >= cropLayer_maxTop ) {
                        cropLayer_top = cropLayer_maxTop;
                    }

                    if ( cropLayer_left <= cropLayer_minLeft ) {
                        cropLayer_left = cropLayer_minLeft;
                    } else if ( cropLayer_left >= cropLayer_maxLeft ) {
                        cropLayer_left = cropLayer_maxLeft;
                    }

                    cropLayer.css( 'top', cropLayer_top + 'px' );
                    cropLayer.css( 'left', cropLayer_left + 'px' );
                    cropLayerImg.css( 'top', '-' + cropLayer_top + 'px' );
                    cropLayerImg.css( 'left', '-' + cropLayer_left + 'px' );
                    break;

                case 'resize':
                    // Вычисляем новые размеры миниатюры
                    if ( current_marker === marker_nw ||
                        current_marker === marker_ne ) {
                        cropLayer_currentHeight = cropLayer_height - offset_y;
                    }

                    if ( current_marker === marker_ne ||
                        current_marker === marker_se ) {
                        cropLayer_left = cropLayer_x;
                        cropLayer_currentWidth = cropLayer_width + offset_x;
                    }

                    if ( current_marker === marker_se ||
                        current_marker === marker_sw ) {
                        cropLayer_top = cropLayer_y;
                        cropLayer_currentHeight = cropLayer_height + offset_y;
                    }

                    if ( current_marker === marker_sw ||
                        current_marker === marker_nw ) {
                        cropLayer_currentWidth = cropLayer_width - offset_x;
                    }


                    // Проверяем выход за пределы допустипмых значений размеров сторон
                    if ( cropLayer_currentWidth <= cropLayer_minWidth ) {
                        cropLayer_currentWidth = cropLayer_minWidth;
                    } else if ( cropLayer_currentWidth >= cropLayer_maxWidth ) {
                        cropLayer_currentWidth = cropLayer_maxWidth;
                    }

                    cropLayer_currentHeight = cropLayer_currentWidth / cropLayer_aspectRatio;


                    if ( cropLayer_currentHeight <= cropLayer_minHeight ) {
                        cropLayer_currentHeight = cropLayer_minHeight;
                    } else if ( cropLayer_currentHeight >= cropLayer_maxHeight ) {
                        cropLayer_currentHeight = cropLayer_maxHeight;
                    }

                    cropLayer_currentWidth = cropLayer_currentHeight * cropLayer_aspectRatio;


                    switch( current_marker ) {
                        case marker_nw:
                            cropLayer_top = cropLayer_y + cropLayer_height - cropLayer_currentHeight;
                            cropLayer_left = cropLayer_x + cropLayer_width - cropLayer_currentWidth;
                            break;

                        case marker_ne:
                            cropLayer_top = cropLayer_y + cropLayer_height - cropLayer_currentHeight;
                            break;

                        case marker_se:
                            break;

                        case marker_sw:
                            cropLayer_left = cropLayer_x + cropLayer_width - cropLayer_currentWidth;
                    }


                    if ( cropLayer_top < 0 ) {
                        cropLayer_top = 0;
                    }

                    if ( cropLayer_left < 0 ) {
                        cropLayer_left = 0;
                    }


                    // cropLayer_width_prev = cropLayer_currentWidth;
                    // cropLayer_height_prev = cropLayer_currentHeight;

                    cropLayer.css( 'top', cropLayer_top + 'px' );
                    cropLayer.css( 'left', cropLayer_left + 'px' );
                    cropLayer.css( 'width', cropLayer_currentWidth + 'px' );
                    cropLayer.css( 'height', cropLayer_currentHeight + 'px' );

                    cropLayerImg.css( 'top', '-' + cropLayer_top + 'px' );
                    cropLayerImg.css( 'left', '-' + cropLayer_left + 'px' );
            }


            // Сохраняем значения положения миниатюры
            // Необходимо для отслеживания изменений в дальнейшем
            if ( cropLayer_currentWidth ) {
                cropLayer_width_prev = cropLayer_currentWidth;
            } else {
                cropLayer_width_prev = cropLayer_width;
            }

            if ( cropLayer_currentHeight ) {
                cropLayer_height_prev = cropLayer_currentHeight;
            } else {
                cropLayer_height_prev = cropLayer_height;
            }

            debugLog( 'onMove' );
            debugLog( cropLayer_width_prev, cropLayer_height_prev );
            debugLog( cropLayer_width, cropLayer_height );
        };


        let photoCropLayer_onMouseup = function( e ) {
            debugLog( 'photoCropLayer_onMouseup' );
            debugLog( 'mode', mode );
            debugLog( 'modal', settings.modal );
            debugLog( e.target === this );

            // !!! Фикс для плагина модального окна
            // Обязательно наличие "closeOnOverlayClick: false" при инициализации модалки,
            // а также передать через опцию modal экзепляр модального окна
            if ( mode === 'none' && e.target === this && settings.modal ) {
                settings.modal.close();
            }


            // Сохраняем изменения, если установлен флаг автосохранения
            if ( settings.submitOnChange === true && mode !== 'none' ) {
                // Проверяем, изменилось ли положение или размеры миниатюры
                if ( ( parseInt( cropLayer_width_prev ) !== parseInt( cropLayer_width ) ) ||
                     ( parseInt( cropLayer_height_prev ) !== parseInt( cropLayer_height ) ) ||
                     ( parseInt( cropLayer_top_prev ) !== parseInt( cropLayer_top ) ) ||
                     ( parseInt( cropLayer_left_prev ) !== parseInt( cropLayer_left ) ) ) {
                    submitData().then( ( response ) => {
                        if ( settings.onChangeSuccess ) {
                            settings.onChangeSuccess( response );
                        }
                    } );
                }
            }


            cropLayer_width = cropLayer_width_prev;
            cropLayer_height = cropLayer_height_prev;
            // cropLayer_top = cropLayer_top_prev;
            // cropLayer_left = cropLayer_left_prev;

            mode = 'none';
        };


        let calculateValues = function() {
            debugLog( 'calculateValues' );
            debugLog( thumbImg_width, thumbImg_height );
            debugLog( cropLayer_top, cropLayer_left, cropLayer_width, cropLayer_height );


            thumbImg_width_prev = thumbImg_width;
            thumbImg_height_prev = thumbImg_height;



            debugLog( 'thumbImg_width_prev', thumbImg_width_prev );
            debugLog( 'thumbImg_height_prev', thumbImg_height_prev );


            thumbImg_width = thumbImg.width();
            thumbImg_height = thumbImg.height();
            thumbImg_ratio = thumbImg_width / thumbImg_height;

            // Вычисляем самую узкую сторону
            let cropLayer_narrowestSide_val;

            // Вертикальное изображение
            if ( thumbImg_ratio < 1 ) {
                cropLayer_narrowestSide_val = thumbImg_width;
            } else {
                cropLayer_narrowestSide_val = thumbImg_height;
            }
            

            if ( thumbImg_width_prev && thumbImg_height_prev ) {
                debugLog( 'thumbImg_width_prev && thumbImg_height_prev' );
                debugLog( thumbImg_width / thumbImg_width_prev );

                let correctionRatio = thumbImg_width / thumbImg_width_prev;

                cropLayer_width = cropLayer_width * correctionRatio;
                cropLayer_height = cropLayer_height * correctionRatio;
                cropLayer_top = cropLayer_top * correctionRatio;
                cropLayer_left = cropLayer_left * correctionRatio;
            } else {
                // Соотношение сторон кроп-области
                if ( settings.cropRegion && settings.cropRegion.aspectRatio && ( settings.cropRegion.aspectRatio !== 1 ) ) {
                    cropLayer_aspectRatio = settings.cropRegion.aspectRatio;
                } else if ( settings.cropRegion.width && settings.cropRegion.height ) {
                    cropLayer_aspectRatio = ( thumbImg_width * settings.cropRegion.width ) / ( thumbImg_height * settings.cropRegion.height );
                } else {
                    cropLayer_aspectRatio = 1;
                }


                if ( settings.cropRegion ) {
                    if ( settings.cropRegion.aspectRatio && settings.cropRegion.aspectRatio !== 1 ) {
                        // Если кроп область уже холста, отталкиваемся от его высоты
                        if ( settings.cropRegion.aspectRatio < thumbImg_ratio ) {
                            cropLayer_height = thumbImg_height - 30;
                            cropLayer_width = cropLayer_height * settings.cropRegion.aspectRatio;
                        } else {
                            cropLayer_width = thumbImg_width - 30;
                            cropLayer_height = cropLayer_width / settings.cropRegion.aspectRatio;
                        }
                    } else if ( settings.cropRegion.width && settings.cropRegion.height ) {
                        cropLayer_width = settings.cropRegion.width * thumbImg_width;
                        cropLayer_height = settings.cropRegion.height * thumbImg_height;
                    } else {
                        cropLayer_width = cropLayer_narrowestSide_val - 30;
                        cropLayer_height = cropLayer_narrowestSide_val - 30;
                    }

                    
                    if ( settings.cropRegion.top ) {
                        cropLayer_top = settings.cropRegion.top * thumbImg_height;
                    } else {
                        cropLayer_top = ( thumbImg_height - cropLayer_height ) / 2;
                    }

                    if ( settings.cropRegion.left ) {
                        cropLayer_left = settings.cropRegion.left * thumbImg_width;
                    } else {
                        cropLayer_left = ( thumbImg_width - cropLayer_width ) / 2;
                    }
                } else {
                    cropLayer_width = cropLayer_narrowestSide_val - 30;
                    cropLayer_height = cropLayer_narrowestSide_val - 30;
                    cropLayer_top = ( thumbImg_height - cropLayer_height ) / 2;
                    cropLayer_left = ( thumbImg_width - cropLayer_width ) / 2;
                }
            }

            cropLayer_width_prev = cropLayer_width;
            cropLayer_height_prev = cropLayer_height;
            cropLayer_top_prev = cropLayer_top;
            cropLayer_left_prev = cropLayer_left;

            
            // Минимальные размеры сторон кроп-области
            if ( cropLayer_aspectRatio > 1 ) {
                cropLayer_minWidth = 0.2 * cropLayer_narrowestSide_val * cropLayer_aspectRatio;
                cropLayer_minHeight = 0.2 * cropLayer_narrowestSide_val;
            } else {
                cropLayer_minWidth = 0.2 * cropLayer_narrowestSide_val;
                cropLayer_minHeight = cropLayer_minWidth / cropLayer_aspectRatio;
            }

            debugLog( 'cropLayer_minWidth', cropLayer_minWidth );
            debugLog( 'cropLayer_minHeight', cropLayer_minHeight );


            cropLayer.css( 'top',  cropLayer_top + 'px' );
            cropLayer.css( 'left', cropLayer_left + 'px' );
            cropLayer.css( 'width', cropLayer_width + 'px' );
            cropLayer.css( 'height', cropLayer_height + 'px' );


            cropLayerImg_width = thumbImg_width;
            cropLayerImg_height = thumbImg_height;
            cropLayerImg_top = cropLayer_top;
            cropLayerImg_left = cropLayer_left;

            cropLayerImg.attr( 'src', thumbImg.attr( 'src' ) );
            cropLayerImg.css( 'top', '-' + cropLayerImg_top + 'px' );
            cropLayerImg.css( 'left', '-' + cropLayerImg_left + 'px' );
            cropLayerImg.css( 'width', cropLayerImg_width + 'px' );
            cropLayerImg.css( 'height', cropLayerImg_height + 'px' );
        };


        let cropLayerImage_onLoad = function( e ) {
            debugLog( 'cropLayerImage_onLoad' );

            cropLayer = $content.find( settings.selector.cropImg_miniatureLayer );
            cropLayerImg = $content.find( settings.selector.cropImg_miniature );

            marker_nw = $content.find( '.marker-nw' ).get( 0 );
            marker_ne = $content.find( '.marker-ne' ).get( 0 );
            marker_se = $content.find( '.marker-se' ).get( 0 );
            marker_sw = $content.find( '.marker-sw' ).get( 0 );


            calculateValues();


            cropLayer.on( 'mousedown touchstart', photoCropLayer_cropLayer_onDown );

            settings.modalOverlay.on( 'mousedown', photoCropLayer_onMousedown );
            settings.modalOverlay.on( 'touchstart', photoCropLayer_onTouchstart );

            settings.modalOverlay.on( 'mousemove', photoCropLayer_onMousemove );
            settings.modalOverlay.on( 'touchmove', photoCropLayer_onTouchmove );
            
            settings.modalOverlay.on( 'mouseup touchend', photoCropLayer_onMouseup );
        };




        let submitData = () => {
            return new Promise( ( resolve, reject ) => {
                // Предотвращаем повторное срабатывание обработчика
                if ( isResponseWaiting === true ) {
                    return;
                }

                isResponseWaiting = true;

                let cropData = {
                    canvas: {
                        width: thumbImg_width,
                        height: thumbImg_height
                    },

                    region: {
                        top: cropLayer_top,
                        left: cropLayer_left,
                        width: cropLayer_width,
                        height: cropLayer_height
                    }
                };

                $.ajax( {
                    method: 'post',
                    url: settings.submitUrl,
                    data: $.extend( true, {}, cropData, settings.postData || {} ),
                    dataType: 'json',
                    cache: false,

                    success: function( response ) {
                        isResponseWaiting = false;
                        
                        resolve( response );
                    }
                } );
            } );
        };

        let button_cropSave_onClick = function( e ) {
            e.preventDefault();

            submitData().then( ( response ) => {
                if ( settings.success ) {
                    settings.success( response );
                }
            } );
        };


        let buildPhotoCropLayer = function() {
            $content = $( templates.photoCrop );

            let $cropImg = $content.find( settings.selector.cropImg );
            $cropImg.attr( 'src', settings.imgSrc );
            $cropImg.on( 'load', cropLayerImage_onLoad );

            $content.find( settings.selector.saveButton ).on( 'click', button_cropSave_onClick );

            return $content.get( 0 );
        };



        let addEventListener = function( event, handler ) {
            events[ event ].push( handler );
        };

        let triggerEvent = function( event ) {
            for ( var e in events[ event ] ) {
                events[ event ][ e ]();
            }
        };



        let $element = this.get( 0 );
        $element.append( buildPhotoCropLayer() );

        thumbImg = $content.find( settings.selector.cropImg );


        $( window ).on( 'resize', window_onResize );
    };
} ) );
