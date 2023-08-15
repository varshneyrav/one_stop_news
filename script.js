<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="origin" name="referrer">
    <!-- <meta content="dark" name="color-scheme"> -->
    <link rel="icon" type="image/x-icon" href="./images/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--     <script src="script.js" type="text/javascript"></script> -->
    <title> One Stop | News</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="preloaders">
    </div>

    <nav>
        <div class="main-nav container flex">
            <a href="#" onclick="reload()" class="company-logo">
                <img src="./images/logo.png" alt="company logo">
            </a>

            <body onload=display_ct();>
                <span id='ct5'></span>
                <h3 class="name">ONE STOP NEWS</h3>
                <div class="search-bar flex">
                    <input id="search-text" type="text" class="news-input" placeholder="e.g. India">
                    <button id="search-button" class="search-button" onclick="onNewsSearch('fullscreen')">Search</button>
                </div>
        </div>
    </nav>
    <!--            second nav           -->
    <div class="items">
        <div class="nav-links">
            <ul class="flex">
                <li class="hover-link nav-item" id="Latest News" onclick="onNavItemClick('Latest News')">Latest News
                </li>
                <li class="hover-link nav-item" id="technology" onclick="onNavItemClick('technology')">Technology</li>
                <li class="hover-link nav-item" id="stocks" onclick="onNavItemClick('stocks')">Stocks</li>
                <li class="hover-link nav-item" id="Indian finance" onclick="onNavItemClick('Indian finance')">Finance
                </li>
                <li class="hover-link nav-item" id="politics" onclick="onNavItemClick('politics')">Politics</li>
                <li class="hover-link nav-item" id="world" onclick="onNavItemClick('world')">world</li>
                <li class="hover-link nav-item" id="Entertainment" onclick="onNavItemClick('Entertainment')">
                    Entertainment</li>
                <li class="hover-link nav-item" id="Indian Astrology" onclick="onNavItemClick('Indian Astrology')">
                    Astrology</li>
                <li class="hover-link nav-item" id="Indian Shop now" onclick="onNavItemClick('Indian Shop now')">Shop
                    now</li>
                <li class="hover-link nav-item" id="Life Style" onclick="onNavItemClick('Life Style')">Life Style</li>
                <li class="hover-link nav-item" id="cricket" onclick="onNavItemClick('stocks')">Stocks</li>

            </ul>
        </div>
    </div>
    
    <!-- <div class="weathers">
        <form>
            <div class="row" id="heading">
                <pre class="trend">[ Weather news ]</pre>
                <input type="search" id="search" placeholder="eg. Agra " />
            </div>

        </form>
        <div class="row" id="weather">
        </div>
    </div> -->

    <!-- <div class="trending-news">
        <pre class="trend">[ trending news ]</pre><br>
        <div class="items_">
            <ul class="ul">
                <li class="hover-link nav-item" id="BOLLYWOOD" onclick="onNavItemClick('BOLLYWOOD')">BOLLYWOOD</li>
                <li class="hover-link nav-item" id="weather News" onclick="onNavItemClick('weather News')">weather News
                </li>
                <li class="hover-link nav-item" id="ICC WORLD CUP 2023" onclick="onNavItemClick('ICC WORLD CUP 2023')">
                    ICC WORLD CUP 2023</li>
                <li class="hover-link nav-item" id="RAIN NEWS OF INDIA" onclick="onNavItemClick('RAIN NEWS OF INDIA')">
                    RAIN NEWS TODAY</li>
                <li class="hover-link nav-item" id="Science" onclick="onNavItemClick('Science')">Science</li>
            </ul>
        </div>
    </div> -->
    <div class="small_screen_search_row">
        <div class="search-bar none flex">
            <input id="search-input-mobile" type="text" class="news-input" placeholder="e.g. India">
            <button id="search-button" class="search-button" onclick="onNewsSearch('mobile')">Search</button>
        </div>
    </div>
    <main>
        <div class="cards-container container flex" id="cards-container">
        </div>
    </main>
    <template id="template-news-card">
        <div class="card">
            <div class="card-header">
                <img src="https://via.placeholder.com/400x200" alt="news-image" id="news-img">
            </div>
            <div class="card-content">
                <h2 id="news-title">This is the Title</h2>
                <h6 class="news-source" id="news-source">End Gadget 26/08/2023</h6>
                <p class="news-desc" id="news-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                    saepe quis voluptatum quisquam vitae doloremque facilis molestias quae ratione cumque!</p>
            </div>
        </div>
    </template>
    <!-- <div id="footer">copyright (c)</div> -->
    <footer id="footer">
        <div class="container">
            <div class="footerTop">
                <div class="footLogo">
                    <a class="fotLogo" href="#"> Explore the: One Stop News</a><br>
                    <!-- <img src="Logo copy.png" alt="company logo"> -->
                    <hr>
                    <div class="copyright"> Copyright © 2023 OSN. The OSN is not responsible for the content of external
                        sites. All Right Reserved </div>
                </div>
    </footer>

    <div class="ons_loader" id="ons_loader">
        <img src="logo.png" />
    </div>

    <!-- <script src="load.js"></script> -->
    <!-- <script src="w_app.js"></script>
<script src="script.js"></script> -->

</body>
<script>
    var loading = document.getElementById("preloaders");
    window.addEventListener("load", function () {
        <!-- loading.style.animationDelay="2s"; -->
        loading.style.display = "none";
    })
</script>
<script type="text/javascript">
    function display_ct5() {
        var x = new Date()
        var ampm = x.getHours() >= 12 ? ' PM' : ' AM';

        var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
        x1 = x1 + " \n " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
        document.getElementById('ct5').innerHTML = x1;
        display_c5();
    }
    function display_c5() {
        var refresh = 1000; // Refresh rate in milli seconds
        mytime = setTimeout('display_ct5()', refresh)
    }
    display_c5()
</script>
<script src="script.js" type="text/javascript"></script>
<!-- <script src="w_app.js" type="text/javascript"></script> -->

</html>
