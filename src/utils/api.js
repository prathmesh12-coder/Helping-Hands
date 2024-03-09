import {
    _getDonations,
    _getEvents,
    _getArticles
} from './_DATA.js'

// export function getInitialData () {
//     return Promise.all([
//         _getUsers(),
//         _getQuestions(),
//     ]).then(([users, questions]) => {
//
//         const newSignupUser = localStorage.getItem('newSignupUser');
//         if(newSignupUser){
//             const signupUser = JSON.parse(newSignupUser);
//             return {
//                 users: { ...users, [signupUser?.id] : signupUser},
//                 questions,
//             };
//         }else{
//             return {
//                 users,
//                 questions,
//             }
//         }
//     })
// }

export function getDonations() {
    console.log('heelo getDonations');
    return _getDonations();
}

export function getEvents() {
    return _getEvents();
}

export function getArticles() {
    return _getArticles();
}