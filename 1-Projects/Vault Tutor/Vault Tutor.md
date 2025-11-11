---
project: vault_tutor
tags: demonstrative, MoC
---

# Vault Tutor

## User Manual
`````tabs

tab: Navigation
````tabs
tab: PARA
PARA, an acronym for Projects, Areas of Responsibility, Resources, and Archives, offers a personal organization system that categorizes your notes based on their actionability. Each category serves a specific purpose in sorting and managing your notes effectively.

"Projects" encompass ongoing endeavors that require frequent updates and active development. Once you complete a project, its folder can be moved to either the "Archives" category if it is donewith, or to "Areas-of-Responsibilities if it will require maintenance or ongoing attention. Notes in the "Archives" section typically remain untouched.

"Areas of Responsibility" and "Resources" lie between "Projects" and "Archives" in terms of actionability. These categories represent spaces where notes are periodically or occasionally revised. When distinguishing between the two, a helpful guideline is to consider "Resources" as a repository for shareable content such as templates or development shortcuts. On the other hand, "Areas of Responsibility" should house personal content, such as projects for which you have an ongoing responsibility, but also including daily notes and meeting notes.

Once you become familiar with the PARA system, feel free to experiment and customize it according to your preferences. As your vault expands, it's important to establish a navigation system that provides convenience and scalability for managing a growing and diverse database.

By embracing PARA and finding a polychotomization that suits your needs, you'll have a robust and adaptable organizational framework at your disposal. This system will empower you to efficiently navigate and manage your expanding vault of notes. 
tab: Querying
One of the key practices to optimize note organization and retrieval is through the use of tags and metadata. By embracing metadata, you can create your own dictionary lookup system, making it easier to both find specific notes within your vault and organize the information within. 

By making your notes queryable, you can unlock access to your own knowledge in a manner that your own brain cannot mimic. Obsidian provides a range of fantastic community plugins, and perhaps the most foundational of them is called "Dataview". Instead of relying on manual searching methods, one will find that it is far more effective to assign appropriate metadata to your notes as you write them in order to facilitate future querying. This thoughtful approach will pay off when one's future self can easily retrieve valuable information via a sql-like framework.
````
tab: Base Features
````tabs
tab: Lists, Lists, and Lists
- This is my first list. ^94d405
- It is not very long.

1. This is a simple numbered list.
2. It support automatic incrementation.
    1. It also support indented sublists.

- [ ]  Checklists, or tasks, are potentially going to be the most used list type.
- [ ]  Manually start a checklist with '- [ ]'. Alternatively, cmd/ctrl + l is the default hotkey.
- [ ]  This can be used to both create a checkbox, and to toggle one. Try below.
- [ ]  Toggle this with cmd/ctrl+l.
tab: Links
Create your own personal wiki with links. Use links by delimiting words or phrases with double brackets, [[]]. Examples of such links are at the top of the page, linking the nearest chapters of this project. There are some niche ways to use these links in order to have them appear neatly on the page. Here are some examples.

1. Let's link to this very page: [[Vault Tutor]]. Notice how it doesn't do anything, since we are already here. We can also link to pages that don't exist yet, such as [[this page]]. Clicking the link will create the page and take you to it. Try it out, then delete the page!
2. Let's link to specific headings on a page: [[Vault Tutor#Extra Links]]. Clicking this will actually do something this time! It brings you to the 'links' header on this page, and highlights its contents. Use the '#' after linking to a page to further link to the headers (and use tab to auto-complete).
3. We can also use '^' within a link to link to specific blocks or paragraphs of a page: [[Vault Tutor#^52fd48]]. This links to the first item in the numbered list below. Notice how it adds a superscript tag to that line in order to create the link.
4. The linking seen above can look messy. Use a '|' in the link to pipe the contents of the link into more compact or readable text: [[Vault Tutor#^52fd48|Piped Text]].
5. Hyperlinks are also insertable: [https://www.google.com/](https://www.google.com/). As these can also be messy, a secondary system for piping the hyperlink into compact text exists: [Google](https://www.google.com/). Insert the piped text into square brackets [], immediately followed by a parenthetical hyperlink.

tab: Text Formatting
Obsidian has the usual markdown formatting shortcuts.
1. It supports _Italics_, **Bold**, ~~Strikethrough Texts~~, and ==Highlights==. Pour through these examples in source mode to see the implementation.
2.  Hashtags create headings. From one # to 6 ######.
3. Use three backticks to delimit code blocks, and indicate the language following the first set of backticks. Aside from dataview queries, this can be used to indicate any kind of code block:
```python
my_string = "string"
my_string2 = "don't interate object names"
```
4. Use three --- to create a horizontal line:
---
````
tab: Dataview and Tasks
````tabs
tab: YAML Front Matter
At the top of this page, you will find two sets of three hyphens ---, within where lies a dictionary of meta data. This creates queryable information about each page you write. Note that some metadata is native to markdown files in obsidian, such as 'cday', 'name', and more. See [Obsidian Native Metadata](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/) for an entire list of this data.

We are not limited to native metadata, however. Notice in the supporting files directory, the notes contain a custom key-value pair of   'project:vault_tutor'. This is handy for creating the table of contents in the [[Learning-this-Vault|introduction page]], or for writing queries that limit your results to specific projects. Note that keys are not case-sensitive.

You will also find in this vault templates that create notes which are 100% YAML Front Matter. This facilitates creating your own queryable database by having notes which are entirely just datapoints. The example provided in this vault is built for exercise tracking, but try building a template for recipes or books! More on templates later.
tab: Tags
Tags are a native metadata that have multiple implementations. Including 'tags: tag1 tag2 tag 3' in your front matter easily creates a space-separated list. This can be made more readable by formatting it as

tags: "tag 1", "tag 2", "tag 3"

Additionally, one can tag a page using #, in the following way: #myTag We can also create custom inline metadata by inserting a [key::value]. This is especially handy when tagging individual tasks within a checklist.
tab: Queries
There are four fundamental query types in dataview: List, Task, Table, and Calendar. I will talk primarily about the first three. These queries can be written in Dataview Query Language (DQL), or in dv javascript. We will use DQL for the examples here.

### List
LIST is a useful query type for creating page summaries. Not the difference between this table of contents below and the one provided in the introduction. By adding a 'WITHOUT ID' after the 'LIST', we omit the links to the individual files.
```dataview
LIST WITHOUT ID "Chapter " +file.frontmatter.chapter + ": "+ file.name
WHERE project = "vault_tutor"
SORT file.frontmatter.chapter ASC
```
We can experiment with different ways of providing the table of contents. Consider the following queries, and glean some extent to which LIST queries can be used.

```dataview
LIST "Chapter " +file.frontmatter.chapter
WHERE project = "vault_tutor"
SORT file.frontmatter.chapter ASC
```
```dataview
LIST WITHOUT ID "Chapter " + key +": "+ rows.file.link
WHERE row.project = "vault_tutor"
GROUP BY chapter
SORT chapter ASC
```
### Table
Tables provide a useful query syntax for scalable data viewing and analysis. Let's observe some queries for the introductory pages herein.
```dataview
TABLE 
WHERE project = "vault_tutor"
```
```dataview
TABLE WITHOUT ID chapter as Chapter, tags as Tags
WHERE project = "vault_tutor"
SORT chapter ASC
```
These tables become quite useful when considering data with many fields in the frontmatter.

### Task
Task queries are capable of pulling tasks in from other notes using metadata logic. Tasks in a note inherit the tags that the note has, and can also receive specific inline key::value pairs. Consider the following tasks: one untyped, one typed, and one typed and subtyped. Note that these are also custom keys, and are taken from the supporting files.

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

Some other task queries will be demonstrated in templates later on, but the Tasks community plugin offers even more options.
tab: Tasks
The glue of this plug-in combines the discretized features of this vault in an organized way, while also adding a couple of new features. Consider the previous tasks. Tasks allows us to directly and smoothly tag individual checkbox items so that we can query them using Tasks query language.
```tasks
not done
tags include #demo/niche
```
```tasks
not done
tags include #demo
```
We can also schedule tasks with due/scheduled dates, and priorities. Begin writing a task and as you type out "due", "priorities", or any of the other keywords, an autofill menu should suggest an emoji that tasks uses to process these features. For instance, see the following recurring task.

```tasks
not done
tags include #nye
```
See what happens when you try to complete the above task by checking the box once for "in progress", and once more for "done". The daily note contained herein includes a query to pull any task items to be done that particular day.
````
`````

## Links

1. tmp
2. Community Plugins:
	1. dv docs
	2. quickadd docs
	3. templator docs
3. other links?