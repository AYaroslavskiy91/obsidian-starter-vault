<%*
let date = tp.date.now('YYYY-MM-DD')
let alias = await tp.system.prompt("alias")
let tags = await tp.system.prompt("tags")
_%>
<%"---"%>
alias: <% alias %>
created: <% date %>
tags: recipe, <% tags %>
author: your-name-here
<%"---"%>
### <% tp.file.title %>

 >Notes: 
 
## Ingredients 
```button
name add ingredient
type command
action QuickAdd: capture - add ingredient
color blue
```
## Intro:


## Directions


## Times made
```dataview
LIST
FROM #daily_note 
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
```