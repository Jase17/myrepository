// Calculate the cost by multiplying the number of people by the cost per person.
function price() {
    let qty = document.getElementById("pnum").value;
    let choice = document.getElementById("activities").value;

    if (choice === "Skydiving") {
        document.getElementById("total").value = 350*qty;
    }
    if (choice === "Hiking") {
        document.getElementById("total").value = 170*qty;
    }
    if (choice === "Kayaking") {
        document.getElementById("total").value = 150*qty;
    }
    if (choice === "Geothermal Pools") {
        document.getElementById("total").value = 70*qty;
    }
    if (choice === "Fishing on Lake Taupo") {
        document.getElementById("total").value = 60*qty;
    }
    if (choice === "Biking") {
        document.getElementById("total").value = 100*qty;
    }else{
        if (choice === "select") {
            alert("Please choose an activity");
            return false;
        }
        if (qty <= "1") {
            alert("Please enter the number of your group");
            return false;
        }
    }

}
// Validate the inputs from the customers form.
function validateform() {
    let fName = document.getElementById("fnameID").value;
    let lName = document.getElementById("lnameID").value;
    let phnum = document.getElementById("phID") //Set the expected format for phone number input.
    let phFormat = /^\d{10}$/;
    let email = document.getElementById("emailID")
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Set the expected format for email input.
    let pQty = document.getElementById("pnum").value;
    let activity = document.getElementById("activities").value;
    let bDate = document.getElementById("bookdate").value;
    let userTnC = document.getElementById("userAgreed").checked;
    let cName = document.getElementById("cnameID").value;
    let cNum = document.getElementById("cardID").value;
    let eDate = document.getElementById("expiryDate").value;
    let today = new Date();
    let month = today.getMonth();
    let cvv = document.getElementById("CvvID").value;

//Display alert message based on the input of the user for each form
    if (fName === "") {
        alert("Please enter your first name");
        return false;
    } else if (lName === "") {
        alert("Please enter your last name");
        return false;
    } else if (!phnum.value.match(phFormat)) {
        alert("Please enter a valid phone number");
        return false;
    } else if (!email.value.match(emailFormat)) {
        alert("Please enter a valid email address");
        return false;
    } else if (pQty <= "1") {
        alert("Please enter the number of your group");
        return false;
    } else if (activity === "select") {
        alert("Please choose an activity");
        return false;
    } else if (bDate === "") {
        alert("Please select a date");
        return false;
    } else if (cName === "") {
        alert("Please enter card name");
        return false;
    } else if (cNum === "") {
        alert("Please enter card number");
        return false;
    } else if (eDate < month) {
        alert("Card expiry cannot be before this month");
        return false;
    } else if (cvv === "") {
        alert("Please enter CVV");
        return false;
    } else if (userTnC == "") {
        alert("Please agree to the terms and conditions");
        return false;
    }else{
        alert("Thanks, we will be in touch soon!")
    }

}
// Reset form
function resetform() {
    document.getElementById("fnameID").value = "";
    document.getElementById("lnameID").value = "";
    document.getElementById("phID").value = "";
    document.getElementById("emailID").value = "";
    document.getElementById("pnum").value = "";
    document.getElementById("activities").value = "";
    document.getElementById("bookdate").value = "";
    document.getElementById("userAgreed").value = "";
    document.getElementById("cnameID").value = "";
    document.getElementById("cardID").value = "";
    document.getElementById("expiryDate").value = "";
    document.getElementById("CvvID").value = "";
    document.getElementById("total").value = "";

}