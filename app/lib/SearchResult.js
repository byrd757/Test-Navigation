/**
 * @author Farshad Sheykhi
 */

function SearchResult(id,fId,fTitle,fLogo,fDesc,fInvestmentLevel,fFee,stablished,requestedInfoDate) { 
    this.idSearch = id;
    this.idFranchise = fId;
    this.title = fTitle;
    this.logo = fLogo;
    this.description = fDesc;
    this.investmentLevel = fInvestmentLevel;
    this.fee = fFee;
    this.stablished = stablished;
    this.requestedDate = requestedInfoDate;
    
    // return this;
};

State.prototype.getId = function () {
    return this.idSearch;
};

State.prototype.getFranchiseId = function () {
    return this.idFranchise;
};

State.prototype.getTitle = function () {
    return this.title;
};

State.prototype.getLogo = function () {
    return this.logo;
};

State.prototype.getDescription = function () {
    return this.description;
};

State.prototype.getInvestmentLevel = function () {
    return this.investmentLevel;
};

State.prototype.getFee = function () {
    return this.fee;
};

State.prototype.getStablished = function () {
    return this.stablished;
};

State.prototype.getRequestedDate = function () {
    return this.requestedDate;
};

module.exports = State;