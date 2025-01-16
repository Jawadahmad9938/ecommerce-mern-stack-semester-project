const btn = document.getElementById('submit');
const nam = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

btn.addEventListener('click',()=>{
    alert("Your response has been submitted successfully.");
    nam.value = '';
    email.value = '';
    message.value = '';
})