var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/List.jsx');
var ServeStatic = require('serve-static');

ReactDom.render(<List />, document.getElementById('ingredients'));
