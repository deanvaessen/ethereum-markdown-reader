/*******************************
 * [entry.js]
 * The app entry file used for testing and development.
 * This file demonstrates how to call and init the app.
 ******************************/

/**
 * { Dependencies }
 */

import markdownReader from './markdownreader';

/**
 * { Init }
 * Initiate the app with the location of the files (baseURL).
 */

markdownReader.init('./repository/md/');

