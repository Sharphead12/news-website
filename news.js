const newsData = {
    home: [
        {
            title: "ai summit in India 
            description: "The policy focuses on digital education and skill development.",
            date: "22 Feb 2026"
        },
        {
            title: "Global Markets Show Mixed Trends",
            description: "Asian and European markets reacted cautiously today.",
            date: "22 Feb 2026"
        }
    ],

    india: [
        {
            title: "Railway Infrastructure Gets Major Upgrade",
            description: "Several stations will be modernized under the new plan.",
            date: "21 Feb 2026"
        },
        {
            title: "Monsoon Expected Earlier This Year",
            description: "IMD predicts above-average rainfall.",
            date: "20 Feb 2026"
        }
    ],

    world: [
        {
            title: "UN Holds Emergency Climate Meeting",
            description: "Leaders discuss global warming challenges.",
            date: "22 Feb 2026"
        }
    ],

    business: [
        {
            title: "Startup Ecosystem Sees Rapid Growth",
            description: "India witnesses record venture funding.",
            date: "22 Feb 2026"
        }
    ],

    sports: [
        {
            title: "India Wins Cricket Series",
            description: "Team secures historic victory.",
            date: "21 Feb 2026"
        }
    ],

    technology: [
        {
            title: "AI Transforming Healthcare Sector",
            description: "Hospitals adopt AI-powered diagnostics.",
            date: "22 Feb 2026"
        }
    ],

    entertainment: [
        {
            title: "New Film Breaks Box Office Records",
            description: "The movie receives massive audience response.",
            date: "22 Feb 2026"
        }
    ]
};

function loadNews(category) {
    const container = document.getElementById("news-container");
    container.innerHTML = "";

    newsData[category].forEach(news => {
        const article = document.createElement("div");
        article.className = "article";

        article.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.description}</p>
            <small>Published on: ${news.date}</small>
        `;

        container.appendChild(article);
    });
}