"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', compileSass);
gulp.task('default', watch);

function compileSass(){
    return gulp.src('./styles/**/*.sass').pipe(sass()).pipe(gulp.dest("./styles/css"));
}

function compileSassMin(){
    return gulp
    .src("./styles/**/*.sass")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
};

function watch(){
    gulp.watch("./styles/**/*.sass", compileSassMin);
}