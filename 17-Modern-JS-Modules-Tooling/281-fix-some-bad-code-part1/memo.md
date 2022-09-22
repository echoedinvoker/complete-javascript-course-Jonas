The focus of this lecture is on how to convert code into clean codes. About what the code itself is doing is less important here.

# **_Do not use "var"_**

![Alt replace var](pic/bandicam%202022-09-22%2013-24-42-975.jpg)

- A quicker way is to replace all var with const and then check for errors.
  - This is not recommended when the code is long in this file.

![Alt replace var with vim cmd](pic/bandicam%202022-09-22%2013-28-37-554.jpg)

- Above is the command that vim uses to replace all words.
  - Be sure to check all the highlighted areas to see if they will be replaced with the wrong parts before you enter.

![Alt fix error](pic/bandicam%202022-09-22%2013-30-51-740.jpg)

- After replace may report errors, this time is to correct one by one.

# **_Naming_**

![Alt change variable name](pic/bandicam%202022-09-22%2013-36-47-835.jpg)
![Alt change all variable name with vim cmd](pic/bandicam%202022-09-22%2013-37-32-706.jpg)
![Alt change function name](pic/bandicam%202022-09-22%2013-39-57-132.jpg)

- Function names are usually better in the form of verb + noun.

![Alt change all function name with vim cmd](pic/bandicam%202022-09-22%2013-40-44-454.jpg)

# **_Default value_**

![Alt set default value with instruction](pic/bandicam%202022-09-22%2013-42-48-108.jpg)
![Alt set default with native language feature](pic/bandicam%202022-09-22%2013-43-40-466.jpg)

# **_Ternary operator_**

![Alt found ugly blocks](pic/bandicam%202022-09-22%2013-45-29-539.jpg)

- Don't use blocks if you can.

![Alt replace ugly blocks with ternary operator](pic/bandicam%202022-09-22%2013-48-01-570.jpg)
![Alt re-write this line further](pic/bandicam%202022-09-22%2013-50-55-787.jpg)
![Alt need to check all highlight places when replace with vim cmd](pic/bandicam%202022-09-22%2013-53-20-436.jpg)
![Alt finishe replacing](pic/bandicam%202022-09-22%2013-58-46-414.jpg)

# **_Knowledge coalescing operator_**

![Alt knowledge coalescing operator](pic/bandicam%202022-09-22%2014-03-39-463.jpg)

- For related knowledge, please refer to the previous class notes.

# **_Enchanced object literal syntax_**

![Alt enchanced object literal syntax](pic/bandicam%202022-09-22%2014-06-29-389.jpg)
![Alt done](pic/bandicam%202022-09-22%2014-07-19-540.jpg)

# **_Naming issue again_**

![Alt uncomplete word of variable](pic/bandicam%202022-09-22%2014-11-23-234.jpg)

- No matter what the name of something, at least a complete word.

![Alt change all them with complete word at least](pic/bandicam%202022-09-22%2014-12-10-887.jpg)
![Alt fix the problem by mis-replace](pic/bandicam%202022-09-22%2014-13-36-341.jpg)

## **Only verb function name**

![Alt replace it by the same way](pic/bandicam%202022-09-22%2014-23-14-656.jpg)
![Alt function name only verb](pic/bandicam%202022-09-22%2014-25-14-095.jpg)

## **Last function and its variable**

![Alt naming issue again](pic/bandicam%202022-09-22%2014-46-16-513.jpg)
![Alt done](pic/bandicam%202022-09-22%2014-47-57-884.jpg)

# **_DRY_**

![Alt ](pic/bandicam%202022-09-22%2014-19-37-905.jpg)
![Alt found same ugly blocks](pic/bandicam%202022-09-22%2014-21-53-835.jpg)
![Alt change function name with verb plus noun](pic/bandicam%202022-09-22%2014-26-31-194.jpg)
![Alt not DRY](pic/bandicam%202022-09-22%2014-30-36-640.jpg)
![Alt write a function prepare to solve thie problem](pic/bandicam%202022-09-22%2014-32-21-406.jpg)

# **_Using Calling function as values_**

![Alt replace repeat part with function](pic/bandicam%202022-09-22%2014-33-58-961.jpg)
![Alt directly use calling function as value](pic/bandicam%202022-09-22%2014-37-56-802.jpg)

# **_Removing useless curly brackets_**

![Alt remove curly brackets](pic/bandicam%202022-09-22%2014-41-03-037.jpg)
![Alt done](pic/bandicam%202022-09-22%2014-42-08-412.jpg)
![Alt const problem](pic/bandicam%202022-09-22%2014-55-26-202.jpg)
![Alt ](pic/bandicam%202022-09-22%2014-55-40-722.jpg)
![Alt change to let, and use last function to test](pic/bandicam%202022-09-22%2014-58-09-546.jpg)

# **_Template Literal Syntax_**

![Alt string combining and useless curly brackets](pic/bandicam%202022-09-22%2014-59-58-090.jpg)
![Alt done](pic/bandicam%202022-09-22%2015-01-48-659.jpg)
