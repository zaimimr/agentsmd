# AgentsMD - Agentic Coding Workshop

A hands-on workshop teaching agentic coding patterns. Learn how to onboard AI as a team member, use specialized subagents, and create standardized workflows.

## What You'll Learn

- **AGENTS.md**: Onboard AI with comprehensive project documentation
- **Subagents**: Divide work using specialized AI agents (RepoCartographer, TestWriter, DiffReviewer)
- **Commands**: Standardize workflows with custom /commands (/finish, /pr, /feature)
- **Commands vs Subagents**: When to use collaboration vs delegation
- **AI-Assisted Development**: Build features faster with AI as your pair programmer

## Quick Start

```bash
# Clone the repository
git clone git@github.com:zaimimr/agentsmd.git
cd agentsmd

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Prerequisites

- Node.js 18.17 or later
- Claude Code CLI ([install here](https://code.claude.com/))
- Git
- Code editor (VS Code recommended)

## Project Structure

```
agentsmd/
├── AGENTS_TEMPLATE.md           # 📚 Template you can steal for future use
├── AGENTS.md                    # 📚 Project onboarding for AI
├── TODO.md                      # ✅ Workshop tasks (start here!)
├── .claude/
│   ├── commands/               # 🚀 Custom commands
│   │   ├── finish.md
│   │   ├── pr.md
│   │   └── feature.md
│   └── subagents/              # 🤖 Specialized AI agents
│       ├── repo-cartographer.md
│       ├── test-writer.md
│       └── diff-reviewer.md
├── app/                        # Next.js App Router
├── components/                 # React components
├── lib/                        # Utilities and data layer
├── types/                      # TypeScript types
└── __tests__/                  # Vitest tests
```

## Workshop Tasks

The workshop consists of 9 tasks:
**See [TODO.md](./TODO.md) for detailed instructions.**

## Development Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build           # Build for production
npm start               # Start production server

# Quality Checks
npm run type-check      # TypeScript validation
npm run lint            # ESLint checks
npm test                # Run tests (watch mode)
npm run test:ci         # Run tests once with coverage

# Full Validation
npm run type-check && npm run lint && npm test
```

## Key Concepts

### AGENTS.md - The Foundation

AGENTS.md is your contract with AI. It contains:
- Project architecture and patterns
- Code style and conventions
- Testing strategies
- Common patterns to follow
- Reference files for examples

**Think of it as onboarding documentation that AI actually reads.**

### Commands - AI-Assisted Workflows

Commands provide conversational AI assistance for your workflow:

- **`/feature`**: Scaffold new component with tests
- **`/finish`**: Validate feature completeness
- **`/pr`**: Create PR with AI-generated description
- AI analyzes your code and makes decisions
- Collaborative and adaptive
- Perfect for guided workflows

### Subagents - Autonomous Specialists

Instead of one AI doing everything, delegate to focused agents:

- **repo-cartographer**: Map codebase structure
- **test-writer**: Generate comprehensive tests
- **diff-reviewer**: Review changes before commit
- Work independently without conversation
- Deep analysis and comprehensive output
- Perfect for complex autonomous tasks

### When to Use Each

- **Commands**: Need AI collaboration and guidance (conversational)
- **Subagents**: Want AI to complete work autonomously (delegation)

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Validation**: Zod 3.24
- **Testing**: Vitest 2.1 + React Testing Library
- **Data**: In-memory (no database needed)


**Ready to start?** Open [TODO.md](./TODO.md) and begin with Task 0! 🚀
