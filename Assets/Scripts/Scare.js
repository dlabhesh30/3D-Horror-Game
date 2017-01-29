#pragma strict
var scare: GameObject;
var trig =false;
var played=false;
var scareSound : AudioClip;
function Start () {
trig=false;
scare.renderer.enabled=false;
}
function OnTriggerEnter(other:Collider) {
trig=true;
}

function Update () {
if(trig==true) {
scare.renderer.enabled=true;
removeOverTime();
scream();
}
}
function removeOverTime() {
yield WaitForSeconds(1.8);
scare.renderer.enabled=false;
scare.collider.enabled=false;
Destroy(this.gameObject);
}
function scream() {
if(!played) {
played=true;
audio.clip=scareSound;
audio.Play();
}
}