const qus = [
    {
        qu: "Which event is often considered a symbol of the beginning of the process of Italian unification?",
        ans:[
            {op:"The Congress of Vienna", point: false},
            {op:"The Sicilian Vespers", point: true},
            {op:"The French Revolution", point: false}
        ]
    },
    {
        qu: "Who was the leader of the All India Muslim League during the Indian freedom struggle?",
        ans:[
            {op:"Muhammad Ali Jinnah", point: true},
            {op:"Subhas Chandra Bose", point: false},
            {op:"Maulana Abul Kalam Azad", point: false}
        ]
    },
    {
        qu: "Who was the leader of the movement for the unification of Germany, often referred to as the Iron Chancellor?",
        ans:[
            {op:"Otto von Bismarck", point: true},
            {op:"Giuseppe Garibaldi", point: false},
            {op:"Kaiser Wilhelm I", point: false}
        ]
    },
    {
        qu: "Who authored the book Discovery of India, which provides an overview of Indian history and culture?",
        ans:[
            {op:"Rabindranath Tagore", point: false},
            {op:"Subhas Chandra Bose", point: false},
            {op:"Jawaharlal Nehru", point: true}
        ]
    },
    {
        qu: "Who authored the book The Communist Manifesto in 1848, advocating for a classless society?",
        ans:[
            {op:"Giuseppe Garibaldi", point: false},
            {op:"Giuseppe Mazzini", point: false},
            {op:"Karl Marx and Friedrich Engels", point: true}
        ]
    },
    {
        qu: "Which event marked the beginning of the First Indochina War between the French and the Viet Minh forces",
        ans:[
            {op:"The Battle of Hanoi", point: false},
            {op:"The Tonkin Incident", point: true},
            {op:"The Geneva Accords", point: false}
        ]
    },
    {
        qu: "The Quit India Movement was launched in:",
        ans:[
            {op:"1950", point: false},
            {op:"1942", point: true},
            {op:"1930", point: false}
        ]
    },
    {
        qu: "The Balkan region saw several nationalist movements and conflicts in the 19th and early 20th centuries. Which country was NOT involved in these movements?",
        ans:[
            {op:"Bulgaria", point: false},
            {op:"Spain", point: true},
            {op:"Romania", point: false}
        ]
    },
    {
        qu: "The Dandi March, also known as the Salt Satyagraha, was organized to protest against:",
        ans:[
            {op:"The partition of Bengal", point: false},
            {op:"The imposition of heavy taxes on salt", point: true},
            {op:"The import of foreign textiles", point: false}
        ]
    },
    {
        qu: "Who was the first Governor-General of independent India?",
        ans:[
            {op:"Dr. Rajendra Prasad", point: false},
            {op:"Lord Louis Mountbatten", point: true},
            {op:"Sardar Vallabhbhai Patel", point: false}
        ]
    },
    {
        qu: "The typography technique involves the use of:",
        ans:[
            {op:"Engraved wooden blocks", point: false},
            {op:"Movable type and metal printing plates", point: true},
            {op:"Lithographic stones", point: false}
        ]
    },
    {
        qu: "Which country's unification was primarily led by the efforts of a secret society called the Young Turks?",
        ans:[
            {op:"Turkey", point: true},
            {op:"Greece", point: false},
            {op:"Hungary", point: false}
        ]
    },
    {
        qu: "Which of the following countries was NOT part of the German Confederation before unification?",
        ans:[
            {op:"Bavaria", point: false},
            {op:"France", point: true},
            {op:"Austria", point: false}
        ]
    },
    {
        qu: "Which European power controlled the region of Alsace-Lorraine after the Franco-Prussian War of 1870-1871?",
        ans:[
            {op:"Italy", point: false},
            {op:"Germany", point: true},
            {op:"France", point: false}
        ]
    },
    {
        qu: "Who is known as the father of Italian unification?",
        ans:[
            {op:"Giuseppe Garibaldi", point: false},
            {op:"Giuseppe Mazzini", point: false},
            {op:"Camillo di Cavour", point: true}
        ]
    },
    {
        qu: "The process of printing on both sides of a single sheet of paper is known as:",
        ans:[
            {op:"Bilingual printing", point: false},
            {op:"Offset printing", point: false},
            {op:"Duplex printing", point: true}
        ]
    },
    {
        qu: "The factory system in the textile industry led to the growth of which class of society?",
        ans:[
            {op:"Aristocracy", point: false},
            {op:"Landowners", point: false},
            {op:"Industrial working class", point: true}
        ]
    },
    {
        qu: "Which resource played a crucial role in powering early industrial machines?",
        ans:[
            {op:"Wind energy", point: false},
            {op:"Steam", point: true},
            {op:"Electricity", point: false}
        ]
    },
    {
        qu: "Which event marked the beginning of the Atlantic Slave Trade?",
        ans:[
            {op:"The discovery of America by Columbus", point: true},
            {op:"The opening of the Silk Road", point: false},
            {op:"The arrival of African slaves in the Americas", point: false}
        ]
    },
    {
        qu: "Which industry saw significant growth and innovation in transportation during the Industrial Revolution?",
        ans:[
            {op:"Railways", point: true},
            {op:"Mining", point: false},
            {op:"Agriculture", point: false}
        ]
    },
    {
        qu: "Which European power established a trading post in India called Goa in the early 16th century?",
        ans:[
            {op:"France", point: false},
            {op:"England", point: false},
            {op:"Portugal", point: true}
        ]
    },
    {
        qu: "Who is often regarded as the leader of the movement for Irish nationalism and independence from British rule?",
        ans:[
            {op:"Winston Churchill", point: false},
            {op:"William Pitt the Younger", point: false},
            {op:"Charles Stewart Parnell", point: true}
        ]
    },
    {
        qu: "The system of economic and political control over colonies and their resources is known as:",
        ans:[
            {op:"Imperialism", point: true},
            {op:"Capitalism", point: false},
            {op:"Nationalism", point: false}
        ]
    },
    {
        qu: "The movement of people from one country to another in search of better economic opportunities is known as:",
        ans:[
            {op:"Emigration", point: false},
            {op:"Globalization", point: false},
            {op:"Immigration", point: true}
        ]
    },
    {
        qu: "What was the name of the movement that aimed to improve the working conditions and rights of workers during the Industrial Revolution?",
        ans:[
            {op:"Labor movement", point: true},
            {op:"Temperance movement", point: false},
            {op:"Suffrage movement", point: false}
        ]
    },
    {
        qu: "Who was the first woman to become the Prime Minister of India",
        ans:[
            {op:"Indira Gandhi", point: true},
            {op:"Pratibha Patil", point: false},
            {op:"Sarojini Naidu", point: false}
        ]
    },
    {
        qu: "What event marked the beginning of the Jallianwala Bagh Massacre in Amritsar in 1919?",
        ans:[
            {op:"The assassination of a British officer", point: false},
            {op:"A public meeting to celebrate a religious festival", point: false},
            {op:"A protest march against the Rowlatt Act", point: true}
        ]
    },
    {
        qu: "The Non-Cooperation Movement was launched in response to which incident?",
        ans:[
            {op:"Simon Commission", point: false},
            {op:"Partition of Bengal", point: false},
            {op:"Chauri Chaura incident", point: true}
        ]
    },
    {
        qu: "The word Jahaz in the context of print culture refers to:",
        ans:[
            {op:"A type of printing press", point: false},
            {op:"A famous printing house in India", point: false},
            {op:"A traveling printing press", point: true}
        ]
    },
    {
        qu: "The slogan Liberty, Equality, Fraternity is associated with which revolution?",
        ans:[
            {op:"The Russian Revolution", point: false},
            {op:"The French Revolution", point: true},
            {op:"The Industrial Revolution", point: false}
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
    numb.innerText = localStorage.getItem("hisli2")
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
                    localStorage.setItem("hisli2",`previous score: ${score}/${qus.length}`)
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