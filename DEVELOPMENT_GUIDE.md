# YouTube Analytics Platform - Development Guide

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**
- **Supabase CLI** (optional, for local development)

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/youtube-analytics-platform.git
   cd youtube-analytics-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # YouTube API Configuration
   YOUTUBE_API_KEY=your_youtube_api_key

   # MCP Configuration
   MCP_SERVER_URL=your_mcp_server_url
   MCP_API_KEY=your_mcp_api_key
   ```

4. **Set up Supabase (Local Development)**
   ```bash
   # Install Supabase CLI
   npm install -g supabase

   # Initialize Supabase
   supabase init

   # Start local Supabase
   supabase start

   # Apply migrations
   npm run db:migrate

   # Generate TypeScript types
   npm run db:types
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── channels/          # Channel analysis pages
│   ├── videos/            # Video analysis pages
│   ├── benchmark/         # Benchmarking pages
│   ├── education/         # Educational content
│   ├── settings/          # User settings
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   ├── dashboard/         # Dashboard components
│   ├── channels/          # Channel components
│   ├── videos/            # Video components
│   ├── benchmark/         # Benchmark components
│   ├── charts/            # Data visualization
│   ├── forms/             # Form components
│   ├── auth/              # Authentication components
│   └── education/         # Educational components
├── lib/                   # Utility libraries
│   ├── supabase/          # Supabase client and helpers
│   ├── youtube/           # YouTube API client
│   ├── mcp/               # MCP integration
│   ├── analytics/         # Analytics engine
│   ├── utils/             # Utility functions
│   └── hooks/             # Custom React hooks
├── types/                 # TypeScript type definitions
├── styles/                # Global styles and CSS modules
└── config/                # Configuration files
```

### Technology Stack

#### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Query** - Data fetching and caching
- **Chart.js** - Data visualization
- **React Hook Form** - Form handling
- **Framer Motion** - Animations

#### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Database
- **Edge Functions** - Serverless functions
- **Real-time** - Live data updates

#### External Services
- **YouTube Data API v3** - Channel and video data
- **MCP (Model Context Protocol)** - AI tool integration

## 🔧 Development Workflow

### Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for git hooks

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run type-check       # Run TypeScript type checking
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting

# Testing
npm run test             # Run unit tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate test coverage
npm run test:e2e         # Run end-to-end tests

# Database
npm run db:setup         # Setup local database
npm run db:migrate       # Apply database migrations
npm run db:seed          # Seed database with sample data
npm run db:types         # Generate TypeScript types
```

### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code following the project's style guide
   - Add tests for new features
   - Update documentation as needed

3. **Run quality checks**
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build process or auxiliary tool changes

## 🧪 Testing

### Unit Tests

Unit tests are written using Jest and React Testing Library:

```typescript
// Example test
import { render, screen } from '@testing-library/react';
import { ChannelCard } from '@/components/channels/ChannelCard';

describe('ChannelCard', () => {
  it('renders channel information correctly', () => {
    const mockChannel = {
      id: '1',
      channelName: 'Test Channel',
      subscriberCount: 1000,
      // ... other properties
    };

    render(<ChannelCard channel={mockChannel} />);
    
    expect(screen.getByText('Test Channel')).toBeInTheDocument();
    expect(screen.getByText('1,000 subscribers')).toBeInTheDocument();
  });
});
```

### Integration Tests

Integration tests verify API endpoints and database operations:

```typescript
// Example API test
import { createMocks } from 'node-mocks-http';
import { GET } from '@/app/api/channels/[channelId]/route';

describe('/api/channels/[channelId]', () => {
  it('returns channel data for valid ID', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { channelId: 'valid-channel-id' },
    });

    await GET(req, { params: { channelId: 'valid-channel-id' } });

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toHaveProperty('data');
  });
});
```

### End-to-End Tests

E2E tests use Cypress to test user workflows:

```typescript
// Example E2E test
describe('Channel Analysis', () => {
  it('analyzes a channel successfully', () => {
    cy.visit('/channels');
    cy.get('[data-testid="channel-url-input"]').type('https://youtube.com/@testchannel');
    cy.get('[data-testid="analyze-button"]').click();
    cy.get('[data-testid="analysis-results"]').should('be.visible');
  });
});
```

## 📊 Database Development

### Local Database Setup

