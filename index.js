//get the element
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#checkBtn");
const errorMessage = document.querySelector("#error-message");
const NoOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function checkCondition(){

  hideMessage()

  if (Number(billAmount.value) > 0) {

    if (Number(cashGiven.value) >= billAmount.value) {

      const amountTobereturned = cashGiven.value - billAmount.value;

      CalculateChange(amountTobereturned);
    }
    else {

      ShowMessage("The cash provided  atleast equal to bill amount");
    }
  } 
 
  else {

    ShowMessage("Invalid bill Amount");

  }
  
});

function CalculateChange(amountTobereturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountTobereturned / availableNotes[i]);
    amountTobereturned   =  amountTobereturned % availableNotes[i];
    NoOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}


function ShowMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.style.color = "red";

  errorMessage.innerText = message;
}


