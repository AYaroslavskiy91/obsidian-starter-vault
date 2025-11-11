<%*
let date = tp.date.now('YYYY-MM-DD')
let project = await(tp.system.prompt("project"))
await tp.file.rename(project)
await tp.file.move("1-Projects/"+project+"/"+project)
let tags = "MoC, " + project
_%>
<%"---"%>
created: <% date %>
tags: <% tags %>
project: <% project %>
<%"---"%>

```dataview
table
	file.link as "Note", 
	file.mtime as "Last Modified"
from #<% project %>
sort file.mtime desc
```

```tasks
not done
tags include <% project %>
group by path
sort by priority desc
```
