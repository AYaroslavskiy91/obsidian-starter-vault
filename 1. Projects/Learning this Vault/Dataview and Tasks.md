---
created:
  - - 2023-05-29
project: learning_this_vault
chapter: 3
tags:
  - dataview
  - queries
  - metadata
  - "tasks"
---
# Dataview and Tasks
<< [[Base Features]] | [[Templater and Quickadd]]>>
## Why Dataview?
Dataview allows you to query your notes, using either Dataview Query Language or Javascript. This can be used to quickly extract data from multiple notes, create a reference to your own data, or to maintain organization, as we will see in our daily notes later.

Dataview can be used to great effectiveness for on-the-spot queries, but far more impressive results can be acquired by abusing YAML front matter and Dataview queries within templates.

## YAML Front Matter
Are you in reading mode? Switch to editing mode. At the top of this page, you will find two sets of three hyphens ---, within where lies a dictionary of meta data. This creates queryable information about each page you write. Note that some metadata is native to markdown files in obsidian, such as 'cday', 'name', and more. See [Obsidian Native Metadata](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)for an entire list of this data.

We are not limited to native metadata, however. Notice in this note that 'project' is a custom key for which we assign the value 'learning_the_vault'. This is handy for creating the table of contents in the [[Learning this Vault|introduction page]], or for writing queries that limit your results to specific projects. Note that keys are not case-sensitive.

You will also find in this vault templates that create notes which are 100% YAML Front Matter. This facilitates creating your own queryable database by having notes which are entirely just datapoints. The example provided in this vault is built for exercise tracking, but try building a template for recipes or books! More on templates later.

## Tags
Tags are a native metadata that have multiple implementations. Including 'tags: tag1 tag2 tag 3' in your front matter easily creates a space-separated list. This can be made more readable by formatting it as

tags:
	"tag 1",
	"tag 2",
	"tag 3"

Additionally, one can tag a page using #, in the following way:
#myTag
We can also create custom inline metadata by inserting a [key::value]. This is especially handy when tagging individual tasks within a checklist.

## Queries
There are four fundamental query types in dataview: List, Task, Table, and Calendar. I will talk primarily about the first three. These queries can be written in Dataview Query Language (DQL), or in dv javascript. We will use DQL for the examples here.

### List
LIST is a useful query type for creating page summaries. Not the difference between this table of contents below and the one provided in the introduction. By adding a 'WITHOUT ID' after the 'LIST', we omit the links to the individual files.

```dataview
LIST WITHOUT ID "Chapter " +file.frontmatter.chapter + ": "+ file.name
WHERE project = "learning_this_vault"
AND file.name != "Learning this Vault"
SORT file.frontmatter.chapter ASC
```

We can experiment with different ways of providing the table of contents. Consider the following queries, and glean some extent to which LIST queries can be used.

```dataview
LIST "Chapter " +file.frontmatter.chapter
WHERE project = "learning_this_vault"
AND file.name != "Learning this Vault"
SORT file.frontmatter.chapter ASC
```

```dataview
LIST WITHOUT ID "Chapter " + key +": "+ rows.file.link
WHERE row.project = "learning_this_vault"
AND row.file.name != "Learning this Vault"
GROUP BY chapter
SORT chapter ASC
```

### Table
Tables provide a useful query syntax for scalable data viewing and analysis. Let's observe some queries for the introductory pages herein.

```dataview
TABLE 
WHERE project = "learning_this_vault"
AND file.name != "Learning this Vault"
```

```dataview
TABLE WITHOUT ID chapter as Chapter, tags as Tags
WHERE project = "learning_this_vault"
AND file.name != "Learning this Vault"
SORT chapter ASC
```

These tables become quite useful when considering data with many fields in the frontmatter.

### Task
Task queries are capable of pulling tasks in from other notes using metadata logic. Tasks in a note inherit the tags that the note has, and can also receive specific inline key::value pairs. Consider the following tasks: one untyped, one typed, and one typed and subtyped. Note that these are also custom keys.

- [ ] Task 1
- [ ] Task 2 [type:: demo]
- [ ] Task 3 [type:: demo], [subtype:: niche]

Then consider these queries for examples of the above.

```dataview
TASK
WHERE type = "demo"
AND subtype = "niche"
AND !completed
```

```dataview
TASK
WHERE type = "demo"
AND subtype != "niche"
AND !completed
```

Some other task queries will be demonstrated in templates later on, but the _Tasks_ community plugin offers even more options.

## Tasks
The glue of this plug-in combines the discretized features of this vault in an organized way, while also adding a couple of new features. Consider the previous tasks, reconstructed below.
- [ ] Task 1
- [ ] Task 2 #demo
- [ ] Task 3 #demo/niche

Tasks allows us to directly and smoothly tag individual checkbox items so that we can query them using Tasks query language.

```tasks
not done
tags include #demo/niche 
```

```tasks
not done
tags include #demo
```

We can also schedule tasks with due/scheduled dates, and priorities. Begin writing a task and as you type out "due", "priorities", or any of the other keywords, an autofill menu should suggest an emoji that tasks uses to process these features. For instance, see the following _recurring_ task.

- [ ] Celebrate the revolution of the Earth around Sol. 🔁 every year ⏳ 2023-12-31

See what happens when you try to complete the above task! The daily note contained herein includes a query to pull any task items to be done that particular day.
## Conclusion
There are many powerful uses of dataview and tasks queries, and we encourage you to experiment with them. Take a look at the [dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/) and the [tasks documentation](https://publish.obsidian.md/tasks/Introduction) when you feel ready. For now, let's take a look at a couple of more [[Templater and Quickadd|community plugins]].
