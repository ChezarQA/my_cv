// Global config
window.__debugMode = true;


function debugLog() {
	if ( __debugMode ) {
		if ( window.console && console.log ) {
			var args = Array.prototype.slice.call( arguments );
			console.log.apply( console, args );
		}
	}
}


// if ( !window.FileUploader ) {
	class FileUploader {
		constructor( file ) {
			this.file = file;
			this.data = new FormData();
			this.data.append( 'file', this.file );

			this.request = new XMLHttpRequest();
			this.request.responseType = 'json';
		}

		send( uploadURL, postData ) {
			var dataObj = postData || {};

			for ( var prop in dataObj ) { 
				if ( dataObj.hasOwnProperty( prop ) ) {
					this.data.set( prop, dataObj[ prop ] );
				}
			}


			this.request.open( 'POST', uploadURL, true );
			this.request.setRequestHeader( 'Cache-Control', 'no-cache' );
			this.request.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' );

			this.request.send( this.data );
		}

		onprogress( callback ) {
			this.request.upload.addEventListener( 'progress', function( event ) {
				if ( event.lengthComputable ) {
					var completed = ( event.loaded / event.total ) * 100;

					debugLog( 'Completed:', completed );

					callback( completed );
				}
			} );
		}

		loadstart( callback ) {
			this.request.upload.addEventListener( 'loadstart', callback );
		}

		onload( callback ) {
			this.request.upload.addEventListener( 'load', callback );
		}

		success( callback ) {
			let request = this.request;

			this.request.onreadystatechange = function() {
				if ( request.readyState === 4 && request.status === 200 ) {
					callback( request.response );
				}
			};
		}
	}


	// function FileUploader( file ) {
	// 	this.file = file;
	// 	this.data = new FormData();
	// 	this.data.append( 'file', this.file );

	// 	this.request = new XMLHttpRequest();
	// 	this.request.responseType = 'json';
	// }

	// FileUploader.prototype.constructor = FileUploader; 

	// FileUploader.prototype.send = function( uploadURL, postData ) {
	// 	var dataObj = postData || {};

	// 	for ( var prop in dataObj ) { 
	// 		if ( dataObj.hasOwnProperty( prop ) ) {
	// 			this.data.set( prop, dataObj[ prop ] );
	// 		}
	// 	}


	// 	this.request.open( 'POST', uploadURL, true );
	// 	this.request.setRequestHeader( 'Cache-Control', 'no-cache' );
	// 	this.request.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' );

	// 	this.request.send( this.data );
	// };

	// FileUploader.prototype.onprogress = function( callback ) {
	// 	this.request.upload.addEventListener( 'progress', function( event ) {
	// 		if ( event.lengthComputable ) {
	// 			var completed = ( event.loaded / event.total ) * 100;

	// 			debugLog( 'Completed:', completed );

	// 			callback( completed );
	// 		}
	// 	} );
	// };

	// FileUploader.prototype.loadstart = function( callback ) {
	// 	this.request.upload.addEventListener( 'loadstart', callback );
	// };

	// FileUploader.prototype.onload = function( callback ) {
	// 	this.request.upload.addEventListener( 'load', callback );
	// };

	// FileUploader.prototype.success = function( callback ) {
	// 	let request = this.request;

	// 	this.request.onreadystatechange = function() {
	// 		if ( request.readyState === 4 && request.status === 200 ) {
	// 			callback( request.response );
	// 		}
	// 	};
	// };
// }


/**
 * Проверяем доступность drag'n'drop.
 */
function dragAndDropAvailable() {
    let hd = document.createElement( 'div' );
    
    return ( ( 'draggable' in hd )
            || ( 'ondragstart' in hd && 'ondrop' in hd ) )
            && 'FormData' in window
            && 'FileReader' in window;
}

debugLog( 'DragAndDrop available:', dragAndDropAvailable() );
