register = document.getElementById("home");

home.onmouseenter = function () {
    TweenLite.to(home, 0.2, { scale: 1.2 })
}

home.onmouseleave = function () {
    TweenLite.to(home, 0.2, { scale: 1 })
}

var mySplitText = new SplitText("#quote", { type: "words" })
var tl = new TimelineMax({ repeat: -1 }); //loop forever with repeat: -1

loop = 0;
loopMax = 2;

tl.to("#banner", 1.5, { opacity: 1, ease: Cubic.easeOut })
    .staggerFrom(mySplitText.words, 0.3, { opacity: 0, scale: 0.4, ease: Back.easeOut }, 0.15)
    .from("#bouncyGreen", 0.9, { opacity: 0, y: 50, ease: Elastic.easeOut, delay: 0.5 })
    .to("#pitchWrapper", 1, { opacity: 0, scale: 0.3, y: 22, ease: Back.easeIn, delay: 0.5 })
    .from("#contactMe", 0.5, { x: -430, ease: Cubic.easeOut, delay: 0.5 })
    .from("#phoneNumber", 0.5, { x: -430, ease: Cubic.easeOut }, "-=0.4")
    .from("#robot", 0.5, { x: -100, ease: Cubic.easeOut }, "-=0.4")
    .to("#potato", 0.7, { x: 330, scaleX: 1, ease: Cubic.easeOut })
    .to("#name", 0.5, { x: 200, ease: Cubic.easeOut })
    .to("#description", 0.5, { x: 250, ease: Cubic.easeOut }, "-=0.4")
    .to("#home", 0.8, { opacity: 1, scale: 1, ease: Elastic.easeOut, delay: 0.8 })
    .call(loopCheck)
    .to("#banner", 0.5, { autoAlpha: 0, delay: 5 }); //hide banner after 5 seconds

function loopCheck() {
    loop++;
    if (loop < loopMax) {
        tl.play();
    } else {
        tl.pause();
    }
}

