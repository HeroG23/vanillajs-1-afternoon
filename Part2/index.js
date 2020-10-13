console.log('The house always wins!')


const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');


function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
  }
  
const reset = ()=>{
  const diamonds = document.getElementById('diamond')
  const spades = document.getElementById('spades')
  const clubs = document.getElementById('clubs')
  const hearts = document.getElementById('hearts')

  diamonds.style.color = 'grey'
  spades.style.color = 'grey'
  clubs.style.color = 'grey'
  hearts.style.color = 'grey'
}