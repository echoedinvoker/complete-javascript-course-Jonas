"strict mode";

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Go to movie 🍿",
  "Matilda"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

const checkExpense = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );
const finalBudget = checkExpense(newBudget3, spendingLimits);
// console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  // let output = "";
  // for (const entry of budget)
  //   if (entry.value <= -bigLimit) output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  return state
    .filter((entry) => entry.value <= -bigLimit)
    .reduce(
      (str, entry, index) =>
        `${str}${index > 0 ? " / " : ""}${entry.description.slice(-2)}`,
      ""
    );
  // .map((entry) => entry.description.slice(-2))
  // .join(" / ");
};

const bigExpensesIcon = logBigExpenses(finalBudget, 500);
console.log(bigExpensesIcon);
