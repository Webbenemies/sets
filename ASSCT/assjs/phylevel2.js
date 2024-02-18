const qus = [
    {
        qu: "Which of the following is a potential advantage of nuclear fusion as an energy source?",
        ans:[
            {op:"Risk of nuclear accidents", point: false},
            {op:"Abundant fuel supply and minimal radioactive waste", point: true},
            {op:"Limited fuel supply", point: false}
        ]
    },
    {
        qu: "What is the product formed when calcium oxide (CaO) reacts with water (H2O)?",
        ans:[
            {op:"CaO2", point: false},
            {op:"Ca(OH)3", point: false},
            {op:" Ca(OH)2", point: true}
        ]
    },
    {
        qu: "Which of the following is a unit of electrical energy consumption?",
        ans:[
            {op:"Ampere-hour (Ah)", point: false},
            {op:"Watt-hour (Wh)", point: true},
            {op:"Ohm-meter (Ωm)", point: false}
        ]
    },
    {
        qu: "Which part of the human eye is responsible for adjusting the focal length to focus on objects at different distances?",
        ans:[
            {op:"Cornea", point: false},
            {op:"Retina", point: false},
            {op:"Lens", point: true}
        ]
    },
    {
        qu: "Which of the following is a weak acid?",
        ans:[
            {op:"Hydrochloric acid (HCl)", point: false},
            {op:"Acetic acid (CH3COOH)", point: true},
            {op:"Sulfuric acid (H2SO4)", point: false}
        ]
    },
    {
        qu: "What type of lens is used to correct hypermetropia (farsightedness)?",
        ans:[
            {op:"Plano-convex lens", point: false},
            {op:"Concave lens", point: false},
            {op:"Convex lens", point: true}
        ]
    },
    {
        qu: "In a displacement reaction, which element or ion is replaced by another in a compound?",
        ans:[
            {op:"Oxygen", point: false},
            {op:"Hydrogen", point: true},
            {op:"Carbon", point: false}
        ]
    },
    {
        qu: "What is the source of energy in nuclear power plants?",
        ans:[
            {op:"Solar energy", point: false},
            {op:"Fossil fuels", point: false},
            {op:"Nuclear fission", point: true}
        ]
    },
    {
        qu: "When iron reacts with oxygen to form iron oxide, which type of reaction is it?",
        ans:[
            {op:"Combination reaction", point: true},
            {op:"Redox reaction", point: false},
            {op:"Displacement reaction", point: false}
        ]
    },
    {
        qu: "Which of the following salts is responsible for water hardness?",
        ans:[
            {op:"Calcium sulfate", point: true},
            {op:"Sodium carbonate", point: false},
            {op:"Magnesium hydroxide", point: false}
        ]
    },
    {
        qu: "The phenomenon responsible for the formation of a rainbow is:",
        ans:[
            {op:"Diffraction", point: false},
            {op:"Reflection", point: false},
            {op:"Dispersion", point: true}
        ]
    },
    {
        qu: "Which of the following elements has the highest atomic radius?",
        ans:[
            {op:"Oxygen (O)", point: false},
            {op:"Sodium (Na)", point: true},
            {op:"Fluorine (F)", point: false}
        ]
    },
    {
        qu: "When a metal reacts with an acid, which gas is evolved?",
        ans:[
            {op:"Oxygen (O2)", point: false},
            {op:"Hydrogen (H2)", point: true},
            {op:"Carbon dioxide (CO2)", point: false}
        ]
    },
    {
        qu: "Which of the following materials has the highest electrical resistance?",
        ans:[
            {op:"Aluminum", point: false},
            {op:"Copper", point: false},
            {op:"Nichrome", point: true}
        ]
    },
    {
        qu: "Which type of lens is used to correct nearsightedness?",
        ans:[
            {op:"Bifocal lens", point: false},
            {op:"Concave lens", point: true},
            {op:"Plano-convex lens", point: false}
        ]
    },
    {
        qu: "Which element is a transition metal and is used in making jewelry due to its lustrous appearance and resistance to corrosion?",
        ans:[
            {op:"Zinc (Zn)", point: false},
            {op:"Gold (Au)", point: true},
            {op:"Iron (Fe)", point: false}
        ]
    },
    {
        qu: "In a concave mirror, if an object is placed between the focus and the pole, the image formed is:",
        ans:[
            {op:"Virtual and erect", point: true},
            {op:"Real and inverted", point: false},
            {op:"Virtual and inverted", point: false}
        ]
    },
    {
        qu: "Which of the following is a renewable source of energy?",
        ans:[
            {op:"Solar energy", point: true},
            {op:"Natural gas", point: false},
            {op:"Nuclear energy", point: false}
        ]
    },
    {
        qu: "When light passes from air into glass, which property changes?",
        ans:[
            {op:"Speed", point: true},
            {op:"Frequency", point: false},
            {op:"Wavelength", point: false}
        ]
    },
    {
        qu: "The current in a wire is flowing from east to west. If a compass needle is placed below the wire, which direction will the north pole of the compass needle point?",
        ans:[
            {op:"North", point: false},
            {op:"West", point: true},
            {op:"South", point: false}
        ]
    },
    {
        qu: "What is the resistance of a wire if a potential difference of 12 volts across it produces a current of 3 amperes?",
        ans:[
            {op:"4 ohms", point: true},
            {op:"12 ohms", point: false},
            {op:"15 ohms", point: false}
        ]
    },
    {
        qu: "Which element is found at the top of Group 18 (VIII A) in the periodic table?",
        ans:[
            {op:"Krypton (Kr)", point: false},
            {op:"Neon (Ne)", point: false},
            {op:"Helium (He)", point: true}
        ]
    },
    {
        qu: "Which of the following non-metals is a gas at room temperature?",
        ans:[
            {op:"Bromine (Br)", point: true},
            {op:"Phosphorus (P)", point: false},
            {op:"Sulfur (S)", point: false}
        ]
    },
    {
        qu: "How many pi (π) bonds are there in a molecule of benzene (C6H6)?",
        ans:[
            {op:"1", point: false},
            {op:"2", point: true},
            {op:"3", point: false}
        ]
    },
    {
        qu: "When an electric current flows through a straight conductor, what type of magnetic field is produced around it?",
        ans:[
            {op:"Elliptical", point: false},
            {op:"Circular", point: true},
            {op:"Spherical", point: false}
        ]
    },
    {
        qu: "What is the hybridization of carbon in methane (CH4)?",
        ans:[
            {op:"sp2", point: false},
            {op:"sp3", point: true},
            {op:"sp3d2", point: false}
        ]
    },
    {
        qu: "Which non-metal is used in the manufacture of fertilizers due to its ability to fix atmospheric nitrogen?",
        ans:[
            {op:"Carbon (C)", point: false},
            {op:"Nitrogen (N)", point: false},
            {op:"Phosphorus (P)", point: true}
        ]
    },
    {
        qu: "What is the chemical formula of acetone?",
        ans:[
            {op:"CH3COOH", point: false},
            {op:"(CH3)2CO", point: true},
            {op:"CH3OH", point: false}
        ]
    },
    {
        qu: "Which non-metal is an essential component of all organic compounds?",
        ans:[
            {op:"Nitrogen (N)", point: false},
            {op:"Carbon (C)", point: true},
            {op:"Hydrogen (H)", point: false}
        ]
    },
    {
        qu: "Which of the following materials is used as the core of an electromagnet to increase its strength?",
        ans:[
            {op:"Iron", point: true},
            {op:"Wood", point: false},
            {op:"Rubber", point: false}
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
    numb.innerText = localStorage.getItem("phyli2")
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
                    localStorage.setItem("phyli2",`previous score: ${score}/${qus.length}`)
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