import { useState, useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TruckerPathWebsitePage from './pages/sub-project-pages/TruckerPathWebsitePage';
import SoftWindTemplatePage from './pages/sub-project-pages/SoftWindTemplatePage';
import TruckerPathAppPage from './pages/sub-project-pages/TruckerPathAppPage';
import CamhomeTemplatePage from './pages/sub-project-pages/CamhomeTemplatePage';
import CommandTMSPage from './pages/sub-project-pages/CommandTMSPage';
import MyPlaygroundPage from './pages/sub-project-pages/MyPlaygroundPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => document.body.style.overflow = ''}>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<HomePage loading={loading} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/notes-flow" element={<TruckerPathWebsitePage />} />
        <Route path="/projects/water-tracker" element={<SoftWindTemplatePage />} />
        <Route path="/projects/quran-reader" element={<TruckerPathAppPage />} />
        <Route path="/projects/camhome" element={<CamhomeTemplatePage />} />
        <Route path="/projects/command-tms" element={<CommandTMSPage />} />
        <Route path="/projects/my-playground" element={<MyPlaygroundPage />} />
      </Routes>
    </>
  );
}

export default App;
