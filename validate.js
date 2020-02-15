const users = [
    {
    traineeEmail: 'satish.maurya@successive.tech',
    reviewerEmail: 'shriya.pathak@successive.tech',
    },
    {
        traineeEmail: 'satish.maurya@successive.tech',
        reviewerEmail: 'satish.maurya@successive.tech',
    },
    {
        traineeEmail: 'trainee1@succrrressive.tech',
        reviewerEmail: 'reviewer1@successive.com',
    }
    
]


// const validateEmail = (callback,...params) => {
    
// }
const regex = /[a-zA-Z\d]+.+@(?<name>successive)+.(tech)/g;
// const regex = /^(\w+)((.([a-zA-Z0-9]+))*)?@([a-zA-Z0-9]+).([a-zA-Z0-9]{4})$/;

const validateEmail = (email) => regex.test(email);
const validEmail = [];
const invalidEmail = [];
const vaildUser = (users) => {
    users.forEach(({ traineeEmail, reviewerEmail}) => {

        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validEmail.push({traineeEmail, reviewerEmail});
        }
        else {
            invalidEmail.push({traineeEmail, reviewerEmail});
        }
    })
}

vaildUser(users);