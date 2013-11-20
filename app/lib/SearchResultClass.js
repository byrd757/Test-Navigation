/**
 * @author Farshad Sheykhi
 * 
 * Search Types:
 *      - Regular   ===     Regular search
 *      - A-Z       ===     A-Z Directory
 *      - Keyword   ===     Keyword search
 *      - U50       ===     Opportunities under 50K
 *      - 25-50     ===     Opportunities 25 - 50K
 *      - WFH       ===     Work from home
 *      - LowCost   ===     Low cost franchises
 *      - Hot       ===     Hot Franchises
 *      - Big       ===     Big opportunities
 *      - Top25     ===     Top 25
 *      - Similar   ===     Similar search 
 */

var arraySearchResults = [];
var SearchResult = require ('/SearchResult');
function SearchResultClass(type) {
    this.searchType = type;
};

SearchResultClass.prototype.getSearchResult = function(catId, subCatId, keyword, lowInvestment, highInvestment, location , callback) {
    
    arraySearchResults = [];
    var searchURL = '';
    if (this.searchType == "Regular") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;        
    } else if (this.searchType == "A-Z") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&type=a2z';
    } else  if (this.searchType == "Keyword") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&keyword='+ keyword;
    } else if (this.searchType == "U50") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
            '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + 
            highInvestment + '&statecode=' + location;
    } else if (this.searchType == "25-50") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;
    } else  if (this.searchType == "WFH") {
        
    } else if (this.searchType == "LowCost") {
        // lowInvestment = 0;
        // highInvestment = 50000;
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults' + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment;
    } else if (this.searchType == "Hot") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;
    } else if (this.searchType == "Big") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;
    } else  if (this.searchType == "Top25") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;
    } else if (this.searchType == "Similar") {
        searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) + 
        '/searchservices.php?name=searchresults&category=' + catId + '&subcategory=' + subCatId + '&mincapital=' + lowInvestment + '&maxcapital=' + highInvestment + '&statecode=' + location;    
    }
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
                    callback (arraySearchResults);
                    
            },
            onerror: function(e) {
                Ti.API.debug("STATUS: " + this.status);
                // Error handler
                callback (null);
            },
            timeout:10000
        });
        search.open("GET", searchURL);
        search.send();
};

module.exports = SearchResultClass;
