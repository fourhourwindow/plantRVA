var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./app/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/"))
        .pipe(browserSync.stream());
});

//gulp.task('build', ['clean','copy']);

gulp.task('build', function(cb) {
  runSequence('clean', ['copy'],'serve');


});


gulp.task('clean', function() {
    return gulp.src('./build')
     .pipe(clean());
});

///////////

var filesToMove = [
        './app/index.html',
        './app/style.css',
        './app/app.js',
        './app/images/*',
        './app/services/*',
        './app/components/*/**',
        './app/bower_components/*/**'
    ];

gulp.task('copy', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './' })
  .pipe(gulp.dest('./build'));
});
//////





gulp.task('default', ['build']);






