if (OS_IOS) {
    Alloy.Globals.navgroup = $.nav;  
    $.navigation.open();
} else if (OS_ANDROID) {
    $.index.getView().open();
} else {
    alert(L('unsupportedPlatform', 'Unsupported Platform'));
}