// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Android api version
if( OS_ANDROID ) {
    Alloy.Globals.Android = { 
        'Api' : Ti.Platform.Android.API_LEVEL
    };
}

// Styles
Alloy.Globals.Styles = {
    'TableViewRow' : {
        'height' : 45
    }
};

Ti.App.Properties.setString('Server-Dev', 'http://apps.franchisesolutions.com/webservices-dev');
Ti.App.Properties.setString('Server', 'http://apps.franchisesolutions.com/webservices');