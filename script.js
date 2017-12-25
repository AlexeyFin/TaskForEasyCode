jQuery(document).ready(function() {
	var returnObj = JSON.parse(localStorage.getItem("myKey"));
	if (returnObj == null){
		var obj = 1;
		var serialObj = JSON.stringify(obj);
		localStorage.setItem("personKey", serialObj);
		
	}
});


class Person {
	constructor(name, email){
		this.name = name;
		this.email = email;
	}
}

class Admin extends Person {

	constructor(name,email,role){
		super(name, email);
		this.role = "Admin" ;
	}

}

class User extends Person {

	constructor(name,email,role){
		super(name, email);
		this.role = "User" ;
	}

}

class Guest extends Person {

	constructor(name,email,role){
		super(name, email);
		this.role = "Guest" ;
	}

}

function newAdmin (name, email){

	const object =new Admin (name, email);
	return object;

		
}
function newUser (name, email){

	const object =new User (name, email);
	return object;
		
}
function newGuest (name, email){

	const object =new Guest (name, email);
	return object;
		
}


$('#submit').click(function createPerson(event) {
	event.preventDefault();
	var personName = $('#name').val();
	var personEmail = $('#email').val();
	
	console.log(personName);
	console.log(personEmail);


	if($('#role').val()== "Admin"){

		var obj = newAdmin(personName, personEmail);

	} 
	else if($('#role').val()== "User"){

		var obj = newUser(personName, personEmail);

	} else if($('#role').val()== "Guest"){

		var obj = newGuest(personName, personEmail);

	}
	var key = JSON.parse(localStorage.getItem("personKey"));

	var serialObj = JSON.stringify(obj);
	localStorage.setItem(key, serialObj);
	key++;
	var serialKey = JSON.stringify(key);
	localStorage.setItem("personKey",key);


	
	$('#myForm').trigger('reset');

});




















// var adminName = $('#name').val();
	// var adminEmail = $('#email').val();
	// const objName = new Admin( adminName, adminEmail);
	// console.log(objName);

	// var serialObj = JSON.stringify(objName);
	// localStorage.setItem("myKey", serialObj);
