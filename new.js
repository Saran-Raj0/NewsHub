const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInButtonRightPanel = document.getElementById('signInRightPanel'); 
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signInButtonRightPanel.addEventListener('click', () => { 
    container.classList.remove("right-panel-active");
});