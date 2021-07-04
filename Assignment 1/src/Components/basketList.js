import React from "react";
import ShoppingBasketTwoToneIcon from "@material-ui/icons/ShoppingBasketTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
let items = require("../assets/BasketList.json");

export default function BasketList(props) {
  const classes = useStyles();
  const [deleteID, setDeleteID] = React.useState();

  const replaceCount = (field, newvalue) => {
    setDeleteID(deleteID + 1);
    for (var k = 0; k < items.length; ++k) {
      items[k][field] = newvalue;
    }
    return items;
  };

  return (
    <List className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "coloumn",
          }}
        >
          <ShoppingBasketTwoToneIcon />
          <h2>Basket</h2>
        </div>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={() => replaceCount("count", 0)} />
        </IconButton>
      </div>
      {items
        .filter((value) => {
          if (value.id === props.increment) {
            value.count = value.count + 0.5;
          }

          if (value.count === 0) {
            return false;
          } else {
            return true;
          }
        })
        .map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value.id} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox
                  defaultChecked
                  indeterminate
                  inputprops={{ "aria-label": "indeterminate checkbox" }}
                />
              </ListItemIcon>

              <ListItemText id={labelId} primary={`${value.name}`} />

              <ListItemSecondaryAction>{value.count}</ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
