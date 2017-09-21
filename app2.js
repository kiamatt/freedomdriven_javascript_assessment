var app = {};

app.hello = function() {
	console.log('hello');
}
app.hello();
String.prototype.hello = function() {
	console.log('hi');
}
var yes = 'yes';

yes.hello();