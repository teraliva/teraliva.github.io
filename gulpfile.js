var gulp = require('gulp');
gulp.task('default', function () { console.log('Hello Gulp!') });

const { src, dest, watch, series, } = require('gulp');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const flatten = require('gulp-flatten');



function style() {
    return src('src/main.scss')
        .pipe(sass({
            importer: tildeImporter
        }))
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('build/css'))
}

function images() {
    return src(['src/images/*.*'])
     .pipe(flatten({
      includeParents: 0
     }))
     .pipe(dest('build/images/'))
   }


function favicon() {
    return src('source/favicon/*.*')
        .pipe(flatten({
            includeParents: 0
        }))
        .pipe(dest('../public/'))
}

function watching() {
    watch('src/**/*scss', style);
    
}

exports.style = style;

exports.favicon = favicon;
exports.watch = watching;
exports.default = series(style, watching);
