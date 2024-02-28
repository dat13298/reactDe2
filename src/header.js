import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage";
import AboutPage from "./page/aboutPage";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
export default Header;
