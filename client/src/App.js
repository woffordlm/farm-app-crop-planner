import './App.css';
import Sidebar from './Components/Sidebar'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Addplanting from './Components/Addplanting/index';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Sidebar></Sidebar> */}
        <br></br>
        <motion.button
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => (modalOpen ? close() : open())}
        >
          Add Planting
        </motion.button>
      </header>
      <main>
      <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
      >
        {modalOpen && <Addplanting modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
      </main>

    </div>
  );
}

export default App;
