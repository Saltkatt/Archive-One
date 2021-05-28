import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from 'react-icons/fa'

const Sidebar = (onAdd) => {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>List All</MenuItem>
                        <MenuItem>Add</MenuItem>
                        <MenuItem>Search</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        
                    </SubMenu>
                </Menu>
            </ProSidebar>
            
        </div>
    )
}

export default Sidebar


