var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Song1 by Artist1 on the album Album1");
songs.unshift("Song2 by Artist2 on the album Album2");

function addNewMusic(){
	let songArray = songs;
	let song = document.getElementById("inputSong").value;
	let artist = document.getElementById("inputArtist").value;
	let album = document.getElementById("inputAlbum").value;
	let str = song + " by " + artist + " on the album " + album;
	songArray.push(str);

	write(str);
	clearTextInputs();
}

function clearTextInputs(){
	document.getElementById("inputSong").value = "";
	document.getElementById("inputArtist").value = "";
	document.getElementById("inputAlbum").value = "";
}


function cleanArrayAndWrite(array){
	array.forEach(function(element){
		var str = element.replace(/>/gi, '')
		.replace(/@/gi, '')
		.replace(/[*]/gi, '')
		.replace(/!/gi, '')
		.replace(/[(-)]/gi, '');
		str = str.split('  ').join(' ');
		write(str);
	});
}

function write(string){
	var outputArea = document.getElementById("box2");
	var newDiv = `<div class="song">
					<p>${string}</p><hr>
				 </div>`;
	outputArea.innerHTML += newDiv;
}

cleanArrayAndWrite(songs);


let inputView = document.getElementById("inputView");
let homeView = document.getElementById("box1");
let box2 = document.getElementById("box2");

let homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {

	box2.classList.add("hidden");
	inputView.classList.add("hidden");

	homeView.classList.remove("hidden");
});

let viewMusic = document.getElementById("viewMusic");
viewMusic.addEventListener("click", () => {

	inputView.classList.add("hidden");

	homeView.classList.remove("hidden");
	box2.classList.remove("hidden");
});

let addMusic = document.getElementById("addMusic");
addMusic.addEventListener("click", () => {

	homeView.classList.add("hidden");
	box2.classList.add("hidden");

	inputView.classList.remove("hidden");
});

let addToLibrary = document.getElementById("addToLibrary");
addToLibrary.addEventListener("click", () => {
	addNewMusic();
	box2.classList.remove("hidden");
});














