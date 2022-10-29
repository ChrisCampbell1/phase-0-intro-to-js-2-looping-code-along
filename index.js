/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);*/

/*const names = ["Chris" , "Adam" , "Joey"]

const event = "Birthday"

function writeCards(names, event){
    let cards = []
    for (let i = 0; i < names.legnth; i++){
        cards.unshift (`Thank you ${names[i]}, for the fabulous ${event} gift!`)
       
    console.log(cards)}
    return cards
}

writeCards(names, event)*/

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise"

function writeCards(names, event) {
    let cards = []
  for (let i = 0; i < names.length; i++) {
    cards[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
console.log(cards)
  return cards;
}

writeCards(names);

function countDown(i){
    while (i >= 0){
        console.log(i--)
    }
}