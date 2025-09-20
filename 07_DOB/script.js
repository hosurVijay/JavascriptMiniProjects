const todayDate = new Date();
const givenDate = document.querySelector("input")
const calculateBtn = document.querySelector("button");
const ageDisplay = document.querySelector(".display-age h2");


calculateBtn.addEventListener("click", function(event){
    event.preventDefault()
    calculateAge()
   givenDate.value = ""
},false)



function calculateAge(){
    if (givenDate.value === ""){
        alert('Input field cannot be Empty')
    }else{
        const inputFullDate = givenDate.value
        const inputDate  = new Date(inputFullDate);
        const inputYear = (inputDate.getFullYear());
        const inputDay = (inputDate.getDate())
        const inputMonth = (inputDate.getMonth()+1)


        const currentDay = (todayDate.getDate())
        const currentMonth = (todayDate.getMonth()+1)
        const currentYear = (todayDate.getFullYear());


        let ageMonth, ageYear, agedays;
        ageYear = currentYear - inputYear;

        if(currentMonth >= inputMonth){
            ageMonth = currentMonth - inputMonth;
        }else{
            ageYear--;
            ageMonth = 12 + currentMonth  - inputMonth;
        }
          
        if(currentDay >= inputDay){
            agedays = currentDay - inputDay;
        }else{
            ageMonth--;
            agedays = getDaysInMonth(inputYear, inputMonth) + currentDay - inputDay;
        }
        if(ageMonth<0){
            ageMonth = 11;
            ageYear--;
        }


        function displayAge(){
        ageDisplay.textContent = `You are ${ageYear} years, ${ageMonth} months and ${agedays} days old`;
        ageDisplay.style.visibility = "visible";
        }

        displayAge();

    }



}
console.log(new Date(2002, 10, 0).getDate())

function getDaysInMonth(year, month){
    return new Date(year, month , 0).getDate()
}

