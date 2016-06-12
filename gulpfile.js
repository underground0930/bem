////////////////////////////////////////////////////
// gulp module
////////////////////////////////////////////////////

var gulp = require("gulp");
var browser = require("browser-sync"); // ブラウザ更新
var autoprefixer = require("gulp-autoprefixer"); // ベンダープレフィックス
var plumber = require("gulp-plumber"); // エラーで止めない
var sass = require("gulp-sass"); // sass

////////////////////////////////////////////////////


// server
gulp.task("server",function(){
    browser({
      server: {
        baseDir: "./"
      }
    })
});

// scss
gulp.task("sass",['server'],function(){
  gulp.src('./scss/**/!(_)*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browser.reload({stream:true}))
});


// default
gulp.task("default",["server"],function(){
    gulp.watch(['./scss/**/*.scss'],["sass"]);
});