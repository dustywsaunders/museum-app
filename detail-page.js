
// PASS VALIDATION
function doesNotPassAllValidations(name, msg) {
    // ERROR CONDITIONS
    if (!msg && !name) {
        alert('Whoops, you forgot to fill in your name and message!')
      return true;
    };

    if (msg && !name) {
        alert('Whoops, you forgot to fill in your name!')
        return true;
    };

    if (!msg && name) {
        alert('Whoops, you forgot to fill in your message!')
        return true;
    };
  
    if(msg.length > 280) {
      alert('Whoops, your comment is too long!')
      return true
    };
  
    return false
};


// add event handler
function submitComment() {
    
    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // adjust the elements we created
    h3.innerHTML = `${name} said:`
    p.innerHTML = '\"' + msg + '\"'
    comment.classList.add('comments')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    if (doesNotPassAllValidations(name, msg)) {
        return null
    } else {
    // displaying comments
    const commentSection = document.getElementById('comments')    
    commentSection.appendChild(comment)
        
    // reset form values
    inputField.value = null
    textArea.value = null
    }
};