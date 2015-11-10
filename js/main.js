function showMood(){
	var name = document.getElementById("name").value;
	var mood = document.getElementById("mood").value;

	if (!name || !mood) {
		alert("Please feel in all fields");
		return false;
	}

	if (mood == "happy") {
		var face = " :) ";
	} else if (mood == "sad") {
		face = " :( ";
	}else {
		face = " :| ";
	}

	var moodString = name + " is "+ mood + " today" + face;

	var holder = document.getElementById("holder");
	holder.innerHTML = moodString;
};

function clearMood () {
	document.getElementById("moodForm").reset();
	var holder = document.getElementById("holder");
	holder.innerHTML = "";
}