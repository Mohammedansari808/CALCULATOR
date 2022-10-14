let divs = document.createElement("div")
divs.setAttribute("class","calculator")
divs.style.height="300px"
divs.style.width="250px";
divs.style.paddingLeft="10px"
divs.style.boxShadow="4px 4px 30px rgba(0,0,0,0.3)"
divs.style.backgroundColor="aqua"
divs.style.display="flex"
divs.style.borderRadius="10px"



let table = document.createElement("table")
table.setAttribute("class","table")
table.style.display="grid";





function row(tagname){
    let ele = document.createElement(tagname);
    return ele
}

function data(tagname,attrname,attrvalue){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue)
    ele.style.padding="0px 3px"
    
    return ele
    
}

let tdisplay = document.createElement("td");
tdisplay.setAttribute("colspan",5);
tdisplay.style.height ="70px";
tdisplay.style.marginRight ="10px"
tdisplay.style.display='flex';
tdisplay.style.justifyContent="center"


let input = document.createElement("input");
input.setAttribute("id","ll")
input.style.textAlign="right"
input.style.fontSize="large"
input.style.borderRadius="4px"



function button(tagname,attrname,attrvalue,content){
    let button = document.createElement(tagname)
    button.setAttribute(attrname,attrvalue)
    button.style.height="40px"
    button.style.width="40px"
   
    button.style.borderRadius="10px"
    button.style.color="black"
    
    
    
    button.innerHTML=content
    return button
}

let row1 = row("tr");
let row2 = row("tr");
let td1 = data("td","scope","col")
let btn1 = button("button",'onclick',"send(1)",1)
let td2 = data("td","scope","col")
let btn2 = button("button",'onclick',"send(2)",2)
let td3 = data("td","scope","col")
let btn3 = button("button",'onclick',"send(3)",3)
let td4 = data("td","scope","col")
let btn4 = button("button",'onclick',"send(4)",4)
let td5 = data("td","scope","col")
let btn5 = button("button",'onclick',"send(5)",5)

let row3=row("tr")
let td6 =data("td","scope","col")
let bt6 = button("button",'onclick',"send(6)",6)
let td7 = data("td","scope","col")
let btn7 = button("button",'onclick',"send(7)",7)
let td8 = data("td","scope","col")
let btn8 = button("button",'onclick',"send(8)",8)
let td9 = data("td","scope","col")
let btn9 = button("button",'onclick',"send(9)",9)
let td10 = data("td","scope","col")
let btn0 = button("button",'onclick',"send(0)",0)

let row4=row("tr")

let td11 = data("td","scope","col")
let btAdd= button("button",'onclick',"send('+')","+")
let td12 = data("td","scope","col")
let btnS = button("button",'onclick',"send('-')","-")
let td13 = data("td","scope","col")
let btnM = button("button",'onclick',"send('*')","*")
let td14 = data("td","scope","col")
let btnD = button("button",'onclick',"send('/')","/")
let td15 = data("td","scope","col")

let btnE = document.createElement("button");
btnE.setAttribute("onclick","calculate()")
btnE.setAttribute('class','equal')
btnE.innerHTML ="="
btnE.style.height="40px"
btnE.style.width="40px"
btnE.style.backgroundColor="darkpink"
btnE.style.borderRadius="10px"
btnE.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
btnE.style.color="black"

let row5=row("tr")

let td16 = data("td","scope","col")
let btnDOt = button("button",'onclick',"send('.')",".")
let td17 = data("td","scope","col")
let btnClear = button("button",'onclick',"Clear()","AC")
let td18 =data("td","scope","col")
let btnRoot = button("button",'onclick',"Root()","√")
let td19 = data('td',"scope","col")
let btnLog = button("button",'onclick',"Log()","log")
let td20 =data("td","scope","col")
let btnBs = button( "button","onclick","del()","&laquo")
td1.append(btn1)
td2.append(btn2)
td3.append(btn3)
td4.append(btn4)
td5.append(btn5)
td6.append(bt6)
td7.append(btn7)
td8.append(btn8)
td9.append(btn9)
td10.append(btn0)
td11.append(btAdd)
td12.append(btnS)
td13.append(btnM)
td14.append(btnD)
td15.append(btnE)
td16.append(btnDOt)
td17.append(btnClear)
td18.append(btnRoot)
td19.append(btnLog)
td20.append(btnBs)

tdisplay.append(input)
row1.append(tdisplay)
row2.append(td17,td1,td2,td3,td4)
row3.append(td20,td5,td6,td7,td8)
row4.append(td15,td9,td10,td11,td12)
row5.append(td13,td14,td16,td18,td19,)

table.append(row1,row2,row3,row4,row5)
divs.append(table)

document.body.append(divs)

let x= document.getElementById("ll")

function send (num){
    x.value += num
}
function calculate(){
try{
    x.value= eval(x.value)
}catch(err){
    alert("Only numbers are allowed")
}
}
function del(){
    x.value = x.value.slice(0,-1)
}
function Clear(){
    x.value ="";
}
function Root(){
    x.value = (Math.sqrt(x.value))
}
function Log(){
    x.value = (Math.log10(x.value))
}