const enableButton = () => {
    const textarea = document.querySelector('#postTextarea')
    const submitButton = document.querySelector('#submitPostButton')
    submitButton.disabled = textarea.value.trim() === "";
}

const submitData = async () => {
    const textInput = document.querySelector('#postTextarea')
    const submitButton = document.querySelector('#submitPostButton')
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
        const result = await response.json()
        const html = createPostHtml(result)
        $(".postsContainer").prepend(html)
        textInput.value = ""
        submitButton.disabled = true
    } else {
        alert("HTTP-Error: " + response.status)
    }
}

const likeButton= async () => {
    const
}

function getPostIdFromElement(element) {
    const rootElement
}

function createPostHtml(postData) {
    const postedBy = postData.postedBy;
    const displayName = postedBy.firstName + " " + postedBy.lastName;
    const timestamp = timeDifference(new Date(), new Date(postData.createdAt));

    return `<div class='post'>
                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                        <img src='${postedBy.profilePic}' alt="User's profile picture">
                    </div>
                    <div class='postContentContainer'>
                        <div class='header'>
                            <a href='/profile/${postedBy.username}' class='displayName'>${displayName}</a>
                            <span class='username'>@${postedBy.username}</span>
                            <span class='date'>${timestamp}</span>
                        </div>
                        <div class='postBody'>
                            <span>${postData.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button>
                                    <i class='far fa-comment'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer'>
                                <button>
                                    <i class='fas fa-retweet'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer'>
                                <button class="likeButton">
                                    <i class='far fa-heart'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
        if(elapsed/1000 < 30) return "Just now";

        return Math.round(elapsed/1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';
    }
}