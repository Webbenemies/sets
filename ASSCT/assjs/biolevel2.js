const qus = [
    {
        qu: "Which of these practices will help to conserve the forest?",
        ans:[
            {op:"Practice of deforestation", point: false},
            {op:"Putting a ban on deforestation", point: true},
            {op:"An increase in the use of firewood by local people", point: false}
        ]
    },
    {
      qu: "The driving force of any ecosystem is",
        ans:[
            {op:"Solar energy", point: true},
            {op:"ATP", point: false},
            {op:"Biomass", point: false}
        ]
    },
    {
        qu: "Which plant hormone promotes dormancy in seeds and buds?",
        ans:[
            {op:"Abscisic acid", point: true},
            {op:"Cytokinin", point: false},
            {op:"Auxin", point: false}
        ]
    },
    {
       qu: "Main function of cerebrum is",
        ans:[
            {op:"memory", point: false},
            {op:"thinking", point: true},
            {op:"balancing", point: false}
        ]
    },
    {
      qu: "From the list given below, select the character which can be acquired but not inherited",
        ans:[
            {op:"Colour of skin", point: false},
            {op:"Size of body", point: true},
            {op:"Colour of eyes", point: false}
        ]
    },
    {
       qu: "Which of these practices can be adopted to save the environment?",
        ans:[
            {op:"Recycle single-use bags", point: false},
            {op:"Reduce the use of paper bags", point: false},
            {op:"Refuse the use of single-use plastic bags", point: true}
        ]
    },
    {
      qu: "Which of the following is responsible for the depletion of the ozone layer",
        ans:[
            {op:"CFCs", point: true},
            {op:"Oxygen", point: false},
            {op:"SO2", point: false}
        ]
    },
    {
     qu: "Breathing is controlled by which part of the brain?",
        ans:[
            {op:"Cerebellum", point: false},
            {op:"Medulla oblongata", point: true},
            {op:"Hypothalamus", point: false}
        ]
    },
    {
      qu: "The primary consumers are",
        ans:[
            {op:"Omnivores", point: false},
            {op:"Herbivores", point: true},
            {op:"Carnivores", point: false}
        ]
    },
    {
      qu: "The three Rs that will help us to conserve natural resources for long-term use are:",
        ans:[
            {op:"Reduce, recycle, reuse", point: true},
            {op:"Reduce, regenerate, reuse", point: false},
            {op:"Recycle, regenerate, reuse", point: false}
        ]
    },
    {
     qu: "Which of the following is not an involuntary action?",
        ans:[
            {op:"Salivation", point: false},
            {op:"Vomiting", point: false},
            {op:"Chewing", point: true}
        ]
    },
    {
     qu: "What are the products obtained by anaerobic respiration in plants?",
        ans:[
            {op:"Ethanol + carbon dioxide + energy", point: true},
            {op:"Lactic acid + energy", point: false},
            {op:"Carbon dioxide + water + energy", point: false}
        ]
    },
    {
     qu: " Chemicals present in tobacco smoke lead to the breakdown of the elastic tissue in the alveoli. Name this specific condition.",
        ans:[
            {op:"Lung cancer", point: false},
            {op:"Emphysema", point: true},
            {op:"Bronchitis", point: false}
        ]
    },
    {
     qu: "The respiratory pigment in human beings is:",
        ans:[
            {op:"Chlorophyll", point: false},
            {op:"Haemoglobin", point: true},
            {op:"Mitochondria", point: false}
        ]
    },
    {
       qu: "Which of the following is an example of genetic variation?",
        ans:[
            {op:"One person has a scar, but his friend doesn’t", point: false},
            {op:"One person is older than the other", point: false},
            {op:"Two children have different eye colour", point: true}
        ]
    },
    {
      qu: "In a food chain, the third trophic level is always occupied by",
        ans:[
            {op:"Herbivores", point: false},
            {op:"Carnivores", point: true},
            {op:"Producers", point: false}
        ]
    },
    {
    qu: "The ratio of the number of chromosomes in a human zygote and a human sperm is",
        ans:[
            {op:"1:2", point: false},
            {op:"2:1", point: true},
            {op:"1:1", point: false}
        ]
    },
    {
    qu: "Which event will likely occur in the ovaries of females after attaining puberty?",
        ans:[
            {op:"Production of eggs", point: true},
            {op:"Synthesis of eggs", point: false},
            {op:"Fertilisation", point: false}
        ]
    },
    {
 qu: "Which of the following is a pair of analogous organs?",
        ans:[
            {op:"Wings of a pigeon and a bat", point: true},
            {op:"Forelimbs of a rabbit and a lizard", point: false},
            {op:"Forelimbs of a frog and a bird", point: false}
        ]
    },
    {
       qu: "The biotic components of an ecosystem consist of",
        ans:[
            {op:"Plants and animals", point: false},
            {op:"Producers, consumers & decomposers", point: true},
            {op:"Air, water, soil", point: false}
        ]
    },
    {
       qu: "The amount of energy that flows from one trophic level to another in a food chain is",
        ans:[
            {op:"20%", point: false},
            {op:"10%", point: true},
            {op:"15%", point: false}
        ]
    },
    {
     qu: "Which one of the following is the Biosphere Reserve of India?",
        ans:[
            {op:"Nilgiri", point: true},
            {op:"Kanheri", point: false},
            {op:"None of the above", point: false}
        ]
    },
    {
      qu: "Which of the following diseases is transmitted sexually?",
        ans:[
            {op:"Jaundice", point: false},
            {op:"Syphilis", point: true},
            {op:"Cholera", point: false}
        ]
    },
    {
        qu: "A diabetic patient suffers from deficiency of which hormone?",
        ans:[
            {op:"Insulin", point: true},
            {op:"Oestrogen", point: false},
            {op:"Thyroxine", point: false}
        ]
    },
    {
     qu: "In which of the following groups of organisms are food materials broken down outside the body and absorbed?",
        ans:[
            {op:"Paramecium, amoeba, cuscut", point: false},
            {op:"Mushroom, green plants, amoeba", point: false},
            {op:"Yeast, mushroom, bread mould", point: true}
        ]
    },
    {
     qu: "Mendel conducted his famous breeding experiments by working on the following:",
        ans:[
            {op:"Escherichia Coli", point: false},
            {op:"Drosophila", point: false},
            {op:"Pisum Sativum", point: true}
        ]
    },
    {
       qu: "IUCD is for",
        ans:[
            {op:"Vegetative propagation", point: false},
            {op:"Avoiding miscarriage", point: false},
            {op:"Contraception", point: true}
        ]
    },
    {
       qu: "Which of the following endocrine glands does not exist in pairs?",
        ans:[
            {op:"Adrenal", point: false},
            {op:"Ovary", point: false},
            {op:"Pituitary", point: true}
        ]
    },
    {
      qu: "Which of these is an example of sustainable development in order to conserve natural resources for future generations?",
        ans:[
            {op:"Planning for safe disposal of wastes after mining", point: true},
            {op:"Cleaning water resources", point: false},
            {op:"Finding alternate fuel reservoirs", point: false}
        ]
    },
    {
     qu: "Which section of DNA provides information for one protein?",
        ans:[
            {op:"Nucleus", point: false},
            {op:"Gene", point: true},
            {op:"Chromosome", point: false}
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
    numb.innerText = localStorage.getItem("bioli2")
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
                    localStorage.setItem("bioli2",`previous score: ${score}/${qus.length}`)
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