import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./routes/movies";
import { TV } from "./routes/tv";
import { Home } from "./routes/home";
import { Nav } from "./components/navigation";
import { Search } from "./routes/search";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
