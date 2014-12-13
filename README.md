Single-page Application Template
--------------------------------

Using:

 - Marionette.js
 - Handlebars
 - Polyglot
 - Backbone.stickit
 - Gulp
 - ES6 (Traceur)
 - Browserify
 - LESS
 - Bower


###Once cloned

    npm install -g bower # or with sudo
    npm install # or with sudo
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
    |--components
    |----component-name
    |------collections
    |------less
    |------models
    |------templates
    |------views
    |--helpers
    |--lib
    |--screens
    |----screen-name
    |------component-name


###TODO

 - Add comments
 - Describe the structure
 - Add some icon font generator (Low priority)
