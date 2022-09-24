![Alt imperative vs. declarative code ](pic/bandicam%202022-09-24%2023-49-56-302.jpg)

- Comparing the example code on both sides, you can find the super detailed process on the left (create an empty array, stop at the end of the array...) On the right side, it all disappears, leaving only the description of the result.

![Alt functional programming principles ](pic/bandicam%202022-09-24%2023-50-27-941.jpg)

- The declarative paradigm is actually a really big and popular programming paradigm, which has even given rise to a sub paradigm called **functional programming**.
- Usually in an application we have an object that is used to keep track of all the data that the application will use. We usually call this object **state**.
  - In functional programming, the state itself is never changed, it is only copied and mutate this copy.
    - The goal is to make our data flow more traceable and our code less buggy and easier to read.
    ***
- **React** and **Redux** are also based on this paradigm, so their states will never be changed ㄡ
- We are actually mixing imperative and declarative paradigms in writing code, because it is very difficult to achieve 100% declarative.
  - For example, sometimes we do need to log something to the console or change the state of the DOM to accomplish the result we want.
