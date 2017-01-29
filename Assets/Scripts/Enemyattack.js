#pragma strict
var player:GameObject;
var scream:AudioClip;
function OnTriggerEnter(other:Collider) {
if(other.collider.tag==player.tag) {
audio.clip=scream;
audio.Play();

}
}
