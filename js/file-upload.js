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
	$.fn.fileUpload = function( opts ) {
		// Параметры по-умолчанию
		let defaults = {
			selector: {
				fileInputLayer: '.file-input-layer',
				inputBlock: '.photo-input',
				dropArea: '.drop-area'
			},

			uploadURL: '/modules/api/file-upload/upload.php',

			onProgress: () => {},
			onLoadStart: () => {},
			onLoad: () => {},
			success: () => {}
		};

		let settings = $.extend( true, {}, defaults, opts || {} );


		/**
		 * Methods
		 */
		let buildFileInput = function() {
			let inputTpl = '<input type="file" name="file" accept="image/gif,image/jpeg,image/jpg,image/png">';
			let $input = $( inputTpl );
			
			return $input;
		};

		let rebuildFileInput = function( context ) {
			debugLog( 'rebuildFileInput' );
			debugLog( context.nodes.$uploadInput );

			context.nodes.$uploadInput.remove();

			let $uploadInput = buildFileInput( context );
			context.nodes.$uploadInput = $uploadInput;

			context.nodes.$inputBlock.append( $uploadInput );

			initFileInput( context );
		};


		/**
		 * Инициализирует кнопку загрузки изображения
		 */
		let initFileInput = function( context ) {
			context.nodes.$uploadInput.on( 'change', uploadInput_onChange.bind( null, context ) );
		};

		/**
		 * Инициализирует Drag'n'Drop режим
		 */
		let initDragAndDrop = function( context ) {
			if ( dragAndDropAvailable() ) {
				[ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( ( event ) => {
					context.nodes.$fileInputLayerForm.on( event, ( e ) => {
						debugLog( 'File input layer form event', event );

						e.preventDefault();
						e.stopPropagation();
					} );
				} );


				context.nodes.$fileInputLayerForm.on( 'dragenter', ( e ) => {
					debugLog( 'FileUpload Event::Dragenter' );

					context.vars.isDragAndDropMode = true;
				} );

				context.nodes.$fileInputLayerForm.on( 'dragleave', ( e ) => {
					debugLog( 'FileUpload Event::Dragleave' );

					context.vars.isDragAndDropMode = false;
				} );

				context.nodes.$fileInputLayerForm.on( 'drop', dropArea_onDrop.bind( null, context ) );
			}
		};

		let submitFile = function( file ) {
			let uploader = new FileUploader( file );

			debugLog( 'file', file );
			debugLog( 'uploader', uploader );

			uploader.onprogress( settings.onProgress );
			uploader.loadstart( settings.onLoadStart );
			uploader.onload( settings.onLoad );
			uploader.success( settings.success );
			
			uploader.send( settings.uploadURL, {
				type: 1
			} );
		};


		/**
		 * Event handlers
		 */
		function uploadInput_onChange( context, e ) {
			debugLog( 'uploadInput_onChange' );
			debugLog( e.target.files[ 0 ] );

			let file = e.target.files[ 0 ];
			rebuildFileInput( context );

			submitFile( file );
		}

		function dropArea_onDrop( context, e ) {
			debugLog( 'dropArea_onDrop', e );
			debugLog( e.originalEvent.dataTransfer.files );


			context.vars.isDragAndDropMode = false;

			let FileList = e.originalEvent.dataTransfer.files;

			for ( let i = 0; i < FileList.length; ++i ) {
				// Проверяем, что было переданно изображение
				if ( /\.(jpe?g|png|gif)$/i.test( FileList[ i ].name ) ) {
					debugLog( 'Fuck! ', i );

					submitFile( FileList[ i ] )
					    .then( ( response, status ) => {

					    } );
				} else {

				}
			}
		}


		return this.each( function( index, el ) {
			let isDragAndDropMode = false;

			let $uploadBox = $( el );

			let $fileInputLayer = $uploadBox.find( settings.selector.fileInputLayer );
			let $fileInputLayerForm = $fileInputLayer.find( 'form' );
			let $inputBlock = $fileInputLayer.find( settings.selector.inputBlock );
			let $uploadInput = $inputBlock.find( 'input[type="file"]' );
			let $dropArea = $fileInputLayer.find( settings.selector.dropArea );

			// Объект контекста
			let context = {
				nodes: {
					'$fileInputLayer': $fileInputLayer,
					'$fileInputLayerForm': $fileInputLayerForm,
					'$inputBlock': $inputBlock,
					'$uploadInput': $uploadInput,
					'$dropArea': $dropArea
				},

				vars: {
					isDragAndDropMode: isDragAndDropMode
				}
			};


			initFileInput( context );
			initDragAndDrop( context );
		} );
	};
} ) );
