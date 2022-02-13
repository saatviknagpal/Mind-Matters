import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BlogsPage from "./pages/BlogsPage";
import ProfessionalList from "./pages/ProfessionalsPage/ProfessionalList";
import BookAppointment from "./pages/BookAppointment/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/appointment" element={<ProfessionalList />} />
        <Route exact path="/bookAppointment/:id" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
