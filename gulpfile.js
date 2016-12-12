const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourceMaps = require('gulp-sourcemaps');


//clean the contents of the distribution directory
gulp.task('clean', function() {
  return del('dist/**/*');
});

gulp.task('compile', ['clean'], function() {
  return gulp
        .src('src/app/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src(['node_modules/core-js/client/shim.min.js',
                  'node_modules/zone.js/dist/zone.js',
                  'node_modules/reflect-metadata/Reflect.js',
                  'node_modules/systemjs/dist/system.src.js',
                  'node_modules/@angular/**/*'])
              .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', ['clean'], function() {
    return gulp.src([
        'src/**/*',
        '!src/**/*.ts',
        'src/index.html'])
        .pipe(gulp.dest('dist'));
});



gulp.task('build', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('default', ['build']);