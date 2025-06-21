# YouTube Analytics Platform - Project Structure

## Directory Structure

```
youtube-analytics-platform/
├── README.md
├── PRD.md
├── PROJECT_STRUCTURE.md
├── TECHNICAL_SPECS.md
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .env.local
├── .env.example
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│       ├── dashboard/
│       ├── icons/
│       └── placeholders/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── callback/
│   │   │       └── route.ts
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── loading.tsx
│   │   ├── channels/
│   │   │   ├── page.tsx
│   │   │   ├── [channelId]/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── analysis/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── videos/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── benchmark/
│   │   │   │       └── page.tsx
│   │   │   └── loading.tsx
│   │   ├── videos/
│   │   │   ├── page.tsx
│   │   │   ├── [videoId]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── analysis/
│   │   │   │       └── page.tsx
│   │   │   └── loading.tsx
│   │   ├── benchmark/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── [sessionId]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── report/
│   │   │   │       └── page.tsx
│   │   │   └── loading.tsx
│   │   ├── education/
│   │   │   ├── page.tsx
│   │   │   ├── tutorials/
│   │   │   │   └── page.tsx
│   │   │   ├── case-studies/
│   │   │   │   └── page.tsx
│   │   │   └── best-practices/
│   │   │       └── page.tsx
│   │   ├── settings/
│   │   │   ├── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── integrations/
│   │   │   │   └── page.tsx
│   │   │   └── preferences/
│   │   │       └── page.tsx
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── login/
│   │       │   │   └── route.ts
│   │       │   ├── logout/
│   │       │   │   └── route.ts
│   │       │   └── callback/
│   │       │       └── route.ts
│   │       ├── channels/
│   │       │   ├── route.ts
│   │       │   ├── [channelId]/
│   │       │   │   └── route.ts
│   │       │   ├── analyze/
│   │       │   │   └── route.ts
│   │       │   └── [channelId]/
│   │       │       ├── videos/
│   │       │       │   └── route.ts
│   │       │       ├── statistics/
│   │       │       │   └── route.ts
│   │       │       └── benchmark/
│   │       │           └── route.ts
│   │       ├── videos/
│   │       │   ├── route.ts
│   │       │   ├── [videoId]/
│   │       │   │   └── route.ts
│   │       │   ├── analyze/
│   │       │   │   └── route.ts
│   │       │   └── [videoId]/
│   │       │       ├── statistics/
│   │       │       │   └── route.ts
│   │       │       └── performance/
│   │       │           └── route.ts
│   │       ├── benchmark/
│   │       │   ├── route.ts
│   │       │   ├── create/
│   │       │   │   └── route.ts
│   │       │   └── [sessionId]/
│   │       │       ├── route.ts
│   │       │       └── report/
│   │       │           └── route.ts
│   │       ├── mcp/
│   │       │   ├── tools/
│   │       │   │   └── route.ts
│   │       │   ├── connect/
│   │       │   │   └── route.ts
│   │       │   ├── analyze/
│   │       │   │   └── route.ts
│   │       │   └── disconnect/
│   │       │       └── route.ts
│   │       └── webhooks/
│   │           ├── youtube/
│   │           │   └── route.ts
│   │           └── supabase/
│   │               └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── dropdown.tsx
│   │   │   ├── table.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── index.ts
│   │   ├── dashboard/
│   │   │   ├── DashboardOverview.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   ├── RecentAnalyses.tsx
│   │   │   ├── StatsCards.tsx
│   │   │   └── index.ts
│   │   ├── channels/
│   │   │   ├── ChannelCard.tsx
│   │   │   ├── ChannelStats.tsx
│   │   │   ├── ChannelMetrics.tsx
│   │   │   ├── ChannelComparison.tsx
│   │   │   ├── ChannelSearch.tsx
│   │   │   └── index.ts
│   │   ├── videos/
│   │   │   ├── VideoCard.tsx
│   │   │   ├── VideoStats.tsx
│   │   │   ├── VideoMetrics.tsx
│   │   │   ├── VideoPerformance.tsx
│   │   │   ├── VideoSearch.tsx
│   │   │   └── index.ts
│   │   ├── benchmark/
│   │   │   ├── BenchmarkForm.tsx
│   │   │   ├── BenchmarkResults.tsx
│   │   │   ├── BenchmarkChart.tsx
│   │   │   ├── CompetitorComparison.tsx
│   │   │   └── index.ts
│   │   ├── charts/
│   │   │   ├── LineChart.tsx
│   │   │   ├── BarChart.tsx
│   │   │   ├── PieChart.tsx
│   │   │   ├── HeatMap.tsx
│   │   │   ├── GaugeChart.tsx
│   │   │   ├── TrendChart.tsx
│   │   │   └── index.ts
│   │   ├── forms/
│   │   │   ├── ChannelAnalysisForm.tsx
│   │   │   ├── VideoAnalysisForm.tsx
│   │   │   ├── BenchmarkForm.tsx
│   │   │   ├── MCPIntegrationForm.tsx
│   │   │   └── index.ts
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── index.ts
│   │   └── education/
│   │       ├── TutorialCard.tsx
│   │       ├── CaseStudyCard.tsx
│   │       ├── BestPracticeCard.tsx
│   │       ├── LearningPath.tsx
│   │       └── index.ts
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   ├── auth.ts
│   │   │   ├── database.ts
│   │   │   └── types.ts
│   │   ├── youtube/
│   │   │   ├── api.ts
│   │   │   ├── types.ts
│   │   │   ├── utils.ts
│   │   │   └── constants.ts
│   │   ├── mcp/
│   │   │   ├── client.ts
│   │   │   ├── tools.ts
│   │   │   ├── types.ts
│   │   │   └── utils.ts
│   │   ├── analytics/
│   │   │   ├── channel.ts
│   │   │   ├── video.ts
│   │   │   ├── benchmark.ts
│   │   │   ├── metrics.ts
│   │   │   └── utils.ts
│   │   ├── utils/
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   ├── validation.ts
│   │   │   ├── formatting.ts
│   │   │   ├── constants.ts
│   │   │   └── helpers.ts
│   │   └── hooks/
│   │       ├── useAuth.ts
│   │       ├── useChannels.ts
│   │       ├── useVideos.ts
│   │       ├── useBenchmark.ts
│   │       ├── useMCP.ts
│   │       └── useAnalytics.ts
│   ├── types/
│   │   ├── channel.ts
│   │   ├── video.ts
│   │   ├── benchmark.ts
│   │   ├── mcp.ts
│   │   ├── user.ts
│   │   ├── api.ts
│   │   └── index.ts
│   ├── styles/
│   │   ├── components.css
│   │   ├── charts.css
│   │   └── animations.css
│   └── config/
│       ├── constants.ts
│       ├── environment.ts
│       └── api.ts
├── supabase/
│   ├── migrations/
│   │   ├── 001_initial_schema.sql
│   │   ├── 002_add_indexes.sql
│   │   ├── 003_add_functions.sql
│   │   └── 004_add_triggers.sql
│   ├── functions/
│   │   ├── analyze_channel.sql
│   │   ├── analyze_video.sql
│   │   ├── create_benchmark.sql
│   │   └── update_statistics.sql
│   ├── triggers/
│   │   ├── update_updated_at.sql
│   │   └── log_changes.sql
│   └── seed/
│       └── initial_data.sql
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   ├── TESTING.md
│   └── CONTRIBUTING.md
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   ├── lib/
│   │   └── utils/
│   ├── integration/
│   │   ├── api/
│   │   └── database/
│   └── e2e/
│       └── cypress/
├── scripts/
│   ├── setup.sh
│   ├── deploy.sh
│   ├── test.sh
│   └── seed.sh
└── .github/
    ├── workflows/
    │   ├── ci.yml
    │   ├── deploy.yml
    │   └── test.yml
    └── ISSUE_TEMPLATE.md
```

