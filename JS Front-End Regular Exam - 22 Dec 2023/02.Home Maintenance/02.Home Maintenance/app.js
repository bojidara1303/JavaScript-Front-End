window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const taskList = document.getElementById("task-list");
        const doneList = document.getElementById("done-list")

        const place = document.getElementById("place");
        const action = document.getElementById("action");
        const person = document.getElementById("person");

        const placeValue = place.value;
        const actionValue = action.value;
        const personValue = person.value;

        if (!placeValue || !actionValue || !personValue) {
            return
        };

        const liElement = document.createElement("li");
        liElement.classList.add("clean-task");

        const articleElement = document.createElement("article");

        const placePar = document.createElement("p");
        placePar.textContent = `Place:${placeValue}`;

        const actionPar = document.createElement("p");
        actionPar.textContent = `Action:${actionValue}`;

        const personPar = document.createElement("p");
        personPar.textContent = `Person:${personValue}`;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons")

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", (e) => {
            liElement.remove();

            place.value = placeValue;
            action.value = actionValue;
            person.value = personValue;

        })

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("done");
        doneBtn.textContent = "Done";
        doneBtn.addEventListener("click", (e) => {
            taskList.removeChild(liElement);
            doneList.appendChild(liElement);

            editBtn.remove();
            doneBtn.remove();
            buttonsDiv.remove();

            const delBtn = document.createElement("button");
            delBtn.classList.add("delete");
            delBtn.textContent = "Delete";
            delBtn.addEventListener("click", (e) => {
                doneList.removeChild(liElement)
                // liElement.remove();
            })
            liElement.appendChild(delBtn);
        })

        taskList.appendChild(liElement);
        liElement.appendChild(articleElement);
        articleElement.appendChild(placePar);
        articleElement.appendChild(actionPar);
        articleElement.appendChild(personPar);
        liElement.appendChild(buttonsDiv);
        buttonsDiv.appendChild(editBtn)
        buttonsDiv.appendChild(doneBtn)

        place.value = "";
        action.value = "";
        person.value = "";
    })

}