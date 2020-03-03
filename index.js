for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	
	document.querySelectorAll(".drum")[i].addEventListener("click",meow);

function meow()
{
       var a= this.innerHTML;
       both(a);
       animate(a);
}

}

document.addEventListener("keypress",function(event){
    both(event.key);
    animate(event.key);
});

function both(ch)
{
	switch(ch)
    {
    	case "a":
	      var audio = new Audio("sounds/tom-1.mp3");
	      audio.play();
	      break;
        case "s":
	      var audio = new Audio("sounds/tom-2.mp3");
	      audio.play();
	      break;
	      case "d":
	      var audio = new Audio("sounds/tom-3.mp3");
	      audio.play();
	      break;
	      case "f":
	      var audio = new Audio("sounds/tom-4.mp3");
	      audio.play();
	      break;
	      case "g":
	      var audio = new Audio("sounds/kick-bass.mp3");
	      audio.play();
	      break;
	      case "h":
	      var audio = new Audio("sounds/crash.mp3");
	      audio.play();
	      break;
	      case "j":
	      var audio = new Audio("sounds/snare.mp3");
	      audio.play();
	      break;
          default:
          console.log("Wrong choice");
       } 

}

function animate(animi)
{
	var tim = document.querySelector("." + animi);
	tim.classList.add("pressed");

	setTimeout(function(){
		tim.classList.remove("pressed");
	},100);
}