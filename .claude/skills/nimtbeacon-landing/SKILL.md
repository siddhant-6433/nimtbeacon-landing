```markdown
# nimtbeacon-landing Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill documents the core development patterns and conventions for the `nimtbeacon-landing` repository, a TypeScript codebase built with the Vite framework. It covers file naming, import/export styles, commit message conventions, and testing patterns to ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userProfile.ts`, `landingPage.tsx`

### Import Style
- Use **relative imports** for modules within the project.
  - Example:
    ```typescript
    import userService from './userService';
    import Button from '../components/Button';
    ```

### Export Style
- Use **default exports** for modules.
  - Example:
    ```typescript
    // userService.ts
    const userService = { /* ... */ };
    export default userService;
    ```

### Commit Messages
- Follow **Conventional Commits** with the `feat` prefix for features.
- Keep commit messages concise (average 73 characters).
  - Example:
    ```
    feat: add user authentication to landing page
    ```

## Workflows

### Adding a New Feature
**Trigger:** When implementing a new feature or component  
**Command:** `/add-feature`

1. Create a new file using camelCase naming (e.g., `newFeature.tsx`).
2. Write your code, using relative imports and default exports.
3. Stage and commit your changes using the `feat` prefix:
    ```
    git add .
    git commit -m "feat: describe the new feature"
    ```
4. Push your branch and open a pull request.

### Writing Tests
**Trigger:** When adding or updating functionality that requires tests  
**Command:** `/write-test`

1. Create a test file alongside your code using the pattern `*.test.*` (e.g., `userProfile.test.ts`).
2. Write your test cases using the project's chosen (unknown) testing framework.
3. Run the tests to ensure they pass.
4. Commit your test files with a descriptive message:
    ```
    git add userProfile.test.ts
    git commit -m "feat: add tests for userProfile"
    ```

## Testing Patterns

- Test files use the `*.test.*` naming convention (e.g., `component.test.ts`).
- Place test files near the code they test.
- The specific testing framework is not identified, but standard TypeScript test patterns apply.

  Example test file:
  ```typescript
  // userProfile.test.ts
  import userProfile from './userProfile';

  describe('userProfile', () => {
    it('should return user data', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command        | Purpose                                    |
|----------------|--------------------------------------------|
| /add-feature   | Start the workflow for adding a new feature|
| /write-test    | Guide for writing and committing tests     |
```
