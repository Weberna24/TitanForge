const fname = document.getElementById('fname'); 
const phone = document.getElementById('phone');
const emails = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];
const messages = "Hello world. Im finally able to send something to an email!!!";

function emailSend(){
  console.log("Hello world")
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "moyisikhomo@gmail.com",
    Password : "80410B1134868EC9F44D7C6E0DF745A2685B",
    To : `${emails}`,
    From : "weberna24@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

function sendMail(){
  var params = {
    name: fname.value,
    email: emails.value,
    message: message.value,
    phone: phone.value
  };

  const serviceID = "service_8cwezhq";
  const templateID = "template_std3ww5"

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      fname.value = "";
      phone.value = "";
      emails.value = "";
      message.value = "";
      console.log(res)
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));

}