---
created: [[2023-05-29]]
project: learning_this_vault
chapter: 2
tags: lists links
---
# Base Features
<< [[Navigation]] | [[Dataview]]>>

## Lists, Lists, Lists


* This is my first list. ^94d405
* It is not very long.

1. Numbered lists can be tricky in Obsidian.
2. Sometimes they work fine.
3. Sometimes if you delete an item in the middle of the list, the following numbers will remain unchanged.
5. For example where is number 4?
	1. Also tab over to indent any list.

- [ ] Checklists, or tasks, are potentially going to be the most used list type.
- [ ] Don't bother typing out '- [ ]'. cmd/ctrl + l is the default hotkey!
- [ ] This can be used to both create a checklist, and to toggle one. Try below!
- [ ] Toggle this with cmd/ctrl+l.

## Links

Create your own personal wiki with links. Use links by delimiting words or phrases with double brackets, [[]]. Examples of such links are at the top of the page, linking the nearest chapters of this project. There are some niche ways to use these links in order to have them appear neatly on the page. Here are some examples.

1. Let's link to this very page: [[Base Features]]. Notice how it doesn't do anything, since we are already here. We can also link to pages that don't exist yet, such as [[this page]]. The link is greyed out, indicating the page's nonexistence. Clicking the link will create the page and take you to it. Try it out, then delete the page!
2. Let's link to specific headings on a page: [[Base Features#Links]]. Clicking this will actually do something this time! It brings you to the 'links' header on this page, and highlights its contents. Use the '#' after linking to a page to further link to the headers (and use tab to auto-complete).
3. We can also use '^' within a link to link to specific blocks or paragraphs of a page: [[Base Features#^94d405]]. This links to the first item in the numbered list above. Notice how it adds a superscript tag to that line in order to create the link.
4. The linking seen above can look messy. Use a '|' in the link to pipe the contents of the link into more compact or readable text: [[Base Features#^94d405|Piped Text]].
5. Hyperlinks are also insertable: https://www.google.com/. As these can also be messy, a secondary system for piping the hyperlink into compact text exists: [Google](https://www.google.com/). Insert the piped text into square brackets [], immediately followed by a parenthetical hyperlink.

## Text Formatting

1. We've got *Italics*, **Bold**, ~~Strikethrough Texts~~, and ==Highlights==! Pour through these examples to see implementation.
2. Use[^1] to add footnotes.
3. Hashtags create headings. From one # to 6 ######.
4. Use three backticks to delimit code blocks, and indicate the language following the first set of backticks. Aside from dataview queries, this can be used to indicate any kind of code block:

```python
my_string = "string"
my_string2 = "don't interate object names"
```

5. Use three --- to create a horizontal line:
---

You now have all the tools necessary to begin exploring the rest of the Obsidian base features. Write some notes, see them exist, profit. To take your Obsidian usage to the next stage, take a look at some basic uses of the community plugin [[Dataview]].

[^1]: My Footnote
