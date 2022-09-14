class Account {

	constructor(id, name, surname) {
		this.id = id;
		this.name = name;
		this.surname = surname;
	}

}
class Accounts {
	
	constructor() {
      this.accounts = new Map()
	  this.accounts.set("acadoni", new Account("acadoni", "Andrea", "Cadoni"))
	  this.accounts.set("ecaushllari", new Account("ecaushllari", "Eneriko", "Caushllari"))
      this.accounts.set("nbozzi", new Account("nbozzi", "Nicola", "Bozzi"))
	}

	registerNewUser(id, name, surname){
		console.log("Registering new user: " + id)
		if (!this.isUserAlreadyRegistered(id)){
			console.log("GOOD: not present")
			this.accounts.set(id, new Account(id, name, surname))
		} else {
			console.log("BAD: user already here")
			throw 'Duplicate id'
		}
	}

	isUserAlreadyRegistered(id){
		return this.accounts.get(id) != undefined
	}

	getAccountById(id){
		return this.accounts.get(id)
	}

	getAllAccountsId(){
		return Array.from(this.accounts.keys())
	}
}

let accounts = new Accounts()

exports.getAccountModel = function () {
	return accounts;
};