////////////////////////////////////////////////////
// gulp module
////////////////////////////////////////////////////

const gulp = require("gulp");
const browser = require("browser-sync").create(); // ブラウザ更新
const autoprefixer = require("gulp-autoprefixer"); // ベンダープレフィックス
const plumber = require("gulp-plumber"); // エラーで止めない
const sass = require("gulp-sass"); // sass
const jade = require('gulp-jade'); // html生成ジェネレーター

////////////////////////////////////////////////////


// server
gulp.task("server",function(){
    browser.init({
      server: {
        baseDir: "./"
      }
    })
});


gulp.task('jade', function(){
  gulp.src('./**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browser.reload({stream:true}))
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
    gulp.watch(['./**/*.jade'],["jade"]);
    gulp.watch(['./scss/**/*.scss'],["sass"]);
});

