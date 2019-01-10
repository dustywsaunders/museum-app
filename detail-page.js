
// PASS VALIDATIONS
function passValidations(name, msg) {
    // ERROR CONDITIONS
    // NO NAME & NO MESSAGE
    if (!msg && !name) {
        alert('Whoops, you forgot to fill in your name and message!')
      return true;
    };

    // NO NAME ONLY
    if (msg && !name) {
        alert('Whoops, you forgot to fill in your name!')
        return true;
    };

    // NO MESSAGE ONLY
    if (!msg && name) {
        alert('Whoops, you forgot to fill in your message!')
        return true;
    };
  
    if(msg.length > 280) {
      alert('Whoops, your comment is too long!')
      return true
    };
    
    // IF NO ERROR, THEN THIS WILL FIRE AS FALSE. SEE LINE 53
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
    p.innerHTML = '"' + msg + '"'
    comment.classList.add('comments')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    //IF PASS VALIDATIONS RETURNED 'TRUE'
    if (passValidations(name, msg)) {
        return null
        //IF PASS VALIDATIONS RETURNED 'FALSE'
    } else {
    // display the comments
    const commentSection = document.getElementById('comments')    
    commentSection.appendChild(comment)
        
    // reset form values
    inputField.value = null
    textArea.value = null
    }
};