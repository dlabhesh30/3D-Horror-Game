#pragma strict
var wolfHowl:AudioClip;
var trig=false;
function Start() {
trig=false;
}
function OnTriggerEnter(other:Collider){
	trig=true;
}
function Update () {
	if(trig==true){
		howl();
		trig=false;
	}
}

function howl(){
audio.clip=wolfHowl;
audio.Play();
}
