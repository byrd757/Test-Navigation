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
    $.__views.btnRegular = Ti.UI.createButton({
        title: "RegularSearch",
        id: "btnRegular",
        top: "0",
        height: "30"
    });
    $.__views.second_window.add($.__views.btnRegular);
    $.__views.btnLowCost = Ti.UI.createButton({
        title: "Low Cost",
        id: "btnLowCost",
        top: "35",
        height: "30"
    });
    $.__views.second_window.add($.__views.btnLowCost);
    $.__views.tblSearchResult = Ti.UI.createTableView({
        id: "tblSearchResult",
        top: "200",
        height: "100%"
    });
    $.__views.second_window.add($.__views.tblSearchResult);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.btnRegular.addEventListener("click", function() {
        var SearchResultClass = require("/SearchResultClass");
        var search = new SearchResultClass("Regular");
        search.getSearchResult(12, "", "", 0, 12345e3, 12, function(arrayResult) {
            alert(arrayResult[20].getTitle());
        });
    });
    $.btnLowCost.addEventListener("click", function() {
        var SearchResultClass = require("/SearchResultClass");
        var tableData = [];
        var search = new SearchResultClass("LowCost");
        search.getSearchResult(null, null, null, 0, 5e4, null, function(arrayResult) {
            for (var i = 0; arrayResult.length > i; i++) {
                var args = {
                    title: arrayResult[i].getTitle(),
                    image: arrayResult[i].getLogo(),
                    customView: "view" + i
                };
                tableData.add(Alloy.createController("menurow", args).getView());
            }
            $.tblSearchResult.setData(tableData);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;