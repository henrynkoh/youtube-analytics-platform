# YouTube Analytics Platform - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

This guide will help you set up and run the YouTube Analytics Platform locally for development.

## Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**

## Step 1: Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-analytics-platform.git
cd youtube-analytics-platform

# Install dependencies
npm install
```

## Step 2: Set Up Environment Variables

```bash
# Copy the example environment file
cp env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# YouTube API Configuration (Required)
YOUTUBE_API_KEY=your_youtube_api_key

# Optional: MCP Integration
MCP_SERVER_URL=your_mcp_server_url
MCP_API_KEY=your_mcp_api_key
```

### Getting API Keys

#### YouTube API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Copy the API key to your `.env.local`

#### Supabase Setup
1. Go to [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Settings > API
4. Copy the URL and anon key to your `.env.local`

## Step 3: Start Development Server

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Test the Application

### Basic Channel Analysis
1. Navigate to the Channels page
2. Enter a YouTube channel URL (e.g., `https://youtube.com/@newsfeed_official`)
3. Click "Analyze Channel"
4. View the analysis results

### Video Analysis
1. Go to the Videos page
2. Enter a YouTube video URL
3. Click "Analyze Video"
4. Review the performance metrics

## 🎯 Key Features to Try

### 1. Channel Dashboard
- View channel statistics
- Analyze subscriber growth
- Check engagement metrics

### 2. Video Performance
- Analyze individual videos
- View view velocity trends
- Check SEO optimization scores

### 3. Benchmarking
- Compare channels
- Identify competitive advantages
- Generate insights and recommendations

### 4. Educational Content
- Access learning modules
- View best practices
- Read case studies

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript checks
npm run format           # Format code

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode

# Database (if using local Supabase)
npm run db:setup         # Setup local database
npm run db:migrate       # Apply migrations
```

## 📁 Project Structure Overview

```
youtube-analytics-platform/
├── src/
│   ├── app/             # Next.js pages and API routes
│   ├── components/      # React components
│   ├── lib/            # Utility libraries
│   └── types/          # TypeScript definitions
├── docs/               # Documentation
├── tests/              # Test files
└── README.md           # Main documentation
```

## 🐛 Troubleshooting

### Common Issues

#### 1. "YouTube API key not found"
- Ensure `YOUTUBE_API_KEY` is set in `.env.local`
- Check that the API key is valid and has YouTube Data API v3 enabled

#### 2. "Supabase connection failed"
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Check your Supabase project is active

#### 3. "Module not found" errors
- Run `npm install` to ensure all dependencies are installed
- Clear Next.js cache: `rm -rf .next && npm run dev`

#### 4. TypeScript errors
- Run `npm run type-check` to see specific errors
- Ensure all required environment variables are set

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/yourusername/youtube-analytics-platform/issues)
- **Documentation**: [Full Development Guide](./DEVELOPMENT_GUIDE.md)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/youtube-analytics-platform/discussions)

## 🚀 Next Steps

1. **Explore the Codebase**: Check out the main components and pages
2. **Read the Documentation**: Review the full development guide
3. **Try the Features**: Test all the analysis tools
4. **Contribute**: Fix bugs or add new features
5. **Deploy**: Set up production deployment

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy analyzing! 🎉**

If you encounter any issues or have questions, please don't hesitate to reach out through GitHub Issues or Discussions. 