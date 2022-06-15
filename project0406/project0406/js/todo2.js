const h1DOM= document.createElement("h1")
h1DOM.title='Hello'
h1DOM.className='heading'
h1DOM.innerText='Hello guys!'
document.body.appendChild(h1DOM)
// DOM
const div=document.createElement("div")
const h2=document.createElement("h2")
const p=document.createElement("p")
h2.title='TechMaster'
h2.innerText='Hoc ReactJS'
p.innerText='Hoc ReactJS de'
document.div.appendChild(h2)
document.div.appendChild(p)
// React
const div2=React.createElement("div",null,
React.createElement('h2',{
  title:'TechMaster'
},
'Hoc ReactJS'
),
React.createElement('p',null,
'Hoc ReactJS de'
))
console.log(div2)
