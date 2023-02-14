const menu=[...document.querySelectorAll("#txt")]
const box=document.getElementById("box")

menu.map((el)=>{
    el.addEventListener('mouseover',(evt)=>{
        const adc=evt.target
        adc.classList.toggle("color")
    })
    el.addEventListener('mouseout',(evt)=>{
        const adc=evt.target 
        adc.classList.remove("color")
    })
})


