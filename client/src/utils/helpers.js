export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function StrengthChecker(password) {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    let mediumPassword = new RegExp('(?=.*[a-z])(?=.*[0-9])(?=.{6,})');
    
    if(strongPassword.test(password)) {
        return 'Strong';
    } else if(mediumPassword.test(password)) {
        return 'Medium';
    } else {
        return 'Weak';
    }
}