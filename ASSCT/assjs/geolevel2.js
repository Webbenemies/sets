const qus = [
    {
        qu: "Which is the highest road in the world and connects Manali to Leh in India?",
        ans:[
            {op:"Zoji La", point: false},
            {op:"Khardung La", point: false},
            {op:"Rohtang Pass", point: true}
        ]
    },
    {
        qu: "Which one of the following is NOT a major river basin in India?",
        ans:[
            {op:"Amazon Basin", point: true},
            {op:"Ganga Basin", point: false},
            {op:"Brahmaputra Basin", point: false}
        ]
    },
    {
        qu: "What is the primary source of nuclear energy?",
        ans:[
            {op:"Uranium", point: true},
            {op:"Natural gas", point: false},
            {op:"Coal", point: false}
        ]
    },
    {
        qu: "Which type of industry is responsible for the production of machinery and equipment used in other industries?",
        ans:[
            {op:"Basic industry", point: false},
            {op:"Consumer goods industry", point: false},
            {op:"Capital goods industry", point: true}
        ]
    },
    {
        qu: "Which wildlife protection act in India provides for the protection of wild animals and birds and their habitats?",
        ans:[
            {op:"Wildlife Protection Act, 1972", point: true},
            {op:"Forest (Conservation) Act, 1980", point: false},
            {op:"Environmental Protection Act, 1986", point: false}
        ]
    },
    {
        qu: "Which river is known as the Sorrow of Bengal due to its devastating floods?",
        ans:[
            {op:"Ganges (Ganga)", point: false},
            {op:"Brahmaputra", point: true},
            {op:"Godavari", point: false}
        ]
    },
    {
        qu: "Which of the following is NOT a basic industry?",
        ans:[
            {op:"Textiles", point: true},
            {op:"Cement", point: false},
            {op:"Chemicals", point: false}
        ]
    },
    {
        qu: "Which of the following is a man-made resource?",
        ans:[
            {op:"Minerals", point: false},
            {op:"Dams", point: true},
            {op:"Solar energy", point: false}
        ]
    },
    {
        qu: "Which Indian state is connected to the rest of the country through the Siliguri Corridor?",
        ans:[
            {op:"Arunachal Pradesh", point: true},
            {op:"Jammu and Kashmir", point: false},
            {op:"Assam", point: false}
        ]
    },
    {
        qu: "Which type of canal connects two rivers?",
        ans:[
            {op:"Interlinking canal", point: false},
            {op:"Navigation canal", point: true},
            {op:"Irrigation canal", point: false}
        ]
    },
    {
        qu: "What is the main advantage of locating software industries in Special Economic Zones?",
        ans:[
            {op:"Abundant natural resources", point: false},
            {op:"Availability of cheap labor", point: false},
            {op:"Lower taxes and favorable regulations", point: true}
        ]
    },
    {
        qu: "What is the primary purpose of rainwater harvesting?",
        ans:[
            {op:"Flood control", point: false},
            {op:"Diverting rivers", point: false},
            {op:"Groundwater recharge", point: true}
        ]
    },
    {
        qu: "Which of the following ports is located on the eastern coast of India?",
        ans:[
            {op:"Chennai", point: true},
            {op:"Kandla", point: false},
            {op:"Cochin", point: false}
        ]
    },
    {
        qu: "Which agricultural practice involves growing crops on terraces carved out of hilly or mountainous terrain?",
        ans:[
            {op:"Mixed cropping", point: false},
            {op:"Commercial farming", point: false},
            {op:"Terrace farming", point: true}
        ]
    },
    {
        qu: "Which type of farming is most common in the densely populated areas of India?",
        ans:[
            {op:"Plantation farming", point: false},
            {op:"Subsistence farming", point: true},
            {op:"Commercial farming", point: false}
        ]
    },
    {
        qu: "What is the main function of the agro-based industry?",
        ans:[
            {op:"Producing machinery", point: false},
            {op:"Processing agricultural products", point: true},
            {op:"Manufacturing textiles", point: false}
        ]
    },
    {
        qu: "Which agricultural practice involves the growing of two or more crops simultaneously on the same piece",
        ans:[
            {op:"Mixed cropping", point: true},
            {op:"Crop rotation", point: false},
            {op:"Monoculture", point: false}
        ]
    },
    {
        qu: "What is the main objective of sustainable development?",
        ans:[
            {op:"Conserving resources for future generations", point: true},
            {op:"Maximizing economic growth", point: false},
            {op:"Promoting urbanization", point: false}
        ]
    },
    {
        qu: "Which state in India is the leading producer of petroleum?",
        ans:[
            {op:"Rajasthan", point: false},
            {op:"Jharkhand", point: false},
            {op:"Gujarat", point: true}
        ]
    },
    {
        qu: "Which method of irrigation involves the controlled flooding of fields with water?",
        ans:[
            {op:"Sprinkler irrigation", point: false},
            {op:"Drip irrigation", point: false},
            {op:"Canal irrigation", point: true}
        ]
    },
    {
        qu: "Which type of energy resource is derived from the heat produced by the natural decay of radioactive substances?",
        ans:[
            {op:"Solar energy", point: false},
            {op:"Geothermal energy", point: true},
            {op:"Tidal energy", point: false}
        ]
    },
    {
        qu: "Which mineral is used in the production of aluminum?",
        ans:[
            {op:"Bauxite", point: true},
            {op:"Gold", point: false},
            {op:"Iron ore", point: false}
        ]
    },
    {
        qu: "Which of the following is a non-renewable resource?",
        ans:[
            {op:"Wind energy", point: false},
            {op:"Hydroelectric power", point: false},
            {op:"Coal", point: true}
        ]
    },
    {
        qu: "Which international organization plays a significant role in wildlife conservation?",
        ans:[
            {op:"WHO", point: false},
            {op:"UNICEF", point: false},
            {op:"UNESCO", point: true}
        ]
    },
    {
        qu: "What is the primary cause of the loss of natural habitat for wildlife?",
        ans:[
            {op:"Climate change", point: false},
            {op:"Human activities", point: true},
            {op:"Pollution", point: false}
        ]
    },
    {
        qu: "Which Indian wildlife sanctuary is known for the conservation of the Indian rhinoceros?",
        ans:[
            {op:"Jim Corbett National Park", point: false},
            {op:"Kaziranga National Park", point: true},
            {op:"Ranthambhore National Park", point: false}
        ]
    },
    {
        qu: "Which factor is NOT responsible for land degradation?",
        ans:[
            {op:"Afforestation", point: true},
            {op:"Overgrazing", point: false},
            {op:"Soil erosion", point: false}
        ]
    },
    {
        qu: "Which of the following is a human-made water reservoir?",
        ans:[
            {op:"Dal Lake", point: false},
            {op:"Chilika Lake", point: false},
            {op:"Wular Lake", point: true}
        ]
    },
    {
        qu: "Which Indian state has the highest percentage of forest cover?",
        ans:[
            {op:"Madhya Pradesh", point: true},
            {op:"Maharashtra", point: false},
            {op:"Assam", point: false}
        ]
    },
    {
        qu: "Which international treaty governs the sharing of water resources of the Indus River system among India and Pakistan?",
        ans:[
            {op:"Indus Water Treaty", point: true},
            {op:"Ganges Water Treaty", point: false},
            {op:"Yamuna Accord", point: false}
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
    numb.innerText = localStorage.getItem("geoli2")
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
                    localStorage.setItem("geoli2",`previous score: ${score}/${qus.length}`)
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