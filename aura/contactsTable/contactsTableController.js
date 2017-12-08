({
   doInit: function(component, event, helper) {
    	helper.getContacts(component);
       },
    
    clickSave: function(component, event, helper){
        helper.saveContacts(component);
        component.set("v.onEdit", false);
    },
    
    clickEdit: function(component, event, helper){
        component.set("v.onEdit", true);
        helper.getAccount(component);
    },
    
    clickCancel: function(component, event, helper){
    	helper.getContacts(component);
        component.set("v.onEdit", false);
    },
})