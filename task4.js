// document.getElementsByTagName('li')[4].style.color = "red"
// // using query selector

// document.querySelector('.list-group-item:nthchild(2)').style.background = 'green'
// document.querySelector('.list-group-item:nthchild(3)').style.display = 'none'
// var odditems = document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odditems.length;i++){
//     odditems[i].style.background = 'green'
// }
var elements = document.querySelector('#items')
console.log(document.querySelector('#items').parentElement)
console.log(document.querySelector('#items').lastElementChild)
console.log(document.querySelector('#items').lastChild)
console.log(document.querySelector('#items').firstElementChild)
console.log(document.querySelector('#items').firstChild)
console.log(document.querySelector('.title').nextSibling)
console.log(document.querySelector('.title').nextElementSibling)
console.log(document.querySelectorAll('.list-group-item')[2].previousElementSibling)
console.log(document.querySelectorAll('.list-group-item')[2].previousSibling)
var newitem = document.createElement('div')
newitem.setAttribute('title','new')
var txt = document.createTextNode("new item")
newitem.appendChild(txt)
elements.appendChild(newitem)
// hello word before item lister
var head = document.querySelector('#main-header')
var hellotext = document.createTextNode("Hello")
var hellotext2 = document.createTextNode("Hello")
head.prepend(hellotext)
elements.prepend(hellotext2)