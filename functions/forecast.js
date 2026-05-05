// Netlify Function: Get GAC Motors Forecast Data
// Accessible at: /.netlify/functions/forecast

exports.handler = async (event, context) => {
  try {
    // Sample forecast data - in production, this would call your Python API or database
    const forecastData = {
      model: "XGBoost",
      rmse: 38.3,
      mae: 31.7,
      r2_score: 0.9012,
      forecast_period: 12,
      predictions: [
        { month: 1, forecast: 850, lower_bound: 780, upper_bound: 920 },
        { month: 2, forecast: 920, lower_bound: 850, upper_bound: 990 },
        { month: 3, forecast: 780, lower_bound: 710, upper_bound: 850 },
        { month: 4, forecast: 720, lower_bound: 650, upper_bound: 790 },
        { month: 5, forecast: 810, lower_bound: 740, upper_bound: 880 },
        { month: 6, forecast: 890, lower_bound: 820, upper_bound: 960 },
        { month: 7, forecast: 950, lower_bound: 880, upper_bound: 1020 },
        { month: 8, forecast: 920, lower_bound: 850, upper_bound: 990 },
        { month: 9, forecast: 840, lower_bound: 770, upper_bound: 910 },
        { month: 10, forecast: 750, lower_bound: 680, upper_bound: 820 },
        { month: 11, forecast: 870, lower_bound: 800, upper_bound: 940 },
        { month: 12, forecast: 920, lower_bound: 850, upper_bound: 990 }
      ],
      historical_summary: {
        min_units: 450,
        max_units: 1050,
        avg_units: 750,
        trend: "upward"
      }
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(forecastData)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
