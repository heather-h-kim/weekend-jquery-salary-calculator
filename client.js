$(document).ready(readyNow);

function readyNow(){
    $('#submit').on('click', storeData);
   
}

//an array of employees
let list = [];

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
   $('#fname').val('');
   $('#lname').val('');
   $('#id').val('');
   $('#title').val('');
   $('#annual-salary').val('');
   ontoTable();
   
}    

//display the data in the input field on the table
function ontoTable(){
    let firstName = list[list.length-1].firstName;
    let lastName = list[list.length-1].lastName;
    let id = list[list.length-1].id;
    let title = list[list.length-1].title;
    let annualSalary = list[list.length-1].annualSalary;
    $('tbody').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>${annualSalary}</td><td><button class="delete">Delete</td></tr>`);
    calMonthlyCost();
}

//calculate monthly cost and append it to DOM
function calMonthlyCost(){
    let total = 0;
    for(let i = 0; i < list.length ; i++){
        list[i].monthlyCost = list[i].annualSalary/12;
        total += list[i].monthlyCost;  
        totalMonthlyCost = total.toFixed(2);
    }
    if(totalMonthlyCost> 20000){
        $('#total').css('background-color', 'red');
    }
    $('#total').empty();
    $('#total').append(totalMonthlyCost);
    $('table').on('click', '.delete', deleteEmployee);
}

function deleteEmployee(){
    console.log($(this));
    $(this).parents('tr').remove();
    updateTotalMonthly();
}

function updateTotalMonthly(){
    
}


