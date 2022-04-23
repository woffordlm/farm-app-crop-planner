import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import { motion, AnimatePresence } from "framer-motion";
import Addplanting from '../Addplanting/index';

import { FaList } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { GiCorn } from 'react-icons/gi';

import 'react-pro-sidebar/dist/css/styles.css';
import './index.css';
import { useState } from 'react';

const Sidebar = () => {

    const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
    const [menuCollapse, setMeunCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMeunCollapse(false) : setMeunCollapse(true);
    };

    return (
        <>
        <div id='sidebar'>
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                <div className='logoText'>
                    {menuCollapse ? <p><GiCorn/></p> : <p><GiCorn/>  Crop App</p>}
                </div>
                <div className='closemenu' onClick={menuIconClick}>
                    {menuCollapse ? (
                        <FiArrowRightCircle/>
                    ) : (
                        <FiArrowLeftCircle/>
                    )}
                </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape='square'>

                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{ scale: 0.9 }}
                            className="save-button"
                            onClick={() => (modalOpen ? close() : open())}
                        >
                            Add Planting
                        </motion.button>
                        
                        <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                        >
                        {modalOpen && <Addplanting modalOpen={modalOpen} handleClose={close} />}
                        </AnimatePresence>
                       
                        <MenuItem active={true} icon={<FiHome />}>
                            Home
                        </MenuItem>
                        <MenuItem active={true} icon={<FaList />}>Crop Guide</MenuItem>
                        <MenuItem active={true} icon={<BiCog />}>Settings</MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape='square'>
                        <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                    </Menu>
                </SidebarFooter>

            </ProSidebar>
        </div>
        </>
    );
};

export default Sidebar;