# Netlify Deployment Configuration

This document describes the Netlify deployment structure for the GAC Motors Analysis project.

## 📦 Project Structure for Netlify

```
project-root/
├── public/                      # Published to web root /
│   ├── index.html              # Main page
│   ├── _redirects              # URL rewrites
│   ├── _headers                # HTTP headers
│   ├── robots.txt              # SEO configuration
│   └── assets/                 # Static assets (optional)
│
├── functions/                   # Netlify Functions (serverless)
│   ├── forecast.js             # GET /api/forecast
│   └── package.json            # Function dependencies
│
├── netlify.toml                # Main Netlify configuration
├── package.json                # Root dependencies
├── .gitignore                  # Git configuration
├── GAC_Motors_Analysis.ipynb   # Jupyter notebook
└── README_NETLIFY.md           # Deployment guide
```

## ⚙️ Configuration Files Explained

### netlify.toml
```toml
[build]
command = "npm install && npm run build"    # Build command
functions = "functions"                      # Functions directory
publish = "public"                          # Published directory

[[redirects]]                               # URL rewriting
from = "/api/*"
to = "/.netlify/functions/:splat"
status = 200

[[redirects]]                               # SPA fallback
from = "/*"
to = "/index.html"
status = 200
```

### Key Settings:
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `public/`
- **Functions Directory**: `functions/`
- **Node Version**: 18.x (default)

## 📡 Netlify Functions

### Deployed Functions:
- `/.netlify/functions/forecast` - GET endpoint for forecast data

### Function Access:
```javascript
// From frontend
fetch('/.netlify/functions/forecast')
  .then(res => res.json())
  .then(data => console.log(data))

// Direct URL
https://yourdomain.netlify.app/.netlify/functions/forecast
```

## 🔄 Deployment Workflow

1. **Push to GitHub** (main branch)
   ```bash
   git add .
   git commit -m "Update analysis"
   git push origin main
   ```

2. **Netlify Auto-Build** (triggered automatically)
   - Clone repository
   - Run build command
   - Deploy to CDN
   - Publish live

3. **Status Check**
   - Netlify dashboard shows build status
   - Deploy previews for PRs
   - Production URL: `https://yourdomain.netlify.app`

## 🛡️ Security Features

### Enabled Security Headers:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - MIME type security
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Referrer control

### CORS Configuration:
- API endpoints allow cross-origin requests
- Methods: GET, POST, OPTIONS
- Headers: Content-Type

## 🌍 Environment Variables (netlify.toml)

```toml
[context.production]
environment = { NODE_ENV = "production" }

[context.develop]
environment = { NODE_ENV = "development" }
```

## 📊 Build Logs

View build logs in Netlify Dashboard:
1. Go to [app.netlify.com](https://app.netlify.com)
2. Select your site
3. Go to "Deploys" tab
4. Click deployment to view logs

## ⚠️ Common Issues

### Issue: Build fails with "npm: command not found"
**Solution**: Ensure Node 16+ in build settings

### Issue: Functions not working
**Solution**: Check functions directory is set to `functions/`

### Issue: Static files not loading
**Solution**: Verify publish directory is `public/`

### Issue: CORS errors
**Solution**: Check `_headers` file has proper CORS configuration

## 🎯 Next Steps

1. **Connect Repository**
   - Sign up at [netlify.com](https://netlify.com)
   - Connect GitHub account
   - Select repository

2. **Configure Build Settings**
   - Build command: `npm install && npm run build`
   - Publish directory: `public`
   - Functions: `functions`

3. **Deploy**
   - Click "Deploy site"
   - Wait for build completion
   - Share production URL

## 📱 Domain Setup (Optional)

To use a custom domain:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Configure SSL (auto-provisioned)

## 💾 Backup & Rollback

Netlify keeps 25 recent deployments:
1. Go to Deploys tab
2. Click previous deployment
3. Click "Restore" to revert

## 📞 Support

- Netlify Support: https://support.netlify.com
- Netlify Community: https://community.netlify.com
- GitHub Issues: https://github.com/salamahmed173-tech/supportgac/issues

---

**Version**: 1.0  
**Last Updated**: May 6, 2026
