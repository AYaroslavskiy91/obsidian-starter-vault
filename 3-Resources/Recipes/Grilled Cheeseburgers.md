---
alias: cheeseburgers
created: 2024-07-06
tags: recipe, grilled, protein, beef
author: Alex Yaroslavskiy
---
### Grilled Cheeseburgers

 >Notes: Lots of people make their hamburger meat into meatball meat, and this tends to come out dry. Don't fall for this trap. Lightly handle the ground beef so as not to overwork the fat. This is where the flavor is.
 
### Ingredients 
```button
name add ingredient
type command
action Quickadd: Capture - Add Ingredient
color blue
```
ingredient::[[beef, ground|beef, ground]] 2 lbs, 85-90% lean
ingredient::[[american cheese|american cheese]] 4 slices

### Recipe
---
#### Intro:
Crowd pleaser, and for a good reason.

---
#### Directions
Gently shape 1/4 lb portions of ground beef into patties. Salt and pepper both sides of them. Add a folded piece of american cheese in the center, or substitute your favorite cheese. Join two patties together, encasing the cheese. 

Grill on the hot portion of the grill on both sides for about 2 minutes per side. Then move over to the cold side of the grill and cover for another few minutes, depending on desired done-ness.  

---
## Times made
```dataview
LIST
FROM #daily_note 
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
```