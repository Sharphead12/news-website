function loadNews(category) {
    const container = document.getElementById("news-container");

    if (!container) {
        console.log("Container not found");
        return;
    }

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
const newsData = {
    home: [
        {
            title: "Global Inflation Concerns Rise Again",
            description: "Central banks across major economies review interest rate policies.",
            date: "16 Mar 2026"
        },
        {
            title: "Renewable Energy Adoption Hits New Record",
            description: "Solar and wind projects expand rapidly worldwide.",
            date: "15 Mar 2026"
        },
        {
            title: "Oil Prices Fluctuate Amid Supply Uncertainty",
            description: "Energy markets react to geopolitical developments.",
            date: "15 Mar 2026"
        },
        {
            title: "Education Sector Embraces Hybrid Learning",
            description: "Institutions continue blending online and offline teaching.",
            date: "14 Mar 2026"
        },
        {
            title: "Tourism Industry Shows Strong Recovery",
            description: "International travel demand increases significantly.",
            date: "14 Mar 2026"
        }
    ],

    india: [
        {
            title: "India Launches New High-Speed Rail Corridor",
            description: "Project aims to reduce travel time between major metro cities.",
            date: "16 Mar 2026"
        },
        {
            title: "UPI Transactions Hit All-Time High",
            description: "Digital payments surge across urban and rural regions.",
            date: "15 Mar 2026"
        },
        {
            title: "Government Announces Green Energy Initiative",
            description: "New policies focus on solar infrastructure expansion.",
            date: "15 Mar 2026"
        },
        {
            title: "Startup Ecosystem Expands in Tier-2 Cities",
            description: "Young entrepreneurs drive innovation growth.",
            date: "14 Mar 2026"
        },
        {
            title: "Healthcare Budget Increased for 2026",
            description: "Focus on modern hospitals and rural health programs.",
            date: "14 Mar 2026"
        }
    ],

    world: [
        {
            title: "Global Leaders Meet Over AI Regulations",
            description: "Summit discusses ethical AI governance frameworks.",
            date: "16 Mar 2026"
        },
        {
            title: "Climate Change Talks Resume at UN Headquarters",
            description: "Nations aim to strengthen emission reduction commitments.",
            date: "15 Mar 2026"
        },
        {
            title: "European Economy Shows Signs of Stabilization",
            description: "Inflation rates begin gradual decline.",
            date: "15 Mar 2026"
        },
        {
            title: "Tech Migration Trends Increase Worldwide",
            description: "Skilled workforce relocates for better opportunities.",
            date: "14 Mar 2026"
        },
        {
            title: "Space Agencies Plan Joint Lunar Mission",
            description: "International collaboration strengthens space research.",
            date: "14 Mar 2026"
        }
    ],

    business: [
        {
            title: "Stock Markets Show Volatility Amid Policy Changes",
            description: "Investors remain cautious before economic announcements.",
            date: "16 Mar 2026"
        },
        {
            title: "E-commerce Sales Surge During Festive Season",
            description: "Online platforms record massive transaction volumes.",
            date: "15 Mar 2026"
        },
        {
            title: "Banking Sector Adopts Advanced Cybersecurity Measures",
            description: "Financial institutions strengthen digital protection systems.",
            date: "15 Mar 2026"
        },
        {
            title: "Manufacturing Output Increases in Emerging Markets",
            description: "Industrial production shows steady recovery.",
            date: "14 Mar 2026"
        },
        {
            title: "Real Estate Investments Rise in Metro Cities",
            description: "Demand for commercial spaces grows rapidly.",
            date: "14 Mar 2026"
        }
    ],

    sports: [
        {
            title: "India Begins Preparation for ICC Championship",
            description: "Coaching staff announces intensive training camps.",
            date: "16 Mar 2026"
        },
        {
            title: "Football League Sees Record Stadium Attendance",
            description: "Fans return in large numbers this season.",
            date: "15 Mar 2026"
        },
        {
            title: "Young Athletes Shine at National Games",
            description: "Several records broken in track and field events.",
            date: "15 Mar 2026"
        },
        {
            title: "Tennis Stars Gear Up for Grand Slam Series",
            description: "Top players prepare for upcoming tournaments.",
            date: "14 Mar 2026"
        },
        {
            title: "Olympic Committee Announces New Sports Categories",
            description: "Modern games to attract younger audiences.",
            date: "14 Mar 2026"
        }
    ],

    technology: [
        {
            title: "Quantum Computing Research Gains Momentum",
            description: "Tech giants invest heavily in next-gen processors.",
            date: "16 Mar 2026"
        },
        {
            title: "AI Chatbots Transform Customer Support Industry",
            description: "Automation improves response efficiency.",
            date: "15 Mar 2026"
        },
        {
            title: "5G Expansion Continues Across Developing Nations",
            description: "Telecom operators accelerate infrastructure rollout.",
            date: "15 Mar 2026"
        },
        {
            title: "Cybersecurity Threats Increase in Digital Economy",
            description: "Experts advise stronger encryption practices.",
            date: "14 Mar 2026"
        },
        {
            title: "Smart Devices Market Witnesses Rapid Growth",
            description: "Consumers adopt IoT-based home automation products.",
            date: "14 Mar 2026"
        }
    ],

    entertainment: [
        {
            title: "Big Budget Film Dominates Weekend Box Office",
            description: "Audiences flock to cinemas for action thriller release.",
            date: "16 Mar 2026"
        },
        {
            title: "Streaming Platforms Release New Original Series",
            description: "Viewership numbers reach record highs.",
            date: "15 Mar 2026"
        },
        {
            title: "Music Festival Attracts International Artists",
            description: "Fans celebrate live performances after long gap.",
            date: "15 Mar 2026"
        },
        {
            title: "Celebrity Talk Shows Gain Popularity Online",
            description: "Digital interviews trend across social media.",
            date: "14 Mar 2026"
        },
        {
            title: "Animation Industry Expands with Global Collaborations",
            description: "Studios partner for high-quality productions.",
            date: "14 Mar 2026"
        }
    ]
};