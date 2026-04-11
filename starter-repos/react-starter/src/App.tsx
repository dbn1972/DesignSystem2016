import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { StatusPage } from './pages/StatusPage';
import { ComponentsPage } from './pages/ComponentsPage';

/**
 * Root application component
 *
 * Sets up routing and layout structure
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Routes with main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/status/:referenceNumber" element={<StatusPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Route>

        {/* 404 Not Found - Add as needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
