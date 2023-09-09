window.addEventListener("load", solve);

function solve() {

  const nextBtn = document.getElementById('next-btn')
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const studentName = document.getElementById('student');
    const university = document.getElementById('university');
    const score = document.getElementById('score');

    const studentNameValue = studentName.value;
    const universityValue = university.value;
    const scoreValue = score.value;

    if (studentNameValue === '' || universityValue === '' || scoreValue === '') {
      return
    }

    const liElement = document.createElement('li');
    liElement.classList.add('application');

    const articleEl = document.createElement('article');

    const h4Element = document.createElement('h4');
    h4Element.textContent = studentNameValue;

    const universityParagraph = document.createElement('p');
    universityParagraph.textContent = `University: ${universityValue}`;

    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Score: ${scoreValue}`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', (e) => {
      studentName.value = studentNameValue;
      university.value = universityValue;
      score.value = scoreValue;

      liElement.remove()
      nextBtn.removeAttribute('disabled')
    })

    const applyBtn = document.createElement('button');
    applyBtn.textContent = 'apply';
    applyBtn.classList.add('action-btn');
    applyBtn.classList.add('apply');
    applyBtn.addEventListener('click', (e) => {
      const schoolarshipCandidates = document.getElementById('candidates-list');
      schoolarshipCandidates.appendChild(liElement);

      editBtn.remove();
      applyBtn.remove();
    })


    liElement.appendChild(articleEl);
    articleEl.appendChild(h4Element)
    articleEl.appendChild(universityParagraph)
    articleEl.appendChild(scoreParagraph)
    liElement.appendChild(editBtn)
    liElement.appendChild(applyBtn)

    const previewList = document.getElementById('preview-list');
    previewList.appendChild(liElement);

    nextBtn.setAttribute('disabled', true)

    studentName.value = '';
    university.value = '';
    score.value = '';

    
  })


}
