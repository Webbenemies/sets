const qus = [
    {
        qu: "What role did Giuseppe Mazzini play in the nationalist movement in Italy?",
        ans:[
            {op:"He was a philosopher and politician who promoted the idea of a united Italy", point: true},
            {op:"He led the Irish nationalist movement", point: false},
            {op:"He was a military leader in the Italian unification", point: false}
        ]
    },
    {
        qu: "What was the main objective of the Civil Disobedience Movement led by Mahatma Gandhi?",
        ans:[
            {op:"To demand complete independence from British rule", point: true},
            {op:"To protest against the Jallianwala Bagh Massacre", point: false},
            {op:"To demand the abolition of the Zamindari system", point: false}
        ]
    },
    {
        qu: "What is the term for the exchange of goods, ideas, and cultures between the Eastern and Western Hemispheres that began after Columbus's voyages?",
        ans:[
            {op:"Globalization", point: false},
            {op:"Columbian Exchange", point: true},
            {op:"Mercantilism", point: false}
        ]
    },
    {
        qu: "Which European power established a trading post in India called Goa in the early 16th century?",
        ans:[
            {op:"Portugal", point: true},
            {op:"Spain", point: false},
            {op:"England", point: false}
        ]
    },
    {
        qu: "The term Luddites refers to:",
        ans:[
            {op:"Inventors of the spinning jenny", point: false},
            {op:"Workers who opposed industrialization and machinery", point: true},
            {op:"Factory owners", point: false}
        ]
    },
    {
        qu: "What was the name of the economic policy that advocated minimal government interference in economic matters during the early phase of industrialization?",
        ans:[
            {op:"Laissez-faire", point: true},
            {op:"Mercantilism", point: false},
            {op:"Protectionism", point: false}
        ]
    },
    {
        qu: "The city of Manchester in England became known for its production of which textile product during the Industrial Revolution?",
        ans:[
            {op:"Silk", point: false},
            {op:"Cotton", point: true},
            {op:"Wool", point: false}
        ]
    },
    {
        qu: "The discovery of a sea route to India by Vasco da Gama in 1498 was significant because it:",
        ans:[
            {op:"Led to the discovery of America", point: false},
            {op:"Opened up a direct trade route to India, bypassing the Mediterranean", point: true},
            {op:"Led to the establishment of the British East India Company", point: false}
        ]
    },
    {
        qu: "Which event led to the outbreak of the Crimean War (1853-1856) involving Russia, Britain, France, and the Ottoman Empire?",
        ans:[
            {op:"The Russian Revolution", point: false},
            {op:"The Balkan Wars", point: false},
            {op:"The conflict in the Black Sea region", point: true}
        ]
    },
    {
        qu: "Who is credited with inventing the steam engine that revolutionized transportation and industry?",
        ans:[
            {op:"James Hargreaves", point: false},
            {op:"Samuel Crompton", point: false},
            {op:"James Watt", point: true}
        ]
    },
    {
        qu: "Which Indian leader is known for his famous Tryst with Destiny speech on the eve of India's independence?",
        ans:[
            {op:"Sardar Vallabhbhai Patel", point: false},
            {op:"Jawaharlal Nehru", point: true},
            {op:"Dr. B.R. Ambedkar", point: false}
        ]
    },
    {
        qu: "The Industrial Revolution is characterized by the transition from:",
        ans:[
            {op:"Handicrafts to machine-based manufacturing", point: false},
            {op:"A rural society to an urban society", point: false},
            {op:"All of the above", point: true}
        ]
    },
    {
        qu: "The global exchange of goods, people, and cultures during the Age of Exploration is often referred to as:",
        ans:[
            {op:"The Renaissance", point: false},
            {op:"The Columbian Exchange", point: true},
            {op:"The Silk Road", point: false}
        ]
    },
    {
        qu: "Which country established the first European trading settlement in India, in the town of Calicut?",
        ans:[
            {op:"Netherlands", point: false},
            {op:"Portugal", point: true},
            {op:"Spain", point: false}
        ]
    },
    {
        qu: "What was the main objective of the European powers when they met at the Congress of Vienna in 1815?",
        ans:[
            {op:"To restore order and stability after the Napoleonic Wars", point: true},
            {op:"To promote religious unity", point: false},
            {op:"To discuss economic cooperation", point: false}
        ]
    },
    {
        qu: "Who was the famous navigator who completed the first circumnavigation of the Earth, proving that the world was round?",
        ans:[
            {op:"Ferdinand Magellan", point: true},
            {op:"Marco Polo", point: false},
            {op:"Vasco da Gama", point: false}
        ]
    },
    {
        qu: "The novel Pamela; or, Virtue Rewarded by Samuel Richardson is an example of",
        ans:[
            {op:"A medieval manuscript", point: false},
            {op:"A handwritten letter", point: false},
            {op:"An early printed book", point: true}
        ]
    },
    {
        qu: "The rapid growth of factories and urbanization during the Industrial Revolution led to poor working conditions and overcrowded cities. This period is often associated with:",
        ans:[
            {op:"The Age of Exploration", point: false},
            {op:"The Victorian Era", point: true},
            {op:"The Gilded Age", point: false}
        ]
    },
    {
        qu: "Which economic system was characterized by the idea that a country's wealth depended on accumulating gold and silver through a favorable balance of trade?",
        ans:[
            {op:"Capitalism", point: false},
            {op:"Socialism", point: false},
            {op:"Mercantilism", point: true}
        ]
    },
    {
        qu: "Which printing technology used an engraved wooden block to print images and text on paper?",
        ans:[
            {op:"Lithography", point: false},
            {op:"Woodcut", point: true},
            {op:"Lithography", point: false}
        ]
    },
    {
        qu: "The term Industrialization refers to the process of:",
        ans:[
            {op:"Transforming an agrarian society into an industrial one", point: true},
            {op:"Exporting agricultural products to other countries", point: false},
            {op:"Promoting handcrafts and cottage industries", point: false}
        ]
    },
    {
        qu: "The trade route that connected Europe, Africa, and the Americas, known for the exchange of goods, including slaves, is called:",
        ans:[
            {op:"The Middle Passage", point: false},
            {op:"he Silk Road", point: false},
            {op:"The Triangle Trade", point: true}
        ]
    },
    {
        qu: "The first book printed using movable type on Gutenberg's printing press was:",
        ans:[
            {op:"The Quran", point: false},
            {op:"The Bible", point: true},
            {op:"The Odyssey", point: false}
        ]
    },
    {
        qu: "Who is known for his role in the development of the lithographic printing technique?",
        ans:[
            {op:"William Caxton", point: false},
            {op:"Johannes Gutenberg", point: false},
            {op:"Alois Senefelder", point: true}
        ]
    },
    {
        qu: "The novel Pariksha Guru by Lala Har Dayal, written in the early 20th century, is a significant work in which language and for which literary movement?",
        ans:[
            {op:"Hindi; Progressive literature", point: true},
            {op:"English; Victorian literature", point: false},
            {op:"Urdu; Romanticism", point: false}
        ]
    },
    {
        qu: "The spread of printed materials like newspapers and pamphlets contributed to:",
        ans:[
            {op:"The decline of colonialism", point: false},
            {op:"The growth of a global economy", point: false},
            {op:"The spread of ideas and political awareness", point: true}
        ]
    },
    {
        qu: "The British Library, one of the world's largest libraries, was originally part of:",
        ans:[
            {op:"The British Museum", point: true},
            {op:"The National Library of India", point: false},
            {op:"The Vatican Library", point: false}
        ]
    },
    {
        qu: "During the late 19th century, which invention played a significant role in changing the urban landscape and influenced the growth of modern cities?",
        ans:[
            {op:"Bicycles", point: false},
            {op:"Electric trams", point: true},
            {op:"Steam locomotives", point: false}
        ]
    },
    {
        qu: "What was the name of the secret police force established by the French colonial administration in Vietnam to suppress nationalist activities?",
        ans:[
            {op:"surete", point: true},
            {op:"Viet Cong", point: false},
            {op:"Pathet Lao", point: false}
        ]
    },
    {
        qu: "The spread of print culture played a significant role in the:",
        ans:[
            {op:"Formation of a common national identity", point: true},
            {op:"Decline of written literature", point: false},
            {op:"Suppression of regional languages", point: false}
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
    numb.innerText = localStorage.getItem("hisli3")
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
                    localStorage.setItem("hisli3",`previous score: ${score}/${qus.length}`)
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