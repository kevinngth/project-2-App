const feedback = () => {
    $('.toast').toast('show');
};

// add click event listener to notes submit button
document.querySelector('#noteFormSubmit').addEventListener('submit', feedback);
// add click event listener to notes submit button
document.querySelector('#collectionFormSubmit').addEventListener('submit', feedback);