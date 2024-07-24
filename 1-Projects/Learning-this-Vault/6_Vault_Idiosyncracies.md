---
created: [[2023-05-29]]
project: learning_this_vault
chapter: 6
tags: conclusion activation contact
---
# Vault Idiosyncracies
<< [[5_Other_Community_Plugins]] | [[6_Vault_Idiosyncracies]] >>

## Food Journaling
The classic questions when it comes to preparing your meals tend to fall into one of these categories:
1. What can I make with this?
2. How do I make this?
3. What do I need to make this?

In times past, these questions were accounted for by a cookbook with an index. Today, we live in a digital age, and so can transcend the limitations of print. Within this vault lies the recipe for food journaling. Queryable recipes, indexable by ingredients, are easily created (and some are provided). Now you can see, for instance, all your recipes that include both garlic and anchovies with a query such as this one.

```dataview
list
from #recipe 
where contains(ingredient, "garlic")
and contains(ingredient, "anchovies")
```

Take a look into the resources directory to find a list of recipes and ingredients to get you started. Notice how each ingredient lists the recipes within which it is contained, allowing you to figure out meal based upon what you have at hand. To add new ingredients, or recipes, find the respective command from QuickAdd in your command palette. 

To round this out, an option to create a shopping list in your daily notes based upon a recipe is included here. It also serves as the primary example in the vault of how to implement a QuickAdd capture using the QuickAdd and Templater and the Dataview API. 

## Exercise
Also included here is a quick way to journal your workouts. In your daily notes, simply hit the "Add Exercise" button to record your exercises. Included is a detailed template with many types of workouts (add your own!) as well as a structure for seeing your exercises for a day. This also serves as an example in how a templated query can be used in sync with DAY (Data as Yaml) to create an easily queryable exercise history. Give it a try!