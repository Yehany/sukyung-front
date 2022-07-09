import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Main = lazy(() => import('./views/Home'));

export default () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Suspense>
  </Router>
);
