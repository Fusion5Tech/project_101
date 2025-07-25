// frontend/webpack.config.js
const path = require('path');

module.exports = {
  // Set the mode to 'development' or 'production' to avoid the warning
  // and enable environment-specific defaults.
  mode: 'development', // Or 'production' for optimized output

  // The entry point of your application.
  // IMPORTANT: Change 'your-main-file.ts' to the actual name of your main TypeScript file
  // (e.g., 'index.ts', 'main.ts', 'app.ts') located inside your 'src' directory.
  entry: './src/main.tsx', 

  // Output configuration: where webpack bundles your code.
  output: {
    filename: 'bundle.js', // The name of the bundled output file
    path: path.resolve(__dirname, 'dist'), // The output directory (e.g., frontend/dist)
    publicPath: '/', // Public URL of the output directory when referenced in a browser
  },

  // Add rules for handling different file types.
  module: {
    rules: [
      {
        // Rule for TypeScript files (.ts, .tsx)
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader for TypeScript files
      },
      {
        // Rule for JavaScript files (.js, .jsx) if you have any mixed in
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Include @babel/preset-react if you're using React
          },
        },
      },
      {
        // Rule for CSS files, including PostCSS for Tailwind CSS
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], 
      },
      // Add other loaders as needed (e.g., for images, fonts)
    ],
  },

  // Resolve extensions so you don't have to specify them in imports
  // (e.g., import './myModule' instead of './myModule.ts')
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Add .ts and .tsx
  },

  // Source maps for easier debugging in development
  devtool: 'eval-source-map', // Or 'source-map' for production
};
