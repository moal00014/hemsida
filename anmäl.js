
function updateBreeds() {
    let animal_type = document.getElementById("animal-type");
    let type = animal_type[animal_type.selectedIndex].value

    let breeds;
    if (type === "cat") {
        breeds = [
            "Ragdoll",
            "Sibirisk",
            "Maine Coon",
        ]
    } else if (type === "dog") {
        breeds = [
            "Shiba Inu",
            "Pomeranian",
            "Labrador",
        ]
    } else {
        throw "Invalid type";
    }

    const breed_choice = document.getElementById("breed-choice");
    while (breed_choice.firstChild) {
        breed_choice.removeChild(breed_choice.firstChild);
    }
    breeds.forEach(breed => {
        let breed_choice_node = breed_choice_template.cloneNode(true);

        breed_choice_node.value = breed;
        breed_choice_node.innerHTML = breed;

        breed_choice.appendChild(breed_choice_node)
    })
}

function addMissing() {
    // Om missings inte finns, lägg in en massa default nummer
    if (!localStorage.getItem("missings")) {
        localStorage.setItem("missings", JSON.stringify({
            "Ragdoll": [
                "0011-8459030",
                "0470-2932006",
            ],
            "Sibirisk": [
                "0325-2188986",
                "0926-4712765",
            ],
            "Maine Coon": [
                "054-9514748",
                "0451-5877360",
            ],
            "Shiba Inu": [
                "021-1380561",
                "0240-5648178",
            ],
            "Pomeranian": [
                "0143-1065681",
                "0457-8104244",
            ],
            "Labrador": [
                "0247-1516480",
                "0455-7768924",
            ],
        }));
    }
    const missings = JSON.parse(localStorage.getItem("missings"));

    let breed_choice = document.getElementById("breed-choice");
    let breed = breed_choice[breed_choice.selectedIndex].value;
    
    let phone_number = document.getElementById("phone").value;

    missings[breed].push(phone_number);
    localStorage.setItem("missings", JSON.stringify(missings));

    alert("Numret har blivit tillagt");
    
    return false;
}

let breed_choice_template;

window.onload = function() {
    breed_choice_template = document.getElementById("breed-choice").firstElementChild;
    breed_choice_template.remove();

    updateBreeds();
}