// Main Comment Box
var mainSection = document.getElementById('mainCommentDiv');
var textArea = document.getElementById('commentBox');
var submitBtnDesign = document.getElementById('commentSubmitBtn');

// Submit Button Style
submitBtnDesign.style.padding = '15px 35px';
submitBtnDesign.style.borderRadius = '15px';
submitBtnDesign.style.marginTop = '10px';
submitBtnDesign.style.fontSize = '17px';
submitBtnDesign.style.cursor = 'pointer';
submitBtnDesign.style.backgroundColor = '#22a6b3';
submitBtnDesign.style.border = 'none';

// Text Box Style
textArea.style.width = '100%';
textArea.style.padding = '10px';
textArea.style.borderRadius = '15px';

// Main Section Style
mainSection.style.width = '50%';
mainSection.style.margin = 'auto';

// Focus Text box
document.getElementById('commentBox').addEventListener('focus', function () {
    textArea.style.outline = 'none';
});
// Comment by keyboard Enter
document.getElementById('commentBox').addEventListener('keyup', function (enter) {
    var commentBoxText = document.getElementById('commentBox').value; // Get comment box text
    var createPElement = document.createElement('p'); // Create p element
    createPElement.innerText = commentBoxText; // p element with text
    // Check if click on enter button from keyboard
    if (enter.keyCode === 13 && createPElement.innerText !== '') {
        document.getElementById('singleCommentDiv').prepend(createPElement);
        document.querySelector('#singleCommentDiv p').setAttribute('id', 'commentDesign');
        // Single comment Design
        var commentStyle = document.getElementById('commentDesign');
        commentStyle.style.backgroundColor = '#686de0';
        commentStyle.style.width = '100%';
        commentStyle.style.padding = '20px 10px';
        commentStyle.style.borderRadius = '15px';
        commentStyle.style.color = '#fff';
        commentStyle.style.fontSize = '17px';
        // Clear comment box text and first comment
        document.getElementById('commentBox').value = '';
        document.getElementById('firstComment').innerText = '';
    } else if (createPElement.innerText == '' && enter.keyCode === 13) {
        alert('Please write something');
    }

});

// Comment by button click
document.getElementById('commentSubmitBtn').addEventListener('click', function () {
    var commentBoxText = document.getElementById('commentBox').value;
    var createPElement = document.createElement('p');
    createPElement.innerText = commentBoxText;
    if (createPElement.innerText !== '') {
        document.getElementById('singleCommentDiv').prepend(createPElement);
        document.querySelector('#singleCommentDiv p').setAttribute('id', 'commentDesign');
        var commentStyle = document.getElementById('commentDesign');
        commentStyle.style.backgroundColor = '#686de0';
        commentStyle.style.width = '100%';
        commentStyle.style.padding = '20px 10px';
        commentStyle.style.borderRadius = '15px';
        commentStyle.style.color = '#fff';
        commentStyle.style.fontSize = '17px';
        document.getElementById('commentBox').value = '';
        document.getElementById('firstComment').innerText = '';
    } else if (createPElement.innerText == '') {
        alert('Please write something');
    }

});

