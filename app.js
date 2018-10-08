for (var i = 0; i <100; i+=5) {
	console.log (i);
	document.getElementById('field').innerHTML += '<div class="border">' + i + '</div>';
}