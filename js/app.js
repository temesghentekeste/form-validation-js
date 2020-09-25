// Form controls
const UIname = document.querySelector('#name');
const UIzipcode = document.querySelector('#zipcode');
const UIemail = document.querySelector('#email');
const UIphone = document.querySelector('#phone');

// Validate name
UIname.addEventListener('blur', e => {
  const re = /^[a-zA-Z]{2,10}$/;
  if(!re.test(e.target.value)) {
    UIname.classList.add('is-invalid');
  }else {
    UIname.classList.remove('is-invalid');
  }
});

// Validate zipcode
UIzipcode.addEventListener('blur', e => {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if(!re.test(e.target.value)) {
    UIzipcode.classList.add('is-invalid');
  }else {
    UIzipcode.classList.remove('is-invalid');
  }
});

// Validate email
UIemail.addEventListener('blur', e => {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(e.target.value)) {
    UIemail.classList.add('is-invalid');
  }else {
    UIemail.classList.remove('is-invalid');
  }
});

// Validate phone
UIphone.addEventListener('blur', e => {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if(!re.test(e.target.value)) {
    UIphone.classList.add('is-invalid');
  }else {
    UIphone.classList.remove('is-invalid');
  }
});
