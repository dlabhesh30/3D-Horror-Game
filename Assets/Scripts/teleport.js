var warpTarget : Transform;
var warpSource :Transform;
function Update () {

}

function OnTriggerEnter (col : Collider) {

	if (col.gameObject.tag == "Fire 1") {
		this.transform.position = warpTarget.position;
	}
	/*yield(1111);
	if (col.gameObject.tag == "Fire 2") {
		this.transform.position=warpSource.position;
	}*/
}