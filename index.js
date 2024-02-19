document.getElementById('btn-ticket').addEventListener('click',function(){
    let nextsection = document.getElementById('interface-section');
    nextsection.scrollIntoView({behavior: 'smooth'})
})
const allSeat = document.getElementsByClassName("seat-no");

const classType = 'economy';
        const price = 550;
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
