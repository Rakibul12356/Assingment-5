document.getElementById('btn-ticket').addEventListener('click',function(){
    let nextsection = document.getElementById('interface-section');
    nextsection.scrollIntoView({behavior: 'smooth'})
})
const allSeat = document.getElementsByClassName("seat-no");
let count = 0;
let selectSeat = 8
for( const btn of allSeat){
    btn.addEventListener("click",function (e) {
      // console.log(e.target.parentNode.childNodes[1].innerText)
        if(count <4 ){count = count + 1;
            setInnertext('Selected-seat',count);
        }
        if(selectSeat > 0){
            selectSeat = selectSeat - 1;
       setInnertext('seat-left',selectSeat)
        }
        //
        const price = e.target.parentNode.childNodes[1].innerText;
        console.log(price)
        const selectedCont = document.getElementById('select-seat');
        const li = document.createElement('li');
        const p =document.createElement('p');
        p.innerText = price;
        li.appendChild(p);
        selectedCont.appendChild(li);



        //Total section
       
    })

}

//button background color
const buttons = document.querySelectorAll('.seat-no');
function changeButtonColor(){
    this.style.backgroundColor = '#1DD100';
    this.style.color = 'white';
}
buttons.forEach(button => {
    button.addEventListener('click',changeButtonColor)
});

//COMMON FUNCTION
function setInnertext (id , value){
    document.getElementById(id).innerText = value;
};
//butt disable;
function handleClick1(){
    document.getElementById("button-1").disabled = true;
}
function handleClick2(){
    document.getElementById("button-2").disabled = true;
}
function handleClick3(){
    document.getElementById("button-3").disabled = true;
}
function handleClick4(){
    document.getElementById("button-4").disabled = true;
}
function handleClick5(){
    document.getElementById("button-5").disabled = true;
}
function handleClick6(){
    document.getElementById("button-6").disabled = true;
}
function handleClick7(){
    document.getElementById("button-7").disabled = true;
}
function handleClick8(){
    document.getElementById("button-8").disabled = true;
}
// hidden section
function play(){
    const hidemainsection = document.getElementById('hide-section');
    hidemainsection.classList.add('hidden');
    const openSuccessfull = document.getElementById('successfull-section');
    openSuccessfull.classList.remove('hidden');
}
