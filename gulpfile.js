var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {
    // Move necessary resources to /public
    mix.copy('resources/assets/root', 'public');
    mix.copy('resources/assets/img', 'public/img');
    mix.copy('node_modules/bootstrap-sass/assets/fonts', 'public/build/fonts');

    // Compile SCSS to /public
    mix.sass('trevor-meehl.scss');

    // Combine JS that we can
    mix.scripts([
        '../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'main.js'
    ], 'public/js/trevor-meehl.js');
    mix.scripts([
        'stars.js'
    ], 'public/js/stars.js');

    // Move JS that can't be combined
    mix.copy('resources/assets/js/vendor/jquery-2.1.4.min.js', 'public/js/vendor/jquery-2.1.4.min.js');

    // Version our CSS / JS files
    mix.version([
        'public/css/trevor-meehl.css',
        'public/js/trevor-meehl.js',
        'public/js/stars.js'
    ]);
});
