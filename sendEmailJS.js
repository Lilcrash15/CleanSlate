// index.js
function sendEmail(){
    // Pulls the contents from the HTML file using ID
    var suggestion=document.getElementById("suggestion").value;

    Email.send({
    Host: "smtp.gmail.com",
    Username : "<email>",
    Password : "<Password>",
    To : '<email its sending to>',
    From : "<First Email from 'Username'>",
    Subject : "<Subject of email>",
    // Body is var to pull contents from HTML textbox into body of email. 
    Body : suggestion,
    }).then(
        message => alert("Feedback Successfully Sent!")
    )
}