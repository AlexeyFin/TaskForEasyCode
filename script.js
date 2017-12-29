jQuery(document).ready(function() {
	
	var returnKey = JSON.parse(localStorage.getItem("totalList"));
	if (returnKey == null) {
		var list = [];
		var serialList = JSON.stringify(list);
		localStorage.setItem("totalList", serialList);

	}
	createTable(returnKey);
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
	
	var returnList = JSON.parse(localStorage.getItem("totalList"));
	returnList.push(obj);
	var serialList = JSON.stringify(returnList);
	localStorage.setItem("totalList", serialList);
	console.log(returnList.length);
	addToTable(returnList);
	$('#myForm').trigger('reset');

});

var createTable = function (list){

	var length = list.length;

	if (length != 0){
		for (i = 0; i < length; i++){
			var obj = list[i];
		$('<div class = "list-item">'+ 
			'<input type = "text" class = "person-name" id = "person-name" readonly value= "'+ obj.name +'">' +
			'<input type = "text" class = "person-email" id = "person-email" readonly value= "'+ obj.email +'">' + 
			'<input type = "text" class = "person-role" id = "person-role" readonly value= "'+ obj.role  + '">'+
			'</div>').appendTo('.list');
		}
	}
}

var addToTable = function(list){
	var length = list.length;
	var i = length - 1;
	var obj = list[i];
	$('<div class = "list-item">'+ 
			'<input type = "text" class = "person-name" id = "person-name" readonly value= "'+ obj.name +'">' +
			'<input type = "text" class = "person-email" id = "person-email" readonly value= "'+ obj.email +'">' + 
			'<input type = "text" class = "person-role" id = "person-role" readonly value= "'+ obj.role  + '">'+
			'</div>').appendTo('.list');



}

var test = $('#person-name');

$('.list').on('dblclick', 'input', function(event) {
	$('.person-name, .person-email, .person-role').removeAttr('readonly');
});
$('.list').on('blur', 'input', function(event) {
	$('.person-name, .person-email, .person-role').attr({readonly:'readonly'});
});


$('.list').find('.person-name').hide('slow');

	








