export function getLanguageStats(repos) {

    const stats = {};

    repos.forEach((repo) => {

        const lang = repo.language;

        if (!lang) return;

        if (!stats[lang]) {
            stats[lang] = 0;
        }

        stats[lang] += 1;

    });

    return Object.keys(stats).map((lang) => ({
        name: lang,
        value: stats[lang],
    })).sort((a, b) => b.value - a.value);
}