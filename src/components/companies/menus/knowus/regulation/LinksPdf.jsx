import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="TUO de las condiciones " />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Lugares y horarios de pago de servicios " />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Reglamento de neutralidad de la red " />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}