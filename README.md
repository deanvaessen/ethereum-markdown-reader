# Ethereum markdown reader

## Documentation

**Outline**
* Application captures ``/#filename.md`` routes in the URL and navigates to the file. It knows a preconfigured URL-prefix to get the correct path.
* Different 'fragments' or files can link to one another.
* App does error handling for illegal characters/wrong filename syntax in the URL, also handles error when file cannot be found.

<br />
**Files**
* Source files in /code/dev/src/
* Built, ready to go files in /code/dev/built/

<br />
Note that the built file *includes* the marked libary already inside, and has this minified within it in the minified version. This means the bundle is stand-alone and optimsed.

<br />
**Runtime requirements**
<br />
None beyond a webserver. The built file is located in /code/dev/built and includes:
- Javascript files. 1 minified, one non-minified.
- HTML document
- CSS stylesheet

<br />
**Runtime steps**
1. Find and ready the Javascript & CSS file, then require the Javscript file (you can use the index.html in *src* and reference the app). Also note the structure of the index.html file in source. Lastly, it also includes an extra error condition (users browsing to the app location and not a fragment).
2. When you have imported/required the Javascript file (in my example it's been imported as "markdownReader"), initiate the app as follows:
<br />
***markdownReader.init('./repository/md/')***
<br />
<br />
The argument it takes is the baseURL for the location of the files. If the user does not call this, it has a default fallback included. See "entry.js" in *src* to see how I initiated it.

<br />
**Testing**
* Test suite available in code/dev/repository/md/testsuite.md

<br />
**Development requirements**
* NodeJS/NPM.

<br />
**Development HowTo**
* Check requirements above
* For testing and developing: execute ``npm install`` in this directory with NodeJS, then ``npm start`` afterwards. Navigate to localhost:8080.
* To build from source: execute ``npm run build``

<br />
**Notes**
* The development/build environment used to here is a webpack dev server on top of Node.JS to run the Javascript. Webpack compresses, validates (lints) and optimises the files, among other things. This environment has been set up to make development easy, quick and extendible future updates.
* The project brief mentioned styling in the future will be done through CSS sheets. I have used this approach already to colour the error texts in red and have layed out a structure for the stylesheets.
* At a later stage of the project, the inclusion of Bootstrap (if uncommented in style.scss) and font-awesome will make further development a little easier and quicker. These are not currently active to conserve space in the built file, but can be easily engaged.