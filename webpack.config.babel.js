// webpack.config.js
const webpack = require('webpack');
const path = require('path');
//const express = __non_webpack_require('express');

module.exports = {
  target: 'node', 
  externals:{
    "express":"require('express')"
  },
  entry: './index.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dev-build'),
  },
  mode: 'development'
  // Additional configuration goes here
};