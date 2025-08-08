import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { SolutionPage } from './pages/solution';
import { AboutPage } from './pages/about';
import { ContactPage } from "./pages/contact";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsPage } from "./pages/terms";
import { DisclaimerPage} from "./pages/disclaimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </Router>
  )
}

export default App 