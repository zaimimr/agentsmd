---
type: prompt
name: finish
description: Complete feature with comprehensive checklist
argument-hint: <feature-name>
allowed-tools:
  - Read
  - Bash
  - TodoWrite
---

<objective>
Complete feature development with full validation checklist before marking done.

Purpose: Ensure feature is truly complete (code, tests, docs, review)
Output: Validation report and ready-to-commit changes
</objective>

<context>
**Feature**: {{feature-name}}
**Branch**: Current git branch
**Project**: AgentsMD workshop app
</context>

<process>
1. **Identify Feature Scope**
   - Ask user: "What did you implement in this feature?"
   - List expected files (components, tests, API routes, types)
   - Check git status for actual changes

2. **Run Validation Checklist**

   **Code Complete**:
   - [ ] All TODOs removed or addressed
   - [ ] No console.log or debug code
   - [ ] TypeScript types are complete (no 'any')
   - [ ] Error handling implemented
   - [ ] Loading states handled

   **Tests**:
   - [ ] Unit tests written for new functions
   - [ ] Component tests cover user interactions
   - [ ] All tests passing: `npm test`
   - [ ] Test coverage meets project standards

   **Code Quality**:
   - [ ] No TypeScript errors: `npm run type-check`
   - [ ] No lint errors: `npm run lint`
   - [ ] Follows patterns in AGENTS.md
   - [ ] No code duplication (reuses existing code)
   - [ ] Functions have clear, descriptive names

   **Integration**:
   - [ ] Works with existing features
   - [ ] Doesn't break existing functionality
   - [ ] UI is consistent with existing design
   - [ ] API contracts match expectations

3. **Run DiffReviewer**
   - Invoke /DiffReviewer subagent on staged changes
   - Review findings
   - Fix any blocking issues

4. **Generate Summary**
   - List files changed
   - Describe what was implemented
   - Note any decisions made
   - List validation results

5. **Offer Next Steps**
   - Stage changes: `git add .`
   - Commit with message: `git commit -m "feat: {{feature-name}}"`
   - Create PR: Use `/pr` command
   - Or continue with more changes
</process>

<validation_commands>
Run these commands to verify completion:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# All tests
npm test

# Full validation
npm run type-check && npm run lint && npm test
```
</validation_commands>

<output_format>
# Feature Complete: {{feature-name}}

## Changes Summary
- Components modified: X
- Tests added: X
- API routes changed: X
- Types updated: X

## Validation Results

### Code Complete ✓ / ✗
[List of checklist items with pass/fail]

### Tests ✓ / ✗
```
[Output from npm test]
```

### Code Quality ✓ / ✗
```
[Output from npm run type-check && npm run lint]
```

### Code Review
[Summary from /DiffReviewer]

## Status
[READY TO COMMIT / NEEDS FIXES]

## Next Steps
[If ready]: Use `/pr` to create pull request
[If needs fixes]: Address issues above and run `/finish` again
</output_format>

<critical_rules>
- Actually run validation commands, don't assume
- Block commit if tests are failing
- Block commit if TypeScript errors exist
- Use /DiffReviewer for code review
- Provide specific feedback on failures
- Make it easy to fix issues (show commands)
</critical_rules>
