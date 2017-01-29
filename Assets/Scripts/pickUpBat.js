#pragma strict
var buttonInRange;
var buttonActivated;
var guiSkin:GUISkin;
var batterySound:AudioClip;

private var hasPlayed=false;
function OnTriggerEnter() {
buttonInRange=true;
}
function OnTriggerExit() {
buttonInRange=false;
}
function OnGUI() {
if(buttonInRange==true) {
GUI.skin=guiSkin;
GUI.Label(Rect(Screen.width/2-50,Screen.height/2-55,130,50),"Press E to pick up the batteries" ); 
}
}
function Update () {
if (Input.GetKey (KeyCode.E)) {
if (!hasPlayed) {
AudioSource.PlayClipAtPoint (batterySound,transform.position);
flashLight.AlterEnergy (flashLight.maxBatteryLife);
Destroy (this.gameObject);
hasPlayed= true;
}
}
}