document.addEventListener("DOMContentLoaded", async (event) => {
    console.log('DOM is ready.')
    const url = '/api/posts'
    const response = await fetch(url)
    const data = await response.json() // json() converts the response's body from a ReadableStream to a json object otherwise would require a reader
    if (response.ok) {
        console.log(data)
        outputPosts(data, $('.postsContainer'))
    } else {
        alert("HTTP-Error: " + response.status)
    }
});

function outputPosts (results, container) {
    // container.html("")

    results.forEach(result => {
        const html = createPostHtml(result)
        container.append(html)
    })
    if (results.length === 0) {
        container.append("<span>Nothing to show</span>")
    }
}