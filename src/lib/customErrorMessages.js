export const dict = {
    custom: {
        email: {
            required: 'Please enter your email address'
        },
        created_by: {
            required: 'Please make a selection'
        },
        dob: {
            required: 'Please enter date of birth'
        },
        marital_status: {
            required: 'Please select marital status'
        },
        name: {
            required: () => 'Please enter name'
        },
        gender: {
            required: () => 'Please select gender'
        },
        ageFrom: {
            required: () => 'Please select age'
        },
        ageTo: {
            required: () => 'Please select age'
        },
        message: {
            required: () => 'Please type your message'
        }
    }
};