document.getElementById('submit-buttton').addEventListener('click', function () {
    // get email 
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // console.log(userEmail)

    //get password 
    const usePasswordField = document.getElementById('user-password');
    const userPassword = usePasswordField.value;
    // console.log(userPassword)

    //check validation
    if (userEmail == 'ali@gmail.com' && userPassword == 123456) {
        window.location.href = "banking.html";
    }



})