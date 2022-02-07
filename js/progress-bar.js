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
	'use strict';

    $.fn.LineProgressbar = function( options ) {
        options = $.extend( {
            percentage: 0,
            ShowProgressCount: true,
            duration: 500,
            fillBackgroundColor: '#315efb',
            backgroundColor: 'rgb(245, 242, 235)',
            radius: '2px',
            height: '24px',
            width: '100%'
        }, options );

        $.options = options;

        return this.each( function( index, el ) {
            $( el ).html( '<div class="progressbarCount">Готово: <span class="progressbarCountPersent"></span></div><div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>' );
            let progressFill = $( el ).find('.proggress');
            let progressBar = $( el ).find('.progressbar');
            progressFill.css( {
                backgroundColor: options.fillBackgroundColor,
                height: options.height,
                borderRadius: options.radius
            } );
            progressBar.css( {
                width: options.width,
                backgroundColor: options.backgroundColor,
                borderRadius: options.radius
            } );
            progressFill.animate( {
                width: options.percentage + "%"
            }, {
                step: function( x ) {
                    if ( options.ShowProgressCount ) {
                        let $counter = $( el ).find( '.percentCount' );
                        // $counter.text(Math.round(x) + '%');
                        $counter.css( 'width', x + '%' );

                        $( '.progressbarCountPersent' ).text( Math.round( x ) + '%' );
                    }
                },
                duration: options.duration
            } );
        } );
    }

    $.fn.progressTo = function( next ) {
        let options = $.options;

        return this.each( function( index, el ) {
            let progressFill = $( el ).find('.proggress');
            let progressBar = $( el ).find('.progressbar');
            progressFill.animate( {
                width: next + "%"
            }, {
                step: function( x ) {
                    if ( options.ShowProgressCount ) {
                        let $counter = $( el ).find( '.percentCount' );
                        // $counter.text(Math.round(x) + '%');
                        $counter.css( 'width', x + '%' );

                        $( '.progressbarCountPersent' ).text( Math.round( x ) + '%' );
                    }
                },
                duration: options.duration
            } );
        } );
    }
} ) );