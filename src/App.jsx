import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

import { motion,} from "framer-motion";

/* Section Animation */
const sectionAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* Floating blob animation */
const blobVariants = {
  animate: {
    y: [0, 20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const App = () => {
  return (
    <div className="app-container">


      {/* Background Blob */}
      <motion.div variants={blobVariants} animate="animate" className="blob-container">
        <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />
      </motion.div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      <Navbar />

      {/* Normal stacked scroll sections */}
      <div className="sections-wrapper">
        <motion.section
          className="section"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <About />
        </motion.section>

        <motion.section
          className="section"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          className="section"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <Experience />
        </motion.section>

        <motion.section
          className="section"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <Work />
        </motion.section>

        <motion.section
          className="section"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <Education />
        </motion.section>

        <motion.section
          className="section"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <Contact />
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default App;