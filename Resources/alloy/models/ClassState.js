var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("classState", exports.definition, []);

collection = Alloy.C("classState", exports.definition, model);

exports.Model = model;

exports.Collection = collection;