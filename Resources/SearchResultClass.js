function SearchResultClass(type) {
    this.searchType = type;
}

var arraySearchResults = [];

var SearchResult = require("/SearchResult");

SearchResultClass.prototype.getSearchResult = function(catId, subCatId, keyword, lowInvestment, highInvestment, location, callback) {
    arraySearchResults = [];
    var searchURL = "";
    "Regular" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location : "A-Z" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&type=a2z" : "Keyword" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&keyword=" + keyword : "U50" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location : "25-50" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location : "WFH" == this.searchType || ("LowCost" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults" + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment : "Hot" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location : "Big" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location : "Top25" == this.searchType ? searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location : "Similar" == this.searchType && (searchURL = ("production" == Titanium.App.deployType ? Ti.App.Properties.getString("Server") : Ti.App.Properties.getString("Server-Dev")) + "/searchservices.php?name=searchresults&category=" + catId + "&subcategory=" + subCatId + "&mincapital=" + lowInvestment + "&maxcapital=" + highInvestment + "&statecode=" + location));
    Ti.API.info(searchURL);
    var search = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info(this.responseText);
            var searchResults = JSON.parse(this.responseText);
            if (searchResults.results.length > 0) for (i = 0; searchResults.results.length > i; i++) {
                var searchValue = searchResults.results[i];
                var GName = searchValue.GraphicFileName;
                var patt = new RegExp(" ", "g");
                GName = GName.replace(patt, "%20");
                var imageName = "http://" + searchValue.GraphicPath + GName;
                var objSearchResult = new SearchResult(i, searchValue.fbo_id, searchValue.FranName, imageName, searchValue.ShortDesc, searchValue.MinCapital, searchValue.MaxCapital, null, null, null);
                arraySearchResults.push(objSearchResult);
                Ti.API.info(objSearchResult.getTitle());
            }
            callback(arraySearchResults);
        },
        onerror: function() {
            Ti.API.debug("STATUS: " + this.status);
            callback(null);
        },
        timeout: 1e4
    });
    search.open("GET", searchURL);
    search.send();
};

module.exports = SearchResultClass;