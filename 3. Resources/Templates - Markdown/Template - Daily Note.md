<%*
let date = tp.date.now('YYYY-MM-DD')
_%>
<%"---"%>
created: <% date %>
tags: daily_note
<%"---"%>

```dataviewjs 
let current = dv.current() 
let currentDay = current.file.day 
let prev = dv 
	.pages("#daily_note") 
	.where(x => x.file.day < currentDay) 
	.sort(x => x.file.day) 
	.values.slice(-1)[0] 
let next = dv 
	.pages("#daily_note") 
	.where(x => x.file.day > currentDay) 
	.sort(x => x.file.day) 
	.values[0] 
dv.span("<- ") 
dv.span(prev.file.link) 
if (next) { 
	dv.span(" | ") 
	dv.span(next.file.link) 
	dv.span(" ->") 
} 
```

# <% tp.date.now("dddd, MMMM DD, YYYY") %>

## ==Notes==


## ==To Dos Personal==

### Due by Today
```tasks
(due ON or BEFORE {{date:YYYY-MM-DD}}) OR (scheduled ON or BEFORE {{date:YYYY-MM-DD}})
tags include #personal
sort by tags
```

### Other Personal Tasks
```tasks
tags include #personal
group by tags
not done
```

## ==People Seen==

```button
name Add Person
type command
action QuickAdd: Template - People
color blue
```
```button  
name Saw Person  
type append templater  
action js_trigger_saw_person  
color blue  
```

## ==Workout==

```button
name Add Exercise
type command
action QuickAdd: Template - Exercise
color blue
```

```dataview
TABLE WITHOUT ID 
	rows.exercise as Exercise, 
	rows.sets as Sets, 
	rows.reps as Reps, 
	rows.time as Time, 
	rows.weight as Weight
FROM #workouts 
WHERE date_of_workout=this.file.day
GROUP BY type
SORT type ASC
```

## ==Outstanding To Dos==

```dataview
TASK
WHERE !completed
AND file.cday < this.file.day
```

## Files I Touched Today

```dataview
TABLE file.ctime as Created, file.mtime as Modified
WHERE file.cday = this.file.day OR fild.mday = this.file.day
SORT file.mtime DESC
```
