/**
 * As a User need to enter a valid First Name
    - First name starts with Cap and has minimum 3 characters
 * 
 * @author : SAYANI KOLEY
 * @since : 27.07.2021
 */

/**
 * Update the salary value when scrolled from left to right and vice-versa
 */

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

/**
 * To validate the name field using the REGEX expression
 */

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});


