  
  // Dark Theme
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const navIcon = document.getElementById("nav-icon");
  const facebook = document.getElementById("fb");
  const twitter = document.getElementById("tw");
  const gitHub = document.getElementById("gt");
  const image1 = document.getElementById('image1');
  const toggleIcon = document.getElementById('toggle-icon');
  const heroImage = document.getElementById('hero-image');
  const heroImage2 = document.getElementById('hero-image2');
  const h4El = document.querySelector('.text-2xl');
  const h3El1 = document.getElementById('h3-mobile1');
  const h3El2 = document.getElementById('h3-mobile2');
  const h3El3 = document.getElementById('h3-mobile3')
  
  
  // Form Validation
  const form = document.getElementById('form');
  const password1El = document.getElementById('password1');
  const password2El = document.getElementById('password2');
  const messageContainer = document.getElementById('message-container');
  const message = document.getElementById('message');
  


  let isValid = false;
  let passwordsMatch = false;


// MUSIC PLAYER
const image = document.querySelector('#music-img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const timing = document.querySelector('.duration-wrapper');
const playerContainer = document.querySelector('.player-container');


const bgControl = document.getElementById('bg-control')




  // Dark Mode Styles
  function darkMode() {
  navIcon.style.color = '#fff';
  facebook.style.color = 'rgb(252, 92, 44)';
  twitter.style.color = 'rgb(252, 92, 44)';
  gitHub.style.color = 'rgb(252, 92, 44)';
  image1.src = 'img/logo-white.svg';
  toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');
  heroImage2.src = 'img/image-music.svg';
  heroImage.src = 'img/music_dark.svg';
  title.style.color = '#333';
  artist.style.color = '#333';
  timing.style.color = '#333'
  playerContainer.style.boxShadow = '#fff';
  h4El.style.color = '#000';
  bgControl.style.display = 'none';
  h3El1.style.color = '#333';
  h3El2.style.color = '#333';
  h3El3.style.color = '#333'

} 

 // Light Mode Styles
   function lightMode() {
  navIcon.style.color = '#000';
  facebook.style.color = '#000';
  twitter.style.color = '#000';
  gitHub.style.color = '#000';
  image1.src = 'img/logo.svg';
  toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
  heroImage.src = 'img/music_light.svg';
  heroImage2.src = 'img/music_light.svg';
  artist.style.color = '#000';
  title.style.color = '#000';
  timing.style.color = '#000';
  playerContainer.style.boxShadow = '0 15px 30px 5px rgba(0, 0, 0, 0.3)';
  bgControl.style.display = 'flex';
  h3El1.style.color = '#333';
  h3El2.style.color = '#333';
  h3El3.style.color = '#333'
}


  // Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    // localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    // localStorage.setItem('theme', 'light');
    lightMode();
  }
}

  // Event Listener
  toggleSwitch.addEventListener('change', switchTheme);


//Background Controls

const { body } = document;

function changeBackground(number) {
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset background
  body.className = '';
  // If background already on, turn off, else turn on background
  switch (number) {
    case '1':
      return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
    case '2':
      return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
    case '3':
      return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
    default:
      break;
  }
}
  
// Music
const songs = [
  {
    name: 'wizkid-1',
    displayName: 'Frames',
    artist: 'Wizkid',
  },
  {
    name: 'wizkid-2',
    displayName: 'Balance',
    artist: 'Wizkid',
  },
  {
    name: 'wizkid-3',
    displayName: 'Slip-N-Slide',
    artist: 'Wizkid ft Skillibeng, Shenseea',
  },
  {
    name: 'wizkid-4',
    displayName: 'Money and Love',
    artist: 'Wizkid',
  },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);




// FORM VALIDATIOON
function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  // If the form isn't valid
  if (!isValid) {
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if both password fields match
  if (password1El.value === password2El.value) {
    // If they match, set value to true and borders to green
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);


// PICTURE IN PICTURE
const videoElement = document.getElementById('video');
const button = document.getElementById('start-share');
const buttonEl = document.getElementById('share');

// This will prompt to select media stream and then pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log('Errhhh, Error encountered:', error)
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// Share Screen
buttonEl.addEventListener('click',selectMediaStream);

// loader
const loader = document.getElementById('preloader');
window.addEventListener("load", function() {
  loader.style.display = "none"
});
  
  