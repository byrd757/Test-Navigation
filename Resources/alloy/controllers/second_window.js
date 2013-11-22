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
        title: "Search Result",
        fullscreen: "false"
    });
    $.__views.second_window && $.addTopLevelView($.__views.second_window);
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId31"
    });
    $.__views.second_window.add($.__views.__alloyId31);
    $.__views.btnRegular = Ti.UI.createButton({
        id: "btnRegular",
        top: "60",
        height: "50",
        title: "RegularSearch"
    });
    $.__views.__alloyId31.add($.__views.btnRegular);
    $.__views.btnLowCost = Ti.UI.createButton({
        id: "btnLowCost",
        top: "35",
        height: "50",
        title: "Low Cost"
    });
    $.__views.__alloyId31.add($.__views.btnLowCost);
    $.__views.tblSearchResult = Ti.UI.createTableView({
        id: "tblSearchResult",
        bottom: "0"
    });
    $.__views.__alloyId31.add($.__views.tblSearchResult);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
        id: "activityIndicator",
        message: "Loading..."
    });
    $.__views.second_window.add($.__views.activityIndicator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.activityIndicator.hide();
    $.btnRegular.addEventListener("click", function() {
        $.activityIndicator.show();
        var SearchResultClass = require("/SearchResultClass");
        var tableData = [];
        var search = new SearchResultClass("Regular");
        var argsSearch = {
            catId: 12,
            subCatId: "",
            lowInvestment: "",
            highInvestment: 12345e3,
            location: 12
        };
        search.getSearchResult(argsSearch, function(arrayResult) {
            for (var i = 0; arrayResult.length > i; i++) {
                var args = {
                    title: arrayResult[i].getTitle(),
                    image: arrayResult[i].getLogo(),
                    customView: "view" + i
                };
                tableData.push(Alloy.createController("menurow", args).getView());
            }
            $.tblSearchResult.setData(tableData);
            $.activityIndicator.hide();
        });
    });
    $.btnLowCost.addEventListener("click", function() {
        $.activityIndicator.show();
        var SearchResultClass = require("/SearchResultClass");
        var tableData = [];
        var search = new SearchResultClass("LowCost");
        var argsSearch = {
            lowInvestment: 0,
            highInvestment: 5e4
        };
        search.getSearchResult(argsSearch, function(arrayResult) {
            for (var i = 0; arrayResult.length > i; i++) {
                var args = {
                    title: arrayResult[i].getTitle(),
                    image: arrayResult[i].getLogo(),
                    customView: "view" + i
                };
                tableData.push(Alloy.createController("menurow", args).getView());
            }
            $.tblSearchResult.setData(tableData);
            $.activityIndicator.hide();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;