function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menu = Alloy.createController("Menu", {
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.win1 = Alloy.createController("first_window", {
        id: "win1"
    });
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win1.getViewEx({
            recurse: true
        }),
        id: "nav",
        width: "100%"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navgroup = $.nav;
    $.nav.open();
    var animateRight = Ti.UI.createAnimation({
        left: "80%",
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateReset = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    Ti.UI.createAnimation({
        left: -250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var openmenu = false;
    Ti.App.addEventListener("menuhit", function() {
        if (true == openmenu) {
            $.nav.animate(animateReset);
            openmenu = false;
        } else {
            $.nav.animate(animateRight);
            openmenu = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;