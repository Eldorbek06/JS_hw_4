// 1

let president = prompt('What is your name?').toLowerCase().trim()

if (president === 'putin' || president === 'biden' || president === 'shavkat' || president === 'zelenskiy') {
    console.log(`Welcome Mr/Mrs/Miss ${president[0].toUpperCase() + president.slice(1)}`)
    alert(`Welcome Mr/Mrs/Miss ${president[0].toUpperCase() + president.slice(1)}`)
} else {
    console.log(`Sorry Mr/Mrs/Miss ${president[0].toUpperCase() + president.slice(1)}, you are not invited.`)
    alert(`Sorry Mr/Mrs/Miss ${president[0].toUpperCase() + president.slice(1)}, you are not invited.`)
}


// 2

let name = prompt('What is your name?').toLowerCase().trim()
let age = prompt('How old are you?').trim()

if(name.length % 2 === 0 && age >= 18){
    console.log(`Welcome! ${age} years old ${name[0].toUpperCase() + name.slice(1)}`)
    alert(`Welcome! ${age} years old ${name[0].toUpperCase() + name.slice(1)}`)
} else {
    console.log(`Sorry Mr/Mrs/Miss ${name[0].toUpperCase() + name.slice(1)}, you are not allowed :(`)
    alert(`Sorry Mr/Mrs/Miss ${name[0].toUpperCase() + name.slice(1)}, you are not allowed :(`)
}
