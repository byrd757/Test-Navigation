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
$.activityIndicator.hide();
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
   $.activityIndicator.show();
   var SearchResultClass = require ('/SearchResultClass');
   var tableData=[];
   var search = new SearchResultClass("Regular");
   var argsSearch = {
        catId : 12,
        subCatId : '',
        lowInvestment : '',
        highInvestment : 12345000,
        location : 12
   };
   search.getSearchResult(argsSearch , function (arrayResult) {
        for (var i = 0; i < arrayResult.length; i++) {
            var args = {
                title : arrayResult[i].getTitle(),
                image : arrayResult[i].getLogo(),
                customView : 'view' + i
            };
            tableData.push(Alloy.createController('menurow', args).getView());
        }
        $.tblSearchResult.setData(tableData);
        $.activityIndicator.hide();
   });   
});

$.btnLowCost.addEventListener ('click', function () {
    $.activityIndicator.show();
    var SearchResultClass = require ('/SearchResultClass');
    var tableData=[];
    var search = new SearchResultClass("LowCost");
    var argsSearch = {
        lowInvestment : 0,
        highInvestment : 50000
    };
    search.getSearchResult(argsSearch , function (arrayResult) {
        for (var i = 0; i < arrayResult.length; i++) {
            var args = {
                title : arrayResult[i].getTitle(),
                image : arrayResult[i].getLogo(),
                customView : 'view' + i
            };
            tableData.push(Alloy.createController('menurow', args).getView());
        }
        $.tblSearchResult.setData(tableData);
        $.activityIndicator.hide();
    });
   
});