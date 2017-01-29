var ground : AudioClip[];
var audioStepLengthWalk:float= 0.45;
private var step: boolean =true;

function OnControllerColliderHit(hit:ControllerColliderHit){
	var controller:CharacterController = GetComponent(CharacterController);
	if(controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Ground"  && step == true || 
controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Untagged" && step == true ) 
	{
		walkOnGround();
	}
}

function walkOnGround()
{
	step=false;
	audio.clip = ground[Random.Range(0,ground.Length)];
	audio.volume=.1;
	audio.Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step=true;
}
@script RequireComponent(AudioSource)


