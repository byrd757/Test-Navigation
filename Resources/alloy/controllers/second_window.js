function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "second_window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.second_window = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "second_window",
        title: "Second Window",
        fullscreen: "false"
    });
    $.__views.second_window && $.addTopLevelView($.__views.second_window);
    $.__views.btnSecondWindow = Ti.UI.createButton({
        title: "Second Window",
        id: "btnSecondWindow"
    });
    $.__views.second_window.add($.__views.btnSecondWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.second_window.addEventListener("open", function() {
        if ($.second_window.activity) {
            var activity = $.second_window.activity;
            if (Alloy.Globals.Android.Api >= 11 && activity.actionBar) {
                activity.actionBar.title = "Second Window";
                activity.actionBar.displayHomeAsUp = true;
                activity.actionBar.onHomeIconItemSelected = function() {
                    $.second_window.close();
                    $.second_window = null;
                };
            }
        }
    });
    $.second_window.addEventListener("android:back", function() {
        $.second_window.close();
        $.second_window = null;
    });
    $.btnSecondWindow.addEventListener("click", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;