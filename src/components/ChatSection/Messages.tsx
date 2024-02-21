import { Box, List, ListItem, Typography } from "@mui/material";

export default function Messages() {
  const messages = [
    {
      content: "Anh Okay comme l'ami de Hugues la nohr?",
      time: "10:30 AM",
      color: "#005C4B",
    },
    { content: "Exactement", time: "10:32 AM", color: "#363636" },
    { content: "Super bebe", time: "10:30 AM", color: "#005C4B" },
    {
      content: "J'spere seulement que le telephone la c'est le bon",
      time: "10:30 AM",
      color: "#005C4B",
    },
    { content: "C'est le bon t'inquiete", time: "10:32 AM", color: "#363636" },
    {
      content:
        "Je ne vais pas lui demander l'argent parce que sinon il va me donner moins que le prix du telephone",
      time: "10:32 AM",
      color: "#363636",
    },
    {
      content: "j'imagine que tu vas melanger les deux pour avoir un telephone",
      time: "10:30 AM",
      color: "#005C4B",
    },
    { content: "Tu as tout compris", time: "10:32 AM", color: "#363636" },
    { content: "Il va m'envoyer un 128Go", time: "10:30 AM", color: "#005C4B" },
    {
      content: "Ça va bien, merci ! Et toi ?",
      time: "10:32 AM",
      color: "#363636",
    },
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        height: "100%",
      }}
    >
      <Box
        sx={{
          overflowY: "auto",
          padding: "5px",
          height: "100%",
        }}
      >
        <List
          sx={{
            gap: 0,
          }}
        >
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection:
                  message.color === "#005C4B" ? "row-reverse" : "row",
                alignItems: "flex-start",
                marginBottom: "0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: message.color,
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "6px",
                  marginLeft: message.color === "#005C4B" ? "0px" : "2px",
                  display: "grid",
                  justifyItems: "end",
                }}
              >
                <Box>
                  <Typography variant="body2">{message.content}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      marginTop: "5px",
                      marginRight: "auto",
                      fontSize: "8px",
                    }}
                  >
                    {message.time}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
