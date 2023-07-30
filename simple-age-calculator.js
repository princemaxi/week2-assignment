let cur_year= parseInt(prompt("Enter Current Year:"));
let birth_year = parseInt(prompt("Enter Your Birth Year:"));

function ageCalculator() {
    return cur_year - birth_year;
}

console.log(ageCalculator());