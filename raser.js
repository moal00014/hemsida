// Viggo start

const type = new URLSearchParams(window.location.search).get("type")

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

let type_name;
let breeds;
if (type === "cat") {
    type_name = "Katter";
    breeds = [
        {
            name: "Ragdoll",
            desc: "Ragdoll är en stor, kraftfull och imponerande ras med distinkt teckning"
        }, {
            name: "Sibirisk",
            desc: "Sibirisk katt är en tillgiven ras som älskar uppmärksamhet och är därför utmärkta sällskapsdjur."
        }, {
            name: "Maine Coon",
            desc: "Maine coon är den största av alla kattraser och har en muskulös kropp och robusta ben. Huvudet har ett fyrkantigt nosparti och stora öron, som är breda vid basen och högt placerade."
        }
    ]
} else if (type === "dog") {
    type_name = "Hundar";
    breeds = [
        {
            name: "Shiba Inu",
            desc: "Shiba är en hundras från Japan. Det är en liten, nyfiken och alert spetshund som är populär som sällskapshund"
        }, {
            name: "Pomeranian",
            desc: "Pomeranian är en mycket trevlig sällskapshund och som alla hundar behöver den uppfostran."
        }, {
            name: "Labrador",
            desc: "Labradorer fungerar oftast bra ihop med andra hundar, husdjur och barn, under förutsättning att hunden har fått träna på att inte vara så livlig och översvallande."
        }
    ]
} else {
    throw "Invalid type";
}

window.onload = function() {
    const title = document.querySelector("header > h1");
    title.innerHTML = title.innerHTML.replace("#NAME#", type_name);

    const breed_grid = document.getElementById("breed-grid");
    const breed_template = breed_grid.querySelector(".breed");
    breed_template.remove();

    breeds.forEach(breed => {
        var breed_node = breed_template.cloneNode(true);
        breed_node.querySelector(".breed-name").innerHTML = breed.name;
        breed_node.querySelector(".breed-desc").innerHTML = breed.desc;

        const missings_list = breed_node.querySelector(".missings");
        const missing_template = missings_list.querySelector(".missing-item");
        missing_template.remove();

        missings[breed.name].forEach(missing => {
            var missing_node = missing_template.cloneNode(true);
            missing_node.querySelector(".missing-number").innerHTML = missing;

            missings_list.appendChild(missing_node);
        })

        breed_grid.appendChild(breed_node);
    })
}

// Viggo slut