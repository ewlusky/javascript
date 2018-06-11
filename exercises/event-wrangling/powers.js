/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

function handlerFunction() {
    const id = (event.target.id).split('-')
    if (id[0] == 'activate') {
        if (id[1] == 'all') {
            const pows = document.querySelectorAll('.power')
            pows.forEach(pow => {
                console.log(pow)
                pow.classList.add('enabled')
                pow.classList.remove('disabled')
            })
        } else {
            const tar = document.querySelector(`#${id[1]}`)
            tar.classList.add('enabled')
            tar.classList.remove('disabled')
        }
    } else {
        const depows = document.querySelectorAll('.power')
        depows.forEach(depow => {
            console.log(depow)
            depow.classList.remove('enabled')
            depow.classList.add('disabled')
        })
        
    }
    console.log(event.target.id)
}
document.querySelector("#activate-flight").addEventListener('click', handlerFunction)
document.querySelector("#activate-mindreading").addEventListener('click', handlerFunction)
document.querySelector("#activate-xray").addEventListener('click', handlerFunction)
document.querySelector("#activate-all").addEventListener('click', handlerFunction)
document.querySelector("#deactivate-all").addEventListener('click', handlerFunction)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/