export async function fetchUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
        throw new Error('⚠️ User not found. Please try another username.');
    }

    return res.json();
}

export async function fetchRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

    if (!res.ok) {
        throw new Error('Failed to fetch repositories');
    }

    return res.json();
}