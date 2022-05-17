# Final Fantasy Fan Favorites

## Project Description
This site is called Final Fantasy Fan Favorites (4F for short). It is an app used to rate all of the main, numbered Final Fantasy games (1-15) via "likes".  Users will be able to see a list of the numbered Final Fantasy games, rated in order from most likes to least likes, which will update dynamically.  Users can click on a secific game and see a breif description of the game and some other relevant data (year released, system originally released on, main heroes/villains).  In th efuture, I'd like to add the functionality to "like" heroes/villains to determine the most popular heroes or villains throughout the Final Fantasy series, which would also be displayed and updated dynamically.

## Wireframes
https://miro.com/app/board/uXjVO1VGPE4=/

### Home
![image](https://user-images.githubusercontent.com/89223981/168301418-f5616547-9152-473a-b207-cd51cfdb3893.png)

### Game Show Page
![image](https://user-images.githubusercontent.com/89223981/168301489-ffa9a431-a868-4c3d-8a08-d88db2a42ec4.png)

### Stretch -Character Show Page
![image](https://user-images.githubusercontent.com/89223981/168301572-f20cb0ae-ab7b-4702-abe1-e158d74673a3.png)

## Style reference
![image](https://user-images.githubusercontent.com/89223981/168301733-417e5d76-4a03-4450-9f4a-506265015ea0.png)

![image](https://user-images.githubusercontent.com/89223981/168301788-e3979a79-f086-4fcb-93d9-dfe65e681777.png)

## ERD
![image](https://user-images.githubusercontent.com/89223981/168905362-7b33087d-495c-4e48-8b08-a78be02db892.png)

## MVP User Stories
As a user, I want to:
- See a carousel of the most liked games
- See a list of the Final Fantasy games in order from 1 -15, with "Like" buttons associated with each
- Click on a like button and see the counter go up by 1
- Click on a Final Fantasy game number and be taken to a page with a picture of the logo and information about that game, including characters
- Have a navbar option that also lists the final fantasy games in order from 1 -15 when selected
- Click on a nav bar drop down item and be taken to the same page as above
- See a like button on the individual game's page that will also increase the like counter by 1
- See a footer with information about me (LinkedIn / GitHub, API attribution)
- See a header with the logo / name of the app

### Post MVP User Stories
As a user, I want to:
- See a careousel of the most liked games and characters
- See a list of the most liked characters on the home page
- Click a like button near the most-liked characters on the homepage and see the counter increase by 1
- Have a drop down option for characters that allows the user to click on a game and then opens into an embedded dropdown to select a character from that game
- Have a dropdown option that displays the characters in alphabetical order from all games
- Be able to click on a character from the dropdown menu and be taken to a page with an image of that character with information (maybe animated sprites, using the sprite sheets from Final Fantasy Record Keeper or Final Fantasy Brave Exvius)
- See a like button on the page of the character that will increase by 1 when clicked

## Component Hierarchy
![image](https://user-images.githubusercontent.com/89223981/168375074-51926da1-74ca-47fb-a64d-aa3865c35fc6.png)

| Component | Description | State/Props |
| --------- | ----------- | ----------: |
| Main | This will make the initial data request and include React Router | State |
| Header | Will render thesite logo and nav bar dropdown | Props |
| Home/Game List | Will render the carousel, list of games, and like buttons / totlas for the games | State |
| Game | Will render the information about a specific game and like button / total for that game | State |
| Footer | Will render static information - link to LinkedIn / GitHub and API Attribution | Static Info |

## Database Endpoints
- Create: /game/create
- Read: /game/:id
- Update: /game/update/:id
- Delete: /game/delete

## API
[IGDB API](https://api-docs.igdb.com/#about) - Video Game API

### Game Response
Will only need a few of these responses, will be using those select responses to seed a MongoDB to allow for faster selection of values and to add a few of my own needed values. Might create my own database, since the Game Model will need the following fields:
```
Game: {
  name: {
    type: String,
      required: [true, "Games must be named"]
  },
    logo: {
      type: String,
        required: [true, "Games must have an image"]
    },
      summary: {
      type: String,
        required: [true, "Games must have a summary"]
    },
      likes: {
        type: number,
          default: 0
      },
        release_system: {
      type: String,
        required: [true, "Games must have a release system"]
    },
      release_date: {
        type: String,
          required: [true, "Games must have a release date"]
      },
        heroes: {
          type: Array
          name: ["array of hero names"], // If doing stretch, will need to update this to hero objects
            required: [true, "Games must have heroes"]
        },
        villains: {
            type: Array,
              name: ["array of villain names"]
              required: [true, "Games must have villains"]
          }
}
```

### API Game Response
```
[
  {
    "id": 33260,
    "category": 0,
    "cover": 129073,
    "created_at": 1495739021,
    "external_games": [
      5526,
      107828,
      1927694
    ],
    "first_release_date": 1459987200,
    "game_modes": [
      1
    ],
    "genres": [
      15,
      32
    ],
    "name": "The Fifth Expedition",
    "platforms": [
      3,
      6
    ],
    "release_dates": [
      77732,
      77733
    ],
    "screenshots": [
      58357,
      58358,
      58359,
      58360,
      58361
    ],
    "similar_games": [
      25311,
      25640,
      34024,
      36553,
      37419,
      65827,
      111043,
      111130,
      113895,
      118091
    ],
    "slug": "the-fifth-expedition",
    "status": 4,
    "summary": "Guide your team of explorers into the treacherous depths of an ancient machine. \n \nOn a mission to restore the old mechanisms to life and to save your people on the surface, who rely on the age old construct for food and shelter.",
    "tags": [
      1,
      268435471,
      268435488
    ],
    "themes": [
      1
    ],
    "updated_at": 1643442946,
    "url": "https://www.igdb.com/games/the-fifth-expedition",
    "websites": [
      33480,
      33481
    ],
    "checksum": "bddffda7-802c-e138-9939-9f961ee98579"
  },
  {
    "id": 40104,
    "category": 0,
    "created_at": 1498435200,
    "external_games": [
      20127,
      1988884
    ],
    "first_release_date": 536457600,
    "genres": [
      5
    ],
    "name": "Dogou Souken",
    "platforms": [
      52
    ],
    "release_dates": [
      91007
    ],
    "similar_games": [
      12364,
      27270,
      43367,
      103281,
      103292,
      103298,
      103301,
      105049,
      106805
    ],
    "slug": "dogou-souken",
    "summary": "An overhead-view shoot\u0027em up game.",
    "tags": [
      268435461
    ],
    "updated_at": 1604620800,
    "url": "https://www.igdb.com/games/dogou-souken",
    "checksum": "5e7446ff-58d9-e744-f0d3-5e10241304c1"
  },
  {
    "id": 85031,
    "age_ratings": [
      37944
    ],
    "category": 0,
    "cover": 61466,
    "created_at": 1517392813,
    "external_games": [
      216805,
      1969751,
      2005770
    ],
    "first_release_date": 1404345600,
    "genres": [
      9
    ],
    "involved_companies": [
      130531,
      130532
    ],
    "name": "City Mysteries",
    "platforms": [
      37
    ],
    "release_dates": [
      138333
    ],
    "screenshots": [
      155025,
      155026,
      155027
    ],
    "similar_games": [
      10603,
      19222,
      25905,
      41349,
      86974,
      87507,
      88511,
      90788,
      95776,
      106992
    ],
    "slug": "city-mysteries",
    "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
    "tags": [
      268435465
    ],
    "updated_at": 1641425677,
    "url": "https://www.igdb.com/games/city-mysteries",
    "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870"
  },
  {
    "id": 161757,
    "alternative_names": [
      70253
    ],
    "category": 1,
    "created_at": 1628007985,
    "external_games": [
      2028338
    ],
    "name": "Earth Defense Force: World Brothers - Riho Futaba, Merry Santa Costume",
    "parent_game": 139067,
    "screenshots": [
      567675,
      567676,
      567677,
      567678,
      567679
    ],
    "similar_games": [
      25636,
      100800,
      103298,
      103301,
      103302,
      106805,
      112589,
      113895,
      115276,
      120268
    ],
    "slug": "earth-defense-force-world-brothers-riho-futaba-merry-santa-costume",
    "summary": "Riho Futaba (voiced by Yuko Goto), a virtual idol who has appeared in numerous video games including the \"Dream Club\" series, is now joining the EDF. And what\u0027s more, she\u0027s appearing in Santa Costume. She also comes equipped with an exclusive weapon available only with this content.",
    "tags": [
      1
    ],
    "themes": [
      1
    ],
    "updated_at": 1643475000,
    "url": "https://www.igdb.com/games/earth-defense-force-world-brothers-riho-futaba-merry-santa-costume",
    "websites": [
      208872
    ],
    "checksum": "0c23575e-d0c8-f838-49ca-832c7cc0ca48"
  }
```
