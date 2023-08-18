const API_KEY1 = "628881c4bc3a9d2c6892dc928783469c";
// const API_KEY1 = "4ca2748c39c15c160959ebf252224d66";
const url_ = "https://gnews.io/api/v4/search?q=";

window.addEventListener("load", () => fetchNews("Breaking news"));

function reload() {
    window.location.reload();
}

let app_loader = document.getElementById('ons_loader');

async function fetchNews(query) {
    app_loader.classList.remove("display_none");
    app_loader.classList.add("display_grid");
    // let apiEndpoint = './news.json';
    let apiEndpoint = `${url_}${query.trim()}&apikey=${API_KEY1}`;
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    console.log('response', data);
    if(data && data.articles && data.articles.length ){
	// below code for make unique records
        // var mapNews = new Map();
        // for (let singleNews of data.data) {
        //     mapNews.set(singleNews["title"], singleNews);
        // }
        // var iteratorValues = mapNews.values();
        // var uniqueRecords = [...iteratorValues];
        // console.log('uniqueData', uniqueRecords);
        bindData(data.articles);
    } else {
        alert(`Opps! ${keyWord} news are not available!`)
    }
    
}
// ravi ravi

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        // if (!article.image) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
    app_loader.classList.remove("display_grid");
    app_loader.classList.add("display_none");
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.image;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}
// ravi ravi
let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");
const mobileSearchText = document.getElementById("search-input-mobile");

function onNewsSearch(source) {
    let query = (source === 'mobile') ? mobileSearchText.value : searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
}
