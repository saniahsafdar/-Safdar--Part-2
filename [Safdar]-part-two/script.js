var petname = prompt("What is your pet's name?")

let energy = 0;
let happiness = 0;
let runtime = 0;

for (let i = 0; i < 6; i++){
    let action = prompt("Type an activity");
    
    if (action == "walk"){

        if (energy === 0){
            alert("Not enough energy to complete action.")
        }

        else {
            prompt("Walked")

            happiness += 2;
            energy  -= 1;
            }

        }

    else if (action == "pet"){
        happiness += 1;
        }

    else if (action == "feed"){
        energy += 2;
    
    } else {
        prompt("Error, please type something else.")
    }
    
}

console.log(`${petname} has ${happiness} happiness, and ${energy} energy.`)


