
var LeadForm = require ('/LeadForm');
var LeadFormClass = require ('/LeadFormClass');
// Android 
if (OS_ANDROID) {
    $.lead_test.addEventListener('open', function() {
        if($.lead_test.activity) {
            var activity = $.lead_test.activity;
    
            // Action Bar
            if( Alloy.Globals.Android.Api >= 11 && activity.actionBar) {      
                activity.actionBar.title = "Lead";
                activity.actionBar.displayHomeAsUp = true; 
                activity.actionBar.onHomeIconItemSelected = function() {              
                    $.lead_test.close();
                    $.lead_test = null;
                };             
            }
        }
    });
    
    // Back Button
    $.lead_test.addEventListener('android:back', function() {             
        $.lead_test.close();
        $.lead_test = null;
    });     
}
$.activityIndicator.hide();

$.btnSubmit.addEventListener ('click', function () {

   $.activityIndicator.show();

   var tableData=[];
   var clsLeadForm = new LeadFormClass();

    // zipcode=123445&timeframe=3&phone=(123)456-7891&investment=40000&newsletter=1&fbolist=10072&source=iphone
   var objLeadForm = new LeadForm('test@franchisesolutions.com' ,'Test','Tester','CA',23451,'','1231231234',40000,1,10072,'','ipad');

   clsLeadForm.submitLeadForm(objLeadForm , function (result) {
        if (result) {
            alert ('New lead inserted successfully!');
        } else {
            alert ('Error');
        }
        // for (var i = 0; i < arrayResult.length; i++) {
            // var args = {
                // title : arrayResult[i].getTitle(),
                // image : arrayResult[i].getLogo(),
                // customView : 'view' + i
            // };
            // tableData.push(Alloy.createController('menurow', args).getView());
        // }
        // $.tblSearchResult.setData(tableData);
        $.activityIndicator.hide();
   });   
});