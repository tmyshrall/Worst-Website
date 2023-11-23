var slider = document.getElementById("slider");
var output = document.getElementById("sliderValue");

function updateDate(value) {
    var startDate = new Date(1000, 0, 1); 

    var selectedDate = new Date(startDate);
    selectedDate.setDate(startDate.getDate() + value);

    var formattedDate = selectedDate.toDateString();
    output.innerHTML = formattedDate;
}

    
updateDate(slider.value);

slider.oninput = function() {
    updateDate(this.value);
};


const input = document.getElementById('username');
input.addEventListener('input', function (event) {
  let currentInput = input.value;
  let randomInput = '';

  for (let i = 0; i < currentInput.length; i++) {
    let randomChar = String.fromCharCode(Math.random() * (126 - 33) + 33);
    randomInput += randomChar;
  }

  input.value = randomInput;
});




function populateDropdown(selectId, limit) {
  const select = document.getElementById(selectId);

  for (let i = 1; i <= limit; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.add(option);
  }
}

populateDropdown('phoneNumber1', 999);
populateDropdown('phoneNumber2', 999);
populateDropdown('phoneNumber3', 9999);



function playMorseOnClick() {
  playBeep(150);
}

function playBeep(duration) {
  var audio = document.getElementById("morseAudio");
  audio.currentTime = 0;  
  audio.play();

  
  setTimeout(function () {
      audio.pause();
  }, duration);
}

function openPopup() {
          
  document.getElementById('TAC').style.display = 'block';
}
    
function closePopup() {
  document.getElementById('checkbox').disabled = false;
  document.getElementById('TAC').style.display = 'none';
}
