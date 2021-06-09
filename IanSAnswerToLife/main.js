var happinessJauge;

function init(){
	BOT_theInterface 	= "STANDARD";
	BOT_traceFlag		= false;
	BOT_statusFlag		= true;
	BOT_standardFrameBot('iansBot','visible','4px solid yellow');	// shows fifi pict and balloon
	happinessJauge = 10;
	BOT_traceFlag = true;
	document.getElementById("defeatCard").setAttribute("style","visibility:hidden");
	document.getElementById("victoryCard").setAttribute("style","visibility:hidden");
	console.log("Game loaded");
	updateJauge(0);
}

function updateJauge(value){
	happinessJauge += value;
	happinessJauge = Math.max(0, Math.min(100,happinessJauge));

	var moodSentence = "i don't know what to think about existence..."

	if(happinessJauge < 10){
		moodSentence = " I wanna end this .. I think. ";
	}

	if(happinessJauge < 5){
		moodSentence = "I'm GONNA JUMP !";
	}

	if(happinessJauge <=0){
		document.getElementById("defeatCard").setAttribute("style","visibility:visible");
	}

	if(happinessJauge>70){
		moodSentence = "Maybe life worth it after all? ";
	}

	if(happinessJauge >95){
		moodSentence = "I WANNA LIIIIVE !!! ";
	}

	if(happinessJauge >=100){
		document.getElementById("victoryCard").setAttribute("style","visibility:visible");
	}

	if(problem_end && grandfather_end && laika_end && studies_end){
		if(happinessJauge < 30){
			document.getElementById("defeatCard").setAttribute("style","visibility:visible");
		}
		document.getElementById("victoryCard").setAttribute("style","visibility:visible");
	}

	document.getElementById("jaugeValue").setAttribute("style","width:"+happinessJauge+"%");
	document.getElementById("moodSentence").innerHTML =moodSentence;

}

function iansAnswer(){
	document.getElementById("iansballoon").innerHTML = BOT_reqAnswerLong;
}

document.addEventListener("DOMContentLoaded",function(){
	init();
});
