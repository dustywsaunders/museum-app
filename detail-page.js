
// add event handler
function submitComment() {

    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    console.log(name)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)

    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // adjust the elements we created
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comments')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)
    
    // displaying comments
    const commentSection = document.getElementById('comments')    
    commentSection.appendChild(comment)

    // reset form values
    inputField.value = null
    textArea.value = null

};