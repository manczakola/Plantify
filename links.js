const contentDiv = document.querySelector('.main'),

    getContent = (fragmentId, callback) => {

        var pages = {
            myaccount: myAccount(),
            myplantcollection: "myplantcollection",
            recentlysearched: 'recentlysearched',
            logout: 'logout'
        };

        callback(pages[fragmentId]);

    }


loadContent = () => {
    fragmentId = location.hash.substr(1);

    getContent(fragmentId, function (content) {
        contentDiv.innerHTML = content;
    })
 

}



window.addEventListener('hashchange', loadContent);
  
  

