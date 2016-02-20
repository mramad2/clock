module.exports = function () {
  var element = document.createElement('h1');

var d = new Date();
var n = d.toString();
  element.innerHTML = n;

  return element;
};