1. **Start Supabase locally**
   ```bash
   supabase start
   ```

2. **Apply migrations**
   ```bash
   npm run db:migrate
   ```

3. **Seed with sample data**
   ```bash
   npm run db:seed
   ```

### Creating Migrations

```bash
# Create a new migration
supabase migration new add_user_preferences

# Edit the generated SQL file
# Apply the migration
supabase db push
```

### Database Schema

Key tables and their relationships:

```sql
-- Channels table
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id VARCHAR(255) UNIQUE NOT NULL,
  channel_name VARCHAR(255) NOT NULL,
  -- ... other columns
);

-- Videos table
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id VARCHAR(255) UNIQUE NOT NULL,
  channel_id VARCHAR(255) REFERENCES channels(channel_id),
  -- ... other columns
);

-- Analysis sessions table
CREATE TABLE analysis_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  -- ... other columns
);
```

## 🔌 API Development

### API Route Structure

API routes are organized in the `src/app/api` directory:

```
api/
├── auth/                 # Authentication endpoints
├── channels/             # Channel analysis endpoints
├── videos/               # Video analysis endpoints
├── benchmark/            # Benchmarking endpoints
├── mcp/                  # MCP integration endpoints
└── webhooks/             # Webhook endpoints
```

### Example API Route

```typescript
// src/app/api/channels/[channelId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getYouTubeAPI } from '@/lib/youtube/api';
import { supabase } from '@/lib/supabase/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    const { channelId } = params;
    
    // Get channel data from YouTube API
    const youtubeAPI = getYouTubeAPI();
    const channelData = await youtubeAPI.getChannelInfo(channelId);
    
    // Store in database
    const { data, error } = await supabase
      .from('channels')
      .upsert({
        channel_id: channelId,
        channel_name: channelData.snippet.title,
        // ... other fields
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
```

## 🎨 Component Development

### Component Structure

Components follow a consistent structure:

```typescript
// src/components/channels/ChannelCard.tsx
import React from 'react';
import { Channel } from '@/types';
import { Card } from '@/components/ui/card';

interface ChannelCardProps {
  channel: Channel;
  onAnalyze?: (channelId: string) => void;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({ 
  channel, 
  onAnalyze 
}) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={channel.thumbnails.medium}
          alt={channel.channelName}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{channel.channelName}</h3>
          <p className="text-gray-600">{channel.subscriberCount} subscribers</p>
        </div>
        {onAnalyze && (
          <button
            onClick={() => onAnalyze(channel.channelId)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Analyze
          </button>
        )}
      </div>
    </Card>
  );
};
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the design system color palette
- Ensure responsive design
- Maintain accessibility standards

## 🔒 Security Best Practices

### Authentication

- Use Supabase Auth for user management
- Implement proper session handling
- Validate user permissions on API routes

### Data Validation

- Use Zod for schema validation
- Sanitize user inputs
- Validate API responses

### Environment Variables

- Never commit sensitive data to version control
- Use environment variables for configuration
- Validate required environment variables at startup

## 📈 Performance Optimization

### Frontend Optimization

- Use Next.js Image component for optimized images
- Implement code splitting
- Use React.memo for expensive components
- Optimize bundle size

### Backend Optimization

- Implement caching strategies
- Use database indexes
- Optimize API queries
- Implement rate limiting

### Monitoring

- Track Core Web Vitals
- Monitor API response times
- Set up error tracking
- Monitor database performance

## 🚀 Deployment

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Environment Variables

Ensure all required environment variables are set in production:

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
YOUTUBE_API_KEY=your_youtube_api_key
MCP_SERVER_URL=your_mcp_server_url
```

### Deployment Platforms

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Docker**

## 🤝 Contributing

### Before Contributing

1. Read the project documentation
2. Check existing issues and pull requests
3. Discuss major changes in an issue first

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Update documentation
6. Ensure all tests pass
7. Submit a pull request

### Code Review

- All code must be reviewed before merging
- Address review comments promptly
- Maintain code quality standards

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/yourusername/youtube-analytics-platform/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/youtube-analytics-platform/discussions)
- **Documentation**: [Project Wiki](https://github.com/yourusername/youtube-analytics-platform/wiki)

---

This development guide should help you get started with contributing to the YouTube Analytics Platform. If you have any questions or need clarification, please don't hesitate to ask! 