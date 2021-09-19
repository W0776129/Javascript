/*
	WEB 303
	Starting file for Assignment 1 
	Nikhil Patel


*/

$(document).ready(function(){
  $("#salary").keyup(function(){
    calculateSpend();
  });
  $("#percent").keyup(function(){
    calculateSpend();
  });
  
});


function calculateSpend(){
	let salary = $("#salary").val();
	let percent = $("#percent").val();
	let spend = (salary * percent) / 100 ;
	let print = spend.toFixed(2); 
	$("#spend").text('$'+print);
}