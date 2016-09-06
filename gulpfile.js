var gulp=require("gulp");
var less=require("gulp-less");
var clean=require("gulp-clean");
var watch=require("gulp-watch");
var browserSync = require('browser-sync').create();

gulp.task("lessToCss",function(){
     gulp.src("style/less/*.less")
     .pipe(less())
     .pipe(gulp.dest("style/css/"));
});

gulp.task("watchLess",function(){
    return watch("style/less/*.less",function(){
        sequence("lessToCss");
    });
});
gulp.task("cleanCss",function(){
    return gulp.src("style/css/*")
    .pipe(clean());
});

// Static server
gulp.task('browser-sync', function() {
    var files = [
    '**/*.html',
    '**/*.css',
    '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});
