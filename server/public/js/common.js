const enableButton = () => {
    const textarea = document.querySelector('#postTextarea')
    const submitButton = document.querySelector('#submitPostButton')
    submitButton.disabled = textarea.value.trim() === "";
}

const submitData = async () => {
    const textarea = document.querySelector('#postTextarea')
    const submitButton = document.querySelector('#submitPostButton')

    const data = {
        content: textarea.value
    }

    const url = '/api/posts'
    const config = {
        method: 'POST',
        body: data
    }
    let response = await fetch(url, config)
    let result = await response.text()
    alert(result)
}

// function createPostHtml(postData) {
//
//     var postedBy = postData.postedBy;
//     var displayName = postedBy.firstName + " " + postedBy.lastName;
//     var timestamp = postData.createdAt;
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