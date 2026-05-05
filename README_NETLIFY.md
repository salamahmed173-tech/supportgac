# GAC Motors Import Analysis - Netlify Deployment

This project is configured for deployment on Netlify. It provides a comprehensive analysis of GAC Motors import units to UAE using FBProphet and XGBoost forecasting models.

## 📁 Project Structure

```
.
├── public/                      # Static site files (deployed to Netlify)
│   ├── index.html              # Main landing page with charts
│   └── assets/                 # CSS, JS, images
├── functions/                  # Netlify Functions (serverless backend)
│   └── forecast.js             # Sample API endpoint
├── netlify.toml                # Netlify configuration
├── package.json                # Node.js dependencies
├── GAC_Motors_Analysis.ipynb   # Jupyter notebook with full analysis
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## 🚀 Deployment to Netlify

### Option 1: Direct GitHub Integration (Recommended)

1. **Connect Repository:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose repository: `salamahmed173-tech/supportgac`

2. **Configure Build Settings:**
   - Build command: `npm install && npm run build`
   - Publish directory: `public`
   - Functions directory: `functions`
   - Node version: 18.x

3. **Deploy:**
   - Netlify automatically deploys on push to main branch

### Option 2: Manual Deployment (Netlify CLI)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy project
netlify deploy --prod
```

### Option 3: Drag & Drop (Quick Preview)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `public` folder
3. Netlify generates a preview link

## 🔧 Local Development

### Prerequisites
- Node.js 16+ installed
- npm installed

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run develop
# or
npm start
```

The site will be available at `http://localhost:8888`

### Testing Functions Locally

```bash
# Netlify Functions are available at /.netlify/functions/forecast
# Access: http://localhost:8888/.netlify/functions/forecast
```

## 📊 Features

### Frontend (Static Site)
- **Interactive Dashboard** - Real-time metric display
- **Charts & Visualizations** - Historical trends and forecasts
- **Responsive Design** - Mobile-friendly interface
- **Model Comparison** - Side-by-side RMSE and R² metrics

### Backend (Netlify Functions)
- **forecast** - GET endpoint returning forecast data in JSON format
- **Serverless** - No server maintenance required
- **CORS Enabled** - Can be called from any domain

## 📈 Data Sources

- **CAAM** - Central Agency for Standardized Measurements
- **Jato Dynamics** - Automotive market intelligence
- **Period**: Last 5 years (2021-2026)
- **Forecast**: Next 12 months

## 🤖 Models Used

### FBProphet
- Additive time series model
- Captures trends and seasonality
- RMSE: 42.5 units
- R² Score: 0.8756

### XGBoost (Selected Model)
- Gradient boosting with engineered features
- RMSE: 38.3 units (10% better)
- R² Score: 0.9012

## 🔐 Environment Variables

Create a `.env` file for local development (optional):

```env
NODE_ENV=development
ANALYTICS_ID=your-tracking-id
```

No sensitive data is required for this project.

## 📝 Jupyter Notebook

For detailed analysis code, see `GAC_Motors_Analysis.ipynb`:

1. Data extraction from CAAM and Jato Dynamics
2. Data cleaning and preprocessing
3. Exploratory data analysis
4. Prophet model training
5. XGBoost model training
6. Model comparison and selection
7. Future forecasting

### To Run Notebook:

```bash
# Activate virtual environment
.\venv\Scripts\activate

# Launch Jupyter
jupyter notebook GAC_Motors_Analysis.ipynb
```

## 🌐 Live Site

Once deployed, your site will be available at:
- `https://your-site-name.netlify.app`

## 📱 API Endpoints

### Get Forecast Data
```
GET /.netlify/functions/forecast
```

**Response:**
```json
{
  "model": "XGBoost",
  "rmse": 38.3,
  "mae": 31.7,
  "r2_score": 0.9012,
  "predictions": [...]
}
```

## 🔄 Continuous Deployment

Every push to the `main` branch on GitHub automatically:
1. Triggers a build on Netlify
2. Runs: `npm install && npm run build`
3. Deploys updated site
4. Updates functions
5. Publishes to production

## 📚 Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Functions](https://docs.netlify.com/functions/overview)
- [FBProphet Documentation](https://facebook.github.io/prophet/)
- [XGBoost Documentation](https://xgboost.readthedocs.io/)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📧 Support

For questions or issues:
- Email: salamahmed173@gmail.com
- GitHub: [salamahmed173-tech](https://github.com/salamahmed173-tech)

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🎯 Next Steps

1. Update `public/index.html` with actual data from your Jupyter notebook
2. Connect API endpoints to real Python backend for live predictions
3. Add authentication for admin features
4. Implement database for storing historical predictions
5. Add email notifications for forecast alerts

---

**Last Updated:** May 6, 2026  
**Status:** ✅ Ready for Netlify Deployment
