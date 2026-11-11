 function submitform() {
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (name && email && phone) {
    
        document.getElementById('confirmation').InnerText = 
            'Thank You, ' + name + '! Successfully registered.'
  
            

        console.log('Registration Form', {
            Name: name,
            Email: email,
            Phone: phone
        });
    } else {
        
        alert('Please fill in all the fields');
    }
}