// Input validation, this is just simulating the validation process
// Actual validation would more robust than this
export function verifyInput(fields) {
    if (!validateName(fields.name)) {
        // Name validation logic
        return false;
    }
    if (!validateEmail(fields.email)) {
         // Email validation logic
        return false;
    }
    if (!validateType(fields.type)) {
        // Type validation logic
        return false;
    }
    if (!validatePassword(fields.password)) {
        // Normally we would have proper password validation logic
        return false;
    }
    return true;
}

export function validateName(name) {
    if (name.length < 1) {
        // Name validation logic
        return false;
    }
    return true;
}

export function validateEmail(email) {
    let validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length < 1 || !email.toLowerCase().match(validRegex)) {
        return false;
    }
    return true;
}

export function validateType(type) {
    if (type.length < 1) {
        return false;
    }
    return true;
}

export function validatePassword(password) {
    if (password.length < 1) {
        return false;
    }
    return true;
}