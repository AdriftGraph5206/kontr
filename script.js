async function poke(){
for(let i = 1; i < 20; i++){
    let apd = await fetch(`https://pokapi.co/api/v2/type/${i}`)
    let aps = await fetch(`https://pokapi.co/api/v2/pokemon-species/${i}`)
    let api = await fetch(`https://pokapi.co/api/v2/pokemon/${i}`)
const dasd = await api.json()
const species = await aps.json()
const weakness = await apd.json()

    const container = document.getElementById("card")

const card = container.appendChild(document.createElement("div"));
card.classList.add("caas")
    card.addEventListener("click", () => {
        const stats = document.getElementById("stats")
        const hp = document.getElementById("hp")
        const attack = document.getElementById("attack")
        const defense = document.getElementById("defense")
        const SP = document.getElementById("SP")
        const SD = document.getElementById("SD")
        const speed = document.getElementById("speed")
        const desc = document.getElementById("desc")
        const statimg = document.getElementById("statimg")
        const asd = document.getElementById("asd")
        const tcont = document.getElementById("type")

        hp.innerText = "HP: " + dasd.stats[0].base_stat
        attack.innerHTML = "ATTACK: " + dasd.stats[1].base_stat
        defense.innerHTML = "DEFENSE: " + dasd.stats[2].base_stat
        SP.innerHTML = "SPECIAL ATTACK: " +  dasd.stats[3].base_stat
        SD.innerHTML = "SPECIAL DEFENCE: " + dasd.stats[4].base_stat
        speed.innerHTML = "SPEED: " + dasd.stats[5].base_stat
        desc.innerHTML = species.flavor_text_entries[4].flavor_text
        statimg.src = dasd.sprites.front_default
        asd.innerHTML = dasd.name

        // for(let i = 0; i < weakness.double_damage_from.length; i++){
        //     const weak = document.createElement("div")
        //     weak.classList.add(dasd.types[i].type.name)
        //     weak.innerHTML.add
        // }



        if(dasd.types.length === 1){
            const type = document.createElement("div")
            type.classList.add(dasd.types[0].type.name)
            type.innerHTML = dasd.types[0].type.name
            tcont.appendChild(type)
        }else if (dasd.types.length === 2){
            const type = document.createElement("div")
            type.classList.add(dasd.types[0].type.name)
            type.innerHTML = dasd.types[0].type.name
            tcont.appendChild(type)

            const type1 = document.createElement("div")
            type1.classList.add(dasd.types[1].type.name)
            type1.innerHTML = dasd.types[1].type.name
            tcont.appendChild(type1)
        }
    }  
    )

const imgs = card.appendChild(document.createElement("img"))
imgs.src = dasd.sprites.front_default

const text = card.appendChild(document.createElement("h2"))
text.classList.add("txt")

const input = document.getElementsByClassName("txt")
text.innerHTML = dasd.name


}



}

poke()
