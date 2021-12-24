const {src, dest, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const plumber = requiere('gulp-plumber')

function css(done) {
    src('src/scss/**/*.scss') // Identificar el archivo .scss a compilar
        .pipe( plumber() )
        .pipe( sass() ) // Compilarlo
        .pipe( dest('build/css') ) // Almacenarla

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;