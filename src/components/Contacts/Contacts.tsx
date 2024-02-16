import Filter from "@iconify/icons-fluent/filter-24-filled";
import WindowEdit from "@iconify/icons-fluent/window-edit-20-regular";
import { Icon } from "@iconify/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Badge,
  Box,
  Input,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography
} from "@mui/material";
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

  const contacts: {
    srcAvatar: string,
     name: string,
      msg: string,
       datePrevMsg: string,
}[] = [
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: 'Besty Orange❤️',
      msg: 'Djoukouo demain tu viens me donner mon sac',
      datePrevMsg: 'Yesterday',

    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: 'Besty Orange❤️',
      msg: 'Djoukouo demain tu viens me donner mon sac',
      datePrevMsg: 'Yesterday',

    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: 'Besty Orange❤️',
      msg: 'Djoukouo demain tu viens me donner mon sac',
      datePrevMsg: 'Yesterday',

    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: 'Besty Orange❤️',
      msg: 'Djoukouo demain tu viens me donner mon sac',
      datePrevMsg: 'Yesterday',

    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: 'Besty Orange❤️',
      msg: 'Djoukouo demain tu viens me donner mon sac',
      datePrevMsg: 'Yesterday',

    },
  ]

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
        <Box>
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
              <Icon icon={icon} color={color} />
            </Tooltip>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 16px",
        }}
      >
        <Input
          type="text"
          placeholder="Search or start a new chat"
          className="search"
          startAdornment={
            <InputAdornment position="start"
            >
              <SearchOutlinedIcon
                sx={{
                  color: "white",
                  padding: 0,
                }}
                />
            </InputAdornment>
          }
          sx={{
            color:'white',
          }}
          />
      </Box>

      <Box>
             <nav aria-label="secondary mailbox folders">
        <List
        sx={{
          display:"grid",
          alignContent:"space-between",
          gap:"20",
        }}
        >
            {contacts.map(({ srcAvatar, name, msg, datePrevMsg }, index) => (
          <ListItem disablePadding>

            <ListItemButton
              sx={{
                padding:"16px 16px",
                width:'100%',
              }}
            >
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src={srcAvatar}/>
              </ListItemIcon>
              <Box>

                <Box 
                sx={{
                  maxWidth: '100%',
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontWeight: 200,
                      color: "#A1A1A1",
                    }}
                  >
                    {datePrevMsg}
                  </Typography>
                </Box>
                <Box
                sx={{
                 display: "grid",
                 gridTemplateColumns: "1fr auto",
                 alignItems: "center",
                 justifyContent: "space-between",
                 width:'100%',
                } }
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 50,
                      color: "#A1A1A1",
                    }}
                  >
                    {msg}
                  </Typography>
                  <Badge
                    badgeContent={1}
                    color="success"
                    
                    sx={{
                      height: "3px",
                      width: "3px",
                    }}
                  ></Badge>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </nav>
      </Box>
    </Box>
  );
};

export default Contacts;
