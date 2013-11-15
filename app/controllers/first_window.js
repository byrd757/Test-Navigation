function openSecondWindow(e){
	var secondViewController = Alloy.createController('second_window').getView();
	
    if (OS_IOS) {
        Alloy.Globals.navgroup.open(secondViewController);   
    } else if (OS_ANDROID) {
        secondViewController.open();
    }
}

// iOS
if (OS_IOS) {

    var btnRightNav = Ti.UI.createButton({
       title:"2nd Win"
    });
    btnRightNav.addEventListener('click', openSecondWindow);
 	$.win1.rightNavButton = btnRightNav;
}