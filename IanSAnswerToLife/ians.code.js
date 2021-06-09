// Topic of Ian
var iansTopic = [
	[["KEY", "_class"],							["VAL", "bot"], ["BOT","ianBot"]],
	[["KEY", "_reference"],					["VAL", ["f","ian","human"]]],
	[["KEY", "_htmlprefix"],				["VAL", "ians"]], //prefix of HTML elements
	[["KEY", "_read"],							["VAL", ["userTopic","counterTopic","jimTopic","studiesTopic","laikaTopic"]]],

	[["KEY", "name"],								["VAL", function(){updateJauge(1); return "Ian";}],
																	["WHY","I don't know, my mother liked it"]],
	[["KEY", "age"], 								["VAL", 22],
																	["ONASK", function(){updateJauge(1); return "I am 22";}]],
	[["Key", "gender"],							["VAL", function(){updateJauge(-5); return"I am a male, obviously !";}]],

	[["KEY", "problem"],						["VAL", function(){updateJauge(5); problem_start = true; return "Everything.... my studies, my grandfather, my dog... (Ian started to cry, try [DoNotCry] or [CalmDown])";}]],

	[["KEY", "grandfather"], 						["VAL", function(){updateJauge(-5); return "You dumb ?"}]],
	[["KEY", ["grandfather", "name"]], 	["VAL", function(){updateJauge(5); return "Jim, but i used to called him Jimmy"}],
																			["WHY", "He was nice and friendly so people called him like this"]],

	[["KEY", "dog"], 										["VAL", function(){updateJauge(-5); return "Well... my dog...";}]],
	[["KEY", ["dog", "name"]], 					["VAL", function(){updateJauge(5); return "Laika";}],
																			["WHY", "It was the name of the first dog to go to space"]],

	[["KEY", "profession"], 									["VAL", function(){updateJauge(1); return "I am a student";}]],

	[["KEY", "location"], 									["VAL", function(){updateJauge(0); return "I am on the rooftop";}],
																						["WHY", "Because I want to end my life, too many problems !"]],

	[["KEY", "jump"],		["VAL", "jump"], ["CAT","ACT"],
											["HOW","Convince me to end my life"],
											["EFFECT","I'll be dead"]
											],

	[["KEY", "donotcry"],		["VAL", "donotcry_func"], ["CAT","ACT"]],
	[["KEY", "calmdown"],		["VAL", "calmdown_func"], ["CAT","ACT"]],
	[["KEY", "noneedtocry"],		["VAL", "noneedtocry_func"], ["CAT","ACT"]],
	[["KEY", "stopit"],		["VAL", "stopit_func"], ["CAT","ACT"]],
	[["KEY", "talkaboutgf"],		["VAL", "talkaboutgf_func"], ["CAT","ACT"]],
	[["KEY", "whattotalk"],		["VAL", "whattotalk_func"], ["CAT","ACT"]]
];

// Topic of his grandfather Jim
var jimTopic = [
	[["KEY", "_class"],							["VAL", "bot"], ["BOT","jimBot"]],
	[["KEY", "_reference"],					["VAL", ["jim", "jimmy", "he", "his"]]],

	[["KEY", "age"], 								["VAL", function(){updateJauge(5); return "he was 86";}]],
	[["Key", "gender"],							["VAL", function(){updateJauge(-5); return "He was a male abviously !";}]],

	[["KEY", "problem"],						["VAL", function(){updateJauge(-5); grandfather_start = true; return "He died a month ago... (you should ask why)";}],
																	["WHY", "He was fighting a cancer for the last three years (try: [jim CouldNotSurvive] or [jim ThreeYearsIsALot])"]],

	[["KEY", "couldnotsurvive"],		["VAL", "couldnotsurvive_func"], ["CAT","ACT"]],
	[["KEY", "threeyearsisalot"],		["VAL", "threeyearsisalot_func"], ["CAT","ACT"]],
	[["KEY", "wasold"],		["VAL", "wasold_func"], ["CAT","ACT"]],
	[["KEY", "woulddieoneday"],		["VAL", "woulddieoneday_func"], ["CAT","ACT"]],
	[["KEY", "wasattheend"],		["VAL", "wasattheend_func"], ["CAT","ACT"]],
	[["KEY", "talkedtoyou"],		["VAL", "talkedtoyou_func"], ["CAT","ACT"]],
	[["KEY", "passedwell"],		["VAL", "passedwell_func"], ["CAT","ACT"]],
	[["KEY", "nothereanymore"],		["VAL", "nothereanymore_func"], ["CAT","ACT"]]

];

