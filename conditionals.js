// There are 3 main ways to create conditionals in code:
// 1. if (comes in many flavors)
// 2. switch (great for many different conditions)
// 3. ternary (short hand for / else)

// let's start with most basics if statements:  

const age = 19;

// Let's start with the most basic if statement:

if (age >= 18) {
    console.log("welcome. come on in!")

}
// what about people that aren't yet 18?
// let's use an if...else

if (age >= 21 )
{console.log("drink up")}
else{console.log("here is some water")}



// what if we have more than 2 possibilities
// Then we can use an elseif

const hour = 9;

if (hour <11) 
{
    console.log("Good morning.")
} 
else if (hour <17) {
    console.log("good afternoon")
}
else if (hour < 22) {
    console.log("good eveing.") 
    }
// When dealing with MANY differnt conditions, We often use a switch

const yourPet = "Cat"

switch(yourPet) { 
    case "dog":
        console.log("woof woof")
        break
    case "cat":
        console.log("meow meow")
        break
    case "bird":
        console.log("tweet tweet")
        break
case "fox":
        console.log("what's the fox say?")
    case "Cat":
        console.log('meow meof')
        break
    case 'bird'
    console.log("tweet tweet")
    break 
    case "fox":
        console.log("what's the fox say?")
        break
    case "racoon":
case "lizard":
case "snake":
    console.log("crazy pet")
    break
    case "ferret":
    case "owl":
    default:
        console.log("Never heard of that")
    
        
}



