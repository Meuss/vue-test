// ===================================
// Required node modules
// ===================================

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const notify = require('gulp-notify');

// ===================================
// Javascript global task:
// ===================================

gulp.task('javascript', function(){
  gulp.src('assets/js/*.js')
  .pipe(plumber())
  .pipe(babel({presets: ['es2015']}))
  .pipe(concat('script.js'))
  // .pipe(uglify())
  .pipe(gulp.dest('assets/min/'))
  .pipe(reload({stream:true}))
  .pipe(notify({ message: 'js minified'}));
});

// ===================================
// Sass task
// ===================================

gulp.task('sass', function(){
  gulp.src('assets/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer('>1%'))
  // .pipe(minify())
  .pipe(gulp.dest('assets/min'))
  .pipe(reload({stream:true}))
  .pipe(notify({ message: 'Scss compiled'}));
});

// ===================================
// PHP task
// ===================================

gulp.task('php', function(){
  gulp.src(['*.php'])
  .pipe(reload({stream:true}));
});

// ===================================
// Browser-sync task
// ===================================

gulp.task('browser-sync', function(){
  browserSync({
    proxy: "localhost:8888"
  });
});

// ===================================
// Watch tasks
// ===================================

gulp.task('watch', function(){
  gulp.watch('assets/js/*.js', ['javascript']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch(['*.php'], ['php']);
});

// ===================================
// Default task
// ===================================

gulp.task('default', ['javascript', 'sass', 'php', 'browser-sync', 'watch']);