const qus = [
    {
        qu: "What does the term nationalism refer to in the context of European history during the 19th century?",
        ans:[
            {op:"Loyalty to one's nation or a sense of belonging to a common identity", point: true},
            {op:"Loyalty to the monarchy", point: false},
            {op:"Economic growth and development", point: false}
        ]
    },
    {
        qu: "Who was the leader of the Indian National Congress when the Non-Cooperation Movement was launched?",
        ans:[
            {op:"Jawaharlal Nehru", point: false},
            {op:"Subhas Chandra Bose", point: false},
            {op:"Mahatma Gandhi", point: true}
        ]
    },
    {
        qu: "Which famous explorer is known for his voyage to the Americas in 1492, which marked the beginning of globalization?",
        ans:[
            {op:"Christopher Columbus", point: true},
            {op:"Ferdinand Magellan", point: false},
            {op:"Vasco da Gama", point: false}
        ]
    },
    {
        qu: "The Industrial Revolution began in which country?",
        ans:[
            {op:"France", point: false},
            {op:"China", point: false},
            {op:"United Kingdom", point: true}
        ]
    },
    {
        qu: "The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized:",
        ans:[
            {op:"Agriculture", point: false},
            {op:"Education", point: true},
            {op:"Transportation", point: false}
        ]
    },
    {
        qu: "Who was the prominent leader of the Vietnamese Communist Party and a key figure in the struggle for Vietnam's independence?",
        ans:[
            {op:"Ho Chi Minh", point: true},
            {op:"Mahatma Gandhi", point: false},
            {op:"Subhas Chandra Bose", point: false}
        ]
    },
    {
        qu: "What was the significance of the Simon Commission in India's struggle for independence??",
        ans:[
            {op:"It recommended the partition of India", point: false},
            {op:"It led to the formation of the Indian National Congress", point: false},
            {op:"It proposed major constitutional reforms for India", point: true}
        ]
    },
    {
        qu: "Which ideology was closely associated with the idea of national unity and identity in the 19th-century Europe?",
        ans:[
            {op:"Nationalism", point: true},
            {op:"Imperialism", point: false},
            {op:"Communism", point: false}
        ]
    },
    {
        qu: "Who was the first woman president of the Indian National Congress?",
        ans:[
            {op:"Annie Besant", point: false},
            {op:"Indira Gandhi", point: false},
            {op:"Sarojini Naidu", point: true}
        ]
    },
    {
        qu: "The process of the unification of Germany was completed in:",
        ans:[
            {op:"1867", point: false},
            {op:"1861", point: false},
            {op:"1871", point: true}
        ]
    },
    {
        qu: "Who was the monarch of Prussia during the unification of Germany?",
        ans:[
            {op:"Wilhelm I", point: true},
            {op:"Friedrich Engels", point: false},
            {op:"Otto von Bismarck", point: false}
        ]
    },
    {
        qu: "Who coined the slogan Inquilab Zindabad during the freedom struggle?",
        ans:[
            {op:"Subhas Chandra Bose", point: false},
            {op:"Jawaharlal Nehru", point: false},
            {op:"Bhagat Singh", point: true}
        ]
    },
    {
        qu: "Who wrote the famous book The Wealth of Nations in 1776, which laid the foundation for modern economic thought?",
        ans:[
            {op:"John Maynard Keynes", point: false},
            {op:"Adam Smith", point: true},
            {op:"Friedrich Engels", point: false}
        ]
    },
    {
        qu: "The movable type printing technology was invented in:",
        ans:[
            {op:"China", point: true},
            {op:"Egypt", point: false},
            {op:"India", point: false}
        ]
    },
    {
        qu: "Which architectural style, known for its elaborate designs and intricate decorations, was prominent in the late 19th and early 20th centuries, particularly during the Art Nouveau movement?",
        ans:[
            {op:"Art Nouveau", point: true},
            {op:"Art Deco", point: false},
            {op:"Modernist", point: false}
        ]
    },
    {
        qu: `The "typography" technique involves the use of:`,
        ans:[
            {op:"Lithographic stones", point: false},
            {op:"Movable type and metal printing plates", point: true},
            {op:"Engraved wooden blocks", point: false}
        ]
    },
    {
        qu: "Who is often referred to as the father of the modern printing press in India?",
        ans:[
            {op:"William Caxton", point: false},
            {op:"Rabindranath Tagore", point: false},
            {op:"James Hickey", point: true}
        ]
    },
    {
        qu: "The Treaty of Tordesillas in 1494 divided the newly discovered lands outside Europe between which two countries?",
        ans:[
            {op:"England and France", point: false},
            {op:"Portugal and Spain", point: true},
            {op:"Italy and Germany", point: false}
        ]
    },
    {
        qu: "The factory system in the textile industry was introduced in:",
        ans:[
            {op:"The 17th century", point: false},
            {op:"The 19th century", point: false},
            {op:"The 18th century", point: true}
        ]
    },
    {
        qu: "What was the main product that European traders sought in the Indian Ocean trade network?",
        ans:[
            {op:"Silk", point: false},
            {op:"Spices", point: true},
            {op:"Gold", point: false}
        ]
    },
    {
        qu: "The invention of the spinning jenny and the water frame were significant developments in which industry?",
        ans:[
            {op:"Coal mining", point: false},
            {op:"Textiles", point: true},
            {op:"Agriculture", point: false}
        ]
    },
    {
        qu: "Which European country established a trade monopoly with the Spice Islands (Moluccas) in Indonesia during the 17th century?",
        ans:[
            {op:"Netherlands", point: true},
            {op:"Portugal", point: false},
            {op:"England", point: false}
        ]
    },
    {
        qu: "What was the main goal of the Khilafat Movement in India?",
        ans:[
            {op:"To protest against British taxation policies", point: false},
            {op:"To support the Ottoman Caliphate in Turkey", point: true},
            {op:"To promote Hindu-Muslim unity", point: false}
        ]
    },
    {
        qu: "Which city in India was a major center for the spice trade during the Age of Exploration?",
        ans:[
            {op:"Kolkata (Calcutta)", point: false},
            {op:"Chennai (Madras)", point: false},
            {op:"Kochi (Cochin)", point: true}
        ]
    },
    {
        qu: "Who led the famous Salt March (Dandi March) in 1930 as a part of the Civil Disobedience Movement?",
        ans:[
            {op:"sardar Vallabhbhai Patel", point: false},
            {op:"Mahatma Gandhi", point: true},
            {op:"Subhas Chandra Bose", point: false}
        ]
    },
    {
        qu: "The use of the steam engine revolutionized which mode of transportation during the Industrial Revolution?",
        ans:[
            {op:"Road transportation", point: false},
            {op:"Rail transportation", point: true},
            {op:"Air travel", point: false}
        ]
    },
    {
        qu: "The establishment of the British East India Company marked the beginning of British colonial rule in India. What year was the company founded?",
        ans:[
            {op:"1947", point: false},
            {op:"1757", point: false},
            {op:"1600", point: true}
        ]
    },
    {
        qu: "Which Indian language newspaper was first published from Bombay (Mumbai) in 1822?",
        ans:[
            {op:"The Times of India", point: false},
            {op:"The Indian Express", point: false},
            {op:"Samachar Sudhavarashan", point: true}
        ]
    },
    {
        qu: "Which region of India was known for its cotton textile production during the British colonial period?",
        ans:[
            {op:"Bengal", point: true},
            {op:"Punjab", point: false},
            {op:"Kerala", point: false}
        ]
    },
    {
        qu: "The book Bhavabhuti was printed using the lithographic technique in:",
        ans:[
            {op:"England", point: false},
            {op:"India", point: true},
            {op:"France", point: false}
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
    numb.innerText = localStorage.getItem("hisli1")
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
                    localStorage.setItem("hisli1",`previous score: ${score}/${qus.length}`)
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