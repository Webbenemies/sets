const qus = [
    {
        qu: "What is the primary reason for the interlinking of rivers in India?",
        ans:[
            {op:"Enhancing biodiversity", point: false},
            {op:"Efficient water resource management", point: true},
            {op:"Increasing flood risk", point: false}
        ]
    },
    {
        qu: "Which type of farming is characterized by the cultivation of crops for self-consumption with little or no surplus for sale?",
        ans:[
            {op:"Organic farming", point: false},
            {op:"Commercial farming", point: false},
            {op:"Subsistence farming", point: true}
        ]
    },
    {
        qu: "Which resource is considered the most basic and essential for the development of any country?",
        ans:[
            {op:"Forests", point: false},
            {op:"Water", point: true},
            {op:"Minerals", point: false}
        ]
    },
    {
        qu: "What is the main purpose of the National Highway Development Project (NHDP)?",
        ans:[
            {op:"Developing a network of national highways", point: true},
            {op:"Modernizing railways", point: false},
            {op:"Expanding inland waterways", point: false}
        ]
    },
    {
        qu: "What is the primary factor responsible for the success of the White Revolution in India?",
        ans:[
            {op:"Organic farming practices", point: false},
            {op:"Enhanced milk production", point: true},
            {op:"Increased wheat production", point: false}
        ]
    },
    {
        qu: "Which of the following minerals is primarily used in the manufacturing of aluminum?",
        ans:[
            {op:"Limestone", point: false},
            {op:"Bauxite", point: true},
            {op:"Copper", point: false}
        ]
    },
    {
        qu: "Which of the following is a critically endangered species in India?",
        ans:[
            {op:"Indian Elephant", point: false},
            {op:"Bengal Tiger", point: false},
            {op:"Snow Leopard", point: true}
        ]
    },
    {
        qu: "Which of the following is NOT a category of biodiversity?",
        ans:[
            {op:" Climatic diversity", point: true},
            {op:"Ecosystem diversity", point: false},
            {op:"Genetic diversity", point: false}
        ]
    },
    {
        qu: "What is the primary factor responsible for soil erosion?",
        ans:[
            {op:"Urbanization", point: false},
            {op:"Deforestation", point: true},
            {op:"Crop rotation", point: false}
        ]
    },
    {
        qu: "Which river is the lifeline of the state of Tamil Nadu?",
        ans:[
            {op:"Godavari", point: false},
            {op:"Cauvery", point: true},
            {op:"Tungabhadra", point: false}
        ]
    },
    {
        qu: "Which of the following states in India is known for its rich fisheries resources?",
        ans:[
            {op:"Rajasthan", point: false},
            {op:"Kerala", point: true},
            {op:"Punjab", point: false}
        ]
    },
    {
        qu: "Which of the following is an example of an endemic species in India?",
        ans:[
            {op:"Asian Elephant", point: false},
            {op:"Indian Peafowl", point: false},
            {op:"Nilgiri Tahr", point: true}
        ]
    },
    {
        qu: "What is the primary source of power in the iron and steel industry?",
        ans:[
            {op:"Electricity", point: true},
            {op:"Hydroelectric power", point: false},
            {op:"Solar energy", point: false}
        ]
    },
    {
        qu: "The Ganga-Brahmaputra delta is known for which mode of transportation?",
        ans:[
            {op:"Railways", point: false},
            {op:"Roadways", point: false},
            {op:"Waterways", point: true}
        ]
    },
    {
        qu: "Which type of agriculture is practiced on large estates with extensive mechanization and a labor force?",
        ans:[
            {op:"Mixed farming", point: false},
            {op:"Shifting cultivation", point: false},
            {op:"Commercial farming", point: true}
        ]
    },
    {
        qu: "Which industry is primarily responsible for the production of consumer durables like refrigerators and washing machines?",
        ans:[
            {op:"Automobile industry", point: false},
            {op:"Electronics industry", point: true},
            {op:"Consumer goods industry", point: false}
        ]
    },
    {
        qu: "javWhich city is known as the Manchester of India due to its cotton textile industry?ascript",
        ans:[
            {op:"Mumbai", point: false},
            {op:"Chennai", point: false},
            {op:"Ahmedabad", point: true}
        ]
    },
    {
        qu: "Which crop is known as the Golden Fiber and is widely grown in the eastern and southern regions of India?",
        ans:[
            {op:"Cotton", point: true},
            {op:"Wheat", point: false},
            {op:"Sugarcane", point: false}
        ]
    },
    {
        qu: "Which state in India is the leading producer of wind power?",
        ans:[
            {op:"Tamil Nadu", point: true},
            {op:"Gujarat", point: false},
            {op:"Kerala", point: false}
        ]
    },
    {
        qu: "The Golden Quadrilateral connects which major cities in India?",
        ans:[
            {op:"Kolkata, Chennai, Bengaluru, Hyderabad", point: false},
            {op:"Delhi, Kolkata, Chennai, Mumbai", point: false},
            {op:"Delhi, Jaipur, Ahmedabad, Mumbai", point: true}
        ]
    },
    {
        qu: "Which type of forest is the primary source of wood for the paper industry?",
        ans:[
            {op:"Deciduous forest", point: false},
            {op:"Coniferous forest", point: true},
            {op:"Mangrove forest", point: false}
        ]
    },
    {
        qu: "Which mineral is known as Black Gold?",
        ans:[
            {op:"Coal", point: true},
            {op:"Iron ore", point: false},
            {op:"Bauxite", point: false}
        ]
    },
    {
        qu: "What is the term for the process of clearing land by cutting and burning vegetation before planting crops?",
        ans:[
            {op:"Crop rotation", point: false},
            {op:"Shifting cultivation", point: true},
            {op:"Mixed cropping", point: false}
        ]
    },
    {
        qu: "What is the primary purpose of a biosphere reserve?",
        ans:[
            {op:"Agricultural development", point: false},
            {op:"Industrial growth", point: false},
            {op:"Wildlife conservation", point: true}
        ]
    },
    {
        qu: "Which type of irrigation system is the most water-efficient?",
        ans:[
            {op:"Sprinkler irrigation", point: false},
            {op:"Drip irrigation", point: true},
            {op:"Flood irrigation", point: false}
        ]
    },
    {
        qu: "Which river is the National Waterway 1 (NW-1) in India?",
        ans:[
            {op:"Ganga", point: true},
            {op:"Yamuna", point: false},
            {op:"Brahmaputra", point: false}
        ]
    },
    {
        qu: "Which type of forest is characterized by a mixture of evergreen and deciduous trees?",
        ans:[
            {op:"Taiga forest", point: false},
            {op:"Tropical rainforest", point: true},
            {op:"Coniferous forest", point: false}
        ]
    },
    {
        qu: "What is the main purpose of the cottage and small-scale industry?",
        ans:[
            {op:"Export-oriented production", point: false},
            {op:"Providing employment and income generation", point: true},
            {op:"Heavy manufacturing", point: false}
        ]
    },
    {
        qu: "Which region in India is known for the production of electronic goods and software?",
        ans:[
            {op:"Petrochemical Hub", point: false},
            {op:"Cyberabad", point: true},
            {op:"Silicon Valley", point: false}
        ]
    },
    {
        qu: "Which Indian state is known for its extensive canal irrigation system, often referred to as the Granary of India?",
        ans:[
            {op:"Kerala", point: false},
            {op:"Bihar", point: false},
            {op:"Punjab", point: true}
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
    numb.innerText = localStorage.getItem("geoli3")
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
                    localStorage.setItem("geoli3",`previous score: ${score}/${qus.length}`)
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