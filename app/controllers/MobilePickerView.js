var arguments = arguments[0] || {};
var slide_out = '';
var picker_data = [];
var selected_row = 0;
var State = require ('/State');
if (OS_IOS) {
    slide_out = Titanium.UI.createAnimation({bottom:-255});
    for (var i=0; i<arguments.length; i++) {
        picker_data.push(Titanium.UI.createPickerRow({id:i,title:arguments[i].getName()}));
    }
    
    $.picker.add(picker_data);
    
    $.btnClose.addEventListener('click',function (e) {
        $.viewPicker.animate(slide_out);
        selected_row = $.picker.getSelectedRow(0).id;
        $.viewPicker.fireEvent('pickerClosed',{selectedRow:selected_row});
    });
} else {
    slide_out = Titanium.UI.createAnimation({bottom:-300});
    for (var i=0; i<arguments.length; i++) {
        var a = "white";
        if (arguments[i].getIsSelected())
            a="black";
        var args = {
            title : arguments[i].getName(),
            backgroundColor :a,
            image : '',
            idRow : i,
            customView : 'view' + i
        };
        var row = Alloy.createController('menurow', args).getView();
        picker_data.push(row);
    }

    $.tblPicker.setData(picker_data);
        
    $.btnClose.addEventListener('click',function (e) {
        $.viewPicker.animate(slide_out);
        Ti.API.info(selected_row);
        $.viewPicker.fireEvent('pickerClosed',{selectedRow:selected_row});
    });
    
    $.tblPicker.addEventListener('click',selectRow);
    
    function selectRow (_event) {
       // arguments[_event.index].setIsSelected(true);
        selected_row = _event.index;
        
        
    }
}




