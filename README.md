# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - News homepage solution](#frontend-mentor---news-homepage-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/Screenshot%20(225).png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
- [Font Family](https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap) - For fonts



```html
<div class="mobile-nav-bar transition" id="mobile-nav">
        <div class="mobile-container">
            <button id="close-menu" class="close-menu"><img src="images/icon-menu-close.svg" alt=""></button>

            <nav class="mobile-nav">
                <ul>
                    <li class="nav-links"><a href="#">Home</a></li>
                    <li class="nav-links"><a href="#">New</a></li>
                    <li class="nav-links"><a href="#">Popular</a></li>
                    <li class="nav-links"><a href="#">Trending</a></li>
                    <li class="nav-links"><a href="#">Categories</a></li>
                </ul>
            </nav>
        </div>
    </div>
```

```css
.mobile-nav-bar {
        display: block;
        height: 100vh;
        width: 255px;
        background-color: var(--body-color);
        position: fixed;
        top: 0;
        right: -255px;
        transition: all 550ms ease-in-out;
}
```

## Author

- Frontend Mentor - [@Trayshmhirk](https://www.frontendmentor.io/profile/Trayshmhirk)
- Twitter - [@TrayShmhirk01](https://www.twitter.com/TrayShmhirk01)


