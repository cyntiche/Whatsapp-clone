import Archive from "@iconify/icons-fluent/archive-24-regular";
import Call from "@iconify/icons-fluent/call-24-regular";
import Chat from "@iconify/icons-fluent/chat-24-regular";
import HeartCircleHint from "@iconify/icons-fluent/heart-circle-hint-24-regular";
import Settings from "@iconify/icons-fluent/settings-24-regular";
import Star from "@iconify/icons-fluent/star-24-regular";
import { Icon } from "@iconify/react";
import { Box, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { ILayoutIcons } from "../../Interfaces";

const SideBar = () => {
  const iconsTop: ILayoutIcons[] = [
    {
      title: "Chat",
      icon: Chat,
      color: "white",
    },
    {
      title: "Call",
      icon: Call,
      color: "white",
    },
    {
      title: "Story",
      icon: HeartCircleHint,
      color: "white",
    },
  ];
  const iconsBotton: ILayoutIcons[] = [
    {
      title: "Star",
      icon: Star,
      color: "white",
    },
    {
      title: "Archive",
      icon: Archive,
      color: "white",
    },
    {
      title: "Settings",
      icon: Settings,
      color: "white",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        height: "100%",
        width: "40px",
        backgroundColor: "#202020",
        alignItems: "center",
        alignContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "grid",
          flexDirection: "column",
          justifyItems: "center",
          alignContent: "flex-start",
          paddingTop: "14px",
          gap: 3,
        }}
      >
        {iconsTop.map(({ title, icon, color }, index) => (
          <Tooltip arrow title={title}>
            <Icon icon={icon} color={color} />
          </Tooltip>
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          flexDirection: "column",
          justifyItems: "center",
          alignContent: "flex-end",
          paddingBottom: "10px",
          gap: 3,
        }}
      >
        {iconsBotton.map(({ title, icon, color }, index) => (
          <Tooltip arrow title={title}>
            <Icon icon={icon} color={color} />
          </Tooltip>
        ))}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{height:'24px', width:'24px'}}/>
      </Box>
    </Box>
  );
};

export default SideBar;
