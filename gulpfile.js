// ==================================================
// COPY NPM DEPENDENCIES TO PACKAGE.JSON 
// IN DEV DEPENDENCIES OR NPM INSTALL FROM TERMINAL
// ==================================================
npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-clean-css gulp-babel 
gulp-jshint jshint gulp-uglify gulp-imagemin gulp-rename gulp-clean gulp-concat gulp-notify 
gulp-cache gulp-livereload tiny-lr

// ==================================================
// LOAD PLUGINS
// ==================================================
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();


// ==================================================
// STYLESHEET TASKS
// ==================================================
gulp.task('styles', function() {
  return gulp.src('src/sass/styles.scss')
    .pipe(sass.sync({ style: 'expanded', }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({debug: true}, function(details){
      console.log(details.name + ": " + details.stats.originalSize);
      console.log(details.name + ": " + details.stats.minifiedSize);
      }))
    .pipe(livereload(server))
    .pipe(gulp.dest('public/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


// ==================================================
// JAVASCRIPT TASKS
// ==================================================
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets: ['es2015']        
    }))
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('public/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});


// ==================================================
// IMAGE TASKS
// ==================================================
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('public/images'))
    .pipe(notify({ message: 'Images task complete' }));
});


// ==================================================
// CLEAN TASK
// ==================================================
gulp.task('clean', function() {
  return gulp.src(['public/styles', 'public/scripts', 'public/images'], {read: false})
    .pipe(clean());
});


// ==================================================
// DEFAULT TASK
// ==================================================
gulp.task('default', ['clean'], function() {
    gulp.run('styles', 'scripts', 'images');
});


// ==================================================
// WATCH TASKS
// ==================================================
gulp.task('watch', function() {

  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    // Watch .scss files
    gulp.watch('src/sass/**/*.scss', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('styles');
    });

    // Watch .js files
    gulp.watch('src/js/**/*.js', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('scripts');
    });

    // Watch image files
    gulp.watch('src/images/**/*', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('images');
    });

  });

});
