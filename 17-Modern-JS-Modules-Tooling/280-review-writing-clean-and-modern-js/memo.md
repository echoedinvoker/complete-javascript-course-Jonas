![Alt readable code](pic/bandicam%202022-09-22%2003-38-24-536.jpg)

- The more straightforward the name taken, the better.
  - The purpose is to make it really clear and obvious.

![Alt general](pic/bandicam%202022-09-22%2003-38-28-341.jpg)

- You can choose to use function, class or module to encapsulate the code.

![Alt functions](pic/bandicam%202022-09-22%2003-38-32-475.jpg)

- These rules can be broken if there is a real need.
- The second point is the result of the first point, the core concept is the first point, the second point sometimes because the demand can not follow also does not matter.
- Use the arrow function where you think it will make the code more readable.
  - A common example is the callback function. If we write it using the arrow function, it will obviously improve the readability of the code

![Alt OOP](pic/bandicam%202022-09-22%2003-38-45-732.jpg)

- Do not use the arrow function when creating the method of object, so that **"this"** can access the object itself properly.
  - Even if this method does not even use **"this"** it is recommended to follow this rule, to develop good habits in the future will not be easy to make mistakes.
- If there is a need to manipulate data inside the object from outside, write a **public API** for external use, which is the **only** way to allow external manipulation of data inside ojbect.

![Alt avoid nested code](pic/bandicam%202022-09-22%2003-39-02-627.jpg)

- The last point refers to "then", "catch", "finally" these promise methods.

![Alt asynchronous code](pic/bandicam%202022-09-22%2003-39-07-531.jpg)

- The last point is that it is better to always have the promise error and rejection handled.
