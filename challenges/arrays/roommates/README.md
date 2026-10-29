# Roommates

Given an array of people and their roommate group, return the room assignments for a hotel stay using the following rules:

- Each person has a name and a group property:

[
{ "name": "Alice", "group": "A" },
{ "name": "Bob", "group": "B" },
{ "name": "Carol", "group": "A" }
]

- People can only share a room with someone from the same group and are paired in the order they are given.
- Return an array of strings with names separated by " and " for a shared room, and just the name for a solo room. Names must appear in the order they were paired. For the example above, return ["Alice and Carol", "Bob"].
