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

$.btnRegular.addEventListener ('click', function () {
	/*
	// include
	var State = require ('/State');

	// definition
	var objState = new State('1','California');
	var objState2 = new State('2','Virginia');
	var arrState = [objState,objState2];
	
	// usage
	alert(arrState[1].getName());
    */
   
   var SearchResultClass = require ('/SearchResultClass');
   
   var search = new SearchResultClass("Regular");
   search.getSearchResult(12, '', '', 0, 12345000, 12 , function (arrayResult) {
       alert (arrayResult[20].getTitle());
       
   });
   
});

$.btnLowCost.addEventListener ('click', function () {

   var SearchResultClass = require ('/SearchResultClass');
   var tableData=[];
   var search = new SearchResultClass("LowCost");
   search.getSearchResult(null, null, null, 0, 50000, null , function (arrayResult) {
        for (var i = 0; i < arrayResult.length; i++) {
        var args = {
            title : arrayResult[i].getTitle(),
            image : arrayResult[i].getLogo(),
            customView : 'view' + i
        };
        tableData.add(Alloy.createController('menurow', args).getView());
    }
    $.tblSearchResult.setData(tableData);
   });
   
});