const PAO_DE_QUEIJO = 'pao de queijo';
const BANANA_PANCAKE = 'banana pancake';
const CARROT_CAKE_W_BRIGADEIRO = 'carrot cake';

class PaoDeQueijo {
  constructor() {
    this.units = 10;
  }

  eat() {
    do {
      console.log(`NHOM NHOM NHOM! Still ${--this.units} left!`)
    } while (this.units > 1)

    console.log("Oh no, my last one! Good bye delicious thing... NHOM NHOM NHOM!")
  }
}

class BananaPancake {
  constructor() {
    this.slices = 6;
  }

  eat() {
    do {
      console.log(`NHOM NHOM NHOM! Still ${--this.slices} slices left!`)
    } while (this.slices > 1)

    console.log("Oh no, my last one! Good bye delicious thing... NHOM NHOM NHOM!")
  }
}

class CarrotCakeWithBrigadeiro {
  constructor() {
    this.bites = 4;
  }

  eat() {
    do {
      console.log(`NHOM NHOM NHOM! Still ${--this.bites} bites left!`)
    } while (this.bites > 1)

    console.log("Oh no, my last one! Good bye delicious thing... NHOM NHOM NHOM!")
  }
}

const getMeA = (snack) => {
  switch (snack) {
    case PAO_DE_QUEIJO:
      console.log('Here is your extra sized pão de queijo, warm and fluffy!');
      (new PaoDeQueijo()).eat();
      break;
    case BANANA_PANCAKE:
      console.log('Who asked for a smooshy wooshy banana pancake?');
      (new BananaPancake()).eat();
      break;
    case CARROT_CAKE_W_BRIGADEIRO:
      console.log('The best piece of carrot cake with brigadeiro for the best customer (shhh, do not let the others know I prefer you!)');
      (new CarrotCakeWithBrigadeiro()).eat();
      break;
    default:
      console.log('I am so sorry, we do not have this snack yet! But, can I have the recipe?');
  }
};

const getRandomIntInclusive = (min, max) => {
  m = Math.ceil(min);
  M = Math.floor(max);
  return Math.floor(Math.random() * (M - m + 1) + m);
};

const menu = [PAO_DE_QUEIJO, BANANA_PANCAKE, CARROT_CAKE_W_BRIGADEIRO];
const code = getRandomIntInclusive(0, menu.length - 1)
const pick = menu[code]
console.log(`Could you get me a... ${pick} please?`)
getMeA(pick);