---
alias: null
created: 2024-07-23
tags: recipe, null
author: Alex Yaroslavskiy
---
### Recipe Template

 >Notes: 
 
### Ingredients 
```button
name add ingredient
type command
action Quickadd: Capture - Add Ingredient
color blue
```

### Recipe
---
#### Intro:


---
#### Directions


---
## Times made
```dataview
LIST
FROM #daily_note 
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
```