// Topic of his dog Laika
var laikaTopic = [
	[["KEY", "_class"],							["VAL", "bot"], ["BOT","laikaBot"]],
	[["KEY", "_reference"],					["VAL", ["laika","it","she", "her"]]],

	[["KEY", "name"],								["VAL",  function(){updateJauge(5); return "Laika";}],
																	["WHY","It was the name of the first dog to go to space"]],
	[["Key", "gender"],							["VAL",  function(){updateJauge(0); return "She was a female";}]],

	[["KEY", "problem"],						["VAL",  function(){updateJauge(-5); laika_start=true; return "She got hit by a car yesterday (try: [laika Suffer] or [it JustADog] or [it HappensSometimes] or [it CanBeReplaced])";}]],
	[["KEY", "justadog"],		["VAL", "justadog_func"], ["CAT","ACT"]],
	[["KEY", "happenssometimes"],		["VAL", "happenssometimes_func"], ["CAT","ACT"]],
	[["KEY", "canbereplaced"],		["VAL", "canbereplaced_func"], ["CAT","ACT"]],
	[["KEY", "suffer"],		["VAL", "suffer_func"], ["CAT","ACT"]],
	[["KEY", "didnotsuffer"],		["VAL", "didnotsuffer_func"], ["CAT","ACT"]]
];

// Topic of his studies
var studiesTopic = [
	[["KEY", "_class"],							["VAL", "bot"], ["BOT","studiesBot"]],
	[["KEY", "_reference"],					["VAL", ["studies", "java", "python", "semester"]]],

	[["KEY", "domain"],						["VAL",  function(){updateJauge(5); return "I study computer science";}]],

	[["KEY", "location"],						["VAL",  function(){updateJauge(0); return "I study here, at Sorbonne University";}]],

	[["KEY", "problem"],						["VAL",  function(){updateJauge(-5); studies_start=true;return "I failed my Object-Oriented Programming exam and I am afraid to fail my semester (you should ask why)";}],
																	["WHY", "BECAUSE I HATE JAVA ! (try: [java IsUsefull])"]],

	[["KEY", "isusefull"],		["VAL", "isusefull_func"], ["CAT","ACT"]],
	[["KEY", "isnoteverything"],		["VAL", "isnoteverything_func"], ["CAT","ACT"]],
	[["KEY", "isnotoneclass"],		["VAL", "isnotoneclass_func"], ["CAT","ACT"]],
	[["KEY", "revised"],		["VAL", "revised_func"], ["CAT","ACT"]],
	[["KEY", "failayearisnothing"],		["VAL", "failayearisnothing_func"], ["CAT","ACT"]],
	[["KEY", "haveyoursemester"],		["VAL", "haveyoursemester_func"], ["CAT","ACT"]],
	[["KEY", "changestudies"],		["VAL", "changestudies_func"], ["CAT","ACT"]],
	[["KEY", "nothard"],		["VAL", "nothard_func"], ["CAT","ACT"]],
	[["KEY", "csnotforyou"],		["VAL", "csnotforyou_func"], ["CAT","ACT"]]
];



