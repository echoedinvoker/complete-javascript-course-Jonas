import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
const stateClone = cloneDeep(state);

console.log(stateClone.user.loggedIn);
state.user.loggedIn = false;
console.log(stateClone.user.loggedIn);

console.log(state);

if (module.hot) {
  module.hot.accept();
}
