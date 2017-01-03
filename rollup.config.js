/**
 * @description - observable package rollup configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
import eslint from 'rollup-plugin-eslint';
import html from 'rollup-plugin-html';
import ngAnnotate from 'rollup-plugin-ng-annotate';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  plugins: [
    eslint({
      include: ['src/*.js']
    }),
    ngAnnotate(),
    html(),
    babel()
  ],
  external: ['echarts', 'angular'],
  globals: {
    echarts: 'echarts',
    angular: 'angular'
  },
  targets: [
    { format: 'iife', dest: 'dist/echarts-showcase.bundle.js' },
  ]
};