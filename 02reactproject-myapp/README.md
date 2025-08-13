npm create vite@latest >> Permissions
Select a Framework | Variant >>REACT || JS
Basic project setup will start
>except node_modules
>npm install  --->> nodemodules
npm run dev   >> localhost:5173



Folders:
node_modules  >> many folder ---many files >> npm packages
public       >> public images 
src   >> this is the place - write our code

File:
.gitignore   >> GIT >> GITIGNORE  >> STORING UR PROJECTS  >> VIDEO + AUDIO + HEAVY FILES
eslint.config.js   >> CONFIG
index.html         >> SOURCE FILE
package-lock.json
packgae.json
README.md      >> DETAILS 
vite.config.js   >> CONFIG

npm node pacakage maanger >>vite || babel || react || reactdom 

src   >> this is the place - write our code
ASSESTS >> IMAGES

App.css         >> styling
App.jsx         >> root file >> this file only loads in the file

index.css         >> styling

main.jsx        >> file to write code


index.html     >> src file


Root component >> App.jsx
App.jsx >> main.jsx >> index.html

Wrote some tags >>  render in browser

JSX :
javascript xml 
html tag
{}
Allows you to write HTML-like syntax in JavaScript.
Code Readability +Maintan

Function >> return >>imp
export import >> ES6 Feature of JS - default

ALso , >> Baic Template >> Get rid >> CSS remove + App >>exiting lines 

React Fragment :
<></>

React >> Component based

N no. of compoenents >> 3-4 features >> 3-4 components >> Application work 
Test file >> Component  >> Test Component
App.js >> App component
Calculate.jsx >> Calculate component >> function Calculate(){} export default Calculate  >>export component 
Show.jsx  >> Show Component >>function Show(){} export default Show

Component  created >> developer
Developer Folder >> Components/components 

// map method >> avoid for loops
// start || end >>

// for(let i=0;i<=5;i++){
//     console.log(i)
// }

// start >>0 ||1  end is unknown 
// Show >> 2 times | 5 times ||100 times

// Application >> logic shoudnt changed 

// array >> map method
let arr=[3,4,5,6]
for(let i=0;i<arr.length;i++){
    console.log(i,arr[i])
}
console.log("-----------")
// cbk >> element,index
arr.map((element,index)=>{
    console.log(element,index)    
})

const addarr=arr.map((element,index)=>{
   return element+index   
})
console.log(addarr)
console.log(arr)

// map >> array method >>repsents ()
// arr.map(()=>{})
// cbk >> element,index
// console inside
// outside o/p >> return >> new arr
// original doesnt change

<!-- map method >> remove repition -->


<!-- 

    const time=10
    const no=2
    Create a Simple Component >> Profile Compoenet 
    >> name  >> text
    >> age   >>no
    >> nickname >> test
    >> time comsumed to complete task =time*no
 -->

 <!-- 5 times use  
 
 <Profile/>
 <Profile/>
 
 
 -->

 const props={fname: 'shiva', age: '45', nickName: 'andy'}
console.log(props)
console.log(props.fname)
console.log(props.age)
console.log(props.nickName)
console.log("--------------")

// Destructing:
const {fname,age,nickName}=props
console.log(fname)
console.log(age)
console.log(nickName)
console.log("--------------")
const arr=["hello","world","welcome",66]
console.log(arr[0])
console.log(arr[1])
console.log(arr[3])
console.log("--------------")
const [str1,str2,str3,num1]=arr
console.log(str1)
console.log(str2)
console.log(num1)
















