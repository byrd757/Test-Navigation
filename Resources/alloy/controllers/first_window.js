function Controller() {
    function openSecondWindow() {
        var secondViewController = Alloy.createController("second_window").getView();
        Alloy.Globals.navgroup.openWindow(secondViewController);
    }
    function openLeadWindow() {
        var leadViewController = Alloy.createController("lead_test").getView();
        Alloy.Globals.navgroup.openWindow(leadViewController);
    }
    function openModal() {
        var modalViewController = Alloy.createController("ModalView").getView();
        modalViewController.open({
            fullscreen: true,
            modal: true,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
            navBarHidden: false
        });
    }
    function openPicker() {
        var pickerViewController = Alloy.createController("MobilePickerView", arrState).getView();
        $.win1.add(pickerViewController);
        pickerViewController.animate(slide_in);
        pickerViewController.addEventListener("pickerClosed", function(e) {
            var objState = arrState[e.selectedRow];
            alert(objState.getName());
            $.win1.remove(pickerViewController);
        });
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
        title: "1st Window",
        width: "100%"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId47"
    });
    $.__views.win1.add($.__views.__alloyId47);
    $.__views.viewMain = Ti.UI.createView({
        id: "viewMain",
        backgroundColor: "white",
        layout: "vertical"
    });
    $.__views.__alloyId47.add($.__views.viewMain);
    $.__views.btnLoadSecondWin = Ti.UI.createButton({
        top: "10",
        id: "btnLoadSecondWin",
        title: "Search Result"
    });
    $.__views.viewMain.add($.__views.btnLoadSecondWin);
    openSecondWindow ? $.__views.btnLoadSecondWin.addEventListener("click", openSecondWindow) : __defers["$.__views.btnLoadSecondWin!click!openSecondWindow"] = true;
    $.__views.btnLoadLeadWin = Ti.UI.createButton({
        top: "10",
        id: "btnLoadLeadWin",
        title: "Lead"
    });
    $.__views.viewMain.add($.__views.btnLoadLeadWin);
    openLeadWindow ? $.__views.btnLoadLeadWin.addEventListener("click", openLeadWindow) : __defers["$.__views.btnLoadLeadWin!click!openLeadWindow"] = true;
    $.__views.btnLoadModal = Ti.UI.createButton({
        top: "10",
        id: "btnLoadModal",
        title: "Modal"
    });
    $.__views.viewMain.add($.__views.btnLoadModal);
    openModal ? $.__views.btnLoadModal.addEventListener("click", openModal) : __defers["$.__views.btnLoadModal!click!openModal"] = true;
    $.__views.btnLoadPicker = Ti.UI.createButton({
        top: "10",
        id: "btnLoadPicker",
        title: "Picker"
    });
    $.__views.viewMain.add($.__views.btnLoadPicker);
    openPicker ? $.__views.btnLoadPicker.addEventListener("click", openPicker) : __defers["$.__views.btnLoadPicker!click!openPicker"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var State = require("/State");
    var objState1 = new State("1", "California", false);
    var objState2 = new State("2", "Virginia", false);
    var objState3 = new State("3", "Texas", false);
    var objState4 = new State("4", "Georgia", false);
    var arrState = [ objState1, objState2, objState3, objState4 ];
    [ Titanium.UI.createPickerRow({
        title: "John"
    }), Titanium.UI.createPickerRow({
        title: "Alex"
    }), Titanium.UI.createPickerRow({
        title: "Marie"
    }), Titanium.UI.createPickerRow({
        title: "Eva"
    }), Titanium.UI.createPickerRow({
        title: "James"
    }) ];
    var slide_in = Titanium.UI.createAnimation({
        bottom: 0
    });
    var btnLeftNav = Ti.UI.createButton({
        title: "Menu",
        toggle: false
    });
    btnLeftNav.addEventListener("click", function(e) {
        Ti.App.fireEvent("menuhit", e);
    });
    $.win1.leftNavButton = btnLeftNav;
    var view = Ti.UI.createView({
        layout: "horizontal"
    });
    var btnRightNav1 = Ti.UI.createButton({
        title: "Help"
    });
    btnRightNav1.addEventListener("click", function() {
        alert("no.1");
    });
    var btnRightNav2 = Ti.UI.createButton({
        title: "Menu"
    });
    btnRightNav2.addEventListener("click", function() {
        alert("no.2");
    });
    view.add(btnRightNav1);
    view.add(btnRightNav2);
    $.win1.titleControl = view;
    Ti.App.addEventListener("btnclicked", function(e) {
        alert(e.value);
    });
    __defers["$.__views.btnLoadSecondWin!click!openSecondWindow"] && $.__views.btnLoadSecondWin.addEventListener("click", openSecondWindow);
    __defers["$.__views.btnLoadLeadWin!click!openLeadWindow"] && $.__views.btnLoadLeadWin.addEventListener("click", openLeadWindow);
    __defers["$.__views.btnLoadModal!click!openModal"] && $.__views.btnLoadModal.addEventListener("click", openModal);
    __defers["$.__views.btnLoadPicker!click!openPicker"] && $.__views.btnLoadPicker.addEventListener("click", openPicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;