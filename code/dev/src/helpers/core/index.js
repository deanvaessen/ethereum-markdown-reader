/*******************************
 * [_index.js]
 * index file for the helpers
 ******************************/

/**
* { Dependencies }
*/
import renderHelpers from './render';

/**
* { Function }
*/
const index = (function () {

			/**
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

			return {
				render : render
			};
})();


/**
 * Export
 */
module.exports = index;
