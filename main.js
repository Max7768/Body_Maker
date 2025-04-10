const main = document.querySelector('.main')
main.addEventListener('mouseover', () => {
    main.classList.add('white_theme')
}
)
main.addEventListener('mouseout', () => {
    main.classList.remove('white_theme')
}
)
main.addEventListener('click', () => {
    document.location.href = 'index.html'
})
const lessons = document.querySelector('.motivation')
lessons.addEventListener('mouseover', () => {
    lessons.classList.add('white_theme')
}
)
lessons.addEventListener('mouseout', () => {
    lessons.classList.remove('white_theme')
}
)
lessons.addEventListener('click', () => {
    document.location.href = 'lessons.html'
})
const systems = document.querySelector('.training')
systems.addEventListener('mouseover', () => {
    systems.classList.add('white_theme')
}
)
systems.addEventListener('mouseout', () => {
    systems.classList.remove('white_theme')
}
)
systems.addEventListener('click', () => {
    document.location.href = 'systems.html'
})
const progress = document.querySelector('.progress')
progress.addEventListener('mouseover', () => {
    progress.classList.add('white_theme')
}
)
progress.addEventListener('mouseout', () => {
    progress.classList.remove('white_theme')
}
)
progress.addEventListener('click', () => {
    document.location.href = 'progress.html'
})
const welcome = document.querySelector('.tech')

const arms = document.querySelector('.arms')
const armsText = document.querySelector('.armsText')
const chest = document.querySelector('.chest')
const chestText = document.querySelector('.chestText')
const belly = document.querySelector('.belly')
const bellyText = document.querySelector('.bellyText')
const legs = document.querySelector('.legs')
const legsText = document.querySelector('.legsText')
const back = document.querySelector('.back')
const backText = document.querySelector('.backText')

arms.addEventListener('mouseover', () => {
    arms.classList.add('white_arms') 
})
arms.addEventListener('mouseout', () => {
    arms.classList.remove("white_arms") 
})
arms.addEventListener('click', () => {
    arms.classList.add("white_arms2")
    chest.classList.remove("white_chest2")
    belly.classList.remove("white_belly2")
    legs.classList.remove("white_legs2")
    back.classList.remove("white_back2")
    welcome.style.display = 'none'
    chestText.style.display = 'none'
    bellyText.style.display = 'none'
    armsText.style.display = 'inline-block'
    backText.style.display = 'none'
    legsText.style.display = 'none'
})
chest.addEventListener('mouseover', () => {
    chest.classList.add('white_chest') 
})
chest.addEventListener('mouseout', () => {
    chest.classList.remove("white_chest") 
})
chest.addEventListener('click', () => {
    arms.classList.remove("white_arms2")
    chest.classList.add("white_chest2")
    belly.classList.remove("white_belly2")
    legs.classList.remove("white_legs2")
    back.classList.remove("white_back2")
    welcome.style.display = 'none'
    chestText.style.display = 'inline-block'
    bellyText.style.display = 'none'
    backText.style.display = 'none'
    legsText.style.display = 'none'
    armsText.style.display = 'none'
})
belly.addEventListener('mouseover', () => {
    belly.classList.add('white_belly') 
})
belly.addEventListener('mouseout', () => {
    belly.classList.remove("white_belly") 
})
belly.addEventListener('click', () => {
    arms.classList.remove("white_arms2")
    chest.classList.remove("white_chest2")
    belly.classList.add("white_belly2")
    legs.classList.remove("white_legs2")
    back.classList.remove("white_back2")
    welcome.style.display = 'none'
    chestText.style.display = 'none'
    bellyText.style.display = 'inline-block'
    backText.style.display = 'none'
    legsText.style.display = 'none'
    armsText.style.display = 'none'
})
legs.addEventListener('mouseover', () => {
    legs.classList.add('white_legs') 
})
legs.addEventListener('mouseout', () => {
    legs.classList.remove("white_legs") 
})
legs.addEventListener('click', () => {
    arms.classList.remove("white_arms2")
    chest.classList.remove("white_chest2")
    belly.classList.remove("white_belly2")
    legs.classList.add("white_legs2")
    back.classList.remove("white_back2")
    welcome.style.display = 'none'
    chestText.style.display = 'none'
    bellyText.style.display = 'none'
    backText.style.display = 'none'
    legsText.style.display = 'inline-block'
    armsText.style.display = 'none'
})
back.addEventListener('mouseover', () => {
    back.classList.add('white_back') 
})
back.addEventListener('mouseout', () => {
    back.classList.remove("white_back") 
})
back.addEventListener('click', () => {
    arms.classList.remove("white_arms2")
    chest.classList.remove("white_chest2")
    belly.classList.remove("white_belly2")
    legs.classList.remove("white_legs2")
    back.classList.add("white_back2")
    welcome.style.display = 'none'
    chestText.style.display = 'none'
    bellyText.style.display = 'none'
    backText.style.display = 'inline-block'
    legsText.style.display = 'none'
    armsText.style.display = 'none'
})