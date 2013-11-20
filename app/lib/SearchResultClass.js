/**
 * @author Farshad Sheykhi
 */

var arraySearchResults = [];
var SearchResult = require ('/SearchResult');
function SearchResultClass(type) {
    // type can be AZ,LowCost,
    this.searchType = type;
};

SearchResultClass.prototype.getSearchResult = function(catId, subCatId, lowInvestment, highInvestment, location) {
    
    if (this.searchType == "test") {
        var searchURL = 'http://apps.franchisesolutions.com/webservices-dev/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;
        Ti.API.info(searchURL);
        var search = Ti.Network.createHTTPClient({
                onload: function() {
                    Ti.API.info(this.responseText);
                    var searchResults = JSON.parse(this.responseText);
                    if(searchResults.results.length>0){
                        for (i = 0; i < searchResults.results.length; i++) {
                            var searchValue = searchResults.results[i];
                            
                            var GName=searchValue.GraphicFileName;
                            var patt = new RegExp(' ','g');
                            GName = GName.replace(patt,'%20');
                            var imageName='http://'+searchValue.GraphicPath+GName;  
                            
                            var objSearchResult = new SearchResult(i,searchValue.fbo_id,searchValue.FranName,imageName,searchValue.ShortDesc,searchValue.MinCapital,searchValue.MaxCapital,null,null,null);
                            
                            arraySearchResults.push(objSearchResult);
                            
                            Ti.API.info(objSearchResult.getTitle());
                        }
                    }
                    alert(arraySearchResults[20].getTitle());
                    
            },
            onerror: function(e) {
                Ti.API.debug("STATUS: " + this.status);
            },
            timeout:10000
        });
        search.open("GET", searchURL);
        search.send();
    }
};

module.exports = SearchResultClass;
