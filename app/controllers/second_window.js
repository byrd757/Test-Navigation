// Android 
if (OS_ANDROID) {
    $.second_window.addEventListener('open', function() {
        if($.second_window.activity) {
            var activity = $.second_window.activity;
    
            // Action Bar
            if( Alloy.Globals.Android.Api >= 11 && activity.actionBar) {      
                activity.actionBar.title = "Second Window";
                activity.actionBar.displayHomeAsUp = true; 
                activity.actionBar.onHomeIconItemSelected = function() {              
                    $.second_window.close();
                    $.second_window = null;
                };             
            }
        }
    });
    
    // Back Button
    $.second_window.addEventListener('android:back', function() {             
        $.second_window.close();
        $.second_window = null;
    });     
}

$.btnSecondWindow.addEventListener ('click', function () {
	// include
	var State = require ('/State');

	// definition
	var objState = new State('1','California');
	var objState2 = new State('2','Virginia');
	var arrState = [objState,objState2];
	
	// usage
	alert(arrState[1].getName());

});
