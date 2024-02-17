import Filter from "@iconify/icons-fluent/filter-28-regular";
import WindowEdit from "@iconify/icons-fluent/window-edit-20-regular";
import { Icon } from "@iconify/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  Input,
  InputAdornment,
  Tooltip,
  Typography
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
    srcAvatar: string;
    name: string;
    msg: string;
    datePrevMsg: string;
    nbMsg: number;
  }[] = [
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: "Besty Orange❤️",
      msg: "Djoukouo demain tu viens me donner mon sac",
      datePrevMsg: "Yesterday",
      nbMsg: 1,
    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: "Besty Orange❤️",
      msg: "Djoukouo demain tu viens me donner mon sac",
      datePrevMsg: "Yesterday",
      nbMsg: 1,
    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: "Besty Orange❤️",
      msg: "Djoukouo demain tu viens me donner mon sac",
      datePrevMsg: "Yesterday",
      nbMsg: 1,
    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: "Besty Orange❤️",
      msg: "Djoukouo demain tu viens me donner mon sac",
      datePrevMsg: "Yesterday",
      nbMsg: 1,
    },
    {
      srcAvatar: '"/static/images/avatar/1.jpg"',
      name: "Besty Orange❤️",
      msg: "Djoukouo demain tu viens me donner mon sac",
      datePrevMsg: "Yesterday",
      nbMsg: 1,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#2C2C2C",
        width: "100%",
        height: "100%",
        border:"1px #1D1D1D solid",
        borderRadius: "5px 0 0 0",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px",
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
          padding: "16px 16px",
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
                  color: "white",
                  padding: 0,
                }}
              />
            </InputAdornment>
          }
          sx={{
            color: "white",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          alignContent: "space-between",
          gap: "14",
        }}
      >
        {contacts.map(({ srcAvatar, name, msg, datePrevMsg, nbMsg }, index) => (
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "16px",
              padding: "16px",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                height: "40px",
                width: "40px",
              }}
            >
              <Avatar alt="Remy Sharp" src={srcAvatar} />
            </Box>

            <Box>
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
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
                  width: "100%",
                }}
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
                <Box
                  sx={{
                    backgroundColor: "#1DAA61",
                    borderRadius: "50%",
                    height: "16px",
                    width: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    fontSize: "9px",
                    fontWeight: 900,
                  }}
                >
                  {nbMsg}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Contacts;