// =======================  TOPIC USER  ========================
var userTopic = [
	// INFO
	[["KEY", "_class"],			["VAL", "user"]],
	[["KEY", "_reference"],		["VAL", ["me","my","user"]]],
	[["KEY", "type"],			["VAL", ["person"]]],
	// VAR
	[["KEY", "name"],			["VAL", "User"], ["CAT","VAR"],
								["WHY", "I don't  care"]
								],
	[["KEY", "age"],			["VAL", "unknown"],	["CAT","VAR"]],
	[["KEY", "gender"],			["VAL", "unknown"],	["CAT","VAR"]],
	[["KEY", "job"],			["VAL", "unknown"],	["CAT","VAR"]],
	// OPINIONS
	[["KEY", "judgement"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printJudgementList]], // 6 standard opinions
	[["KEY", "preference"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printPreferenceList]],
	[["KEY", "distaste"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printDistasteList]],
	[["KEY", "suggestion"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printSuggestionList]],
	[["KEY", "objection"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printObjectionList]],
	[["KEY", "intention"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printIntentionList]],
	// FEELINGS
	[["KEY", "happiness"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]], // 7 standard feelings
	[["KEY", "confidence"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "irritability"],	["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "satisfaction"],	["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "respect"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "force"],			["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "excitement"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	// REL
	[["KEY", "relative"],		["VAL", []]] // none
];

var iansBot    = new BOT_makeBot("iansBot","iansTopic");
var jimBot    = new BOT_makeBot("jimBot","jimTopic");
var laikaBot    = new BOT_makeBot("laikaBot","laikaTopic");
var studiesBot    = new BOT_makeBot("studiesBot","studiesTopic");
BOT_declareTopics(["userTopic"]);
BOT_theBotId = "iansBot";
BOT_theTopicId = "iansTopic";
BOT_theUserTopicId = "userTopic";

var problem_start = false;
var grandfather_start = false;
var laika_start = false;
var studies_start = false;

var problem_end = false;
var grandfather_end = false;
var laika_end = false;
var studies_end = false;

function jump(topic){
	document.getElementById("defeatCard").setAttribute("style","visibility:visible");
}

function action_already_played(){
	updateJauge(-5);
	return "(this problem has already been played)";
}

function action_cannot_played(){
	updateJauge(0);
	return "(this problem is not already introduced, ask the good question)";
}

/////////////////////////////////////////////////////
// SCRITP OF PROBLEMS
////////////////////////////////////////////////////
function donotcry_func(topic) {
	if(!problem_start){
		return action_cannot_played();
	}
	if(problem_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Don't cry";
	updateJauge(-5);
	return "It's easy to say ! (try: [NoNeedToCry] or [CalmDown])";
}

function calmdown_func(topic) {
	if(!problem_start){
		return action_cannot_played();
	}
	if(problem_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Calm down";
	updateJauge(10);
	return "Ok, I'll calm down... (try: [WhatToTalk] or [TalkAboutGF])";
}

function noneedtocry_func(topic) {
	if(!problem_start){
		return action_cannot_played();
	}
	if(problem_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "It's useless to cry";
	updateJauge(-10);
	return "You are useless ! (try: [StopIt] or [TalkAboutGF])";
}

function stopit_func(topic) {
	if(!problem_start){
		return action_cannot_played();
	}
	if(problem_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Stop crying now !";
	updateJauge(15);
	return "Ok I'll try ! (try [TalkAboutGF])";
}

function talkaboutgf_func(topic) {
	if(!problem_start){
		return action_cannot_played();
	}
	if(problem_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Let's talk about your grandfather";
	updateJauge(5);
	problem_end = true;
	return "Ok ! (you solve this problem)";
}

function whattotalk_func(topic) {
	if(!problem_start){
		return action_cannot_played();
	}
	if(problem_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "What do you want to talk about ?";
	updateJauge(-5);
	return "I don't know where to start... (try: [TalkAboutGF])";
}

/////////////////////////////////////////////////
// SCRITP OF GRANDFATHER
////////////////////////////////////////////////
function threeyearsisalot_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "He lived three years with cancer, it's a lot ! You are lucky !";
	updateJauge(-5);
	return "It doesn't change the fact that he is dead ! (try: [jim WouldDieOneDay] or [jim TalkedToYou])";
}

function couldnotsurvive_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "It's rare to survive from a cancer...";
	updateJauge(5);
	return "Yeah... I know... (try: [jim ThreeYearsIsALot] or [jim WouldDieOneDay] or [jim WasOld])";
}

function woulddieoneday_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "But you knew he would die one day, right ?";
	updateJauge(5);
	return "Yes... (try: [jim TalkedToYou] or [jim WasAtTheEnd])";
}

function wasold_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "He was old... you know...";
	updateJauge(-10);
	return "Of course I know that ! (try: [jim TalkedToYou] or [jim WasAtTheEnd])";
}

function wasattheend_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "This is the way of life, you die one day.";
	updateJauge(10);
	return "I guess it is... (try: [jim TalkedToYou])";
}

function talkedtoyou_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "In three years I guess Jim had the time to say goodbye.";
	updateJauge(15);
	return "Indeed... (try: [jim PassedWell] or [jim NotHereAnymore])";
}

function passedwell_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "He had time to say goodbye, he passed well. Some people don't have time...";
	updateJauge(-40);
	grandfather_end = true;
	return "I don't think there is a good or bad way to die ! (you failed to solve this problem)";
}

function nothereanymore_func(topic) {
	if(!grandfather_start){
		return action_cannot_played();
	}
	if(grandfather_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "He is not here anymore, you have to accept this fact.";
	updateJauge(20);
	grandfather_end = true;
	return "I think you are right... (you solved this problem)";
}

/////////////////////////////////////////////////////
// SCRITP OF STUDIES
////////////////////////////////////////////////////
function isusefull_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Java is very usefull !";
	updateJauge(-5);
	return "Yes but it is hard and I prefer Python ! (try: [python IsNotEverything] or [studies IsNotOneClass])";
}

function isnoteverything_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "But Python can't do everything.";
	updateJauge(5);
	return "May be you are right... (try: [studies IsNotOneClass])";
}

