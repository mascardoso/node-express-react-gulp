var nodeExternals = require('webpack-node-externals');

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server');
const SERVER_GEN_DIR = path.resolve(__dirname, 'server/generated');
const PUBLIC_DIR = path.resolve(__dirname, 'public');


const loaders = [{
    test: /\.js$/,
    include: CLIENT_DIR,
    loader: 'babel-loader',
    query: {
        presets: ['es2015', 'react']
    }
}, {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
}];





module.exports = [{
	name: 'client',
	target: 'web',
	context: CLIENT_DIR,
	entry: './index.js',
	output: {
		path: PUBLIC_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: loaders
	},
  	resolve: {
		alias: {
			components: path.resolve(CLIENT_DIR, 'components')
		}
  	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {allChunks: true})
	]
},

{
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    app: 'components/app/index.js'
  },
  output: {
    path: SERVER_GEN_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
},

{
	name: 'server_compile',
	context: SERVER_DIR,
	target: 'node',
	externals: [nodeExternals()], //avoid node modules folder
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'server.js'
	},
	module: {
		loaders: [
			{
		        include: path.resolve(SERVER_DIR, 'index.js'),
		        loader: 'babel',
		        query: {
		          presets: ['es2015', 'react']
		        }
			}
		]
	}
}];

