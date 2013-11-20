function SearchResult(id, fId, fTitle, fLogo, fDesc, fMinInvestment, fMaxInvestment, fFee, stablished, requestedInfoDate) {
    this.idSearch = id;
    this.idFranchise = fId;
    this.title = fTitle;
    this.logo = fLogo;
    this.description = fDesc;
    this.minInvestment = fMinInvestment;
    this.maxInvestment = fMaxInvestment;
    this.fee = fFee;
    this.stablished = stablished;
    this.requestedDate = requestedInfoDate;
}

SearchResult.prototype.getId = function() {
    return this.idSearch;
};

SearchResult.prototype.getFranchiseId = function() {
    return this.idFranchise;
};

SearchResult.prototype.getTitle = function() {
    return this.title;
};

SearchResult.prototype.getLogo = function() {
    return this.logo;
};

SearchResult.prototype.getDescription = function() {
    return this.description;
};

SearchResult.prototype.getMinInvestment = function() {
    return this.minInvestment;
};

SearchResult.prototype.getMaxInvestment = function() {
    return this.maxInvestment;
};

SearchResult.prototype.getFee = function() {
    return this.fee;
};

SearchResult.prototype.getStablished = function() {
    return this.stablished;
};

SearchResult.prototype.getRequestedDate = function() {
    return this.requestedDate;
};

module.exports = SearchResult;