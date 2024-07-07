import NavBar from "./component/NavBar/NavBar.jsx";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Project from "./component/Project/Project.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";

import ProjectsContextProvider from "./store/projectStore.jsx";

function App() {
  return (
    <ProjectsContextProvider>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </ProjectsContextProvider>
  );
}

export default App;
