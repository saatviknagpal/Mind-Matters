import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BlogsPage from "./pages/BlogsPage";
import ProfessionalList from "./pages/ProfessionalsPage/ProfessionalList";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import BookAppointment from "./pages/BookAppointment/index";
import Selection from "./pages/VoiceRoom/Selection";
import Avatar from "./pages/Voicerooms/Avatar";
import JokesPage from "./pages/JokesPage/index";
import { VoiceRoom } from "./pages/VoiceRoom/VoiceRoom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/jokes" element={<JokesPage />} />
        <Route exact path="/appointment" element={<ProfessionalList />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/voicerooma" element={<Selection />} />
        <Route
          exact
          path="/bookAppointment/:id"
          element={<BookAppointment />}
        />
        <Route exact path="/voiceroom/avatar" element={<Avatar />} />
        <Route exact path="/voiceroom" element={<VoiceRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
