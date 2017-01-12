/**
 * Dependencies
 */
import 'src/style.scss';
import marked from 'src/helpers/marked.js';

/**
 * Variables
 */
const baseUrl = '/~nagydani/md/';

/**
 * Code to run on change of location hash
 */
const fragmentChange = function() {

	if (window.location.hash) {
		const fragment = window.location.hash.substring(1);

		// construct an HTTP request
		/*eslint-disable */
		const xhr = new XMLHttpRequest();
		/*eslint-enable */

		// set response handler
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {

				// change page title to level 1 heading
				const renderer = new marked.Renderer();

//  var oldHeadingRenderer = renderer.heading;

				renderer.heading = function(text, level) {
					if (level === 1) {
						document.title = text;
					}
//            //return oldHeadingRenderer(text, level);
					return '<h' + level + '>' + text + '</h' + level + '>\n';
				};

				// render document to container
				document.getElementById('content').innerHTML =
				marked(xhr.responseText, { renderer : renderer });
			}
		};

		// send request
		xhr.open('GET', baseUrl + fragment);
		xhr.send();
	} else {
		// leave document empty
	}
};

// Set the fragmentChange function to run each time the window on hash event fires
window.onhashchange = fragmentChange;

// Run the function
fragmentChange();

