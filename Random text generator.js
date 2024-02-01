const foodIdeas = ["Casa Colima", "McDonald's", "Mod Pizza", "Taco bell", "Sushi", "Chipotle", "Popeye's"]

function getRandom(max) {
    let random = Math.floor(Math.random() * foodIdeas.length);
    return foodIdeas[random];
  }


console.log(`Today you should go eat at ${getRandom(foodIdeas)}`)