// Includes information about actions when buttons are pressed

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Declaring different ids that the "Show More" buttons can have
    const sciOlyButton = document.querySelector("#club001");
    const decaButton = document.querySelector("#club002");
    const chessClubButton = document.querySelector("#club003");
    const footballButton = document.querySelector("#club004");
    const hi1Button = document.querySelector("#club005");
    const hiButton = document.querySelector("#club006");

//Declaring different ids that the club modals can have
    const sciOlyModal = document.querySelector('#modalclub001');
    const decaModal = document.querySelector('#modalclub002');
    const chessClubModal = document.querySelector('#modalclub003');
    const footballModal = document.querySelector('#modalclub004');
    const hi1Modal = document.querySelector('#modalclub005');
    const hiModal = document.querySelector('#modalclub006');

//Declaring different ids that the "Close Modal" buttons can have
    const sciOlyDelete = document.querySelector('#deleteclub001');
    const decaDelete = document.querySelector('#deleteclub002');
    const chessClubDelete = document.querySelector('#deleteclub003');
    const footballDelete = document.querySelector('#deleteclub004');
    const hi1Delete = document.querySelector('#deleteclub005');
    const hiDelete = document.querySelector('#deleteclub006');

//Declaring different ids that the modal backgrounds can have
    const sciOlyBg = document.querySelector('#modalbgclub001');
    const decaBg = document.querySelector('#modalbgclub002');
    const chessClubBg = document.querySelector('#modalbgclub003');
    const footballBg = document.querySelector('#modalbgclub004');
    const hi1Bg = document.querySelector('#modalbgclub005');
    const hiBg = document.querySelector('#modalbgclub006');

//Activate respective modals when the "Show More" button for its respective club is clicked
    if(sciOlyButton){
        sciOlyButton.addEventListener('click', () => {
          sciOlyModal.classList.add('is-active');
        })
    }
    if(decaButton){
        decaButton.addEventListener('click', () => {
          decaModal.classList.add('is-active');
        })
    }
    if(chessClubButton){
        chessClubButton.addEventListener('click', () => {
          chessClubModal.classList.add('is-active');
        })
    }
    if(footballButton){
        footballButton.addEventListener('click', () => {
          footballModal.classList.add('is-active');
        })
    }
    if(hi1Button){
        hi1Button.addEventListener('click', () => {
          hi1Modal.classList.add('is-active');
        })
    }
    if(hiButton){
        hiButton.addEventListener('click', () => {
          hiModal.classList.add('is-active');
        })
    }
    if(sciOlyButton){
      sciOlyButton.addEventListener('click', () => {
        sciOlyModal.classList.add('is-active');
      })
  }

//Close respective modals when the "Close Modal" button for it is clicked
  if(sciOlyDelete){
    sciOlyDelete.addEventListener('click', () => {
      sciOlyModal.classList.remove('is-active');
    })
  }
  if(decaDelete){
      decaDelete.addEventListener('click', () => {
        decaModal.classList.remove('is-active');
      })
  }
  if(chessClubDelete){
      chessClubDelete.addEventListener('click', () => {
        chessClubModal.classList.remove('is-active');
      })
  }
  if(footballDelete){
      footballDelete.addEventListener('click', () => {
        footballModal.classList.remove('is-active');
      })
  }
  if(hi1Delete){
      hi1Delete.addEventListener('click', () => {
        hi1Modal.classList.remove('is-active');
      })
  }
  if(hiDelete){
      hiDelete.addEventListener('click', () => {
        hiModal.classList.remove('is-active');
      })
  }

//Close respective modals when its background is clicked
  if(sciOlyBg){
    sciOlyBg.addEventListener('click', () => {
      sciOlyModal.classList.remove('is-active');
    })
  }
  if(decaBg){
      decaBg.addEventListener('click', () => {
        decaModal.classList.remove('is-active');
      })
  }
  if(chessClubBg){
      chessClubBg.addEventListener('click', () => {
        chessClubModal.classList.remove('is-active');
      })
  }
  if(footballBg){
      footballBg.addEventListener('click', () => {
        footballModal.classList.remove('is-active');
      })
  }
  if(hi1Bg){
      hi1Bg.addEventListener('click', () => {
        hi1Modal.classList.remove('is-active');
      })
  }
  if(hiBg){
      hiBg.addEventListener('click', () => {
        hiModal.classList.remove('is-active');
      })
  }


//Declaring ids of different category selector buttons
const catVolunteering = document.querySelector("#catVolunteering");
const catScience = document.querySelector("#catScience");
const catSports = document.querySelector("#catSports");
const catArts = document.querySelector("#catArts");

// Highlighting the selected category button and un-highlighting all other category buttons
if(catVolunteering){
  catVolunteering.addEventListener('click', () => {
    catVolunteering.classList.add('is-info')
    catScience.classList.remove('is-info')
    catSports.classList.remove('is-info')
    catArts.classList.remove('is-info')
  })
}

if(catScience){
  catScience.addEventListener('click', () => {
      catScience.classList.add('is-info')
      catVolunteering.classList.remove('is-info')
      catSports.classList.remove('is-info')
      catArts.classList.remove('is-info')
  })
}

if(catSports){
  catSports.addEventListener('click', () => {
      catSports.classList.add('is-info')
      catVolunteering.classList.remove('is-info')
      catScience.classList.remove('is-info')
      catArts.classList.remove('is-info')
  })
}

if(catArts){
  catArts.addEventListener('click', () => {
      catArts.classList.add('is-info')
      catVolunteering.classList.remove('is-info')
      catScience.classList.remove('is-info')
      catSports.classList.remove('is-info')
  })
}