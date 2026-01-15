---
type: prompt
name: pr
description: Create pull request with AI-generated description
argument-hint: [target-branch]
allowed-tools:
  - Read
  - Bash
---

<objective>
Create pull request with comprehensive, well-formatted description.

Purpose: Generate PR description from commit history and code changes
Output: PR created on GitHub with full context
</objective>

<context>
**Current branch**: {{current-branch}}
**Target branch**: {{target-branch}} (default: main)
**Project**: AgentsMD workshop app
</context>

<process>
1. **Verify Readiness**
   - Check git status (should be clean)
   - Check if branch is pushed to remote
   - Check if commits exist ahead of target
   - If not ready, explain what's needed

2. **Gather Context**
   - Run: `git log {{target-branch}}..HEAD --oneline`
   - Run: `git diff {{target-branch}}...HEAD --stat`
   - Read commit messages
   - Identify files changed

3. **Analyze Changes**
   - Read modified files to understand scope
   - Identify features added, bugs fixed, refactors
   - Note any breaking changes
   - List tests added

4. **Generate PR Description**

   Use format:
   ```markdown
   ## Summary
   [2-3 sentences describing the change and why it was made]

   ## Changes
   - Feature 1: [Description]
   - Feature 2: [Description]
   - Bug fix: [Description]

   ## Test Plan
   - [ ] Run `npm test` - all tests pass
   - [ ] Manual test: [Specific scenario to test]
   - [ ] Verify [specific behavior]

   ## Screenshots (if applicable)
   [Prompt user to add screenshots if UI changes]

   ## Checklist
   - [ ] Tests added/updated
   - [ ] TypeScript types updated
   - [ ] No console.log or debug code
   - [ ] Follows AGENTS.md patterns

   ## Related
   Closes #[issue-number] (if applicable)
   ```

5. **Push Branch (if needed)**
   - If branch not on remote: `git push -u origin {{current-branch}}`
   - Confirm push successful

6. **Create PR**
   - Use gh CLI: `gh pr create --title "[title]" --body "[description]"`
   - Or provide GitHub UI instructions if gh not available

7. **Provide PR URL**
   - Show created PR URL
   - Suggest next actions (request reviews, link to issue)
</process>

<pr_title_format>
Generate title from commits following conventional format:

- `feat: add task filtering by status`
- `fix: handle empty task list error`
- `refactor: extract validation logic`
- `test: add comprehensive TaskForm tests`
- `docs: update README with setup instructions`

If multiple types, use most significant one.
</pr_title_format>

<output_format>
# Creating Pull Request

## Branch Status
- Current: {{current-branch}}
- Target: {{target-branch}}
- Commits ahead: X
- Files changed: X

## Generated PR Description

### Title
[Generated title]

### Body
[Full PR description with all sections]

## Creating PR...
[Command output or instructions]

## PR Created!
URL: [PR URL]

## Next Steps
- Request review from: [suggest reviewers]
- Link to issue: [if applicable]
- Monitor CI checks
</output_format>

<critical_rules>
- Ensure branch is pushed before creating PR
- Generate description from actual changes, not assumptions
- Read commit messages for context
- Include test plan in description
- Use conventional commit format for title
- Check if gh CLI is available, provide alternatives if not
- Return PR URL for easy access
</critical_rules>
