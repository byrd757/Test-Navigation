State.id = '';
State.name = '';

function State(id,name) { 
	this.idState = id;
	this.nameState=name;
};
State.prototype.getId = function () {
	return this.idState;
};

State.prototype.getName = function () {
	return this.nameState;
};

module.exports = State;