## Key Components Description

### Frontend Structure

#### 1. App Directory (Next.js 13+ App Router)
- **Layout-based routing** with nested layouts
- **Server and client components** separation
- **API routes** for backend functionality
- **Loading and error states** for better UX

#### 2. Components Organization
- **UI Components**: Reusable, styled components
- **Layout Components**: Header, sidebar, navigation
- **Feature Components**: Channel, video, benchmark specific
- **Chart Components**: Data visualization
- **Form Components**: User input and data entry
- **Auth Components**: Authentication and authorization

#### 3. Library Structure
- **Supabase Integration**: Database, auth, real-time
- **YouTube API**: Data fetching and processing
- **MCP Integration**: External tool connections
- **Analytics Engine**: Data analysis and metrics
- **Utility Functions**: Common helpers and validators
- **Custom Hooks**: React hooks for data management

### Backend Structure

#### 1. Supabase Setup
- **Migrations**: Database schema changes
- **Functions**: PostgreSQL functions for complex operations
- **Triggers**: Automated database actions
- **Seed Data**: Initial data for development

#### 2. API Routes
- **RESTful endpoints** for all major features
- **Authentication middleware** for protected routes
- **Rate limiting** and error handling
- **Webhook endpoints** for external integrations

### Development Tools

#### 1. Testing Structure
- **Unit tests** for components and utilities
- **Integration tests** for API and database
- **E2E tests** for user workflows

