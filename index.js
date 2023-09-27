// variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "f7cb8f8cc4f8470b9171f14ef73d7a22";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};


generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

// ... (Your existing code)

function displayNews() {
    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";
link.style.marginRight = "10px"; // Adjust the margin value as needed

        
        

        var shareBtn = document.createElement('button');
        shareBtn.innerText = "Share";
        shareBtn.id = "shareBtn";
shareBtn.className = "btn btn-primary"; // Add a CSS class for styling
        

        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'News Share',
                    url: news.url
                }).then(() => {
                    console.log('News shared successfully!');
                }).catch(err => {
                    console.log('Error sharing news:', err);
                });
            } else {
                alert("Browser doesn't support this API!");
            }
        });

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);
        cardBody.appendChild(shareBtn); // Add the share button to the card

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}

// ... (The rest of your existing code)

function toggleMic() {
    const micIcon = document.getElementById("voice-search-icon");

    if (isMicOn) {
        // Turn off the mic
        isMicOn = false;
        // Stop recording or other mic-related actions
        stopRecording(); // Replace with your own function to stop recording
        // Change the mic icon to indicate it's off
        micIcon.innerHTML = '<i class="fas fa-microphone"></i>';
    } else {
        // Turn on the mic
        isMicOn = true;
        // Start recording or other mic-related actions
        startRecording(); // Replace with your own function to start recording
        // Change the mic icon to indicate it's on
        micIcon.innerHTML = '<i class="fas fa-microphone-slash"></i>';
    }
}




// ... (Your existing code)

// Define a variable to track the mic state
let isMicOn = false;

// Function to handle mic toggle
function toggleMic() {
    const micIcon = document.getElementById("voice-search-icon");

    if (isMicOn) {
        // Turn off the mic
        isMicOn = false;
        // Stop recording or other mic-related actions
        stopRecording(); // Replace with your own function to stop recording
        // Change the mic icon to indicate it's off
        micIcon.innerHTML = '<i class="fas fa-microphone"></i>';
    } else {
        // Turn on the mic
        isMicOn = true;
        // Start recording or other mic-related actions
        startRecording(); // Replace with your own function to start recording
        // Change the mic icon to indicate it's on
        micIcon.innerHTML = '<i class="fas fa-microphone-slash"></i>';
    }
}

// Add a click event listener to the mic icon
document.getElementById("voice-search-icon").addEventListener("click", toggleMic);

// ... (The rest of your existing code)



// JavaScript for showing the loading spinner
function showLoadingSpinner() {
    document.getElementById("loading-spinner").style.display = "block";
}

// JavaScript for hiding the loading spinner
function hideLoadingSpinner() {
    document.getElementById("loading-spinner").style.display = "none";
}

// Function to fetch and display breaking news in the marquee
const fetchBreakingNews = async () => {
    const response = await fetch(HEADLINES_NEWS + API_KEY);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        const articles = myJson.articles;

        // Build the breaking news text
        let breakingNewsText = "";
        articles.slice(0, 5).forEach(news => {
            breakingNewsText += `${news.title} - `;
        });

        // Remove the trailing dash and space
        breakingNewsText = breakingNewsText.slice(0, -2);

        // Update the marquee text
        const marqueeElement = document.querySelector("#breaking-news marquee");
        marqueeElement.textContent = breakingNewsText;
    } else {
        // Handle errors
        console.log(response.status, response.statusText);
        const marqueeElement = document.querySelector("#breaking-news marquee");
        marqueeElement.textContent = "No breaking news available.";
    }
};

// Call the fetchBreakingNews function on page load
window.onload = function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
    fetchBreakingNews(); // Fetch and display breaking news
};

// ... (The rest of your existing code)

