// Cálculo do peso em outros planetas

function getGravidade(val) {
  let g = null;

  switch (val) {
    case 'mercurio':
    case 'marte': g = 3.7;
      break;
    case 'venus': g = 8.9;
      break;
    case 'terra': g = 9.8;
      break;
    case 'jupiter': g = 24.7;
      break;
    case 'saturno': g = 10.4;
      break;
    case 'urano': g = 8.7;
      break;
    case 'netuno': g = 11.15;
      break;
    case 'plutao': g = 0.6;
      break;
    case 'lua': g = 1.62;
      break;
    case 'sol': g = 274;
  }

  return g;
}

let botaoEl = document.querySelector('#calc-peso');

// selectEl.addEventListener('change', function() {
//   alert('A gravidade no planeta selecionado é ' + getGravidade(this.value));
// });

// Indicar mudança da gravidade

botaoEl.addEventListener('click', function() {
  let selectEl = document.querySelector('select#planetas');
  let massaEl = document.querySelector('#massa');
  let pesoEl = document.querySelector('#peso');

  if(massaEl.value >= 0) {
    peso.style.color = 'initial';
    peso.value = ((massaEl.value * getGravidade(selectEl.value)).toFixed(2) + ' N');
  }
  else {
    peso.style.color = 'darkred';
    peso.value = 'Massa Negativa';
  }
})
