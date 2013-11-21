/**
 * @author Farshad Sheykhi
 */
var LeadForm = require ('/LeadForm');
function LeadFormClass() {
    
};

LeadFormClass.prototype.submitLeadForm = function(lf , callback) {
    arraySearchResults = [];

    var searchURL = ((Titanium.App.deployType=='production')?Ti.App.Properties.getString('Server'):Ti.App.Properties.getString('Server-Dev')) +
    '/leadmanagement.php?&email=' + lf.getEmail() + '&firstname=' + lf.getFirstName() + '&lastname=' + lf.getLastName() + '&state=' + lf.getStateId() + 
    '&zipcode=' + lf.getZipcode() + '&country=' + lf.getCountry() + '&phone=' + lf.getPhone() + '&investment=' + lf.getInvestmentId () + 
    '&newsletter=' + lf.getNewsletter() + '&fbolist=' + lf.getFBOList() + '&IraBox=' + lf.getIRAList() + '&source=' + lf.getSource();
    
    if (searchURL!='') {
        Ti.API.info(searchURL);
        var search = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info(this.responseText);
                // var searchResults = JSON.parse(this.responseText);
                // if(searchResults.results.length>0){
                    // for (i = 0; i < searchResults.results.length; i++) {
                        // var searchValue = searchResults.results[i];
//                         
                        // var GName=searchValue.GraphicFileName;
                        // var patt = new RegExp(' ','g');
                        // GName = GName.replace(patt,'%20');
                        // var imageName='http://'+searchValue.GraphicPath+GName;  
//                         
                        // var objSearchResult = new SearchResult(i,searchValue.fbo_id,searchValue.FranName,imageName,searchValue.ShortDesc,searchValue.MinCapital,searchValue.MaxCapital,null,null,null);
//                         
                        // arraySearchResults.push(objSearchResult);
//                         
                        // Ti.API.info(objSearchResult.getTitle());
                    // }
                // }
                callback (true);                
            },
            onerror: function(e) {
                Ti.API.debug("STATUS: " + this.status);
                // Error handler
                callback (false);
            },
            timeout:10000
        });
        search.open("GET", searchURL);
        search.send();
    }
};

module.exports = LeadFormClass;