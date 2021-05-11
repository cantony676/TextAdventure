var health = window.localStorage.getItem('userHealth');
var name = window.localStorage.getItem('userName');
var age = window.localStorage.getItem('userAge');
function endGame(){
  window.location.href = "gameover.html";
}
function startUp(){
  if (health<=0){
    window.location.href="gameover.html";
  }
  document.getElementById("HUD").innerHTML='<p>Health: '+health+'</p><p>Name: '+name+'</p>';
}
function getUp(){
  var p = "<!--Caption from last action--><p>You wiggle off the water bed and tuck in your covers. While doing so, you realize the floor is wet with water. </p><br><p>Looking down, you see 5 piranahs on the floor, 4 dead, one still wiggling it's life away. </p><!--Question--><p>What do you want to do?</p><!--Choice buttons--><br><input type='button' value='Fix the bed' onclick='fixBed()'><input type='button' value='Save the last piranah' onclick='saveFish()'> <input type='button' value='Go to the restroom' onclick='restroom()'>";
  document.getElementById("result").innerHTML=p;
}
function fixBed(){
  var p = "<!--Caption from last action--><p>Nice job fixing up the waterbed and cleaning up after yourself!</p><br><p>The piranahs are all dead now.</p><input type='button' value='Go to the restroom' onclick='restroom()'>";
  document.getElementById("result").innerHTML=p;
}
function alarmOff(){
  var j = (Math.random()*4)+1;
  j=parseInt(j);
  var p = "";
  if(j==1){
    alert("When you moved to shut off the alarm, it ate your hand then cauterized it somehow...");
    health-=20;
  }else if(j==2){
    p="<p>Your alarm shoved you on to the floor and a fish bit your nose off. You run to the restroom to save your nose.</p> <input type='button' value='Go to the restroom' onclick='restroom()'>";
    health-=10;
  }else{
    p="<!--Choice buttons--><p>A nice little nap! Something bumps the bottom of your bed 20 minutes later sending you into the air. When you land, you realize your floor is wet and littered with piranahs. Apparently your bed leaked. </p><br><input type='button' value='Fix the bed' onclick='fixBed()'><input type='button' value='Save the last piranah' onclick='saveFish()'> <input type='button' value='Go to the restroom' onclick='restroom()'>";
  }
  document.getElementById("result").innerHTML=p;
}
function saveFish(){
  alert("Hello " +name+"! I'm Zigmund the fish. You can just call me Ziggy though. Thanks for saving my life. Maybe someday I'll help you out too. ");
  window.localStorage.setItem('fishHelp',true);
}
function restroom(){
  window.location.href="restroom.html";
}
function paste(){
  document.getElementById("result").innerHTML="<p>Motivated by your approval the toothpaste rips the brush to shreds and eats it. </p><input type='button' value='get a new brush and paste' onclick='newBrushing()'><input type='button' value='use the corpse' onclick='corpse()'>";
}
function brush(){
  document.getElementById("result").innerHTML="<p>Motivated by your approval the brush rips the toothpaste to shreds and eats it. </p><input type='button' value='get a new brush and paste' onclick='newBrushing()'><input type='button' value='use the corpse' onclick='corpse()'>";
}
function brushandpaste(){
  document.getElementById("result").innerHTML="<p>The two have banded together. They claw at your face and rip off portions of skin from all over your body. You escape their grips only by drowning the duo in your bathtub of boiling green and black water. You go to the laundry room to grab a new brush and paste. </p>";
  health-=25;
  if(health<=0){
    window.location.href="gameover.html";
  }
  newBrushing();
}
function newBrushing(){
  window.localStorage.setUserItem('lastPage',"toothstuff.html");
  window.location.href="toothstuff.html";
}
function riddle1(){
  var k = document.getElementById('riddle1ans');
  if (k.equals("darkness")){
    document.getElementById("riddle2").style.visibility = "hidden";
  } else {
    alert("try again");
  }
}
function riddle2(){
  var k = document.getElementById('riddle2ans');
  if (k.equals("mirror")){
document.getElementById("riddle3").style.visibility = "hidden";
  } else {
    alert("try again");
  }
}
function riddle3(){
  var k = document.getElementById('riddle3ans');
  if (k.equals("map")){
document.getElementById("riddle4").style.visibility = "hidden";
  } else {
    alert("try again");
  }
}
function riddle4(){
  var k = document.getElementById('riddle4ans');
  if (k.equals("nothing")){
alert("You got what you wanted");
window.location.href="kitchen1.html";
  } else {
    alert("try again");
  }
}
function kitchenOn(){
  window.location.href="kitchen2.html";
}
function catchPan(){
  if(health<=0){
    window.location.href="gameover.html"
  }
  var x = (Math.random()*100)+1;
  x=parseInt(x);
  document.getElementById("pan").style.right = x+"%";
  x = (Math.random()*100)+1;
  x=parseInt(x);
  document.getElementById("pan").style.bottom = x+"%";
  sleep(800);
  catchPan();
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function woods(){
  window.location.href="woods.html";
}
function cabin(){
  window.location.href="cabin.html";
}
function askFood(){
  window.location.href="askfood.html";
}
function iceCream(){
  alert("The Ice Cream was poisinous, you had no idea. You're dead now.");
  window.location.href="gameover.html";
}
function sword(){
  health-=85;
  alert("What were you thinking! The dwarves attacked you");
  if(window.localStorage.getItem('fishHelp')&&health>0){
    alert("You were saved by Ziggy...remember him? He just got you back home.");
    window.location.href="gameovergood.html";
  }
  else{
    window.location.href="gameover.html";
  }
}
function leave(){
  window.location.href="gameovergood.html";
}
function stay(){
  window.location.href="dwarfLife.html";
}
function corpse(){
  health-=10
  alert("not exactly the greatest hygiene, so you lost a bit of health. You go kitchen now. ");
  window.location.href="kitchen1.html";
}
