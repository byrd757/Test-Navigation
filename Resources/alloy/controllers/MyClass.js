function Controller() {
    function MyClass() {
        var _privateInstanceMember = "PrIM";
        this.publicInstanceMember = "PuIM";
        this.publicInstanceMethod = function() {
            return _privateStaticMember + "," + _privateInstanceMember + "," + MyClass.publicStaticMember + "," + this.publicInstanceMember;
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MyClass";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _privateStaticMember = "PrSM";
    MyClass.publicStaticMember = "PuSM";
    MyClass.publicStaticMethod = function() {
        return _privateStaticMember + "," + MyClass.publicStaticMember;
    };
    module.exports = MyClass;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;