({
    getContacts : function(component) {
        var action = component.get("c.getContacts");
        component.set("v.accountid",component.get("v.recordId"));
        action.setParams({"id":component.get("v.recordId")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        
        $A.enqueueAction(action);
    },
    
    saveContacts : function(component) {

        var allValid = component.find('inputField').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (allValid) {
            var action = component.get("c.saveContacts");
            action.setParams({"contacts":component.get("v.contacts")});
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    this.getContacts(component);
                    this.fireToastEvent("Успех!","Сохранено!","success");
                    console.log(response.getReturnValue());
                }
                else {
                    console.log("Failed with state: " + state);
                }
            });
            
            $A.enqueueAction(action);
        } else {
            this.getContacts(component);
            this.fireToastEvent("Ошибка!","Неправильно заполнены поля!","error");
        }
           
    },
    
    fireToastEvent : function(title, message, type) {
        var toastEvent = $A.get("e.force:showToast");
        console.log("opovewenie");
        toastEvent.setParams({
            title: title,
            message: message,
            type: type
        });
        toastEvent.fire();
    },
    
    getAccount : function(component) {
        var action = component.get("c.getAccount");
        action.setParams({"contacts":component.get("v.contacts")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.selectedLookUpRecord", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        
        $A.enqueueAction(action);
        
    },
})