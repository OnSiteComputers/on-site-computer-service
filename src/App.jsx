import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import OnSite from './pages/OnSite';
import RemoteSupport from './pages/RemoteSupport';
import GNL from './pages/GNL';
import LomarProposal from './pages/LomarProposal';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Add your page Route elements here */}
          <Route path="/" element={<OnSite />} />
          <Route path="/remote-support" element={<RemoteSupport />} />
          <Route path="/gnl" element={<GNL />} />
          <Route path="/lomar" element={<LomarProposal />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
