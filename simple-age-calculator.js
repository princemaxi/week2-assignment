
let cur_year= parseInt(prompt("Enter Current Year:"));
let birth_year = parseInt(prompt("Enter Your Birth Year:"));

function ageCalculator() {

let my_output =  cur_year - birth_year;
    
    return my_output;
}

console.log(ageCalculator());