public with sharing class ContactsTableController {

    @AuraEnabled
    public static List<Contact> getContacts(Id id) {
        return [SELECT AccountId, FirstName, Account.Name, LastName, Phone, Email, Birthdate 
                FROM Contact where AccountId= :id];
    }
   
     @AuraEnabled
    public static Contact[] saveContacts(Contact[] contacts) {
        update contacts;
        return contacts;
    }
}