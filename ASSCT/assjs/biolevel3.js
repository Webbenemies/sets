const qus = [
    {
        qu: "Which of the following is considered the father of genetics?",
        ans:[
            {op:"Charles Darwin", point: false},
            {op:"Gregor Mendel", point: true},
            {op:"Albert Einstein", point: false}
        ]
    },
    {
        qu: "Which of the following organelles is responsible for the synthesis of ATP and is often referred to as the Powerhouse of the cell?",
        ans:[
            {op:"Mitochondrion", point: true},
            {op:"Chloroplast", point: false},
            {op:"Golgi apparatus", point: false}
        ]
    },
    {
        qu: "In which phase of the cell cycle does DNA replication occur?",
        ans:[
            {op:"G1 phase", point: false},
            {op:"M phase", point: false},
            {op:"S phase", point: true}
        ]
    },
    {
        qu: "Which of the following blood vessels carries oxygenated blood from the lungs to the heart?",
        ans:[
            {op:"Aorta", point: false},
            {op:"Pulmonary artery", point: false},
            {op:"Pulmonary vein", point: true}
        ]
    },
    {
        qu: "In which part of the digestive system does most of the absorption of nutrients occur?",
        ans:[
            {op:"Esophagus", point: false},
            {op:"Small intestine", point: true},
            {op:"Large intestine", point: false}
        ]
    },
    {
        qu: "Which gland secretes the growth hormone?",
        ans:[
            {op:"Adrenal", point: false},
            {op:"Hypothalamus", point: false},
            {op:"Pituitary gland", point: true}
        ]
    },
    {
        qu: "Which hormone is responsible for regulating blood sugar levels in the human body?",
        ans:[
            {op:"Estrogen", point: false},
            {op:"Glucagon and Insulin", point: true},
            {op:"Testosterone", point: false}
        ]
    },
    {
        qu: "What is the process by which green plants convert sunlight into chemical energy in the form of glucose?",
        ans:[
            {op:"Fermentation", point: false},
            {op:"Photosynthesis", point: true},
            {op:"Glycolysis", point: false}
        ]
    },
    {
        qu: "Which of the following is NOT a type of white blood cell?",
        ans:[
            {op:"Platelet", point: true},
            {op:"Monocyte", point: false},
            {op:"Neutrophil", point: false}
        ]
    },
    {
        qu: "Which structure in a plant cell is responsible for storing water, ions, and waste products?",
        ans:[
            {op:"Ribosome", point: false},
            {op:"Chloroplast", point: false},
            {op:"Vacuole", point: true}
        ]
    },
    {
        qu: "What is the term for the specialized cells responsible for producing antibodies in the immune system?",
        ans:[
            {op:"T cells", point: false},
            {op:"B cells", point: true},
            {op:"Platelets", point: false}
        ]
    },
    {
        qu: "Which of the following is NOT a function of the liver?",
        ans:[
            {op:"Producing digestive enzymes", point: true},
            {op:"Synthesizing proteins", point: false},
            {op:"Storing glycogen", point: false}
        ]
    },
    {
        qu: "Which blood type is considered the universal donor?",
        ans:[
            {op:"B", point: false},
            {op:"AB", point: false},
            {op:"O", point: true}
        ]
    },
    {
        qu: "What is the function of the enzyme amylase in digestion?",
        ans:[
            {op:"Breaks down carbohydrates", point: true},
            {op:"Breaks down fats", point: false},
            {op:"Breaks down proteins", point: false}
        ]
    },
    {
        qu: "During adolescence, several changes occur in the human body. Mark one change from the following associated with sexual maturation in boys",
        ans:[
            {op:"Weight gain", point: false},
            {op:"Cracking of voice", point: true},
            {op:"Increase in height", point: false}
        ]
    },
    {
        qu: "The main cause for abundant coliform bacteria in the river Ganga is",
        ans:[
            {op:"disposal of human excreta directly", point: true},
            {op:"washing of clothes", point: false},
            {op:"immersion of ashes.", point: false}
        ]
    },
    {
        qu: "Which gas is formed, when fossil fuels are burnt in insufficient air (oxygen)?",
        ans:[
            {op:"Carbon dioxide", point: false},
            {op:"Both CO2 and CO", point: false},
            {op:"Carbon monoxide", point: true}
        ]
    },
    {
        qu: "Which of the following canals brought about greenery in Rajasthan ?",
        ans:[
            {op:"Rajiv Gandhi Canal", point: false},
            {op:"Indira Gandhi Canal", point: true},
            {op:"hJawaharlal Canalornbill", point: false}
        ]
    },
    {
        qu: "The pH range most conducive for the life of freshwater plants and animals is:",
        ans:[
            {op:"6.5 to 7.5", point: true},
            {op:"3.5 to 5.0", point: false},
            {op:"2.0 to 3.5", point: false}
        ]
    },
    {
        qu: "In humans, which hormone regulates calcium levels in the blood?",
        ans:[
            {op:"Thyroxine", point: false},
            {op:"Parathyroid hormone", point: true},
            {op:"Estrogen", point: false}
        ]
    },
    {
        qu: "What is the process by which water is lost as vapor from the aerial parts of a plant called?",
        ans:[
            {op:"Capillarity", point: false},
            {op:"Photosynthesis", point: false},
            {op:"Transpiration", point: true}
        ]
    },
    {
        qu: "Which of the following is not a function of the skeletal system?",
        ans:[
            {op:"Blood cell production", point: false},
            {op:"Muscle contraction", point: true},
            {op:"Support and protection", point: false}
        ]
    },
    {
        qu: "Which of the following is the important characteristic of Emphysema?",
        ans:[
            {op:"Thickening of the artery walls of the lungs", point: false},
            {op:"Destruction of the alveolar wall and air sacs in the lungs are damaged", point: true},
            {op:"Increase in the growth of the lung tissue", point: false}
        ]
    },
    {
        qu: "Which one of the following is an example of renewable resource ?",
        ans:[
            {op:"Natural gas", point: false},
            {op:"Petroleum", point: false},
            {op:"Wildlife", point: true}
        ]
    },
    {
        qu: "Which international treaty aims to protect the ozone layer by phasing out the production and use of ozone-depleting substances?",
        ans:[
            {op:"Kyoto Protocol", point: false},
            {op:"Montreal Protocol", point: true},
            {op:"Rio Declaration", point: false}
        ]
    },
    {
        qu: "In which type of cell division do homologous chromosomes separate, resulting in genetic diversity?",
        ans:[
            {op:"Meiosis II", point: false},
            {op:"Meiosis I", point: true},
            {op:"Mitosis", point: false}
        ]
    },
    {
        qu: "Which part of the human ear is responsible for maintaining balance and equilibrium?",
        ans:[
            {op:"Vestibule", point: true},
            {op:"Cochlea", point: false},
            {op:"Tympanic membrane", point: false}
        ]
    },
    {
        qu: "Which of the following is not a nitrogenous base found in DNA?",
        ans:[
            {op:"Uracil", point: true},
            {op:"Guanine", point: false},
            {op:"Adenine", point: false}
        ]
    },
    {
        qu: "Which of the following is NOT a greenhouse gas?",
        ans:[
            {op:"Water vapor (H2O)", point: false},
            {op:"Carbon dioxide (CO2)", point: false},
            {op:"Oxygen (O2)", point: true}
        ]
    },
    {
        qu: "What is the primary cause of soil erosion?",
        ans:[
            {op:"Deforestation", point: true},
            {op:"Earthquakes", point: false},
            {op:"Agricultural practices", point: false}
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
    numb.innerText = localStorage.getItem("bioli3")
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
                    localStorage.setItem("bioli3",`previous score: ${score}/${qus.length}`)
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