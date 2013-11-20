var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Styles = {
    TableViewRow: {
        height: 45
    }
};

Ti.App.Properties.setString("Server-Dev", "http://apps.franchisesolutions.com/webservices-dev");

Ti.App.Properties.setString("Server", "http://apps.franchisesolutions.com/webservices");

Alloy.createController("index");