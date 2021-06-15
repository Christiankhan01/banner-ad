register = document.getElementById("signUp");

signUp.onmouseenter = function() {
  TweenLite.to(signUp, 0.2, {scale:1.2})
}

signUp.onmouseleave = function() {
  TweenLite.to(signUp, 0.2, {scale:1})
}

var mySplitText = new SplitText("#quote", {type:"words"});
var tl = new TimelineMax({repeat:-1});
loop = 0;
loopMax = 2;   
//-=25 allows overlaps in tweens 
tl.to("#banner", 1.5, {opacity:1, ease:Cubic.easeOut})
.staggerFrom(mySplitText.words, 0.3, {opacity:0, scale:0.4,  ease:Back.easeOut}, 0.15)
.from("#bouncyGreen", 0.9,{opacity:0, y:50, ease:Elastic.easeOut, delay:0.5})
.to("#pitchWrapper", 1, {opacity:0, scale:0.3, y:22, ease:Back.easeIn, delay:0.5})
.from("#callUs", 0.5,{x:-430, ease:Cubic.easeOut, delay:0.5})
.from("#phoneNumber", 0.5,{x:-430, ease:Cubic.easeOut},"-=0.4")
.from("#simon", 0.5,{x:-100, ease:Cubic.easeOut},"-=0.4")
.to("#potato", 0.7,{x:330, scaleX:1, ease:Cubic.easeOut}) 
.to("#theDate", 0.5,{x:205, ease:Cubic.easeOut})
.to("#description", 0.5,{x:250, ease:Cubic.easeOut},"-=0.4")
.to("#signUp", 0.8,{opacity:1, scale:1, ease:Elastic.easeOut, delay:0.8})
.call(loopCheck)
.to("#banner", 0.5,{autoAlpha:0,delay:5});

function loopCheck(){
	//console.log("loopCheck")
	loop++;
	if (loop < loopMax) {
		//console.log("play again")
		tl.play();
	} else {
		//console.log("done")
		tl.pause();
	}
}