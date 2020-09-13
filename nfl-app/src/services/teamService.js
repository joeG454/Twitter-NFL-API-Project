

export async function getTeamTweets(data) {
    const response = await fetch('/twitterApi/tweets');
    return await response.json();
}
