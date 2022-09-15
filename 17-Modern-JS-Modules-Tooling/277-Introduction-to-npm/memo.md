## **Recall the memory about How to include 3rd libray**

![alt old way to include library](pic/bandicam%202022-09-15%2015-15-45-520.jpg)

- We use the script tag to include a third-party library, which then exports objects to the global scope so that our own scripts can use them, but this approach actually creates a lot of problems...
  - It doesn't make much sense having the HTML loading all of JavaScript, that is just really messy.
  - In this approach, many times we would actually download a library file to our computer directly, for example, a jQuery JavaScript file. - Whenever a new version would come out, we would have to manually go to the site, download the new version, change the file in our file system manually, and then include it again, maybe with some other name, with some other version number...
    - That was just a huge pain!
  - Before NPM, there simply wasn't a single repository that contained all the packages that we might need.

## **Start a project with NPM**

### _checking if NPM installed_

![alt check if npm exist](pic/bandicam%202022-09-15%2015-17-06-282.jpg)

### _init project by NPM_

![alt init project](pic/bandicam%202022-09-15%2015-20-35-297.jpg)

### _check package.json_

![alt 1st check of package.json](pic/bandicam%202022-09-15%2015-21-02-664.jpg)
Apparently, this file is configuration of the project.

## **Install & Check Leaflet's export way**

![alt install leaflet](pic/bandicam%202022-09-15%2015-25-40-981.jpg)

- We can use "i" for "install".
- Each time we install, package.json will record the libraries needed for the project and their versions
- But the true codes of library is store in the folder "node_modules".

![alt check leaflet export](pic/bandicam%202022-09-15%2015-30-19-574.jpg)

- We can go directly to the node_modules folder to see the contents of the library's js file and see which exported objects we can use.
- In the above picture, the JS file of Leaflet uses the "export" object, so it is using the CommonJS module system, and we must use the module bundler if we want to import Leaflet objects.

## **Find out special version of Lodash**

![alt find out normal version lodash](pic/bandicam%202022-09-15%2015-34-49-482.jpg)
![alt find out es version lodash](pic/bandicam%202022-09-15%2015-35-42-798.jpg)

- lodash-es use ES module system, so we can use it directly without module bundler.

## **Install & Check Lodash's export way**

![alt install lodash-es](pic/bandicam%202022-09-15%2015-38-48-412.jpg)
![alt check lodash-es export](pic/bandicam%202022-09-15%2015-39-25-675.jpg)

- Looking at the contents of the Lodash JS file, we can see that the familiar way of exporting objects is used, as this version uses the ES module system.

## **Clone nested object with Lodash's object - cloneDeep**

![alt find out cloneDeep object](pic/bandicam%202022-09-15%2015-47-20-152.jpg)
![alt use assing to copy nested object(old way)](pic/bandicam%202022-09-15%2015-59-57-412.jpg)

- We change the content of the source data, but the content of the clone variable also changes with it.
  - This means that the clone is not perfect, the deep part still points to the same object.

![alt use cloneDeep to copy nested object](pic/bandicam%202022-09-15%2016-02-35-101.jpg)

- Clone by Lodash is perfect.

## **Do not copy node_modules**

![alt delete node_modules](pic/bandicam%202022-09-15%2016-07-33-490.jpg)
![alt npm install without library name](pic/bandicam%202022-09-15%2016-08-43-556.jpg)

- "node_module" can be easily downloaded via "npm i" command, just make sure "package.json" exists.
  - So there is no need to copy "node_module" in any case.

## **Next lecture - Parcel**

![alt path of import from](pic/bandicam%202022-09-15%2016-04-33-742.jpg)
