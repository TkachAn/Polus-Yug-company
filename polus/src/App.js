import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/homePage.jsx";
import { NotFound } from "./pages/notFoundPage.jsx";
import { ShareLayout } from "./components/layOut/sharedLayout.jsx";
import { Contacts } from "./pages/contactsPage.jsx";
import { About } from "./pages/aboutPage.jsx";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShareLayout/>}>
        <Route index element={<Home />} />
				{/* <Route path="/cold" element={<Cold />} /> */}
				{/* <Route path="/leds" element={<Leds />} /> */}
				<Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />}>
          {/* <Route path="mission" element={<Mission />} /> */}
          {/* <Route path="team" element={<Team />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
				
  );
}

export default App;
