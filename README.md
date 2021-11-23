# Grocery Store App

This is the frontend for the Grocery Store App, utilizing API from the [MongoDB-Heroku backend.](https://github.com/gadgetgeek/kweb_backend)

## Contributors
- [Brian Anderson](https://github.com/gadgetgeek) (team lead and repo owner)
- [Kerlin Lopes](https://github.com/kerlinlopes)
- [Elikya Bokanga](https://github.com/elikyaB)
- [Wensy DeSousa](https://github.com/wensyd)

## Technologies Used
- HTML5
- SASS
- React JS
- Netlify

## Router Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Home | `/` | Homepage |
| Index | `/products` | GET returns all products, POST creates a new product |
| Show | `/products/:id` | PUT updates a product, DELETE destroys a product |

## Components
- HeaderNav - hosts the title banner responsive logic
- Header - shows tabs for store navigation
- BurgerMenu - pop-up navigation pane for mobile
- Main - holds CRUD functions and routes

## Pages
- Index - search bar for products, carousel through department items, modal for 
- Show - shows pre-filled form of specified bookmark for editing

## Tree
```
App
 |_____ HeaderNav
          |______ Header / BurgerMenu
 |_____ Main
          |______ Index / Show
```

## User Stories
- As a user, I can see a list of all my products when I visit the page.
- As a user, I can click on one of my products and have it take me to its individual page.
- As a user, I can create a new product, see it immediately, and the form becomes clear for a new entry.
- As a user, I can update a product in case I made a typo or want to change an image.
- As a user, I can delete a product so I can keep my list relevant.

## Development Challenges

### Kroger API Requests and OAuth 2.0
Our initial plan was to allow the user to do organic API requests from [Kroger](https://developer.kroger.com/documentation/public/getting-started/quick-start) in order to render a list of products. The Kroger API makes use of OAuth 2.0 - which is a cool way to authorize inidivudal users and have their info stored on Kroger's end - but it ended up being unfeasible. We got the API requests to work via Thunderclient, but trying to turn its code into Javascript proved to be a headache due to CORS.

### Git Collaboration
The biggest lessons learned were the complications that arose from collaborating across Git. Dividing up the work seems like a massive productivity hack, but having to put code from different sources together, and pushing and pulling suggested changes across the net led to quite a few merge conflicts and a lot of thrown out code. The higher up the design hierarchy a change is, the more things it breaks.

### Lessons Learned
The biggest bottleneck to a project seems to be getting MVP going. Until the backend and a skeleton of the frontend is up, frontend stylers don't really have enough to work with early on, an have to consistently adapt on the fly to any changes. So it pays to be a little more cautious rather than our bold attempt to work on every piece simultaneously.
