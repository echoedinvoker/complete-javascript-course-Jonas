# **_Freeze Global Data_**

![Alt original data ](pic/bandicam%202022-09-25%2014-25-52-955.jpg)

- This is data in the global scope, which we don't want to be manipulated in declarative programming.

![Alt Object.freeze ](pic/bandicam%202022-09-25%2014-27-09-778.jpg)

- We use the method Object.freeze to ensure that the data is not manipulated.
- Object.freeze can also be used directly on array, since array is also an object.
- In technical terminology, we implement **imutable** data.

## **Exception happen**

![Alt push invoke error ](pic/bandicam%202022-09-25%2014-27-27-858.jpg)

- You can find an exception after using Object.freeze.

![Alt where is push ](pic/bandicam%202022-09-25%2014-28-53-524.jpg)

- This is because the following function addExpenses uses the push method to change the global data, which conflicts with Object.freeze and therefore generates an exception.

![Alt comment calling function which has push ](pic/bandicam%202022-09-25%2014-29-25-692.jpg)

- For now, we'll comment out the part that calls addExpenses to avoid exceptions.

## **Object.freeze features**

![Alt not deep freeze ](pic/bandicam%202022-09-25%2014-31-43-207.jpg)

- In fact, Object.freeze can only guarantee that the data at the root level of the object is not changed, but deeper data is not protected, so it is only shallow freeze.
  - We can use a third-party package to achieve deep freeze, but it is not in the scope of this lecture.

![Alt normally add new property don't invoke error ](pic/bandicam%202022-09-25%2014-33-57-378.jpg)

- Normally, if we add the property of an object by ourselves, although the result is that it cannot be added, no exception will be generated.
  - So only when the push method is used, an exception is generated.

# **_Function: getLimit_**

![Alt original getLimit func ](pic/bandicam%202022-09-25%2014-35-16-326.jpg)

![Alt pass all data into func ](pic/bandicam%202022-09-25%2014-36-52-552.jpg)

- In functional programming, instead of calling external data directly in the function, we first pass all the required data into the function first.
- Although there are more than three parameters in addExpense, these specifications do not need to be completely met.

![Alt correct all calling getLimit part ](pic/bandicam%202022-09-25%2014-37-29-981.jpg)

![Alt correct calling getLimit part 2 ](pic/bandicam%202022-09-25%2014-40-38-024.jpg)

- Because of the additional parameter state, the following section calling getLimit also needs some modification

# **_Function: addExpense_**

![Alt original addExpense func ](pic/bandicam%202022-09-25%2014-41-54-476.jpg)

![Alt pass data into func ](pic/bandicam%202022-09-25%2014-45-14-144.jpg)

- As with getLimit, we first pass the required external data into the function addExpense.

![Alt mutant value in addExpense ](pic/bandicam%202022-09-25%2014-46-18-711.jpg)

- Not only for external data, but even data inside the function is not expected to be mutant.

![Alt return to new variable ](pic/bandicam%202022-09-25%2014-48-23-869.jpg)

- So we return the new value to a new variable instead of the original variable.

![Alt push method mutant data ](pic/bandicam%202022-09-25%2014-49-49-777.jpg)

- The push method is typically an imperative method, and we would like to replace it with another declarative way.

![Alt re-write push with return + ternary ](pic/bandicam%202022-09-25%2015-02-50-436.jpg)

![Alt add false return ](pic/bandicam%202022-09-25%2015-09-38-984.jpg)

- We can find that each time we use addExpense, a new variable is generated and then passed to the next addExpense, and so on and so forth to get the final result, which is basically a **function chain**.
  - We will use **composing** to create a function, which can execute all the processes in the function chain above in one go.
    - But that would really be outside the scope of this course, because that is a whole big world on itself.

# **_Function: checkExpense_**

![Alt original checkExpense func ](pic/bandicam%202022-09-25%2015-12-45-064.jpg)

![Alt re-write checkExpense ](pic/bandicam%202022-09-25%2015-23-21-449.jpg)

![Alt re-write checkExpense with arrow func ](pic/bandicam%202022-09-25%2015-25-51-914.jpg)

![Alt original logBigExpenses fun ](pic/bandicam%202022-09-25%2015-27-53-278.jpg)

![Alt re-write logBigExpense with return, filter ](pic/bandicam%202022-09-25%2015-33-25-058.jpg)

![Alt continous data process with map, join ](pic/bandicam%202022-09-25%2015-35-09-189.jpg)

![Alt replace map, join with reduce ](pic/bandicam%202022-09-25%2015-40-55-040.jpg)
