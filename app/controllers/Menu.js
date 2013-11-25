$.menu.open();

$.btn11.addEventListener('click',function(e) {
   Ti.App.fireEvent('btnclicked',{
       value:123
   });
   Ti.API.info('clicked'); 
});

/////////////
//Menu
////////////
//button images
var menuHomeImage='/images/Rate_121x121.png';
var menuAzImage = '/images/Rate_121x121.png';
var menuFaqImage ='/images/Rate_121x121.png';
var menuPrivacyImage = '/images/Rate_121x121.png';
var menuKeywordImage = '/images/Rate_121x121.png';

var menuButtonIcons=[menuHomeImage,menuAzImage,menuFaqImage,menuPrivacyImage,menuKeywordImage];
var menuButtonTitles=['Home','A-Z','FAQ','Privacy','Keyword Search'];
load_First_Section();
function load_First_Section() {
    var menuTableData=[];
    for(var i=0;i< menuButtonIcons.length;i++)
    {   
        var args = {
            image:menuButtonIcons[i],
            // title:menuButtonTitles[i],
   
            image2:menuButtonIcons[i+1],
            // img2ID: menuButtonTitles[i+1],
            customView : 'view' + i
            //image : "images/ic_search.png"
        };
        var row = Alloy.createController('menurow', args).getView();
        menuTableData.push(row);
    
        i++;
    }
    
    // $.tblFirstSection.data=menuTableData;

}
// 
// var menumaxHeight= Titanium.Platform.displayCaps.platformHeight-(Titanium.Platform.displayCaps.platformHeight*0.33);
// 
/////////////
//Dashboard
////////////

var menuRateImages ='/images/Rate_121x121.png';
var menuRecentSubmitsImages = '/images/Rate_121x121.png';
var menuFavoritesImages ='/images/Rate_121x121.png';

var menuButtonIcons2=[menuRateImages,menuRecentSubmitsImages,menuFavoritesImages];
var menuButtonTitles2=['Rate Our App','My Franchise List','My Favorites'];

function load_Second_Section() {
    var menuTableData2=[];

    for(var i=0;i< menuButtonIcons2.length;i++)
    {
        var args2 = {
            image1:menuButtonIcons2[i],
            img1ID:menuButtonTitles2[i],
        
            image2:menuButtonIcons2[i+1],
            img2ID: menuButtonTitles2[i+1],
            customView : 'view' + i
            //image : "images/ic_search.png"
        };
        var row = Alloy.createController('MenuRows', args2).getView();
        menuTableData2.push(row);
    
        i++;
    }
    // $.tblSecondSection.data=menuTableData2;
}



/////////////
//General
////////////
var menuAbout ='/images/Rate_121x121.png';
var menuContact = '/images/Rate_121x121.png';

var menuButtonIcons3=[menuAbout,menuContact];
var menuButtonTitles3=['About Us','Contact Us'];

function load_Third_Section() {
    var menuTableData3=[];
    for(var i=0;i< menuButtonIcons3.length;i++)
    {
        var args3 = {
            image1:menuButtonIcons3[i],
            img1ID:menuButtonTitles3[i],
        
            image2:menuButtonIcons3[i+1],
            img2ID: menuButtonTitles3[i+1],
            
            //image : "images/ic_search.png"
        };
        menuTableData3.push(Alloy.createController('MenuRows', args3).getView());
    
        i++;
    }
    // $.tblThirdSection.data=menuTableData3;
}
/************************************************************************************************************
 * Menu Headers Event listeners
 *****************************************************************************************************************/

$.lblFirstSection.addEventListener('click',function(e){
    $.viewFirstSection.height="86%";
    $.tblFirstSection.height="100%";
    $.viewSecondSection.height="7%";
    $.viewThirdSection.height="7%";
});

$.lblSecondSection.addEventListener('click',function(e){
	$.viewSecondSection.height="86%";
	$.tblSecondSection.height="100%";
	$.viewFirstSection.height="7%";
	$.viewThirdSection.height="7%";
});

$.lblThirdSection.addEventListener('click',function(e){
    $.viewThirdSection.height="86%";
    $.tblThirdSection.height="100%";
    $.viewFirstSection.height="7%";
    $.viewSecondSection.height="7%";
});
