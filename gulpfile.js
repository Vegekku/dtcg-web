/*jshint -W097, node:true*/
'use strict';

const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'gulp-autoprefixer' );

function styles() {
	return gulp
		.src( `./sass/*.scss` )
		.pipe( sourcemaps.init() )
		// .pipe( sass({ outputStyle: 'compressed' }).on( 'error', sass.logError ) )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( autoprefixer() )
		.pipe( sourcemaps.write( './' ) )
		.pipe(
			gulp.dest( function( file ) {
				file.dirname = file.dirname.replace( '/sass', '/css' );
				return file.base;
			})
		);
}

function watch() {
	gulp.watch( `./sass/*.scss`, gulp.series( styles ) );
}

exports.pluginStyles = pluginStyles;
exports.themeStyles = themeStyles;
exports.watch = watch;

exports.default = gulp.series( pluginStyles, themeStyles, watch );
