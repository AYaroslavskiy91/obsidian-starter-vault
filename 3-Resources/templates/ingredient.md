<%*
let date = tp.date.now('YYYY-MM-DD')
let tag = await tp.system.prompt("tag")
_%>
<%"---"%>
created: <% date %>
tags: ingredient, <% tag %>
<%"---"%>



## Used in These Recipes

```dataview
list from #recipe
where contains(file.outlinks, this.file.link)
```
