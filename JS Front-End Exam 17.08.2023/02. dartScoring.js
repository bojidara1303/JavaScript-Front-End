function solve() {
    const scoreBoardList = document.getElementById('scoreboard-list');
    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      const playerName = document.getElementById('player');
      const playerScore = document.getElementById('score');
      const playerRound = document.getElementById('round');
  
      const playerNameValue = playerName.value;
      const playerScoreValue = playerScore.value;
      const playerRoundValue = playerRound.value;
  
      if (playerNameValue == '' || playerScoreValue == '' || playerRoundValue == '') {
        return
      }
  
      const liElement = document.createElement('li');
      liElement.classList.add('dart-item');
  
      const articleEl = document.createElement('article');
  
      const namePar = document.createElement('p');
      namePar.textContent = playerNameValue;
  
      const scorePar = document.createElement('p');
      scorePar.textContent = `Score: ${playerScoreValue}`;
  
      const roundPar = document.createElement('p');
      roundPar.textContent = `Round: ${playerRoundValue}`;
  
  
      const editButton = document.createElement('button');
      editButton.textContent = 'edit';
      editButton.classList.add('btn');
      editButton.classList.add('edit');
      editButton.addEventListener('click', (e) => {
        playerName.value = playerNameValue;
        playerScore.value = playerScoreValue;
        playerRound.value = playerRoundValue;
  
        liElement.remove()
        addBtn.removeAttribute('disabled')
      })
  
      const okayButton = document.createElement('button');
      okayButton.textContent = 'ok';
      okayButton.classList.add('btn');
      okayButton.classList.add('ok');
      okayButton.addEventListener('click', (e) => {
        
        scoreBoardList.appendChild(liElement);
     
        editButton.remove();
        okayButton.remove();
        addBtn.removeAttribute('disabled')
      })
  
      liElement.appendChild(articleEl);
      articleEl.appendChild(namePar)
      articleEl.appendChild(scorePar)
      articleEl.appendChild(roundPar)
      liElement.appendChild(editButton)
      liElement.appendChild(okayButton)
  
      const sureList = document.getElementById('sure-list');
      sureList.appendChild(liElement);
  
      playerName.value = '';
      playerScore.value = '';
      playerRound.value = '';
      addBtn.setAttribute('disabled', true)
  
  
      const divEl = document.getElementById('players-container')
  
      const clearBtn = divEl.querySelector('button')
      clearBtn.addEventListener('click', (е) => {
        scoreBoardList.innerHTML = ''
        addBtn.removeAttribute('disabled')
      })
    }
  
  
  
    )
  }