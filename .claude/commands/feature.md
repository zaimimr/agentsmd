---
type: prompt
name: feature
description: Scaffold new feature with tests and types
argument-hint: <feature-type> <feature-name>
allowed-tools:
  - Read
  - Write
  - Bash
---

<objective>
Scaffold complete feature structure following project patterns.

Purpose: Create all necessary files for a feature with proper boilerplate
Output: Component, types, tests, and API route (if needed) ready to implement
</objective>

<context>
**Feature type**: {{feature-type}} (component, api-route, utility)
**Feature name**: {{feature-name}}
**Project**: AgentsMD workshop app
</context>

<process>
1. **Understand Context**
   - Read AGENTS.md for patterns
   - Find similar existing features
   - Use /RepoCartographer if needed for large additions

2. **Plan File Structure**

   For component:
   - `components/{{FeatureName}}.tsx`
   - `types/{{feature-name}}.ts` (if new types needed)
   - `__tests__/components/{{FeatureName}}.test.tsx`

   For API route:
   - `app/api/{{route-path}}/route.ts`
   - `types/{{resource-name}}.ts`
   - `__tests__/api/{{route-path}}.test.ts`

   For utility:
   - `lib/{{feature-name}}.ts`
   - `__tests__/lib/{{feature-name}}.test.ts`

3. **Generate Boilerplate**

   **Component template**:
   ```typescript
   // components/{{FeatureName}}.tsx
   interface {{FeatureName}}Props {
     // TODO: Define props
   }

   export function {{FeatureName}}({ }: {{FeatureName}}Props) {
     // TODO: Implement component
     return (
       <div>
         <h2>{{FeatureName}}</h2>
         {/* TODO: Add component content */}
       </div>
     )
   }
   ```

   **Test template**:
   ```typescript
   // __tests__/components/{{FeatureName}}.test.tsx
   import { describe, it, expect } from 'vitest'
   import { render, screen } from '@testing-library/react'
   import { {{FeatureName}} } from '@/components/{{FeatureName}}'

   describe('{{FeatureName}}', () => {
     describe('rendering', () => {
       it('should render without errors', () => {
         render(<{{FeatureName}} />)
         // TODO: Add assertions
       })
     })

     describe('interactions', () => {
       // TODO: Add interaction tests
     })
   })
   ```

   **Type template**:
   ```typescript
   // types/{{feature-name}}.ts
   export interface {{TypeName}} {
     // TODO: Define type structure
   }
   ```

4. **Create Files**
   - Write all boilerplate files
   - Ensure proper imports
   - Add TODO comments for implementation

5. **Verify Setup**
   - Run `npm run type-check` to ensure no errors
   - Files should compile but tests will be incomplete
   - Provide next steps for implementation

6. **Generate Implementation Guide**
   - List TODOs in each file
   - Suggest implementation order
   - Point to similar features as reference
</process>

<feature_types>
**component**: React component with tests
- Creates: Component file, test file, optionally type file
- Use for: UI features, forms, displays

**api-route**: API endpoint with tests
- Creates: Route handler, type definitions, test file
- Use for: Backend endpoints, data mutations

**utility**: Helper function with tests
- Creates: Utility file, test file
- Use for: Shared logic, transformations, calculations
</feature_types>

<output_format>
# Feature Scaffolded: {{feature-name}}

## Files Created
- [✓] Component: path/to/file.tsx
- [✓] Types: path/to/types.ts
- [✓] Tests: path/to/test.test.tsx

## Implementation Checklist
1. [ ] Define types in types/{{feature-name}}.ts
2. [ ] Implement component logic in components/{{FeatureName}}.tsx
3. [ ] Add tests in __tests__/components/{{FeatureName}}.test.tsx
4. [ ] Run tests: `npm test {{FeatureName}}`

## Reference Files
Look at these similar features for patterns:
- [File 1] - [What to reference]
- [File 2] - [What to reference]

## Next Steps
1. Start with types (define data structure)
2. Implement basic component logic
3. Write tests following existing patterns
4. Use `/finish {{feature-name}}` when complete
</output_format>

<critical_rules>
- Follow existing file organization exactly
- Match naming conventions (PascalCase components, camelCase files)
- Use same import patterns (@ aliases)
- Include all necessary imports in boilerplate
- Add helpful TODO comments
- Create minimal but complete structure
- Verify files compile after creation
</critical_rules>
