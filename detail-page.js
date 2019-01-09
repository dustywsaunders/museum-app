function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    console.log(name)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)
    const comment = document.createElement('section')
    const heading = document.createElement('h3')
    const para = document.createElement('p')
};