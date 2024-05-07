const div = document.querySelector('#v')
const username = document.querySelector('#username');
const number = document.querySelector('#number');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const photo = document.querySelector('#photo'); 
const termsCheckbox = document.querySelector('#termsCheckbox');
const submitButton = document.querySelector('#B');


function toggleSubmitButton()
{
     
    B.disabled = !termsCheckbox.checked;
};
toggleSubmitButton();


v.addEventListener('submit',(e)=>{

    if(!validateInputs())
    {
        e.preventDefault();
    }
    else
    {
        alert("Form submitted successfully!")
    }
})



function validateInputs()
{
    const usernameVal = username.value.trim() 
    const numberValue = number.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const photoFile = photo.files[0]; 
    let success = true

    
    if(usernameVal==='' )
    {
        success=false;
        setError(username,'Username is required')
    }
    else if(/\d/.test(usernameVal) )
    {
        success=false;
        setError(username,'Username is invalid')
    }
   
    else{
        setSuccess(username)
    }

    if(emailVal==='')
    {
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    if(numberValue === '')
    {
        success = false;
        setError(number,'Enter your phone number')
    }
    else if(numberValue.length<10)
    {
        success = false;
        setError(number,'Please enter a 10 digit number')
    }
    else if(numberValue.length>10)
    {
        success = false;
        setError(number,'Please enter a 10 digit valid phone number')
    }
    else if (numberValue >= 'a' && numberValue <= 'z')
    {
        success = false;
        setError(number,'Please enter a valid phone number')
    }
    else if ((numberValue >= 'A' && numberValue <= 'Z'))
    {
        success = false;
        setError(number,'Please enter a valid phone number')
    }
    else{
        setSuccess(number)
    }

    if (!photoFile) 
    {
        success = false;
        setError(photo, 'Please upload an image');
    } 
    else 
    {
        const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = photoFile.name.split('.').pop().toLowerCase();
        const fileSize = photoFile.size / 1024; 

        if (!validExtensions.includes(fileExtension)) 
        {
            success = false;
            setError(photo, 'Invalid file format. ');
        }
         else if (fileSize > 1024)
        {
            success = false;
            setError(photo, 'Image size should not exceed 1MB');
        } else {
            setSuccess(photo);
        }
    }

    return success;
}



function validuser()
{
    const usernameVal = username.value.trim()

    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
}


function validnumber()
{
    const numberValue = number.value.trim();

    if(numberValue === '')
    {
        success = false;
        setError(number,'Enter your phone number')
    }
    else if(numberValue.length <10)
    {
        success = false;
        setError(number,'Please enter a 10 digit number')
    }
    else if(numberValue.length >10)
    {
        success = false;
        setError(number,'Please enter a valid phone number')
    }
    else if (numberValue >= 'a' && numberValue <= 'z')
    {
        success = false;
        setError(number,'Please enter a valid phone number')
    }
    else if ((numberValue >= 'A' && numberValue <= 'Z'))
    {
        success = false;
        setError(number,'Please enter a valid phone number')
    }
    else{
        setSuccess(number)
    }
}


function validemail()
{
    const emailVal = email.value.trim();

    if(emailVal===''){
        
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
}

function validpass()
{
    const passwordVal = password.value.trim();

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    
}


function setError(element,message){
    
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    if (element.id === 'photo')
    {
        errorElement.innerText = message;
    }
    else
    {
        errorElement.innerText = message;
    }
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}


function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    if (element.id === 'photo')
    {
        errorElement.innerText = '';
    }
    else
    {
        errorElement.innerText = '';
    }
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      );
  };