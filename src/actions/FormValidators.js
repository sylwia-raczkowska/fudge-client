export const validateEmail = (value) => {
    if (!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
        return 'Invalid format';
    } else {
        return '';
    }
};


export const validateLength = (value) =>  {
    if (value.length < 6) {
        return 'Value is too short';

    }
    if (value.length > 32) {
        return 'Value is too long';

    } else {
        return '';
    }
};

export const validateEquals = (value, pattern) => {
    if (value !== pattern){
        return 'Values must be equals!'
    }
    else {
        return '';
    }
};