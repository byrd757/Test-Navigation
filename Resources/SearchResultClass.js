var arraySearchResults = [];

SearchResultClass.prototype.getSearchResult = function(catId, subCatId, lowInvestment, highInvestment, location) {
    var searchURL = "http://apps.franchiseadvantage.com/webservices-dev/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location;
    Ti.API.info(searchURL);
};

module.exports = SearchResultClass;