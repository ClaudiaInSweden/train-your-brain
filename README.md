# Train your brain

## Introduction

### Project Description

[Train your brain](https://claudiainsweden.github.io/train-your-brain/) is a memory card game with four difficulty levels. The matching cards are to be found by flipping two cards and remember which cards are placed where to find matching pairs. Matched pairs will remain visible. When the user has found all matching pairs, the game is over.

### Project Purpose

A memory game is a fun way to train concentration and focus, and is suitable for people of all ages. 

![Responsive image example](assets/readme-docs/amiresponsive.png)

## User stories

User story: As a user, I want to play a funny game.

End user goal: The user can play a game.

End business goal: The user plays the game.
<hr>

User story: As a user, I can easily start a new game.

End user goal: User can restart the game by clicking on a restart button.

End business goal: The user plays multiple games.
<hr>

User story: As a user, I want to see how many moves it took to find all matches.

End user goal: User can see how many moves it took to finalize the game.

End business goal: The user restarts the game to reach a higher score.
<hr>

User story: As a user, I want to be able to decide how hard the game should be.

End user goal: User can select difficulty levels.

End business goal: The user can select how many cards the game should include.
<hr>

User story: As a user, I want to share this game to my Facebook friends.

End user goal: User can easily share the game on Facebook.

End business goal: The user shares the game to friens who share it to their friends, who in their turn share it with their friends, and so on. 

<hr>

## Features

### Home

The game consists of one page only including a footer with a Facebook Share button.
Underneath the title a very short instruction is visible as well as the moves counter, a difficulty selection box and the start button.

### Game area

The game board is pre-populated with 12 cards/6 pairs which corresponds to the easy level. This to enable the user to start playing directly when visiting the page.

![Prepopulated game board](assets/readme-docs/gameboard-easy.png)

The cards are flipped so that the backside with paw-prints is visible. The front contains images of animals so that the game is also appealing to children.

There are totally 25 cards available. Before a new game starts, all 25 cards are shuffled. Then, the number of cards according to the selected difficulty level is extracted, duplicated and shuffled once more before the game board is populated.

On small screens the game boards consists of 4 columns, on large screens of 6 columns. 
The game is designed for screens as small as 300px. Scrolling is unavoidable for medium to expert levels, however this does not compromise the playing experience.

Easy level consists of 12 cards/6 pairs

![Easy level](assets/readme-docs/game-won-easy.png)

Medium level consists of 24 cards/12 pairs

![Medium level](assets/readme-docs/game-won-medium.png)

Hard level consists of 36 cards/18 pairs

![Hard level](assets/readme-docs/game-won-hard.png)

Expert level consists of 48 cards/24 pairs

![Expert level](assets/readme-docs/game-won-expert.png)



The user starts the game by flipping the first card to see the animal on the front. When the user clicks on a second card, the cards will be compared with each other. When the cards match, that is if they show the same animal, the cards will remain flipped and stay visible to the user. 
If the cards don't match, the cards will be unflipped and the user may continue flipping cards to find matches.

The board will lock when two cards have been flipped to avoid that more than 2 cards can be selected. The flipped cards will be visible for one second before they are unflipped.

Each time the user flips two cards, the moves-counter on top of the game board will increase by 1.

When the user has found all matching pairs, an alert will pop-up with the message "Congratulations! You found all matches! Well done!". When the user clicks OK in the alert window, it will be closed and the user can select a different level and start a new game by clicking the button "Start". 


![Alert Congratulations](assets/readme-docs/alert-congratulations.png)

To avoid accidential restarts during a game, the user will need to confirm that a new game should start. 

![Alert Start Game](assets/readme-docs/alert-newgame.png)

When the user confirms, the moves-counter will be reset to 0 and a new game board will be populated with the number of cards corresponding to the selection in the difficulty selection box.

![Game Board Easy](assets/readme-docs/gameboard-easy.png)
![Game Board Medium](assets/readme-docs/gameboard-medium.png)
![Game Board Hard](assets/readme-docs/gameboard-hard.png)
![Game Board Expert](assets/readme-docs/gameboard-expert.png)

### Footer

The sticky footer area contains a Facebook share-button that opens a news feed window on Facebook, showing a preview of the game and the link to the game when the user is logged in to Facebook. If this is not the case, the Facebook Log-in page will be displayed. 

![Share on Facebook](assets/images/facebook-share.webp)

### 404

A customized 404 page with a link to the game was created to avoid frustrated users when something's going wrong.

![404 Page](assets/readme-docs/404.gif)

## Future Features

While the current version is fully functional, there are some ideas for future development:

- Let user choose different topics for the front cards
- Add instructions
- Add sound effect when the user wins a game
- Add possibility for the user to save the score

## Color scheme

The color scheme was selected as it is calm and doesn't distract the user from the images that shall be matched. 

![Color Scheme](assets/readme-docs/color-scheme.png)

**Castleton Green**
"Castleton Green is a deep, rich green color, resembling the color of Castleton tea leaves. It's a classic and timeless color, ideal for creating a traditional and elegant ambiance."
It also resembles nature and fits well with the animals theme of the cards. It is used for text, as background for buttons and as border for the cards.

**Champagne**
"Named after the bubbly beverage, champagne is a mixture of yellow and orange and closely resembles beige. Sitting on the inner, paler portion of the color wheel, the warmth of orange mellows the brightness of yellow in it.
Champagne brings to mind the effervescence of the drink. Because the drink is usually consumed in happy events like weddings or New Years, it also evokes feelings of joy." 
And of course our Memory Game shall bring joy to the users. The color is used as background color.

**White**
"White is clean, simple, and pure. It stands in stark opposition to black, and its meanings are unequivocal. As white light contains all the colors of the spectrum, it’s an inclusive, impartial color, favoring no single hue and refusing to take sides."
Here it is used as high contrast text color against the dark Castleton Green of buttons and the selected difficulty levels. 


## Font
"Hammersmith One is a very low contrast typeface inspired by the Johnston UK lettering tradition. Hammersmith One shows the quirks of a somewhat naive, handmade, brush written letters including a wider than normal "e" and "s" as well as dark joins between stroke which are normally compensated for in type. The sources for this design have been adapted not just for type but specifically for use as a web type. This font works well to even smaller sizes than was originally expected."
The font was chosen as it provides very well readability in all sizes, looks very clean but still has a "funny" and playful touch to it.

"Hammersmith One" from [Google Fonts](https://fonts.google.com/).


## Layout
The layout was kept very simple. Main focus is on playing a game that requires concentration, at least when playing the hard or extrem level. As some of the used images look very similar both in form and color, I decided to keep the cards at a reasonable size even when that means that the user has to scroll on small screens. 
Both myself and some friends tried the extrem level on mobiles and nobody considered scrolling as an issue. I think it would be much more annoying when you can't figure out what animal you are actually seeing on the screen.

## Technology

- IDE: GitPod
- Repository: GitHub
- Image editor: SnagIt
- Image converter: [Birme](<https://www.birme.net/>)
- Favicon generator: [Favicon](https://favicon.io/)
- Image background remover: [Adobe Express](https://www.adobe.com/express/feature/image/remove-background)
  
## Testing

### Validator Testing

#### HTML

No errors were returned when passing through the [W3C Markup validator](https://validator.w3.org/).

![HTML Validation](assets/readme-docs/html-validation.png)

#### CSS

No errors were found when passing through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) validator.

![CSS Validation](assets/readme-docs/css-validation.png)

#### JavaScript

No error were found when passing through [JSHint](<https://jshint.com/>) JavaScript Code Quality Tool.
However, the two card arrays were marked as undefined variables, see screenshot.

![JSHint Validation](assets/readme-docs/jshint.png)

#### Google Chrome Lighthouse Reports

The report presents the result of Lighthouse testing to assess the performance, accessibility, best practices and SEO of [Train your brain](https://claudiainsweden.github.io/train-your-brain/).

The tests were executed using the Google Chrome browser's DevTools.
The site scores very high in all areas.

![Lighthouse performance report](assets/readme-docs/lighthouse-analysis.png)

### Manual Testing

#### Features Testing

| Feature  | Action |Result|
| ------------- | ------------- |-------------|
|**Cards**|
| Backside card 1	  | Click  | Flips card, image visible|
| Backside card 2  | Click  | Flips card, image visible |
| Cards 1 & 2   | Match  | Both cards remain flipped with image visible |
| Card 1  | Click when already matched   | Unflips but flips right after, image visible |
| Card 2  | Click when already matched  | Unflips but flips right after, image visible |
| Cards 1 & 2| No match  | Both cards unflip after one second, image not visible |
| Backside card 3 <br>when cards 1 & 2 are flipped <br>but do not match| Click | Not possible to flip more than two cards |
| **Number of moves** |  | |
| Moves-ccounter  | Counter| Counter increments by one for each matching pair of cards|
| Moves-ccounter	| Click outside of game board |Does not increment the moves-counter |
| **Difficulty Level**	|  ||
| Select box | Display | On first page load the option Easy is selected |
| Select box | Click | Click into select box opens a dropdown menu with four options: Easy, Medium, Hard, Expert |
| Select box | Click | Click on option Easy shows Easy as selected|
| Select box | Click | Click on option Medium shows Medium as selected|
| Select box | Click | Click on option Hard shows Hard as selected|
| Select box | Click | Click on option Expert shows Expert as selected|
| Start Button | Click | Displays a windows alert asking to confirm that a new game shall start |
| OK Button in Alert Window	| Click | Depending on the selected difficulty level and screen size the game board is populated as follows: |
| 	| Level Easy | Screen size < 992px: 4 columns, 3 rows <br>Screens size > 992px: 6 columns, 2 rows |
| 	| Level Medium | Screen size < 992px: 4 columns, 6 rows <br>Screens size > 992px: 6 columns, 4 rows |
| 	| Level Hard | Screen size < 992px: 4 columns, 9 rows <br>Screens size > 992px: 6 columns, 6 rows |
| 	| Level Expert | Screen size < 992px: 4 columns, 12 rows <br>Screens size > 992px: 6 columns, 8 rows |
| Cancel Button in Alert Window | Click  |Closes the alert window and leaves the game in its present state, showing matches and/or flipped cards and number of moves|
| **Game won** | 	| |
| All card pairs matched  | Window alert  |A window alert box appears with the text "Congratulations! You found all matches! Well done!"|
| OK Button in Alert Window  | Click | Closes the alert window, game board shows all matched cards and number of moves |
| **Footer**  |  | |
| Facebook Icon & Share  | Click |Opens a Facebook news feed window with a preview of the game and a link to it |

## Browser Testing

Functionality, links, layout, and responsiveness were tested with the following browsers without any issues:

- Microsoft Edge Version 124.0.2478.105
- Firefox Version 124.0.2
- Brave Version 1.65.123
- Google Chrome Version 124.0.6367.91
  
## Device Testing

Functionality, links, layout, and responsiveness were tested on the following devices without any issues:

- Lenovo Legion Slim 7 / 2560px x 1600px
- Dell Screen 24" / 1920px x 1080px
- Samsung Galaxy S22 Ultra 

### Bugs

1. Originally I used a json file to load the images into the game. This worked perfectly fine during development. However, the images would not load on the live site. I tried to find a solution but according to some posts on Stack Overflow you would need to load the json file from an external server. To keep it simple I just added the images to an array.

2. When the game was near to be finished I realized that the game board would be empty on the first page load. As this is not a good user-experience, I decided to pre-populate the selected cards array with 6 cards.

3. Originally I had 5 difficulty levels and wanted to use the matchMedia method to change the game grid from 4 to 6 columns for the two hardest levels on large screens. Unfortunately this did not work very well and the result was a quite bumpy layout change. To make the transition smooth, I reduced the number of difficulty levels to four and just took number of cards that can be divided both by 4 and 6 and added CSS media queries instead. 

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Main Branch
- Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
  
The live link can be found here - <https://claudiainsweden.github.io/train-your-brain/>

## Forkning

A fork is a new repository that shares code and visibility settings with the original repository.
Please refer to the official GitHub documentation on how to fork my repository.
![Link to the GitHub Documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)
![Link to the Train your Brain Repository](https://github.com/ClaudiaInSweden/train-your-brain)

## Cloning

Cloning a repository pulls down a full copy of all the repository data that GitHub.com has at that point in time, including all versions of every file and folder for the project. 
Please refer to the official GitHub documentation on how to clone my repository.
![Link to the GitHub Documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
![Link to the Train your Brain Repository](https://github.com/ClaudiaInSweden/train-your-brain)


## Credits

### Content

Inspiration came from research on LinkedIn where former Code Institute students published their PP2 projects and because I myself like to play memory.

### Media

All images, icons and illustrations are from free sources as listed below:

- Emoji for for Favicon from [Twemoji](https://twemoji.twitter.com/)
  
  Licensing:
<https://creativecommons.org/licenses/by/4.0/>
- Favicon Converter from [Favicon](https://favicon.io/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Images converted to webp with [Birme](https://www.birme.net/)
- Images for cards from [Macrovector on Freepik](https://www.freepik.com/free-vector/wild-home-animals-set_4005528.htm)
- Paw image for back side of cards from [Vectorstock](https://www.vectorstock.com/royalty-free-vector/a-footpath-trail-dog-prints-walking-randomly-vector-33704528)
- Facebook Share Button from [Meta for Developers](https://developers.facebook.com/docs/plugins/share-button/)

### Color Description
- White: <https://www.sensationalcolor.com/meaning-of-white/>
- Champagne: <https://www.canva.com/colors/color-meanings/champagne/>
- Castleton Green: <https://colors.muz.li/color/castleton-green>

### Code

The following tutorials and websites were used for inspiration and guidance:

- Memory game board: [freeCodeCamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek)
- Memory game: [JavaScriptAcademy](https://youtu.be/xWdkt6KSirw?si=gYekWZV2OPfj7r0K)
- Window: confirm() method: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
- Difficulty level: [Memory Master](https://natashary.github.io/memory-game/)

as well as

- [W3Schools](https://www.w3schools.com/)
- [Mdn Web Docs](<https://developer.mozilla.org/en-US/>)
- [Stack overflow](https://stackoverflow.com/)
- [Medium](https://medium.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)
