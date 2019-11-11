# Home Project

This is an assignment where I needed to built an app that searches the Flickr API. You can search in the navbar. The pictures are displayed and paginated.

For the latest deployed version click on the link below:
[Home App](https://competent-wiles-1fe4cc.netlify.com/)

### Getting started

Clone this repository and install the packages with npm install. Then run npm start to see the app. 

### Features

* Searchbar
* Picturedisplay
* Pagination


### Searchbar

The serachbar is made with react-bootstrap. It stores the the search query locally, and in the redux-store for later use. It sends the searchterm as a query to the Flickr API.

### PictureDisplay

The pictures are displayed with flexbox. So it is responsive. If you hover on a picture it displays the title of the picture. Both elements are made with bootstrap

### Pagination

Under the pictures you can select a new page and a new query is made to the Flickr Api with the correct page number. It also displays the number of pages.

