
const tickets = [];

/* validateFname() and validateLname() checks for empty strings and whitespace inputs.
    Numbers and signs not allowed */
function validateAmount(){
    //control of tickets input
    // I put a limit at 160, which is the total amount of seats in my imaginary movie theater
    let inTickets = document.getElementById("amount").value;
    let nrTickets = Number(inTickets);
    if (isNaN(nrTickets) || nrTickets <= 0 || nrTickets > 160) {
        document.getElementById("errorAmount").innerHTML = "skriv inn et gyldig antall billetter (max 160)";
        document.getElementById("amount").style.borderColor = "red";
        return nrTickets = null;

    } else {
        document.getElementById("amount").style.borderColor = "";
        document.getElementById("errorAmount").innerHTML = "";
        return nrTickets;
    }
}
function validateFname(){
    let validName = "^[A-Za-z]+$";
    let fname = document.getElementById("f_name").value;
    if (fname.match(validName)){
        document.getElementById("errorFname").innerHTML = "";
        document.getElementById("f_name").style.borderColor = "";
        return fname;
    }
    else{
        document.getElementById("errorFname").innerHTML = "skriv inn et gyldig fornavn";
        document.getElementById("f_name").style.borderColor = "red";
        return fname = null;
    }
}
function validateLname(){
    let validName = "^[A-Za-z]+$";
    let lname = document.getElementById("l_name").value;
    if (lname.match(validName)){
        document.getElementById("errorLname").innerHTML = "";
        document.getElementById("l_name").style.borderColor = "";
        return lname;
    }
    else{
        document.getElementById("errorLname").innerHTML = "skriv inn et gyldig etternavn";
        document.getElementById("l_name").style.borderColor = "red";
        return lname = null;
    }
}
function validatePnumber(){
    let inNumber = document.getElementById("p_number").value;
    let pnumber = Number(inNumber);
    if (isNaN(pnumber) || pnumber > 99999999 || pnumber < 10000000) {
        document.getElementById("errorPnumber").innerHTML = "Skriv inn et gyldig telefonnummer";
        document.getElementById("p_number").style.borderColor = "red";
        return pnumber = null;
    } else {
        document.getElementById("errorPnumber").innerHTML = "";
        document.getElementById("p_number").style.borderColor = "";
        return pnumber;
    }

}
//control of email with normal validation pattern for email addresses
function validateEmail(){
    let validMail = "^[a-zA-Z0-9.!#$%'*+/=^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$";
    let inEmail = document.getElementById("email").value;

    if (inEmail.match(validMail)) {
        document.getElementById("errorEmail").innerHTML ="";
        document.getElementById("email").style.borderColor = "";
        return inEmail;
    } else {
        document.getElementById("errorEmail").innerHTML = "skriv inn en gyldig e-post";
        document.getElementById("email").style.borderColor = "red";
        return inEmail = null;
    }
}

function buyTicket() {
    let email = validateEmail();
    let fname = validateFname();
    let nrTickets = validateAmount();
    let lname = validateLname();
    let pnumber = validatePnumber();

    //control of movie input
    let movie = document.getElementById("movie").value;
    if (document.getElementById("movie").value === "") {
        document.getElementById("errorMovie").innerHTML = "velg en film";
        document.getElementById("movie").style.borderColor = "red";
    } else {
        document.getElementById("movie").style.borderColor = "";
        document.getElementById("errorMovie").innerHTML = "";
    }

// an object is instantiated and added to array if input is valid
    if (movie === "" || nrTickets === null || pnumber === null ||
        fname === null || lname === null || email === null ) {
        document.getElementById("errorScheme").innerHTML = "feil";
        return false;
    } else {
        const ticket = {
            movie: movie,
            nrTickets: nrTickets,
            fname: fname,
            lname: lname,
            pnumber: pnumber,
            email: email
        };

        tickets.push(ticket);
        let ticketTable = document.getElementById("ticketInfo");
        ticketTable.innerHTML = "";
        for (let i of tickets) {
            ticketTable.innerHTML += "<tr><td>" + i.movie + "</td><td>" + i.nrTickets +
                "</td><td>" + i.fname + "</td><td>" + i.lname + "</td><td>" + i.pnumber +
                "</td><td>" + i.email + "</td></tr>";
        }
        //empty fields when ticket is added
        document.getElementById("movie").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("f_name").value = "";
        document.getElementById("l_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("p_number").value = "";
    }
}
function deleteTickets(){
    tickets.length=0;
    let ticketTable = document.getElementById("ticketInfo");
    ticketTable.innerHTML = "";
    for (let i of tickets) {
        ticketTable.innerHTML += "<tr><td>" + i.movie + "</td><td>" + i.nrTickets +
            "</td><td>" + i.fname + "</td><td>" + i.lname + "</td><td>" + i.pnumber +
            "</td><td>" + i.email + "</td></tr>";
    } // for loop adds nothing to table, because tickets array is empty
}

