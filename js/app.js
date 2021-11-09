let form = document.getElementById('submit-form');
let submit = document.getElementById('submit');
const code_container = document.getElementById('code-container');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    submit.style.backgroundColor='gray';
    submit.innerText = `Sending..`;
    setTimeout(() => {
        alert(`Dear ${name} We are unable to send the feedback. kindly email us on shanumalikforyou@gmail.com`);
        submit.style.backgroundColor='#1e90ff';
        submit.innerText = `Send Now`;
        form.reset();
    }, 2000);
});
