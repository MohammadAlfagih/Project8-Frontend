import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResultsPage from "./pages/Home/Results";
import EpisodeDetails from "./pages/details/EpisodeDetails";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/search/:keyword" element={<ResultsPage />} />
          <Route path="/episode/:id" element={<EpisodeDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
