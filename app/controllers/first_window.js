function openSecondWindow(e) {
    var secondViewController = Alloy.createController('second_window').getView();

    if (OS_IOS) {
        Alloy.Globals.navgroup.openWindow(secondViewController);
    } else if (OS_ANDROID) {
        secondViewController.open();
    }
}

function openLeadWindow(e) {
    var leadViewController = Alloy.createController('lead_test').getView();

    if (OS_IOS) {
        Alloy.Globals.navgroup.openWindow(leadViewController);
    } else if (OS_ANDROID) {
        leadViewController.open();
    }
}

function openModal(e) {

    var modalViewController = Alloy.createController('ModalView').getView();
    if (OS_IOS) {
        modalViewController.open({
            fullscreen : true,
            modal : true,
            modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
            navBarHidden : false
        });
    } else {
        modalViewController.open({
            fullscreen : false,
            modal : true,
            activityEnterAnimation : Ti.Android.R.anim.fade_in,
            activityExitAnimation : Ti.Android.R.anim.fade_out
        });
    }
}

// include
var State = require('/State');

// definition
var objState1 = new State('1', 'California', false);
var objState2 = new State('2', 'Virginia', false);
var objState3 = new State('3', 'Texas', false);
var objState4 = new State('4', 'Georgia', false);
var arrState = [objState1, objState2, objState3, objState4];

var picker_data = [Titanium.UI.createPickerRow({
    title : 'John'
}), Titanium.UI.createPickerRow({
    title : 'Alex'
}), Titanium.UI.createPickerRow({
    title : 'Marie'
}), Titanium.UI.createPickerRow({
    title : 'Eva'
}), Titanium.UI.createPickerRow({
    title : 'James'
})];
var slide_in = Titanium.UI.createAnimation({
    bottom : 0
});

function openPicker(e) {
    var pickerViewController = Alloy.createController('MobilePickerView', arrState).getView();
    $.win1.add(pickerViewController);
    pickerViewController.animate(slide_in);
    pickerViewController.addEventListener('pickerClosed', function(e) {
        var objState = arrState[e.selectedRow];
        alert(objState.getName());
        $.win1.remove(pickerViewController);
    });
}

// iOS
if (OS_IOS) {
    var btnLeftNav = Ti.UI.createButton({
        title : "Menu",
        toggle : false // Custom property for menu toggle
    });
    btnLeftNav.addEventListener('click', function(e) {

        Ti.App.fireEvent('menuhit', e);
    });
    $.win1.leftNavButton = btnLeftNav;

    var view = Ti.UI.createView({
        layout : 'horizontal'
    });
    var btnRightNav1 = Ti.UI.createButton({
        title : "Help",
    });
    btnRightNav1.addEventListener('click', function(e) {
        alert('no.1');
    });
    var btnRightNav2 = Ti.UI.createButton({
        title : "Menu",
    });
    btnRightNav2.addEventListener('click', function(e) {
        alert('no.2');
    });

    view.add(btnRightNav1);
    view.add(btnRightNav2);

    //$.win1.rightNavButton = view;
    $.win1.titleControl = view;

} else {
    // menu = Alloy.createController('Menu').getView();
    // $.win1.add(menu);

    var openmenu = false;
    var animateRight = Ti.UI.createAnimation({
        left : "80%",
        curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration : 150
    });

    var animateReset = Ti.UI.createAnimation({
        left : 0,
        curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration : 150
    });

    var animateLeft = Ti.UI.createAnimation({
        left : -250,
        curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration : 150
    });
    Ti.App.addEventListener('android_menuhit', function(e) {
        if (openmenu == true) {
            $.win1.animate(animateReset);
            openmenu = false;
        } else {
            $.win1.animate(animateRight);
            openmenu = true;
        }
    });
}

Ti.App.addEventListener('btnclicked', function(e) {
    alert(e.value);
});
