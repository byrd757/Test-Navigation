$.btnMenu.addEventListener('click', function(e){
    Ti.App.fireEvent('android_menuhit',e);
});   