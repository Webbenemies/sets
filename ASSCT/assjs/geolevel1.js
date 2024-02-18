const qus = [
    {
        qu: "What percentage of the world's population lives in rural areas?",
        ans:[
            {op:"50%", point: true},
            {op:"25%", point: false},
            {op:"45%", point: false}
        ]
    },
    {
        qu: "Which state in India is known for its extensive network of backwaters, often used for transportation?",
        ans:[
            {op:"West Bengal", point: false},
            {op:"Gujarat", point: false},
            {op:"Kerala", point: true}
        ]
    },
    {
        qu: "What is the primary reason for the depletion of forest resources in India?",
        ans:[
            {op:"Industrialization", point: false},
            {op:"Deforestation", point: true},
            {op:"Mining", point: false}
        ]
    },
    {
        qu: "What percentage of the Earth's surface is covered by water?",
        ans:[
            {op:"80%", point: false},
            {op:"70%", point: true},
            {op:"50%", point: false}
        ]
    },
    {
        qu: "Which of the following is an example of a non-conventional source of energy?",
        ans:[
            {op:"Natural gas", point: false},
            {op:"Solar power", point: true},
            {op:"Coal", point: false}
        ]
    },
    {
        qu: "Which is the longest national highway in India, running from Srinagar to Kanyakumari?",
        ans:[
            {op:"NH7", point: true},
            {op:"NH2", point: false},
            {op:"NH5", point: false}
        ]
    },
    {
        qu: "Which of the following states in India is a major producer of rubber?",
        ans:[
            {op:"Punjab", point: false},
            {op:"Haryana", point: false},
            {op:"Kerala", point: true}
        ]
    },
    {
        qu: "What is the process of removing salt and other impurities from seawater to make it suitable for drinking and irrigation?",
        ans:[
            {op:"Desalination", point: true},
            {op:"Groundwater recharge", point: false},
            {op:"Deforestation", point: false}
        ]
    },
    {
        qu: "Which type of industry is involved in the manufacturing of consumer goods for immediate consumption?",
        ans:[
            {op:"Basic industry", point: false},
            {op:"Consumer goods industry", point: true},
            {op:"Heavy industry", point: false}
        ]
    },
    {
        qu: "Which type of forest is found in regions with heavy rainfall and high temperatures throughout the year?",
        ans:[
            {op:"Deciduous forest", point: false},
            {op:"Coniferous forest", point: false},
            {op:"Tropical rainforest", point: true}
        ]
    },
    {
        qu: "Which industry is known for the processing of raw materials from agriculture, forestry, and fisheries?",
        ans:[
            {op:"Electronics industry", point: false},
            {op:"Automobile industry", point: false},
            {op:"Agro-based industry", point: true}
        ]
    },
    {
        qu: "Which of the following is a waterborne disease?",
        ans:[
            {op:"Cholera", point: true},
            {op:"Tuberculosis", point: false},
            {op:"Malaria", point: false}
        ]
    },
    {
        qu: "Which of the following is NOT a mode of transportation in India?",
        ans:[
            {op:"Waterways", point: false},
            {op:"Airways", point: true},
            {op:"Railways", point: false}
        ]
    },
    {
        qu: "Which state in India is the largest producer of coal?",
        ans:[
            {op:"Jharkhand", point: true},
            {op:"Gujarat", point: false},
            {op:"Madhya Pradesh", point: false}
        ]
    },
    {
        qu: "The Mumbai-Pune Expressway is an example of:",
        ans:[
            {op:"National Highway", point: false},
            {op:"Express Train", point: false},
            {op:"Toll Road", point: true}
        ]
    },
    {
        qu: "What is the term for the area of land that drains into a particular river or lake?",
        ans:[
            {op:"Watershed", point: true},
            {op:"Estuary", point: false},
            {op:"Aquifer", point: false}
        ]
    },
    {
        qu: "What is the term for the physical and chemical changes in raw materials into finished products in the manufacturing process?",
        ans:[
            {op:"Extraction", point: false},
            {op:"Refining", point: false},
            {op:"Processing", point: true}
        ]
    },
    {
        qu: "Which of the following is NOT a Kharif crop in India?",
        ans:[
            {op:"Rice", point: false},
            {op:"Wheat", point: true},
            {op:"Maize", point: false}
        ]
    },
    {
        qu: "Which state in India is known for its extensive deposits of mica?",
        ans:[
            {op:"Jharkhand", point: true},
            {op:"Odisha", point: false},
            {op:"Tamil Nadu", point: false}
        ]
    },
    {
        qu: "Which of the following is a non-metallic mineral resource?",
        ans:[
            {op:"Limestone", point: true},
            {op:"Iron ore", point: false},
            {op:"Gold", point: false}
        ]
    },
    {
        qu: "Which Indian state is known for its automobile manufacturing hub, often referred to as the Detroit of India?",
        ans:[
            {op:"Karnataka", point: false},
            {op:"Maharashtra", point: false},
            {op:"Tamil Nadu", point: true}
        ]
    },
    {
        qu: "What is the primary objective of organic farming?",
        ans:[
            {op:"Promoting biodiversity and soil health", point: true},
            {op:"Reducing crop diversity", point: false},
            {op:"Maximizing crop yields", point: false}
        ]
    },
    {
        qu: "Which renewable energy source harnesses the energy of flowing water to generate electricity?",
        ans:[
            {op:"Wind energy", point: false},
            {op:"Geothermal energy", point: false},
            {op:"Tidal energy", point: true}
        ]
    },
    {
        qu: "Which of the following is NOT a threat to wildlife in India?",
        ans:[
            {op:"Poaching", point: false},
            {op:"Climate change", point: false},
            {op:"Organic farming", point: true}
        ]
    },
    {
        qu: "The Jawaharlal Nehru Port is located in which state of India?",
        ans:[
            {op:"Andhra Pradesh", point: false},
            {op:"Maharashtra", point: true},
            {op:"Gujarat", point: false}
        ]
    },
    {
        qu: "What is the primary role of a national park in wildlife conservation?",
        ans:[
            {op:"Industrial development", point: false},
            {op:"Protection of ecosystems and wildlife", point: true},
            {op:"Sustainable logging", point: false}
        ]
    },
    {
        qu: "Which Indian state is known for the cultivation of saffron?",
        ans:[
            {op:"Himachal Prades", point: false},
            {op:"Jammu and Kashmir", point: true},
            {op:"Punjab", point: false}
        ]
    },
    {
        qu: "Which of the following factors has contributed to the loss of biodiversity in forests?",
        ans:[
            {op:"Sustainable forestry practices", point: false},
            {op:"Habitat fragmentation", point: true},
            {op:"Wildlife conservation efforts", point: false}
        ]
    },
    {
        qu: "Which of the following is NOT a fossil fuel?",
        ans:[
            {op:"Petroleum", point: false},
            {op:"Solar energy", point: true},
            {op:"Natural gas", point: false}
        ]
    },
    {
        qu: "Which type of soil is best suited for the cultivation of paddy (rice) in India?",
        ans:[
            {op:"Laterite soil", point: false},
            {op:"Alluvial soil", point: true},
            {op:"Red soil", point: false}
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
    numb.innerText = localStorage.getItem("geoli1")
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
                    localStorage.setItem("geoli1",`previous score: ${score}/${qus.length}`)
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