export const validateSignIn = (email, password) => {
    const errors = {};

    if (!email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email address is invalid";
    }
    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }
    return errors;
}

export const validateSignUp = (email, password, fullName) => {
    const errors = validateSignIn(email, password); 
    if (!fullName) {
        errors.fullName = "Full name is required";
    } else if (fullName.length < 2) {
        errors.fullName = "Full name must be at least 2 characters";
    }
    return errors;
}