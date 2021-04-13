// export default function plant() {
// }

// hydrate(), feed(), giveLight()

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// }

let plant = { soil: 0, light: 0, water: 0 };
// hydrate(plant);
// feed(plant);
// giveLight(plant);

const changeState = (state, prop, value) => ({
    ...state,
    [prop]: (state[prop] || 0) + value
  })

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}


const feed = changeState("soil")
const hydrate = changeState("water")
const giveLight = changeState("light")

feed(5)(plant)

const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

blueFood(plant)
let tamagotchi = {}
const newStateTamagotchi = changeState("food")(5)(tamagotchi)

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const fedPlant = stateControl(blueFood);
const plantFedAgain = stateControl(greenFood);


// const changeState3 = (state) => {
//   return (prop) => {
//     return (value) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value
//     })
//   }
// }

// let tamagotchi = {}
// const changeTamagotchi = changeState3(tamagotchi)
// const feedTamagotchi = changeState3(tamagotchi)("food")

// changeTamagotchi("food")(5)
// feedTamagotchi(5)

// const createTamagotchi = changeState3({})
// const tamagotchiBob = createTamagotchi("food")(5)
// const tamagotchiJill = createTamagotchi("sleep")(5)
// const createPetRocks = changeState3({})