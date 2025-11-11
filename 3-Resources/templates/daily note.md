---
created: 2025-11-10
tags: daily_note
---
# Invalid date
<- [[2-Areas-of-Responsibilities/daily-notes/Invalid date/Invalid date|Previous Day]] | [[2-Areas-of-Responsibilities/daily-notes/Invalid date/Invalid date|Next Day]] ->

````tabs
tab: Scheduled
```tasks
not done
(due on or before Invalid date) OR (scheduled on or before Invalid date)
```
tab: Outstanding Todos
```tasks
not done
path does not include Vault Tutor
path does not include 4-Archive
group by tags
sort by priority desc
```
tab: Projects
```dataview
table
	project
where contains(tags, "MoC")
and file.name != this.file.name
```
tab: Meetings This Week
```dataview
table tags
from #meeting
where date(this.file.name) >= date(now).startOf("week") + dur(1 day)
sort start_time asc
```
tab: Modified Today
```dataview
TABLE file.ctime as Created, file.mtime as Modified
WHERE file.cday = this.file.day OR file.mday = this.file.day
SORT file.mtime DESC
```
````



## Notes