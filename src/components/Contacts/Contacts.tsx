import Filter from "@iconify/icons-fluent/filter-24-filled";
import WindowEdit from "@iconify/icons-fluent/window-edit-20-regular";
import { Icon } from "@iconify/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Input, InputAdornment, ListItemButton, ListItemIcon, Tooltip, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ILayoutIcons } from "../../Interfaces";
import "./Contacts.css";

const Contacts = () => {
  const icons: ILayoutIcons[] = [
    {
      title: "Filter",
      icon: Filter,
      color: "white",
    },
    {
      title: "WindowEdit",
      icon: WindowEdit,
      color: "white",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#2C2C2C",
        width: "25%",
        height: "100%",
        borderRadius: "5px 0 0 0",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          
        }}
      >
        <Box 
        >
          <Typography
            className="title"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Chats
          </Typography>
        </Box>
        <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
        >
          {icons.map(({ title, icon, color }, index) => (
            <Tooltip arrow title={title}>
              <Icon icon={icon} color={color} 

              />
            </Tooltip>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          padding: '0 16px',
        }}
      >
        <Input
          type="text"
          placeholder="Search or start a new chat"
          className="search"
          startAdornment={ 
            <InputAdornment position="start">
              <SearchOutlinedIcon 
              sx={{
                color: 'white',
                padding:0,

                 }}
              />
            </InputAdornment>
          }
        />
      </Box>

      <Box
        className="contacts-list"
        sx={{

        }}
      >
            <List
      sx={{ 
        Width: '100%',
        margin: 0,
      }}
    >
      <ListItem disablePadding>
        <ListItemButton
        sx={{
          padding:'0px 10px',
          margin:0,

        }}
        >
          <ListItemIcon
          sx={{
            padding:'0px',
          }}
          >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
          </ListItemIcon>
          <Box>
          <Typography mt={2}>
                Besty Orange❤️
          </Typography>

          </Box>
        </ListItemButton>
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Contacts;
