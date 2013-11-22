function State(id, name, selected) {
    this.idState = id;
    this.nameState = name;
    this.isSelected = selected;
}

State.prototype.getId = function() {
    return this.idState;
};

State.prototype.getName = function() {
    return this.nameState;
};

State.prototype.setIsSelected = function(_isSelected) {
    this.isSelected = _isSelected;
};

State.prototype.getIsSelected = function() {
    return this.isSelected;
};

module.exports = State;