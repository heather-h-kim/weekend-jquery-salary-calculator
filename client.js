$(document).ready(readyNow);

function readyNow(){
    $('#submit').on('click', storeData);
    
}

//an array of employees
let list = [];

// //declare global variables as they would be reused in multiple functions
// let firstName = 0;
// let lastName = 0;
// let id = 0;
// let title = 0;
// let annualSalary = 0;

//get the data from the input fields, create objects, and push the objects to the array
function storeData(){
   let firstName = $('#fname').val();
   let lastName = $('#lname').val();
   let id = $('#id').val();
   let title = $('#title').val();
   let annualSalary = $('#annual-salary').val();
   employee = {
       firstName: firstName,
       lastName: lastName,
       id: id,
       title: title,
       annualSalary: annualSalary
   }
   list.push(employee); 
   intoTable();
   
}    

function intoTable(){
    let firstName = list[list.length-1].firstName;
    let lastName = list[list.length-1].lastName;
    let id = list[list.length-1].id;
    let title = list[list.length-1].title;
    let annualSalary = list[list.length-1].annualSalary;
    $('#tbody').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>${annualSalary}</td><td></td></tr>`);
    calMonthlyCost();
}

function calMonthlyCost(){
    console.log('hello');
    for(let i = 0; i < list.length-1 ; i++){
        console.log('annual salary is', );
        
        
        // let total = 0;
        
        // list[i].monthlyCost = list[i].annualSalary/12;
        // total += list[i].monthlyCost;
        // console.log(list[i].monthlyCost);
        // console.log(total);
        
    }
    
    
}

