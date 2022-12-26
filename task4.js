// document.getElementsByTagName('li')[4].style.color = "red"
// // using query selector

// document.querySelector('.list-group-item:nthchild(2)').style.background = 'green'
// document.querySelector('.list-group-item:nthchild(3)').style.display = 'none'
var odditems = document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odditems.length;i++){
    odditems[i].style.background = 'green'
}