<%*
let date = tp.date.now('YYYY-MM-DD')
let tags = "meeting, " + await tp.system.prompt("project")
_%>
<%"---"%>
created: <% date %>
tags: <% tags %>
<%"---"%>

## Notes


## Action Items
