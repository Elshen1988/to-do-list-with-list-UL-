const form = document.querySelector("form")
const list = document.querySelector(".list")
const inputClose =document.getElementById("forminputClose")
let sortBtn =document.querySelector(".sort")
let sortimage =document.querySelector(".sortimage")
let search =document.querySelector(".search")
let color =document.getElementById("color")
let contentcolor =document.querySelector(".content-box")
let inputcolor=document.querySelector(".input-data")

let arr=[]
let currentId=0
var sorted = true

function hover(img){
    img.src="./images/delete2.png"
   
   }
   function hoverOut(img){
       img.src="./images/delete1.png";
      }
     let newarr=[]

form.onsubmit = (e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    text=data.get("inputData")
    
    if(inputText.value !="" && inputText.value != arr.map((a)=>{
       return a.inputTex
    })){
        arr.push({
        id:++currentId,
        inputTex:text    })
    }else{
        alert("Boş və mövcud dəyərlərdən istifadə etməyin")
    }

    
        listRead()
        inputText.value =""
        listShow()
    
}

function deletItem(param){
arr = arr.filter(item=>item.id!==param)
listRead()
listShow()
}
inputClose.onclick= ()=>{
    inputText.value =""
}
function listShow(){
    if(arr.length>0){
        list.style.display="block"
    }else{
        list.style.display="none"
    }
}
function listRead(){
    list.innerHTML=""
    arr.forEach(item =>{
    list.innerHTML+=` <li>
    <span id = ${item.id} >${item.inputTex}</span>
    <img src="./images/delete1.png" onmouseover="hover(this);"/ onmouseout="hoverOut(this)"/  onclick="deletItem(${item.id})"/>
    </li>`
    })
}
sortBtn.onclick= ()=>{
    if(sorted){
        arr.sort((a,b)=>{
            return a.inputTex.localeCompare(b.inputTex)
        })
listRead()
sortimage.src="./images/sort2.png" 
sorted = false
    } else {
        arr.sort((a,b)=>{
            return b.inputTex.localeCompare(a.inputTex)
        })
listRead()
sortimage.src="./images/sort1.png" 
sorted = true
}
}

search.onclick= ()=>{
    arr.forEach((a)=>{
    if(inputText.value==a.inputTex){
    let ele = document.getElementById( `${a.id}`)
    ele.classList.add("filter")
        }
    })
}
color.onclick=()=>{
    contentcolor.style.background=color.value
    inputcolor.style.background=color.value

}
