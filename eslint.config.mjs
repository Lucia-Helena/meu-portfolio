module.exports = {  
  parser: '@typescript-eslint/parser',  
  extends: [  
      'eslint:recommended',  
      'plugin:react/recommended',  
      'plugin:@typescript-eslint/recommended',  
      'plugin:import/errors',  
      'plugin:import/warnings',  
      'plugin:import/typescript',  
  ],  
  parserOptions: {  
      ecmaFeatures: {  
          jsx: true,  
      },  
      ecmaVersion: 2020,  
      sourceType: 'module',  
  },  
  settings: {  
      react: {  
          version: 'detect',  
      },  
  },  
  plugins: ['react', '@typescript-eslint', 'import'],  
  rules: {  
      'react/react-in-jsx-scope': 'off', // React 17+  
      '@typescript-eslint/no-explicit-any': 'warn',  
  },  
};