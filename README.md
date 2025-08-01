# CanadaCashHomes-2

🏠 **Modern Next.js website for Canadian real estate cash buyers**

🚀 **LIVE WEBSITE**: http://140.238.151.38/

## Overview

A complete Next.js 14.2.3 rebranding of the CanadaCashHomes website with optimized lead capture, Docker deployment, and modern web standards.

**Key Features:**
- ⚡ Fast loading (~2 seconds)
- 📱 Mobile-responsive design
- 🎯 2-part lead capture form
- 🐳 Multistage Docker deployment with smart rebuilds
- 🔧 Centralized contact configuration system
- 🔒 Production-ready security (non-root containers)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (includes config validation)
npm run dev

# Build for production
npm run build

# Run validation checks
npm run validate:config

# Update contact information across all components
npm run update:contacts
```

## Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript 5.4.5 (strict mode)
- **Styling**: Tailwind CSS 3.4.1
- **Deployment**: Docker on Oracle Cloud
- **CI/CD**: GitHub Actions with optimized workflows

## Development

📚 **Complete Documentation**: See `../CLAUDE_CCH2.md` for comprehensive development guide including:
- Coding standards & best practices
- Docker deployment process
- Component architecture
- Troubleshooting guide
- Deployment stability guidelines

## Deployment

Automated deployment via GitHub Actions:
- **Code changes**: ~30-45 seconds
- **Full rebuilds**: ~5 minutes (when dependencies change)
- **Production**: http://140.238.151.38

## Project Structure

```
src/app/          # Next.js App Router pages
src/lib/          # Utilities and configuration
components/       # React components  
scripts/          # Build and maintenance scripts
public/images/    # Static assets
.github/workflows # CI/CD automation (docker-deploy.yml)
```

## Contact Configuration

All contact information is centralized in `src/lib/config.ts`:
- **Phone**: (647) 936-5467
- **Email**: info@canadacashhomes.com
- **Update script**: `npm run update:contacts`

## Links

- **Live Site**: http://140.238.151.38
- **Repository**: https://github.com/vicky3074/CanadaCashHomes-2
- **Documentation**: `../CLAUDE_CCH2.md`
