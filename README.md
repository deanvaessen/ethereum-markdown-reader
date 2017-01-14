# Ethereum markdown reader

## Documentation

**Intro**
* Application captures ``/#filename.md`` routes in the URL and navigates to the file. It knows a preconfigured URL-prefix to get the correct path.
* Different 'fragments' or files can link to one another.

**Files**
* Source files in /code/dev/src/
* Built, ready to go files in /code/dev/built/

<br />
Note that the built file *includes* the marked libary already inside, and has this minified within it in the minified version. This means the bundle is stand-alone and optimsed.


**Runtime requirements**
None beyond a webserver. The built file is located in /code/dev/built and includes:
- Javascript files. 1 minified, one non-minified.
- HTML document
- CSS stylesheet

**Testing**
* Test suite available in code/dev/repository/md/testsuite.md

**Development requirements**
* NodeJS/NPM.

**Development HowTo**
* Check requirements above
* For testing and developing: execute ``npm install`` in this directory with NodeJS, then ``npm start`` afterwards.
* To build from source: execute ``npm  run build``

**Notes**
* The development/build environment used to here is a webpack dev server on top of Node.JS to run the Javascript. Webpack compresses, validates (lints) and optimises the files, among other things. This environment has been set up to make development easy, quick and extendible future updates.
* The project brief mentioned styling in the future will be done through CSS sheets. I have used this approach already to colour the error texts in red and have layed out a structure for the stylesheets.
* At a later stage of the project, the inclusion of Bootstrap (if uncommented in style.scss) and font-awesome will make further development a little easier and quicker. These are not currently active to conserve space in the built file, but can be easily engaged.



