const qus = [
    {
        qu: "Which of the following is a chemical change?",
        ans:[
            {op:"Melting ice", point: false},
            {op:"Dissolving sugar in water", point: false},
            {op:"Burning paper", point: true}
        ]
    },
    {
        qu: "Which of the following is NOT a property of acids?",
        ans:[
            {op:"Feels slippery to the touch", point: true},
            {op:"Sour taste", point: false},
            {op:"Turns blue litmus paper red", point: false}
        ]
    },
    {
        qu: "Which functional group is present in alcohols??",
        ans:[
            {op:"-C=O", point: false},
            {op:"-COOH", point: false},
            {op:" -OH", point: true}
        ]
    },
    {
        qu: "What is the function of a commutator in a DC electric motor?",
        ans:[
            {op:"To reverse the direction of the current in the motor", point: true},
            {op:"To convert DC current to AC current", point: false},
            {op:"To increase the speed of the motor", point: false}
        ]
    },
    {
        qu: "What is the common oxidation state of noble gases?",
        ans:[
            {op:"0", point: true},
            {op:"-1", point: false},
            {op:"10", point: false}
        ]
    },
    {
        qu: "Which of the following materials is a good conductor of electricity at room temperature?",
        ans:[
            {op:"Rubber", point: false},
            {op:"Copper", point: true},
            {op:"Wood", point: false}
        ]
    },
    {
        qu: "What is the product of the reaction between hydrochloric acid (HCl) and sodium hydroxide (NaOH)?",
        ans:[
            {op:"HCl + NaOH", point: false},
            {op:"H2O + NaCl", point: true},
            {op:"NaCl + H2O", point: false}
        ]
    },
    {
        qu: "What is the potential difference across a 10-ohm resistor carrying a current of 2 amperes?",
        ans:[
            {op:"5 V", point: false},
            {op:"10 V", point: true},
            {op:"20 V", point: false}
        ]
    },
    {
        qu: "What is the unit of power of a lens?",
        ans:[
            {op:"Diopter (D)", point: true},
            {op:"Newton (N)", point: false},
            {op:"Watt (W)", point: false}
        ]
    },
    {
        qu: "What is the pH value of a neutral solution?",
        ans:[
            {op:"7", point: true},
            {op:"14", point: false},
            {op:"0", point: false}
        ]
    },
    {
        qu: "Which of the following is a balanced chemical equation for the formation of ammonia (NH3) from its elements?",
        ans:[
            {op:"N2 + 2H2 → NH3", point: false},
            {op:"3N2 + H2 → 2NH3", point: false},
            {op:"N2 + 3H2 → NH3", point: true}
        ]
    },
    {
        qu: "The color of an object is determined by the light that is:",
        ans:[
            {op:"Refracted by the object", point: false},
            {op:"Absorbed by the object", point: false},
            {op:"Reflected by the object", point: true}
        ]
    },
    {
        qu: "Which of the following is NOT a type of mirror?",
        ans:[
            {op:"Plane mirror", point: false},
            {op:"Concave mirror", point: false},
            {op:"Refractive mirror", point: true}
        ]
    },
    {
        qu: "Which organic compound is commonly known as wood alcohol?",
        ans:[
            {op:"Methanol", point: true},
            {op:"Ethanol", point: false},
            {op:"Butanol", point: false}
        ]
    },
    {
        qu: "Which of the following elements has the highest electronegativity?",
        ans:[
            {op:"Hydrogen (H)", point: false},
            {op:"Sodium (Na)", point: false},
            {op:"Chlorine (Cl)", point: true}
        ]
    },
    {
        qu: "What is the focal length of a normal human eye when it is looking at a distant object?",
        ans:[
            {op:"Infinity", point: true},
            {op:"Zero", point: false},
            {op:"5 cm", point: false}
        ]
    },
    {
        qu: "What is the focal length of a plane mirror?",
        ans:[
            {op:"Infinite", point: false},
            {op:"Zero", point: true},
            {op:"Equal to its radius of curvature", point: false}
        ]
    },
    {
        qu: "In which period of the periodic table do the lanthanides (rare earth elements) appear?",
        ans:[
            {op:"Period 7", point: false},
            {op:"Period 5", point: true},
            {op:"Period 4", point: false}
        ]
    },
    {
        qu: "Which of the following indicators is commonly used to test for the presence",
        ans:[
            {op:"Lime water", point: true},
            {op:"Methyl orange", point: false},
            {op:"Litmus paper", point: false}
        ]
    },
    {
        qu: "What is the relationship between resistance (R), current (I), and voltage (V) in an electrical circuit?",
        ans:[
            {op:"R = VI", point: false},
            {op:"I = VR", point: false},
            {op:"V = IR", point: true}
        ]
    },
    {
        qu: "What is the SI unit of magnetic field strength?",
        ans:[
            {op:"Ampere (A)", point: false},
            {op:"Tesla (T)", point: true},
            {op:"Coulomb (C)", point: false}
        ]
    },
    {
        qu: "Which of the following is the unit of electromotive force (emf)?",
        ans:[
            {op:"Volt (V)", point: true},
            {op:"Ampere (A)", point: false},
            {op:"Ohm (Ω)", point: false}
        ]
    },
    {
        qu: "The angle of incidence is equal to the angle of reflection in:?",
        ans:[
            {op:"Dispersion", point: false},
            {op:"Refraction", point: false},
            {op:"Diffraction", point: true}
        ]
    },
    {
        qu: "What type of ions do non-metals typically form when they react with metals?",
        ans:[
            {op:"Radicals", point: false},
            {op:"Anions", point: true},
            {op:"Cations", point: false}
        ]
    },
    {
        qu: "The process by which energy is produced in the sun is:",
        ans:[
            {op:"Nuclear fission", point: false},
            {op:"Nuclear decay", point: false},
            {op:"Nuclear fusion", point: true}
        ]
    },
    {
        qu: "Which of the following metals is known for its ability to resist corrosion and is often used in making aircraft and spacecraft?",
        ans:[
            {op:"Lead (Pb)", point: false},
            {op:"Titanium (Ti)", point: true},
            {op:"Aluminium (Al)", point: false}
        ]
    },
    {
        qu: "Which allotrope of carbon is used as a lubricant and is an excellent conductor of electricity?",
        ans:[
            {op:"Amorphous carbon", point: false},
            {op:"Graphite", point: true},
            {op:"Fullerene", point: false}
        ]
    },
    {
        qu: "Which type of energy conversion occurs in a hydroelectric power plant?",
        ans:[
            {op:"Chemical to electrical", point: false},
            {op:"Nuclear to electrical", point: false},
            {op:"Mechanical to electrical", point: true}
        ]
    },
    {
        qu: "Which of the following metals is not found in nature as a free element?",
        ans:[
            {op:"Gold (Au)", point: true},
            {op:"Copper (Cu)", point: false},
            {op:"Iron (Fe)", point: false}
        ]
    },
    {
        qu: "Which of the following is not a component of a biogas plant?",
        ans:[
            {op:"Gas holder", point: false},
            {op:"Solar panels", point: true},
            {op:"Digester", point: false}
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
    numb.innerText = localStorage.getItem("phyli1")
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
                    localStorage.setItem("phyli1",`previous score: ${score}/${qus.length}`)
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