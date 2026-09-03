# Issue Triage 2

Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:

- "bug" and "needs triage" if the title contains "error" or "bug"
- "enhancement" and "discussing" if the title contains "feature" or "add"

Otherwise, if the given labels contain:

- "needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
- "discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
- Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"

If the title contains:

- "security", add a "critical" label
