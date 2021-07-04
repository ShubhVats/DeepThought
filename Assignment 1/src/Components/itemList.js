import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BasketList from "./basketList";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EcoTwoToneIcon from "@material-ui/icons/EcoTwoTone";
let items = require("../assets/List.json");

export default function ItemList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [increment, setIncrement] = React.useState(0);

  const handleToggle = (value) => () => {
    setIncrement(value.id);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <List className={classes.root}>
        <div
          style={{
            display: "flex",
            flexDirection: "coloumn",
          }}
        >
          <EcoTwoToneIcon />
          <h2>Groceries</h2>
        </div>

        {items.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <AddBoxIcon
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  inputprops={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.name} `} />
            </ListItem>
          );
        })}
      </List>
      <BasketList increment={increment} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
