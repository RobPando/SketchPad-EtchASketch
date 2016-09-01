
var con = document.getElementById("container");
var gridX = 16; //default width
var gridY = 16; //default height


$(document).ready(function(){

	createGrid();
	var pixSize = (960 / gridX) - 2;
	$("div#conatiner > #pix").css({"width": pixSize + "px", "height": pixSize + "px"});
	
	$('#container').on('mouseenter', 'div', function(){

		$(this).addClass('colored');
		if($('#randomColor').is(':checked')) {

			$(this).css("background", getRandomColor());
		}
	});

	$('#justClear').click(function() {
		$('div#container > #pix').removeClass('colored');
	});

	$('#clearNew').click(function(){
		
		askNewGrid();
		
	});
});

function createGrid() {
	var pixSize = (960 / gridX) - 2;

	for (var i = 0; i < gridY; i++) {
		for (var j = 0; j < gridX; j++) {
			con.innerHTML += '<div id="pix"></div> ';
		}
	con.innerHTML += "<br>";
	}
	$("div#container > #pix").css({"width": pixSize + "px", "height": pixSize + "px"});
}

function askNewGrid() {
	do {
		gridX = prompt("Enter A New Width For The Grid (Warning!: Beyond 60 it gets too slow):");
		gridY = prompt("Enter A New Height For The Grid (Warning!: Beyond 60 it gets too slow):");

		if (isNaN(gridX) || isNaN(gridY)) {
			alert("ERROR: Please Enter A Numeric Value!");
		}

	} while (isNaN(gridX) || isNaN(gridY));

	$('#container').empty();
	createGrid();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}






