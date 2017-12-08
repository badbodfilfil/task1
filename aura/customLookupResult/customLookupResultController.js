({
    selectRecord : function(component, event, helper){   
        var getSelectRecord = component.get("v.oRecord");
        component.set("v.contact.Account" , getSelectRecord);
        component.set("v.contact.AccountId" , component.get("v.contact.Account.Id"));
        component.set("v.contact.Account.Name" , component.get("v.oRecord.Name"));
        console.log(component.get("v.contact.Account.Name")+"account name selectrec");
        component.set("v.selectedRecord" , getSelectRecord);
        var contact = component.get("v.contact");
        var compEvent = component.getEvent("oSelectedRecordEvent");
        compEvent.setParams({"recordByEvent" : getSelectRecord });
        compEvent.setParams({"contact" : contact });
        compEvent.fire();
    },
})