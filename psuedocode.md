to do list itself could be an array

each to-do can be a label?

status of to-do item - completed, not completed, archived, and deleted

could store properties in state like the status of the to-do item
  - completed: true or false
  - archived: true or false
  - deleted: true or false
  - stretch to add high priority: true or false

id for each to-do item could be a timestamp of when it was added to the list

.filter method will pull items out of array based on status values (completed, archived, etc) and creates a new array with these elements. We can utilize this to make our "All", "Completed", and "Not Completed" views

