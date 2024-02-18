const qus = [
    {
        qu: "What is the balanced chemical equation for the combustion of methane (CH4)?",
        ans:[
            {op:"CH4 + O2 → CO2 + 2H2O", point: false},
            {op:"CH4 + O2 → C + H2O", point: false},
            {op:"CH4 + O2 → CO2 + H2O", point: true}
        ]
    },
    {
        qu: "What is the chemical formula of sodium hydroxide?",
        ans:[
            {op:"HCl", point: false},
            {op:"NaOH", point: true},
            {op:"Na2O", point: false}
        ]
    },
    {
        qu: "What is the process of converting an ore into its oxide by heating it strongly in the presence of excess air called?",
        ans:[
            {op:"Reduction", point: false},
            {op:"Roasting", point: true},
            {op:"Calcination", point: false}
        ]
    },
    {
        qu: "In which period and group of the periodic table is the element with atomic number 17 located?",
        ans:[
            {op:"Period 3, Group 14", point: false},
            {op:"Period 2, Group 17", point: true},
            {op:"Period 2, Group 1", point: false}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "Which of the following is a property of metals that makes them good conductors of electricity?",
        ans:[
            {op:"Presence of free electrons", point: true},
            {op:"Low melting point", point: false},
            {op:"High electronegativity", point: false}
        ]
    },
    {
        qu: "The element with the atomic number 92 is:",
        ans:[
            {op:"Plutonium (Pu)", point: false},
            {op:"Uranium (U)", point: true},
            {op:"Neptunium (Np)", point: false}
        ]
    },
    {
        qu: "controle",
        ans:[
            {op:"lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"hornbill", point: false}
        ]
    },
    {
        qu: "What is the chemical symbol for the element commonly used as a semiconductor in electronic devices?",
        ans:[
            {op:"Si", point: true},
            {op:"Se", point: false},
            {op:"Sn", point: false}
        ]
    },
    {
        qu: "Which of the following is a secondary alcohol?",
        ans:[
            {op:"Methanol", point: false},
            {op:"Isopropanol", point: true},
            {op:"Ethanol", point: false}
        ]
    },
    {
        qu: "control",
        ans:[
            {op:"earth", point: true},
            {op:"habitats", point: false},
            {op:"species", point: false}
        ]
    },
    {
        qu: "The element that forms the basis for the modern periodic table is:",
        ans:[
            {op:"Hydrogen (H)", point: true},
            {op:"Oxygen (O)", point: false},
            {op:"Helium (He)", point: false}
        ]
    },
    {
        qu: "controle",
        ans:[
            {op:"lemur", point: false},
            {op:"Cheetah", point: true},
            {op:"hornbill", point: false}
        ]
    },
    {
        qu: "company",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "control",
        ans:[
            {op:"earth", point: true},
            {op:"habitats", point: false},
            {op:"species", point: false}
        ]
    },
    {
        qu: "In the IUPAC nomenclature, what is the correct name for CH3-CH2-CH2-CH2-CH3?",
        ans:[
            {op:"Hexane", point: false},
            {op:"Butane", point: false},
            {op:"Propane", point: true}
        ]
    },
    {
        qu: "When a light ray goes from a rarer medium to a denser medium, what happens to its speed and wavelength?",
        ans:[
            {op:"Speed decreases, wavelength increases", point: false},
            {op:"Speed decreases, wavelength decreases", point: true},
            {op:"Speed increases, wavelength decreases", point: false}
        ]
    },
    {
        qu: "company",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "Which hydrocarbon has a triple bond between carbon atoms?",
        ans:[
            {op:"Alkyne", point: true},
            {op:"Alkene", point: false},
            {op:"Alkane", point: false}
        ]
    },
    {
        qu: "goal",
        ans:[
            {op:"oxygen", point: false},
            {op:"grow", point: false},
            {op:"eat", point: true}
        ]
    },
    {
        qu: "The phenomenon of the splitting of white light into its constituent colors is known as:",
        ans:[
            {op:"Dispersion", point: true},
            {op:"Refraction", point: false},
            {op:"Scattering", point: false}
        ]
    },
    {
        qu: "company",
        ans:[
            {op:"19000", point: false},
            {op:"30000", point: false},
            {op:"57000", point: true}
        ]
    },
    {
        qu: "Which part of the eye controls the amount of light entering the eye?",
        ans:[
            {op:"Cornea", point: false},
            {op:"Retina", point: false},
            {op:"Pupil", point: true}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "greatman",
        ans:[
            {op:"Crane", point: true},
            {op:"Condor", point: false},
            {op:"Stork", point: false}
        ]
    },
    {
        qu: "Which color of light deviates the most when passing through a glass prism?",
        ans:[
            {op:"Green", point: false},
            {op:"Blue", point: true},
            {op:"Red", point: false}
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
    numb.innerText = localStorage.getItem("phyli3")
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
                    localStorage.setItem("phyli3",`previous score: ${score}/${qus.length}`)
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