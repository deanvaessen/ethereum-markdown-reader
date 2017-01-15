/*******************************
 * [_index.js]
 * index file for the helpers
 ******************************/

/**
* { Dependencies }
*/
import renderHelpers from './_render';
import verificationHelpers from './_verify';

/**
* { Function }
*/
const index = (function () {

			/**
			* { Render }
			* Support helpers for rendering
			*/
			const render = {
				renderDocumentTitle : function (renderer, initialTitle){
					return renderHelpers.add.renderDocumentTitle(renderer, initialTitle);
				},
				clearContent : function (){
					return renderHelpers.remove.clearContent();
				}
			};

			/**
			* { Verify }
			* Support helpers for verification
			*/
			const verify = {
				url : function (requestURL){
					return verificationHelpers.url(requestURL);
				}
			};

			return {
				render : render,
				verify : verify
			};
})();


/**
 * Export
 */
module.exports = index;
