//Scipt.js Logan Infranca 12/11/2020

//Global Variables
var Name;
var Age;
var Email;
var Address;
var Phone;
var q1
var q2;
var q3;
var q4;
var q5;
var q6;
var q7;
var q8;
var q9;
var q10;

//Function onclick of summit button
function tabulateAnswers() {
	
	//Gather Input data and store it in varibles then log it in the console for devolper to know if data is inputting correctly
	Name = document.getElementById("name").value;
		console.log(Name);
	Age = document.getElementById("age").value;
		console.log(Age);
	Email = document.getElementById("email").value;
		console.log(Email);
	Address = document.getElementById("address").value;
		console.log(Address);
	Phone = document.getElementById("phone").value;
		console.log(Phone);
	q1 = document.getElementById("q1").value;
		console.log(q1);
	q2 = document.getElementById("q2").value;
		console.log(q2);
	q3 = document.getElementById("q3").value;
		console.log(q3);
	q4 = document.getElementById("q4").value;
		console.log(q4);
	q5 = document.getElementById("q5").value;
		console.log(q5); 
	q6 = document.getElementById('q6').value;
		console.log(q6);
	q7 = document.getElementById('q7').value;
		console.log(q7); 
	q8 = document.getElementById('q8').value;
		console.log(q8);
	q9 = document.getElementById('q9').value;
		console.log(q9);
	q10 = document.getElementById('q10').value;
		console.log(q10);
	 
	 //create Object from gathered input data and ouput result of object in console for devoloers
	var Ob = new Object;
		Ob.name = Name;
		Ob.age = Age;
		Ob.email = Email;
		Ob.address = Address;
		Ob.Question1 = q1;
		Ob.Question2 = q2;
		Ob.Question3 = q4;
		Ob.Question4 = q5;
		Ob.Question5 = q6;
		Ob.Question6 = q6;
		Ob.Question7 = q7;
		Ob.Question8 = q8;
		Ob.Question9 = q9;
		Ob.Question10 = q10;
		console.log(Ob);
		
	//Put object in the array and ouput in console for devlopers to see
	var a = new Array();
	a[0]=Ob;
	console.log(a);
  
}