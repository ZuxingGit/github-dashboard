export async function fetchUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    return res.json();
}

export async function fetchRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    return res.json();
}