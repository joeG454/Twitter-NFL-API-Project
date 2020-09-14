

export async function getTeamTweets(data) {
    const response = await fetch('/twitterApi/tweets', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json();
}
