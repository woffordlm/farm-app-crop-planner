import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import 'react-pro-sidebar/dist/css/styles.css';
import '../Sidebar/index.css';
import { useState } from 'react';

const Sidebar = () => {

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
                    <p>{menuCollapse ? 'Logo' : 'Big Logo'}</p>
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
                        <MenuItem active={true} icon={<FiHome />}>
                            Home
                        </MenuItem>
                        <MenuItem active={true} icon={<FaList />}>Category</MenuItem>
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