const unlockNotes = () => {
    document.querySelector('#notes').disabled = !document.querySelector('#notes').disabled;
};

const unlockCollection = () => {
    document.querySelector('#db').disabled = !document.querySelector('#db').disabled;
    document.querySelector('#balance').disabled = !document.querySelector('#balance').disabled;
};

document.querySelector('#notesEditButton').addEventListener('click',unlockNotes);

document.querySelector('#collectionEditButton').addEventListener('click',unlockCollection);