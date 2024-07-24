---
created: [[2023-05-29]]
project: learning_this_vault
chapter: 4
tags: templater quickadd
---
# Templater and Quickadd
<< [[3_Dataview_and_Tasks]] | [[5_Other_Community_Plugins]] >>

## Templater
### Introduction
Obsidian includes a core plugin for templating, which allows for creating useful templates with Jinja Syntax, but you may quickly find yourself desiring an advanced templating platform that provides more manipulation. _Templater_ is a plugin which expands upon your options. Templater offers a wider pool of commands to set up your notes. Find the full documentation [here](https://silentvoid13.github.io/Templater/introduction.html). Templater also provides a framework for running custom javascript scripts, allowing a host of further options. Explore the provided templates and .js files to see examples of what is possible. Keep in mind that .js files are unsupported in Obsidian, so you need to read and write them using a different editor.

### Included
We provide templates for Daily Notes, Exercise, Cooking, People, and Meetings. The latter two are written using only core plugin features, which are sufficient for many purposes.

The people template allows for quickly and smoothly adding individuals to your circle of acquaintances. For personal relationships, this can be useful for keeping track of important events in friends' lives. For colleagues, this can help record relevant data with respect to strengths and responsibilities of coworkers. Additionally, there is an interaction with the Daily Notes that reminds you of peoples' birthdays, should you care for such a thing.

The meetings template provides a simple framework for recording important information during work calls and meetings. Notice that it includes a button, created with the _buttons_ template, for quickly recording the attendees of a meeting.

The exercise template allows to quickly fill in workouts to track progress. While the specific use case here is niche, the template is included to provide an example of the workflow, and is discussed more later.

Similarly, templates for food journaling are included and discussed in a later chapter.

The daily note combines many features and is fairly modular. Take a look into the note and remove what doesn't fit! A pair of notes are made here to demonstrate their rendered view. One of the primary design decisions that governed the structure of the daily note was the phone use-case. Because navigating on a phone is more difficult than on a computer, the daily note should be the easiest page to access, and the gate to any other notes you need to access frequently from your phone.

For this reason, the daily note quickly provides links to any recently modified note, as well as buttons to smoothly add data without navigating away. Finally, we include a method for easily creating a fresh daily note, as well as navigating the today's note.

## Quickadd
### Introduction
[_Quickadd_](https://quickadd.obsidian.guide/docs/) combines with Templater to enable users to expeditiously add notes, render templates, and update data. Consider that, as your vault grows, manually navigating through notes and directories becomes tedious, if not impractical. Quickadd allows you to build your vault in predictable ways without navigating to a different page or directory.

Quickadd combines with the aforementioned Buttons plugin to create a phone-friendly UI, so you can efficiently build your database with the right set up. This vault will already be set to conveniently build daily notes.

### Included
The settings for building fresh daily notes also navigates to the note if it already exists, instead of overwriting it! As mentioned, the goal is to maximize the UX when working on a phone. Ideally, everything you might need is on the daily note page, and any note you would frequently edit can be found as a link on the daily note.

Also included is a meeting note creation setup. Having never been a strong note-taker, I have built the vault to minimize the effort in recording important meeting minutes. The value of this has proven immeasurably large, when considering that I no longer have to remember any action items that emerge from meetings. Indeed, once I tag my meetings with the appropriate project, I have a todo list in both the respective project folder and in my daily notes reminding me of any outstanding action items.

From the daily note, you can also trigger the 'add-exercise' template. This is included to impress upon you the utility of data as YAML front matter. Keeping a log of your exercises (already queried within the daily note itself) can be useful for tracking progress, and monitoring health. The exercises come from the [[Template-Exercise|exercise template]]. Add or remove individual exercises as needed. Try creating a similar template for recipes, and consider the utility of querying your recipes by available ingredients!

Finally, there are settings to enable the several buttons found in the aforementioned notes. See more about that and other plugins in [[5_Other_Community_Plugins|here]].
