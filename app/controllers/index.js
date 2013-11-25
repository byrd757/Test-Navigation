if (OS_IOS) {
    Alloy.Globals.navgroup = $.nav; 
    $.nav.open();
    // menu = Alloy.createController('Menu').getView();
    // $.nav.add(menu);
} else if (OS_ANDROID) {
    $.index.getView().open();
    
} else {
    alert(L('unsupportedPlatform', 'Unsupported Platform'));
}


var animateRight = Ti.UI.createAnimation({
    left : "80%",
    curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration : 150
});

var animateReset = Ti.UI.createAnimation({
    left : 0,
    curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration : 150
});

var animateLeft = Ti.UI.createAnimation({
    left : -250,
    curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration : 150
});
var openmenu=false;
Ti.App.addEventListener('menuhit', function(e){
    if(openmenu == true){ 
        $.nav.animate(animateReset);
        openmenu = false;
    } else {
        $.nav.animate(animateRight);
        openmenu = true;
    }
    
});
