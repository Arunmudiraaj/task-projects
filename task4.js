var button = document.querySelector('#submit')
var input = document.querySelector('#item')
var items = document.querySelector('#items')
var description = document.querySelector('#description')
var filter = document.querySelector('#filter')
filter.addEventListener('keyup',filterevent)
button.addEventListener('click', btnclick)
items.addEventListener('click',itemsclick)
// var del = document.querySelector('.delete')
// del.addEventListener('click',delclick)

function btnclick(e){
    // items.innerHTML = ''+items.innerHTML+'<li class="list-group-item">'+input.value +'<button class="btn btn-danger btn-sm float-right delete">X</button></li>'
    var newtxt = document.createTextNode(input.value)
    var newdes = document.createTextNode(' '+description.value)
    var newele = document.createElement('li')
    newele.setAttribute('class','list-group-item')
    newele.appendChild(newtxt)
    newele.appendChild(document.createElement('br'))
    newele.appendChild(newdes)
    var newbtn = document.createElement('button')
    newbtn.setAttribute('class','btn btn-danger btn-sm float-right delete')
    newbtn.textContent='X'
    newele.appendChild(newbtn)
    items.appendChild(newele)
    var newedit = document.createElement('button')
    newedit.setAttribute('class','btn btn-warning btn-sm float-right edit mx-2')
    newedit.textContent = 'edit'
    newele.appendChild(newedit)
    items.appendChild(newele)
    
}

function itemsclick(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var i = e.target.parentElement
            items.removeChild(i)
        }
    }   
}
function filterevent(e){
    var text = filter.value.toLowerCase()
    var allitems = items.getElementsByTagName('li')
    Array.from(allitems).forEach(function(item){
        var itemName = item.firstChild.textContent.toLowerCase()
        var desName = item.firstChild.nextSibling.nextSibling.textContent.toLowerCase()
        // console.log(desName)
        // console.log(itemName)
        if(itemName.indexOf(text)!=-1 || desName.indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    });
}