# Bookmark Frontend

This is the frontend for the Grocery Store App, utilizing API from the [MongoDB-Heroku backend.]()

## Contributors
- [Brian Anderson](https://github.com/gadgetgeek) (team lead and repo owner)
- [Kerlin Lopes](https://github.com/kerlinlopes)
- [Elikya Bokanga](https://github.com/elikyaB)
- [Wensy DeSousa](https://github.com/wensyd)

## Technologies Used
- HTML5
- CSS
- React JS
- Netlify

## Router Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Home | `/` | Homepage |
| Login | `/login` | User authentication |
| Signup | `/signup` | User account creation |
| Index | `/shop` | GET request, returns all products |
| Create | `/shop` | POST request, uses request body to add product to user cart |
| Index | `/cart` | GET request, returns products in user cart |
| Update | `/cart/:id` | PUT request, updates quantity of product in cart |
| Destroy | `/cart/:id` | DELETE request, removes specified product from cart |
| Show | `/shop/:id` | GET request, shows the product specified |

## Components
- Header - hosts the title banner and store navigation (sandwhich menu?)
- Main - holds CRUD functions and routes

## Pages
- Shop - search bar for products, carousel through department items, modal for 
- Cart - shows pre-filled form of specified bookmark for editing

## Tree
```
App
 |_____ Header
 |_____ Main
          |______ Login / Signup
          |______ Shop / Cart
```

## User Stories
- As a user, I can see a list of all my bookmarks when I visit the page.
- As a user, I can click on one of my bookmarks and have it take me to the linked website.
- As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark, and the form becomes clear for a new entry.
- As a user, I can update a bookmark in case I made a typo or the URL changed.
- As a user, I can delete a bookmark so I can keep my list relevant.
- As a user, I can delete all bookmarks so I can make a new list entirely.
- As a user, I can click to go to the site of a random bookmark.
