#pragma strict
var quit=false;
function OnMouseEnter() {
renderer.material.color=Color.red;
}
function OnMouseExit() {
renderer.material.color=Color.white;
}
function OnMouseUp() {
if(quit==true) {
Application.Quit();
}
else{
Application.LoadLevel("horror");
}
}

function Update () {
if(Input.GetKey(KeyCode.Escape)) {
Application.Quit();
}
}