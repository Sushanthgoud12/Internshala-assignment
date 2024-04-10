const startingPage = document.getElementById('startingPage');
const signUpForm = document.getElementById('signUpForm');
const profileForm = document.getElementById('profileForm');
const usernameError = document.getElementById('usernameError');
const createAccountBtn = document.getElementById('createAccountBtn');
const avatarPreview = document.getElementById('avatarPreview');
const chooseImageBtn = document.getElementById('chooseImageBtn');
const locationInput = document.getElementById('locationInput');
const nextBtn1 = document.getElementById('nextBtn1');
const nextBtn2 = document.getElementById('nextBtn2');
const getStartedBtn = document.getElementById("getStartedBtn");
const container = document.getElementById("container");
const emailVerification = document.getElementById("emailVerification");


getStartedBtn.addEventListener('click', function() {
    container.style.display = "block";
    startingPage.style.display = "none";
});

createAccountBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username === 'John') {
        usernameError.style.display = 'block';
    } else {
        usernameError.style.display = 'none';
        signUpForm.style.display = 'none';
        profileForm.style.display = 'block';
    }
});
nextBtn1.disabled = true;
chooseImageBtn.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            avatarPreview.src = reader.result;
        };
        reader.readAsDataURL(file);
        nextBtn1.disabled = false;
    });
    fileInput.click();
});

nextBtn1.addEventListener('click', function() {
    step1.style.display = "block";
    step2.style.display = "none";
    profileForm.style.display = 'None';
    const avatarSrc = avatarPreview.src;
    const location = locationInput.value;
    // Here, you can perform any necessary actions with the avatar source and location data
    console.log('Avatar Source:', avatarSrc);
    console.log('Location:', location);
});



const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const continueBtn = document.getElementById('continue-btn');

let selectedOption = null;
nextBtn2.disabled = true;

// Step 1: Initial Options Selection
const options = step1.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedOption = option.dataset.value;
        nextBtn2.disabled = false;
    });
});



function showStep(step) {
    step1.classList.remove('active');
    step2.classList.remove('active');
    step.classList.add('active');
}

nextBtn2.addEventListener('click', () => {
    emailVerification.style.display = "block";
    step1.style.display = "none";
});
