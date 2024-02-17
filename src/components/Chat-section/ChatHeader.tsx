import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { ILayoutIcons } from "../../Interfaces";
import Call from "@iconify/icons-fluent/call-24-regular";
import Video from "@iconify/icons-fluent/video-24-regular";
import Search from "@iconify/icons-fluent/search-24-regular";

export default function ChatHeader() {
  const [iconCall, iconsVideo, iconSearch] = [
    {
      title: "Call",
      icon: Call,
      color: "white",
    },
    {
      title: "video-call",
      icon: Video,
      color: "white",
    },
    {
      title: "Search",
      icon: Search,
      color: "white",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        backgroundColor: "#2C2C2C",
        border: "1px #1D1D1D solid",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "12px",
        }}
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Besty Orange ❤️
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#343434",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "12px",
            padding: "5px 10px",
            borderRadius: "8px",
            border: "0.5px #505050 solid",
          }}
        >
          <Tooltip arrow title={iconsVideo.title}>
            <IconButton
              sx={{
                color: `${iconsVideo.color}`,
                borderRadius: 0,
              }}
            >
              <Icon icon={iconsVideo.icon} />
            </IconButton>
          </Tooltip>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              borderColor: "#505050",
            }}
          />
          <Tooltip arrow title={iconCall.title}>
            <IconButton
              sx={{
                color: `${iconCall.color}`,
                borderRadius: 0,
              }}
            >
              <Icon icon={iconCall.icon} />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip arrow title={iconSearch.title}>
          <IconButton
            sx={{
              color: `${iconSearch.color}`,
              borderRadius: 0,
            }}
          >
            <Icon icon={iconSearch.icon} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
