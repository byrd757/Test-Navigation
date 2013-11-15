function Controller() {
    function openSecondWindow() {
        var secondViewController = Alloy.createController("second_window").getView();
        secondViewController.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "first_window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win1 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win1",
        title: "1st Window"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    $.__views.btnLoadSecondWin = Ti.UI.createButton({
        id: "btnLoadSecondWin",
        title: "Load Second Window"
    });
    $.__views.win1.add($.__views.btnLoadSecondWin);
    openSecondWindow ? $.__views.btnLoadSecondWin.addEventListener("click", openSecondWindow) : __defers["$.__views.btnLoadSecondWin!click!openSecondWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnLoadSecondWin!click!openSecondWindow"] && $.__views.btnLoadSecondWin.addEventListener("click", openSecondWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;