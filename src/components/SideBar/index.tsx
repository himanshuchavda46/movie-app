import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
    Avatar,
    Box,
    Container, Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography
} from "@mui/material";
import RenderRoutes from "../Routes";
import {Movie, PlayArrowOutlined, Search, Tv} from "@mui/icons-material";

const sideDrawerList = [
    {
        icon: <Search/>,
        text: "Discover",
        path: "/discover",
        isActive: true,
    },
    {
        icon: <PlayArrowOutlined/>,
        text: "PlayList",
        path: "/discover",
        isActive: false,
    },
    {
        icon: <Movie/>,
        text: "Movie",
        path: "/discover",
        isActive: false,
    },
    {
        icon: <Tv/>,
        text: "Tv Shows",
        path: "/discover",
        isActive: false,
    },

]
const drawer = (
    <Box sx={{background: "#1F2A3C", height: "100%"}}>
        <Container sx={{margin: "12px"}}>
               <Avatar
                   alt="Profile Pic"
                   src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
                   sx={{ width: 120, height: 120 }}
               />
           </Container>
        <Divider />
        <List>
            {sideDrawerList.map((panel: any, index) => (
                <Link to={panel.path} style={{textDecoration: "none"}}>
                <ListItem key={panel.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{color:"white"}}>
                            {panel.icon}
                        </ListItemIcon>
                        {/*<ListItemText  primary={panel.text} />*/}
                        <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                            {panel.text}
                        </Typography>
                    </ListItemButton>
                </ListItem>
                </Link>
            ))}
        </List>
    </Box>
);

const drawerWidth = 240;


function SideBar(props: any){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
        <RenderRoutes/>
        </Box>
    )
}

export default SideBar;
