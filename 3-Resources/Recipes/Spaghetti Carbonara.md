---
alias: carbonara
created: 2024-05-19
tags: recipe, pasta, starch
author: Alex Yaroslavskiy
---
### Spaghetti Carbonara

 >Notes: Classic dish with very few ingredients. Don't overthink it; somethings can stay a classic. Be careful not to cook the eggs. You can add an additional full egg for body
 
### Ingredients 
```button
name add ingredient
type command
action Quickadd: Capture - Add Ingredient
color blue
```
ingredient::[[guanciale|guanciale]] or [[pancetta]] 2 oz
ingredient::[[spaghetti|spaghetti]] 2 portions worth
ingredient::[[parmesan|parmesan]] to taste
ingredient::[[egg yolk|egg yolk]] 1-2
ingredient::[[eggs|eggs]] 1
### Recipe
---
#### Intro:
Basic roman pasta. Very tasty and filling. 

---
#### Directions
Place the pork in a dry pan to crisp up. It should release its own oil. In the meantime, boil salted water and begin to cook the pasta to just shy of al dente. Then prepare the sauce.

Place eggs in a bowl with parmesan and sprinkle black pepper. Do not use salt; the pork should already provide plenty of salty flavor. Beat well with a fork or whisk until uniform. 

Once pasta is cooked, add it directly to pan with pork and stir for about 1 minute to finish cooking the pasta. Turn off the heat and let it rest perhaps a minute, to reduce the heat, and then mix it into the sauce mixture. Retain the pasta water.

_Quickly_ begin mixing it vigorously to evenly distribute the heat. This will help prevent the eggs from being cooked. Once pasta seems evenly coated, pour in 1/4 cup of the pasta water, and mix again. Serve immediately.

---
## Times made
```dataview
LIST
FROM #daily_note 
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
```