const enableButton = () => {
    const textarea = document.querySelector('#postTextarea')
    const submitButton = document.querySelector('#submitPostButton')
    submitButton.disabled = textarea.value.trim() === "";
}

const submitData = async () => {
    const textInput = document.querySelector('#postTextarea')
    const url = '/api/posts'
    const data = JSON.stringify({
        content: textInput.value
    })
    const fetchOptions = {
        method: 'POST',
        body: data
    }
    console.log(textInput.value)
    let response = await fetch(url, fetchOptions)
    if (response.ok) {
        return await response.text()
    } else {
        alert("HTTP-Error: " + response.status)
    }
}

// function createPostHtml(postData) {
//
//     const postedBy = postData.postedBy;
//     const displayName = postedBy.firstName + " " + postedBy.lastName;
//     const timestamp = postData.createdAt;
//
//     return `<div class='post'>
//
//                 <div class='mainContentContainer'>
//                     <div class='userImageContainer'>
//                         <img src='${postedBy.profilePic}'>
//                     </div>
//                     <div class='postContentContainer'>
//                         <div class='header'>
//                             <a href='/profile/${postedBy.username}' class='displayName'>${displayName}</a>
//                             <span class='username'>@${postedBy.username}</span>
//                             <span class='date'>${timestamp}</span>
//                         </div>
//                         <div class='postBody'>
//                             <span>${postData.content}</span>
//                         </div>
//                         <div class='postFooter'>
//                             <div class='postButtonContainer'>
//                                 <button>
//                                     <i class='far fa-comment'></i>
//                                 </button>
//                             </div>
//                             <div class='postButtonContainer'>
//                                 <button>
//                                     <i class='fas fa-retweet'></i>
//                                 </button>
//                             </div>
//                             <div class='postButtonContainer'>
//                                 <button>
//                                     <i class='far fa-heart'></i>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
// }