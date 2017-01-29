#pragma strict

var player:Transform;
var moveSpeed=11;
var minDist=5;
var maxDist=11;

function Update () {
transform.LookAt(player);
if(Vector3.Distance(transform.position,player.position)>=minDist) {
transform.position+=transform.forward*moveSpeed*Time.deltaTime;
	if(Vector3.Distance(transform.position,player.position)<=maxDist) {
	Destroy(this.gameObject);
	}
}

}