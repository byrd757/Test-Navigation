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
    $.btnSecondWindow.addEventListener("click", function() {
        var State = require("/State");
        var objState = new State("1", "California");
        var objState2 = new State("2", "Virginia");
        var arrState = [ objState, objState2 ];
        alert(arrState[1].getName());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;