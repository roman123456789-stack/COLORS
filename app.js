const cols = document.querySelectorAll('.col')
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() === 'space'){
        setRandomColors()  
    }
    console.log(event.code)
})
document.addEventListener('click', (event) => {
    
    const type = event.target.dataset.type
    if (type === 'lock'){
        const node = event.target.tagName.toLowerCase() === 'i' ? event.target : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')

    }
    else if(type === 'copy'){
        CopyOnClick(event.target.textContent)
    }

    
})

function generateRandomColor(){
    const hexCodes = '0123456789abcdef'
    let color = ''
    for(let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)] 
    }
    return '#' + color
}

function CopyOnClick(text){
    return navigator.clipboard.writeText(text)
}

function setRandomColors(){
    cols.forEach((col) => {
        isLocked = col.querySelector('i').classList.contains('fa-lock')
        if(isLocked){return}
        const text = col.querySelector('h2')
        const btn = col.querySelector('button')
        const color = generateRandomColor()
        col.style.background = color
        text.textContent = color
        setTextColor(btn, text, color)
       
    })
}
function setTextColor(btn, text, color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white' 
    btn.style.color = luminance > 0.5 ? 'black' : 'white'
}
setRandomColors()