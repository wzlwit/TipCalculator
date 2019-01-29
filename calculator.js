//Calculate Tip
function calculateTip() {
    let bill = document.getElementById('billamt');
    let selection = document.getElementById('serviceQual');
    let peopleAmt = document.getElementById('peopleamt');


    //validate if bill amount is entered correctly and serivce quality is selected
    if (bill.value <= 0 || selection.value * 1 <= 0 || peopleAmt.value < 0) {
        alert('Please enter bill amount, select the service quality and choose people correctly')
        return;
    }
    //for people amount input, we can make sure the number is >=0, but forget the correct attribute (should be minimum) in HTML, so will improve later

    let amount = peopleAmt.value ? peopleAmt.value : 1; //default number for people will be 1 if nothing entered;

    //calculat tip and value for each people:
    let tip = bill.value * 1 * selection.value;
    let total = (bill.value * 1 + tip) / amount;
    tip = tip / amount; //for each people;

    //decide to show the word 'each' or not;
    let wordE = amount > 1 ? "each" : "";


    //to show the message for tip and total of each people
    let show = document.getElementById('totalAndTip');

    show.innerHTML = `
    <p>The tip is:</P>
    <p>$ ${tip.toFixed(2)}</p>
    <p>${wordE}</p>
    <br>
    <p>The total value is:</p>
    <p>$ ${total.toFixed(2)}</p>
    <p>${wordE}</p>
    `;
    //should use toFix(), otherwise, whole number will be shown without decimals like $2, instead of $2.00

    //the following will show the  toy message
    $.ajax('https://swapi.co/api/people/20')
        .done(response => alert(`You have won a ${response.name} toy!`))
        .fail(response => alert(`There is something wrong to get the toy with status: ${response.status}`))

}



