const button = document.querySelector('button');
const funFactPara = document.getElementById('fun-fact');

const funFacts = [
    "Pragati thinks GREENLAND Is Actually in NEPAL!!"
];

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  funFactPara.textContent = funFacts[randomIndex];
});
