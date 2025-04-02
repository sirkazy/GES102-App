import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './components/authContext.tsx';
import { ThemeContextProvider} from './components/ThemeContext/ThemeContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter> 
    </AuthProvider>
  </ThemeContextProvider> 
);

