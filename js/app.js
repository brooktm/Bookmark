document.getElementById("myForm").addEventListener('submit', saveBookmark); // add event listenr for the submit button


//event listenr function
function saveBookmark(e){
    var siteName= document.getElementById('sitename').value;
    var siteUrl = document.getElementById('siteurl').value;



    var bookmark = {
        var: siteName,
        url: siteUrl
    }

if (localStorage.getItem('bookmarks') === null){ // tes if bookmark is null
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // if bookmark is not there add to local storage
} else {
    // get bookmarks from local storage

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //add the bookmarks to array

    bookmarks.push(bookmark);
}



//prevent form from submiting 
    e.preventDefault();
   
}
