module.exports = function (grunt, options) {

  return {

    server: {
      options: {
        port: 9001,
        base: ['dist', 'app'],
        open: 'http://0.0.0.0:9001'
      }
    }

  };

};
