# 274. The Module Pattern

## Module pattern before ES6

> module is a JavaScript feature introduced in ES6, but in fact the concept of module existed before ES6, but was implemented in a different way.

### _IIFE_

![Alt IIFE](pic/bandicam%202022-09-14%2009-18-05-777.jpg)

- The point of module is to encapsulate and then expose only the part that you want to reveal to the outside using the public API, the tool that best fits this idea is function.

  - But we don't need to use the function repeatedly, so we package the function so that it becomes IIFE.

![Alt encapsulate code in IIFE](pic/bandicam%202022-09-14%2009-23-11-393.jpg)

- The internal code of this function is now encapsulated and will be executed once when loaded.

![Alt add return in IIFE](pic/bandicam%202022-09-14%2009-24-20-295.jpg)

- We use return to write in any variables that the function wants to expose to the outside, which is the concept of the public API.

![Alt use public API of IIFE](pic/bandicam%202022-09-14%2009-27-07-538.jpg)

## Still not expose to global scope

![Alt try to use public API in console](pic/bandicam%202022-09-14%2009-27-53-449.jpg)

- As above, we can find that we still can't use ShoppingCart in the console, because what is expose from the function is still limited to the module's own scope, not to the global scope, which must be clearly distinguished.

## Closure

![Alt closure of IIFE 1](pic/bandicam%202022-09-14%2009-30-57-112.jpg)

- Theoretically, the function is removed from memory after execution and has no ability to save the variables, but we can obviously access them anyway because of the effect of the closure.

### _Further proof of the existence of Closure_

![Alt closure of IIFE 2](pic/bandicam%202022-09-14%2009-33-14-780.jpg)

## Why introduce Module feature in ES6?

- Although it is possible to implement the module concept in the above way, many problems arise.
  - For each script file to be inserted into the html individually.
  - In html, the order in which script files are introduced is important.
  - No way to use the module bundler feature.
