const qus = [
    {
        qu: "What is the function of the pituitary gland?",
        ans: [
            { op: "To regulate sugar and salt levels in the body", point: false },
            { op: "To initiate metabolism in the body", point: false },
            { op: "To stimulate growth in all organs", point: true }
        ]
    },
    {
        qu: "What is the percentage of oxygen in the expired air when a person is resting?",
        ans: [
            { op: "12%", point: false },
            { op: "20%", point: false },
            { op: "16%", point: true }
        ]
    },
    {
        qu: "When a few drops of iodine solution are added to rice water, the solution turns blue-black in colour. This indicates that rice water contains:",
        ans: [
            { op: "Starch", point: true },
            { op: "Simple proteins", point: false },
            { op: "Fats", point: false }
        ]
    },
    {
        qu: "The male reproductive parts of a flower, the stamens, are collectively known as",
        ans: [
            { op: "Gynoecium", point: false },
            { op: "Androecium", point: true },
            { op: "Filament", point: false }
        ]
    },
    {
        qu: "Fruits are formed from the",
        ans: [
            { op: "Ovule", point: false },
            { op: "Stigma", point: false },
            { op: "Ovary", point: true }
        ]
    },
    {
        qu: "Which statement shows the interaction of an abiotic component with a biotic component in an ecosystem?",
        ans: [
            { op: "A mouse fighting with another mouse for food", point: false },
            { op: "Rainwater running down into the lake", point: false },
            { op: "An earthworm making a burrow in the soil", point: true }
        ]
    },
    {
        qu: "Why are pollinators such as bees so essential to life on earth?",
        ans: [
            { op: "They provide oxygen", point: false },
            { op: "They turn over the soil helping plants to grow", point: false },
            { op: "They help provide the food we eat", point: true }
        ]
    },
    {
        qu: "At which of the following places are royal Bengal tigers found?",
        ans: [
            { op: "Kaveri delta", point: false },
            { op: "Sundarban delta", point: true },
            { op: "Mahanadi delta", point: false }
        ]
    },
    {
        qu: "Which among the following diseases is not sexually transmitted?",
        ans: [
            { op: "HIV-AIDS", point: false },
            { op: "Gonorrhea", point: false },
            { op: "Hepatitis", point: true }
        ]
    },
    {
        qu: "Which of the following is a linear arrangement of organisms?",
        ans: [
            { op: "Trophic levels", point: false },
            { op: "Food chain", point: true },
            { op: "Community", point: false }
        ]
    },
    {
        qu: "The most rapidly dwindling natural resource in the world is:",
        ans: [
            { op: "Forest", point: true },
            { op: "Water", point: false },
            { op: "Wind", point: false }
        ]
    },
    {
        qu: "AIDS is a deadly disease which is caused by",
        ans: [
            { op: " a virus", point: true },
            { op: "a bacterium", point: false },
            { op: "a fungus", point: false }
        ]
    },
    {
        qu: "In peas, a pure tall (TT) is crossed with a pure short plant(tt). The ratio of pure tall plants to pure short plants in the F2 generation is:",
        ans: [
            { op: "2:1", point: false },
            { op: "1:2", point: false },
            { op: "1:1", point: true }
        ]
    },
    {
        qu: "An environment-friendly practice is",
        ans: [
            { op: "Using AC in every room", point: false },
            { op: "Using CFLs at homes and offices", point: true },
            { op: "Burning plastics", point: false }
        ]
    },
    {
        qu: "How do spores develop into Rhizopus?",
        ans: [
            { op: "Spores combine with other spores and grow", point: false },
            { op: "Spores divide and grow into a new individual", point: true },
            { op: "Spores enlarge in size for the growth of new individual", point: false }
        ]
    },
    {
        qu: "Which option explains the disadvantage of using fossil fuels as energy sources?",
        ans: [
            { op: "It is extracted from deep inside the Earth", point: false },
            { op: "It releases harmful gases into the atmosphere when they burn", point: true },
            { op: "It uses oxygen in the process of burning", point: false }
        ]
    },
    {
        qu: "A person sees an object closer to his eyes. What changes will take place in his eyes?",
        ans: [
            { op: "the pupil size will expand", point: false },
            { op: "the ciliary muscles will contract", point: true },
            { op: "the light entering the eye will be more", point: false }
        ]
    },
    {
        qu: "Carnivores represent",
        ans: [
            { op: "Reducers", point: false },
            { op: "Primary consumers", point: false },
            { op: "Secondary and tertiary consumers", point: true }
        ]
    },
    {
        qu: "Exchange of genetic material takes place in:",
        ans: [
            { op: "Asexual reproduction", point: false },
            { op: "Vegetative reproduction", point: false },
            { op: "Sexual reproduction", point: true }
        ]
    },
    {
        qu: "When was the Ganga Action Plan launched?",
        ans: [
            { op: "1985", point: false },
            { op: "1986", point: true },
            { op: "1987", point: false }
        ]
    },
    {
        qu: " Which option justifies that the Sun appears red at sunrise and sunset?",
        ans: [
            { op: "Red has a high wavelength, so it travels a longer distance", point: true },
            { op: "The distance between the sun and earth reduces", point: false },
            { op: "Red scatters highest by the atmosphere", point: false }
        ]
    },
    {
        qu: "Which of the following phenomena of light are involved in the formation of a rainbow?",
        ans: [
            { op: "Refraction, dispersion and total internal reflection", point: true },
            { op: "Dispersion, scattering and total internal reflection", point: false },
            { op: "Refraction, dispersion and internal reflection", point: false }
        ]
    },
    {
        qu: "Which parts of the brain control blood pressure?",
        ans: [
            { op: "Pons, medulla, cerebellum", point: true },
            { op: "Cord, skull, cerebrum", point: false },
            { op: "Pons, medulla, pituitary", point: false }
        ]
    },
    {
        qu: "When light rays enter the eye, most of the refraction occurs at the",
        ans: [
            { op: "Crystalline lens", point: false },
            { op: "The outer surface of the cornea", point: true },
            { op: "Pupil", point: false }
        ]
    },
    {
        qu: "Problem of solid waste disposal can be reduced through",
        ans: [
            { op: "Recycling", point: true },
            { op: "Lesser pollution", point: false },
            { op: "Population control", point: false }
        ]
    },
    {
        qu: "The opening and closing of the stomatal pore depend upon:",
        ans: [
            { op: "Concentration of CO2", point: false },
            { op: "Oxygen", point: false },
            { op: "Water in the guard cells", point: true }
        ]
    },
    {
        qu: "The surprise products formed in the experiment conducted by Miller and Urey were:",
        ans: [
            { op: "nucleotides", point: false },
            { op: "nucleic acids", point: false },
            { op: "amino acids", point: true }
        ]
    },
    {
        qu: "Which of the following does Darwin’s theory not include?",
        ans: [
            { op: "Survival of the fittest", point: false },
            { op: "Natural Selection", point: false },
            { op: "Evolution Through Inheritance", point: true }
        ]
    },
    {
        qu: "A plant gets rid of excess water through transpiration. What is the method used by plants to get rid of solid waste products?",
        ans: [
            { op: "Shedding of yellow leaves", point: true },
            { op: "Shortening of stem", point: false },
            { op: "Dropping down fruit", point: false }
        ]
    },
    {
        qu: "When white light enters a glass prism from the air, the angle of deviation is least for",
        ans: [
            { op: "red light", point: true },
            { op: "violet light", point: false },
            { op: "yellow light", point: false }
        ]
    },


]

