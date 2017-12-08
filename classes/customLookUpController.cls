public class customLookUpController {
	@AuraEnabled
	public static List <Account> fetchLookUpValues(String searchKeyWord) {
		String searchKey = searchKeyWord + '%';
		return Database.query('SELECT id, Name FROM Account WHERE Name LIKE: searchKey ORDER BY createdDate DESC');
	}
}