function ticketChange(ticket,isIsincreace){
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
if (isIsincreace == true){
     ticketNewCount = ticketCount + 1;
}
if( isIsincreace == false && ticketCount >0){
    ticketNewCount = ticketCount - 1;
}
   ticketInput.value = ticketNewCount;
//    const ticketTotal = ticketNewCount * 150;
 let ticketTotal = 0;
 if(ticket == 'fClass'){
     ticketTotal = ticketNewCount * 150;
 }
 if(ticket == 'eClass'){
     ticketTotal = ticketNewCount * 100;
 }
   document.getElementById(ticket +  '-total').innerText = ticketTotal;
   calculateTotal();
};


// Ticket Total counter
function calculateTotal(){
    const fClassInput = document.getElementById('fClass-input');
    const fClassCount = parseInt(fClassInput.value);
  console.log(fClassCount);
    const eClassInput = document.getElementById('eClass-input');
    const eClassCount = parseInt(eClassInput.value);
    
    const totalPrice = fClassCount * 150 + eClassCount * 100;
    console.log(totalPrice);
    document.getElementById('totalTicketPrice').innerText = totalPrice;
 
    const tax = totalPrice * 0.1;
 
   document.getElementById('ticket-tax').innerText = tax;
 
   const ticketAll = totalPrice + tax;
 
   document.getElementById('all-total').innerText = ticketAll;
 
 
   
     }