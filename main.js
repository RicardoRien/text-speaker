const closeBtn = document.querySelector('.close-btn'); 
const alertHelp = document.querySelector('.alert');

// Voice
const form = document.querySelector("form");

document.querySelector("button").addEventListener("click", () => {
  const formData = new FormData(form);
  const voice = formData.get("voice");
  responsiveVoice.speak(document.querySelector("input").value, voice);
});

// Help / Alert
document.querySelector('.help').onclick = () => alertHelp.style.display='block';

closeBtn.onclick = () => closeBtn.parentElement.style.display='none';