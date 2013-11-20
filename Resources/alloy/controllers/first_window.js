function Controller() {
    function openSecondWindow() {
        var secondViewController = Alloy.createController("second_window").getView();
        Alloy.Globals.navgroup.open(secondViewController);
    }
    function openLeadWindow() {
        var leadViewController = Alloy.createController("lead_test").getView();
        Alloy.Globals.navgroup.open(leadViewController);
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
    $.__views.btnLoadLeadWin = Ti.UI.createButton({
        top: "50",
        id: "btnLoadLeadWin",
        title: "Load Lead Window"
    });
    $.__views.win1.add($.__views.btnLoadLeadWin);
    openLeadWindow ? $.__views.btnLoadLeadWin.addEventListener("click", openLeadWindow) : __defers["$.__views.btnLoadLeadWin!click!openLeadWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var btnRightNav = Ti.UI.createButton({
        title: "2nd Win"
    });
    btnRightNav.addEventListener("click", openSecondWindow);
    $.win1.rightNavButton = btnRightNav;
    __defers["$.__views.btnLoadSecondWin!click!openSecondWindow"] && $.__views.btnLoadSecondWin.addEventListener("click", openSecondWindow);
    __defers["$.__views.btnLoadLeadWin!click!openLeadWindow"] && $.__views.btnLoadLeadWin.addEventListener("click", openLeadWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;