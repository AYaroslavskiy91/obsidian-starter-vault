---
birthday: {{VALUE: YYYY-MM-DD}}
aliases: {{VALUE: name}}
email: {{VALUE: email}}
phone: {{VALUE: phone}}
title: {{VALUE: job title}}
tags: person
---
## Times Seen

```dataview
LIST
FROM #daily_note 
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
```

## Notes
