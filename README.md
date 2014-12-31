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

    sudo npm install -g bower
    sudo npm install
    bower install


###For development

Simply run:

    npm start

And application will be available at [http://localhost:9001/dist](http://localhost:9001/dist)


###For release

Simply run:

    npm run build

And check out `./dist` directory.


###Testing

Application tests (unit using karma and functional using protractor) runs after each build.

**NOTE**: Functional tests should be run only after successful build.

To run tests manually:

    npm test


###Troubleshooting

In case you got an error "No such file or directory" during running the protractor task please
check out [this solution](https://github.com/joyent/node/issues/3911#issuecomment-8956154).


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

 - Describe the structure
