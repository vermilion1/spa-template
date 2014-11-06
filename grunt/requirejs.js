module.exports = function (grunt, options) {

  var vendor = [
    'vendor/almond',
    'vendor/jquery'
  ];

  return {

    compile: {
      options: {
        baseUrl: './',
        appDir: 'app/js',
        dir: 'app/js/build',
        removeCombined: true,
        optimize: '',
        paths: {
          helpers: 'src/helpers',
          jquery: 'vendor/jquery'
        },
        modules: [
          {
            name: 'modules/vendor',
            create: true,
            include: vendor
          },
          {
            name: 'modules/app',
            create: true,
            include: ['src/index'],
            exclude: vendor
          }
        ]
      }
    }
  };

};