function isnotoneclass_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Your semester doesn't depend on one class !";
	updateJauge(5);
	return "You are right... (try: [studies Revised] or [studies CSNotForYou])";
}

function revised_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Did you at list revised ?";
	updateJauge(-10);
	return "NO ! (try: [studies HaveYourSemester] or [studies FailAYearIsNothing])";
}

function failayearisnothing_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "It's not a big deal to fail a year...";
	updateJauge(20);
	studies_end = true;
	return "I guess so... (you solved this problem)";
}

function haveyoursemester_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Don't worry, you will have your semester !";
	updateJauge(-20);
	studies_end = true;
	return "How do you know ?! (you failed to solve this problem.)";
}

function csnotforyou_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "May be computer science is not for you...";
	updateJauge(10);
	return "I think so... it is too hard... (try: [studies NotHard] or [studies ChangeStudies])";
}

function changestudies_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "May be you should change your studies";
	updateJauge(-20);
	studies_end = true;
	return "No ! I want to be a programmer ! (you failed to solve this problem.)";
}

function nothard_func(topic) {
	if(!studies_start){
		return action_cannot_played();
	}
	if(studies_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Come on ! It's not hard if you work !";
	updateJauge(20);
	studies_end = true;
	return "I should go back to work it ! (you solved this problem)";
}

/////////////////////////////////////////////////////
// SCRITP OF LAIKA
////////////////////////////////////////////////////
function justadog_func(topic) {
	if(!laika_start){
		return action_cannot_played();
	}
	if(laika_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Come on ! It's just a dog ! Not a Cat !";
	updateJauge(-20);
	laika_end = true;
	return "Fuck you and cats ! (you failed to solve this problem.)";
}

function canbereplaced_func(topic) {
	if(!laika_start){
		return action_cannot_played();
	}
	if(laika_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Come on ! Go buy a new one !";
	updateJauge(-20);
	laika_end = true;
	return "Fuck you ! It can't be replaced ! It's not a cat ! (you failed to solve this problem.)";
}

function happenssometimes_func(topic) {
	if(!laika_start){
		return action_cannot_played();
	}
	if(laika_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "It was an accident, it happens sometimes.";
	updateJauge(20);
	laika_end = true;
	return "Yes... (you solved this problem.)";
}

function suffer_func(topic) {
	if(!laika_start){
		return action_cannot_played();
	}
	if(laika_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "Did Laika suffer ?";
	updateJauge(0);
	return "No... (try: [laika DidNotSuffer])";
}

function didnotsuffer_func(topic) {
	if(!laika_start){
		return action_cannot_played();
	}
	if(laika_end){
		return action_already_played();
	}
	document.getElementById("litetalkchatbox").value = "At list laika did not suffer";
	updateJauge(20);
	laika_end = true;
	return "Yes... (you solved this problem.)";
}
