window.addEventListener("load", solve);

function solve() {
  const adoptBtn = document.getElementById("adopt-btn");
  adoptBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let typeAnimal = document.getElementById("type");
    let animalAge = document.getElementById("age");
    let animalGender = document.getElementById("gender");

    let adoptionInfo = document.getElementById("adoption-info");
    let adoptedList = document.getElementById("adopted-list");

    let typeAnimalValue = typeAnimal.value;
    let animalAgeValue = animalAge.value;
    let animalGenderValue = animalGender.value;

    if (!typeAnimalValue || !animalAgeValue || !animalGenderValue) {
      return
    }

    let liElement = document.createElement("li");
    let articleElement = document.createElement("article");
    let namePar = document.createElement("p")
    namePar.textContent = `Pet:${typeAnimalValue}`;

    let genderPar = document.createElement("p");
    genderPar.textContent = `Gender:${animalGenderValue}`;

    let agePar = document.createElement("p");
    agePar.textContent = `Age:${animalAgeValue}`;

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("buttons");

    let editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      adoptionInfo.removeChild(liElement)

      typeAnimal.value = typeAnimalValue;
      animalAge.value = animalAgeValue;
      animalGender.value = animalGenderValue;
    })

    let doneBtn = document.createElement("button")
    doneBtn.classList.add("done-btn")
    doneBtn.textContent = "Done"
    doneBtn.addEventListener("click", (e) => {
      e.preventDefault();

      adoptionInfo.removeChild(liElement)
      adoptedList.appendChild(liElement);

      editBtn.remove();
      doneBtn.remove();

      let clearBtn = document.createElement("button")
      clearBtn.classList.add("clear-btn")
      clearBtn.textContent = "Clear"
      clearBtn.addEventListener("click", (e) => {
        e.preventDefault();
        adoptedList.innerHTML = ""
      })
      liElement.appendChild(clearBtn)
    })

    articleElement.appendChild(namePar)
    articleElement.appendChild(genderPar)
    articleElement.appendChild(agePar)
    btnDiv.appendChild(editBtn)
    btnDiv.appendChild(doneBtn)
    liElement.appendChild(articleElement)
    liElement.appendChild(btnDiv)
    adoptionInfo.appendChild(liElement)




    typeAnimal.value = "";
    animalAge.value = "";
    animalGender.value = "";

  })





}
