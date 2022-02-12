import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BlogsPage from "./pages/BlogsPage";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/bookAppointment" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
