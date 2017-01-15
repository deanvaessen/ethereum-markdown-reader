/*******************************
 * [markdownreader.js]
 * The core markdown-reader js file.
 ******************************/

/**
* { Dependencies }
*/
	// Support functions
	import support from './helpers/core/index.js';

	// Vendor functions
	import marked from './helpers/vendor/marked.js';

/**
* { App }
*/
const index = (function() {

	/**
	* { Init }
	* Init the app
	*/
	const init = (function(requestedBaseURL) {

		/**
		* { Variables }
		*/
		let baseURL;

		// if no baseURL was given, look in a fallback directory
		if (!requestedBaseURL){
			baseURL = './repository/md/';
		} else {
			baseURL = requestedBaseURL;
		}

		/**
		 * { catch a fragmentRequest }
		 * On change URL, try to render a document
		 */
		const fragmentRequest = function() {

			if (window.location.hash) {
				const swarmFragment = window.location.hash.substring(1);

				/**
				 * Set up the markdown render options
				 */
					const renderer = new marked.Renderer();

				/**
				 * Grab a document and render it to the container
				 */
					const swarmDocumentPath = baseURL + swarmFragment;

					/*eslint-disable */
					const xhr = new XMLHttpRequest();
					/*eslint-enable */

					xhr.onreadystatechange = function() {

						if (xhr.readyState === 4) {

							/**
							 * Verify filetype in the URL to catch incorrect routes
							 * Also check for illegal characters
							 */

							const urlVerification = support.verify.url(swarmFragment),
								validURL = urlVerification.validity,
								validityError = urlVerification.error;

							// Render an error
							if (!validURL) {
								// Clear previous content
								support.render.clearContent();

								// Render an error
								document.getElementById('app__error').innerHTML =
								marked('# Oops! \n\n' + validityError);

								document.title = 'Document error!';

								return;
							}

							/**
							  * Check if a document was grabbed or not, handle errors
							  */
							if (xhr.status == '404') {
									// Clear previous content
									support.render.clearContent();

									// Render an error
									document.getElementById('app__error').innerHTML =
									marked('# Oops! \n\nWe could not find this file.');

									document.title = 'File not found!';
							} else {
									// Clear previous content
									support.render.clearContent();

									// Render document title with an initial title and search for new title
									support.render.renderDocumentTitle(renderer, 'unnamed');

									// Render the document
									document.getElementById('app__markdownContent').innerHTML =
									marked(xhr.responseText, { renderer : renderer });
							}
					}
				};

				// Send request
				xhr.open('GET', swarmDocumentPath, false);
				xhr.send();
			} else {
				// Leave document empty
				return;
			}
		};

		// Set the fragmentChange function to run each time the window on hash event fires
		window.onhashchange = fragmentRequest;

		// Run the function
		fragmentRequest();
	}());

	return {
		init : init
	};
}());

/**
 * Export
 */
module.exports = index;