#### 2. Documentation
- **API documentation** with examples
- **Deployment guides** for different environments
- **Development setup** instructions
- **Contributing guidelines**

#### 3. CI/CD Pipeline
- **Automated testing** on pull requests
- **Deployment automation** to staging/production
- **Code quality checks** and linting

## Technology Stack

### Frontend
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Zustand** for state management
- **React Query** for data fetching
- **Chart.js** for data visualization
- **React Hook Form** for forms

### Backend
- **Supabase** for database and auth
- **PostgreSQL** for data storage
- **Edge Functions** for serverless API
- **Real-time subscriptions** for live updates

### External Integrations
- **YouTube Data API v3** for channel/video data
- **MCP (Model Context Protocol)** for AI tools
- **Web scraping** with Puppeteer/Playwright

### Development Tools
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Jest** and **Testing Library** for testing
- **Cypress** for E2E testing
- **GitHub Actions** for CI/CD

## File Naming Conventions

### Components
- **PascalCase** for component files: `ChannelCard.tsx`
- **kebab-case** for directories: `channel-analysis/`
- **index.ts** files for clean imports

### API Routes
- **snake_case** for route files: `channel_analysis.ts`
- **RESTful naming** for endpoints
- **HTTP method** specific handlers

### Database
- **snake_case** for table and column names
- **plural** for table names: `channels`, `videos`
- **singular** for function names: `analyze_channel`

### Utilities
- **camelCase** for function and variable names
- **descriptive** names that explain purpose
- **TypeScript interfaces** for type definitions

## Environment Configuration

### Development
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
YOUTUBE_API_KEY=your_youtube_api_key
MCP_SERVER_URL=your_mcp_server_url
```

### Production
```bash
# Environment variables in deployment platform
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
YOUTUBE_API_KEY=your_youtube_api_key
MCP_SERVER_URL=your_mcp_server_url
```

## Development Workflow

### 1. Setup
```bash
# Clone repository
git clone <repository-url>
cd youtube-analytics-platform

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your keys

# Setup database
npm run db:setup

# Start development server
npm run dev
```

### 2. Development Process
1. **Create feature branch** from main
2. **Implement feature** with tests
3. **Run tests** and linting
4. **Create pull request** with description
5. **Code review** and approval
6. **Merge to main** and deploy

### 3. Testing Strategy
- **Unit tests** for all utilities and components
- **Integration tests** for API endpoints
- **E2E tests** for critical user flows
- **Performance testing** for data-heavy operations

This structure provides a scalable, maintainable foundation for the YouTube analytics platform with clear separation of concerns and modern development practices. 