// ss

let boody = document.querySelector("body")

let audi = document.createElement("audio")
const loadheader = () => {
    let header = document.createElement("header")
    let h1 = document.createElement("h1")
    h1.innerText = "let's get started"
    audi.setAttribute("controls", "true")
    audi.style.display = "none"
    header.appendChild(h1)
    header.appendChild(audi)
    boody.insertAdjacentElement("afterbegin", header)
}

const loadnav = () => {
    let numb = document.createElement("p")
    let navbar = document.createElement("div")
    navbar.setAttribute("id", "backnav")
    numb.setAttribute("id", "num")
    numb.innerText = localStorage.getItem("bioli1")
    let backimg = document.createElement("img")
    backimg.setAttribute("id", "backreload")
    backimg.src = "../ASSCT/back.png"
    navbar.appendChild(backimg)
    navbar.appendChild(numb)
    boody.insertAdjacentElement("afterbegin", navbar)
}

const btnevent = () => {
    let backbtnn = document.getElementById("backreload");
    backbtnn.addEventListener("click", () => {
        console.log("subhro");
        location.reload()
    })
}

const loadallele = async () => {
    await loadheader()
    await loadnav()
    await btnevent()
}
loadallele() 



let score = 0;
let upbox = document.getElementById("box")
qus.forEach((e, index) => {
    let numbering = index + 1
    let box = document.createElement("div")
    box.setAttribute("class", "eachq")
    let disqu = document.createElement("h1")
    disqu.innerHTML = `${numbering}. ${e.qu}`
    upbox.appendChild(box).appendChild(disqu)

    e.ans.forEach((b) => {
        let disans = document.createElement("button")
        disans.innerHTML = b.op
        disans.setAttribute("data-pop", `${b.point}`)
        box.appendChild(disans)
        disans.addEventListener("click", (d) => {
            let iscorr = b.point == true
            let botton = d.target
            if (iscorr) {
                audi.src = "../ASSCT/winsound.mp3"
                audi.play()
                botton.classList.add("green")
                score++
            } else {
                audi.src = "../ASSCT/wrong.mp3"
                audi.play()
                botton.classList.add("red")
            }
            let parent = disans.parentNode
            let child = Array.from(parent.children)

            Array.from(child).forEach((but) => {
                if (but.dataset.pop === "true") {
                    but.classList.add("green")
                }
            })

            child.forEach((e) => {
                e.disabled = true
            });
            
            if (qus.length == index + 1) {
                setTimeout(()=>{
                    localStorage.setItem("bioli1",`previous score: ${score}/${qus.length}`)
                    showscre(score)
                },600)
            }
        })
    })
})


const showscre = (sco) => {
    boody.innerHTML = ""
    let scorebox = document.createElement("div");
    scorebox.setAttribute("id", "scorebox")
    let pp = document.createElement("p")
    pp.innerText = `your score is ${sco} out of ${qus.length}`
    let scorebtn = document.createElement("button")
    scorebtn.innerText = "practice more"
    scorebtn.addEventListener("click", () => { location.reload() })
    scorebox.appendChild(pp)
    scorebox.appendChild(scorebtn)
    boody.insertAdjacentElement("afterbegin", scorebox)
}