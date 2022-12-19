formValidation  = () =>{
    let errors = [...document.querySelectorAll('.error')];
    let inputs = document.querySelectorAll('input');
    let button = document.querySelector('button');
    let regexName = /[A-Z, a-z]+/
    let regexDigit = /\d+/;
    let form = document.querySelector('form')
    let formContainer = document.querySelector('.formContainer')
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    let regexPassword =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let specialCharacters = /[|\~|\!|\@|\#|\%|\^|\&|\*|\(|\)|\-|\?|\<|\>|]/;

    button.addEventListener('click', function(){

 

        for(let e of errors){
            e.innerText = ''
        }
        
        for(let input of inputs){
            input.style.border = '1px solid rgba(0,0,0, .3)'
        }
        let firstName =  inputs[0].value  
        let lastName = inputs[1].value;
        let email = inputs[2].value;
        let password = inputs[3].value;
        let telephone = inputs[4].value; 
        let bio = inputs[5].value; 
        
        ifEmpty = index => {
            errors[index].innerText = 'This field is required'
            inputs[index].style.borderColor = 'red'
            form.style.height = 'fit-content'
            formContainer.style.height = '120vh';
        }

        
        borderColorIndicator = (index, key) =>{
            if(key === 1){
                inputs[index].style.borderColor = 'red'
            }
            else{
                inputs[index].style.borderColor = 'green'
            }
            
        }
        
       
        if(firstName.match(regexDigit) || firstName.match(specialCharacters)){
            errors[0].innerText = 'Input a valid name'
            borderColorIndicator(0, 1);
        }
        else{
            borderColorIndicator(0, 0);
        }
        if(firstName === '' || firstName === undefined || firstName === null){
            ifEmpty(0)

        }
        if(lastName.match(regexDigit) || lastName.match(specialCharacters)){
            errors[1].innerText = 'Input a valid name'
            borderColorIndicator(1, 1);
        }
        else{
            borderColorIndicator(1, 0);
        }

        if(lastName === '' || lastName === undefined || lastName === null){
            ifEmpty(1)
        }
        if(!email.match(regexEmail)){
            errors[2].innerText = 'Email must be a valid address, e.g. example@example.com';
            borderColorIndicator(2, 1);
        }

        else{
            borderColorIndicator(2, 0);
        }
        if(email === '' || email === undefined || email === null){
            ifEmpty(2)
        }

  

        if(password === '' || password === undefined || password === null){
            ifEmpty(3)
        }
        
        if(!password.match(regexPassword) && password !== ''){
            errors[3].innerText = 'Password must be alphanumeric, more than 8 characters and has special characters';
            borderColorIndicator(3, 1);
        }
        else if(password.match(regexPassword)){
            borderColorIndicator(3, 0);
        }
        if(telephone === '' || telephone === undefined || telephone === null){
            ifEmpty(4)
        }
        else if(telephone.length < 11 && telephone !== ''){
            errors[4].innerText = 'A valid telephone number (11 digits and 333-333-3334)';
            borderColorIndicator(4, 1);
        }
        else if(telephone.length > 11){
            errors[4].innerText = 'Not greater than 11 digits (333-333-3334)';
            borderColorIndicator(4, 1);
        }
        else{
            borderColorIndicator(4, 0);
        }
        if(bio === '' || bio === undefined || bio === null){
            ifEmpty(5)
        }
        else{
            borderColorIndicator(5, 0);
        }
    })
}

formValidation();