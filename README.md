Bootstrap project
-----------------

Using:

 - Node.js
 - Gulp
 - ES6 (Traceur)
 - Browserify
 - LESS


####Once cloned
    sudo npm install -g bower
    sudo npm install
    bower install


####For development

Simply run:

    npm start

Optionally you can start simple static server in this way:

    node server

Or in this way:

    python -m SimpleHTTPServer 9001

And application will be available at http://localhost:9001/dist


####For release
    npm run build


####TODO

 - Use RequireJS with its paths (aliases)
 - Remove Traceur
