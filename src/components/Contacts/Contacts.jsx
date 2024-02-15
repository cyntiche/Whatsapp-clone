import React,{useState} from "react";
import "./Contacts.css";
import FluentSearch16Regular from "../../Ressources/Icons/FluentSearch16Regular";
import FluentWindowEdit20Regular from "../../Ressources/Icons/FluentWindowEdit20Regular";
import FluentFilter16Regular from "../../Ressources/Icons/FluentFilter16Regular";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const Contacts = () => {
  const contacts = ["Contact 1", "Contact 2",];
  const [avatar, setAvatar] = useState(require("../../Ressources/avatar.png"));


  return (
    <div className="Contacts">
      <div className="header">
        <div className="title-container">
          <span className="title">Chats</span>
        </div>
        <div className="icons-container">
          <span className="icon-bar">{FluentFilter16Regular()}</span>
          <span className="icon-bar">{FluentWindowEdit20Regular()}</span>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="         Search or start a new chat"
          className="search"
        />
      </div>

      <div className="contacts-list">
      <List sx={{ width: '100%', maxWidth: 360}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src={avatar} alt="Photo de profil" style={{ width: '100%', maxWidth: 360}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" style={{ color: 'white', fontSize:"12px"}}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src={avatar} alt="Photo de profil" style={{ width: '100%', maxWidth: 360}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" style={{ color: 'white', fontSize:"12px"}}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src={avatar} alt="Photo de profil" style={{ width: '100%', maxWidth: 360}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" style={{ color: 'white', fontSize:"12px"}}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src={avatar} alt="Photo de profil" style={{ width: '100%', maxWidth: 360}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" style={{ color: 'white', fontSize:"12px"}}/>
      </ListItem>
    </List>



       <ul className="contacts-list">
        {contacts.map((contact, index) => (
             <li key={index}>{contact}
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
