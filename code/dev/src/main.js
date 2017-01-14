/**
 * Dependencies
 */
	// Styling
	import './style.scss';

	// Support functions
	import support from 'src/helpers/core/index.js';

	// Vendor functions
	import marked from 'src/helpers/vendor/marked.js';

/**
 * Variables
 */
//const baseUrl = '/~nagydani/md/';
const baseUrl = './repository/md/';

/**
 * On change URL, try to render a document
 */
const fragmentChange = function() {

	if (window.location.hash) {
		const swarmFragment = window.location.hash.substring(1);

		/**
		 * Set up the markdown render options
		 */
			const renderer = new marked.Renderer();

		/**
		 * Grab a document and render it to the container
		 */
			const swarmDocumentPath = baseUrl + swarmFragment;

			/*eslint-disable */
			const xhr = new XMLHttpRequest();
			/*eslint-enable */

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					// Check if it exists and present error if file does not exist
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
window.onhashchange = fragmentChange;

// Run the function
fragmentChange();
