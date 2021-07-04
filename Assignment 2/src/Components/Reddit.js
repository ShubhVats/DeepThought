import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default function Reddit() {
  const [search, setSearch] = useState("aww");
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/" + search + "/new.json?sort=new")
      .then((res) => {
        var finalData = res.data.data.children;
        console.log(finalData);
        setPosts(finalData);
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    axios
      .get("https://www.reddit.com/r/" + search + "/new.json?sort=new")
      .then((res) => {
        var finalData = res.data.data.children;
        console.log(finalData);
        setPosts(finalData);
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  return (
    <div>
      <header className="App-header">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <b>
            <Link
              to={`/Giphy`}
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
            >
              Giphy<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </b>
        </div>
        <i
          className="fa fa-reddit-alien fa-5x"
          style={{ color: "white" }}
          aria-hidden="true"
        ></i>
        <h1 className="App-title" style={{ color: "white" }}>
          Hello, Reddit!
        </h1>
      </header>

      <form
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row-reverse",
          width: "56.5%",
        }}
        onSubmit={(e) => {
          handleSearch(e);
        }}
      >
        <TextField
          error
          id="outlined-helperText"
          defaultValue="aww"
          variant="outlined"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></TextField>
      </form>

      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          {posts.map((value) => (
            <GridListTile key={value.data.url}>
              {/* <a
                href={`https://www.reddit.com/${value.data.permalink}`}
                target="_blank"
              > */}
              <img src={value.data.url} alt={value.title} />
              {/* </a> */}
              <GridListTileBar
                title={value.data.title}
                subtitle={<span>by: {value.data.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100vw",
    height: "70vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));
