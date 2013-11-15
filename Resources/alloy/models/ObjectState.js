function objectState() {
    var pageNum = 1;
    this.version = 1;
    this.getPageNum = function() {
        return pageNum;
    };
    this.setPageNum = function(num) {
        pageNum = num;
    };
}

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("objectState", exports.definition, []);

collection = Alloy.C("objectState", exports.definition, model);

exports.Model = model;

exports.Collection = collection;