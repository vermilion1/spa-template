Bootstrap project
-----------------

Using:

 - Marionette.js
 - Gulp
 - ES6 (Traceur)
 - Browserify
 - LESS
 - Bower


###Once cloned

    sudo npm install -g bower
    sudo npm install
    bower install


###For development

Simply run:

    npm start

Optionally you can start simple static server in this way:

    node server

Or in this way:

    python -m http.server 9001      # python 3
    python -m SimpleHTTPServer 9001 # python 2

And application will be available at [http://localhost:9001/dist](http://localhost:9001/dist)


###For release

Simply run:

    npm run build

And check out `./dist` directory.


###Application structure

    images
    less
    |--components
    src
    |--helpers
    |--lib
    |--screens
    |----shared
    |------component-name
    |--------collections
    |--------less
    |--------models
    |--------templates
    |--------views
    |----screen-name
    |------component-name


###TODO

 - I18n https://github.com/airbnb/polyglot.js
