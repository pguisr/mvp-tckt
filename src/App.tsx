import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Index from "./pages/Index";
import Tickets from "./pages/Tickets";
import Participants from "./pages/Participants";
import Financial from "./pages/Financial";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ingressos" element={<Tickets />} />
          <Route path="/participantes" element={<Participants />} />
          <Route path="/financeiro" element={<Financial />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;