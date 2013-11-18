function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.navigation = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "navigation"
    });
    $.__views.navigation && $.addTopLevelView($.__views.navigation);
    $.__views.win1 = Alloy.createController("first_window", {
        id: "win1"
    });
    $.__views.nav = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.win1.getViewEx({
            recurse: true
        }),
        id: "nav"
    });
    $.__views.navigation.add($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navgroup = $.nav;
    $.navigation.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;