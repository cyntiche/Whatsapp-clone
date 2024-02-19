import Attach from "@iconify/icons-fluent/attach-24-filled";
import Emoji from "@iconify/icons-fluent/emoji-24-regular";
import Mic from "@iconify/icons-fluent/mic-24-regular";
import { Icon } from "@iconify/react";
import { Box, TextField, Tooltip } from "@mui/material";
import { ILayoutIcons } from "../../Interfaces";

export default function MessageInputBar() {
  const icons: ILayoutIcons[] = [
    {
      title: "Emoji",
      icon: Emoji,
      color: "white",
    },
    {
      title: "Attach",
      icon: Attach,
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
        height: "40px",
        //   justifySelf: 'end',
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
      >
        {icons.map(({ title, icon, color }, index) => (
          <Tooltip arrow title={title}>
            <Icon icon={icon} color={color} />
          </Tooltip>
        ))}
        <TextField
          variant="standard"
          placeholder="Tapez votre message..."
          fullWidth
          size="small"
          sx={{
            color: "white",
            fontSize: "14px",
            padding: "8px",
            borderBottom: "none",
            "& .MuiInputBase-input": {
              color: "white",
              borderBottom: "none",
            },
            "& .MuiInputBase-root": {},
          }}
        />
      </Box>
      <Box>
        <Tooltip arrow title="Voice">
          <Icon icon={Mic} color="white" />
        </Tooltip>
      </Box>
    </Box>
  );
}
