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

		// Change page title to level 1 heading
		const renderer = new marked.Renderer();

		renderer.heading = function(text, level) {
			if (level === 1) {
				document.title = text;
			}
			return '<h' + level + '>' + text + '</h' + level + '>\n';
		};

		// render document to container
		document.getElementById('content').innerHTML =
		marked('# Marked in browser\n\nRendered by **marked**.', { renderer : renderer });
		console.log(baseUrl + fragment);
	} else {
		// leave document empty
	}
};

// Set the fragmentChange function to run each time the window on hash event fires
window.onhashchange = fragmentChange;

// Run the function
fragmentChange();

