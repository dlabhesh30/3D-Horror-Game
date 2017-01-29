#pragma strict
var walkSpeed=5;
var runSpeed=15;
var crouchSpeed= 3;
private var tr : Transform;
private var chMotor : CharacterMotor;
private var dist:float;
static var running=false;
function Start () {
chMotor= GetComponent(CharacterMotor);
tr=transform;
var ch:CharacterController= GetComponent(CharacterController);
dist=ch.height/2;
}

function Update () {
running=false;
var vscale=1.0;
var speed=walkSpeed;
if(chMotor.grounded && Input.GetKey(KeyCode.LeftShift)||chMotor.grounded && Input.GetKey(KeyCode.RightShift)){ 
speed=runSpeed;
running=true;
}
if(chMotor.grounded && Input.GetKey(KeyCode.C)){ 
speed=crouchSpeed;
vscale=0.5;
}
chMotor.movement.maxForwardSpeed=speed;
var ultScale=tr.localScale.y;
tr.localScale.y=Mathf.Lerp(tr.localScale.y,vscale,5*Time.deltaTime);
tr.position.y+=dist*(tr.localScale.y-ultScale);
}