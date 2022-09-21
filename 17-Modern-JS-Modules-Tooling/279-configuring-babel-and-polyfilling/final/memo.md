# **_Components fo Babel_**

- Babel is composed of a **plugin** and a **preset**, both of which can be used together.
- Parcel itself is by default compiled using Babel.

![Alt babel page plugin list](pic/bandicam%202022-09-21%2001-28-15-896.jpg)

- We can install only the plugin, so that Babel will only compile the parts we have installed, and then just bundle the rest without compiling.
  - However, it is not usually recommended to do so.

![Alt babel page presets](pic/bandicam%202022-09-21%2001-29-45-769.jpg)

- presets are just a bunch of plugins.
- The Parcel default is to interpret directly using **@Babel/preset-env**, and usually only syntax that is less than 0.25% is not interpreted to.

- ![Alt adjust to older version](pic/bandicam%202022-09-21%2001-42-53-761.jpg)
- Parcel and Babel will keep changing with the version number, so the way the **course is taught is probably no longer available**.
- You should learn to check out the documentation on the official package website, this section is more like using a **recipe**.
- Another way to make sure there are no errors is to **install the exact same version** of the software as in the course when you create a new project.

# **_Compare src and dist_**

## **Syntax**

![Alt const, template literal](pic/bandicam%202022-09-21%2002-01-25-297.jpg)
![Alt var, concat](pic/bandicam%202022-09-21%2002-02-50-886.jpg)
![Alt class](pic/bandicam%202022-09-21%2002-05-57-655.jpg)
![Alt class in dist js](pic/bandicam%202022-09-21%2002-07-01-225.jpg)
![Alt null](pic/bandicam%202022-09-21%2002-08-21-028.jpg)
![Alt null in dist js](pic/bandicam%202022-09-21%2002-08-44-165.jpg)
![Alt find & arrow func](pic/bandicam%202022-09-21%2002-09-33-195.jpg)
![Alt find & arrow fun in dist js](pic/bandicam%202022-09-21%2002-10-00-276.jpg)

- The syntax above is the new **ES6 syntax**, which will be automatically translated back to **ES5 syntax** in distribution JS.

## **Feature**

![Alt promise](pic/bandicam%202022-09-21%2002-11-19-988.jpg)
![Alt promise in dist js](pic/bandicam%202022-09-21%2002-12-05-379.jpg)
![Alt page promise work](pic/bandicam%202022-09-21%2002-13-03-554.jpg)
![Alt find in dist js](pic/bandicam%202022-09-21%2002-15-13-908.jpg)
![Alt page find work properly](pic/bandicam%202022-09-21%2002-16-14-198.jpg)

- As you can see above, the promise and array method remain intact and have not been converted to ES5 syntax.
  - Because these two parts are new **Feature** after ES6, feature means **new content**, ES5 simply does not exist these things.
  - Our test page did not show any errors because ES6 is supported, but if it is on an older system, there may be errors.

# **_Pollyfill_**

![Alt core-js/stable](pic/bandicam%202022-09-21%2002-18-53-021.jpg)
![Alt find, promise still no change](pic/bandicam%202022-09-21%2002-22-17-540.jpg)
![Alt pollyfill all array ES6 methods](pic/bandicam%202022-09-21%2002-24-20-908.jpg)
![Alt re-define promise](pic/bandicam%202022-09-21%2002-25-37-045.jpg)

- **Pollyfill** means **re-define ES6 features** in the distribution's JS.
- Some packpages such as **core-js** above come after using the ES5 syntax to define various ES6 features in the module of package.

![Alt specific import core-js](pic/bandicam%202022-09-21%2002-28-25-301.jpg)
![Alt regenerator-runtime](pic/bandicam%202022-09-21%2002-30-57-438.jpg)

- **asynchronous** is also an ES6 feature, compared to core-js, it is currently more recommended to use **regenerator-runtime** this package to pollyfill asynchoronous feature.
