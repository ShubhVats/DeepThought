import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";

export default function Giphy() {
  const [search, setSearch] = useState("trending");
  const [posts, setPosts] = useState([]);
  const [history] = useState(["trending"]);
  const classes = useStyles();

  const apiCall = (query) => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=" +
          query +
          "&limit=25&offset=0&rating=G&lang=en"
      )
      .then((res) => {
        var finalData = res.data.data;
        console.log(finalData);
        setPosts(finalData);
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  useEffect(() => {
    apiCall(search);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(search);
    console.log(history);
    apiCall(search);
  };

  const searchHistory = (value, e) => {
    e.preventDefault();
    apiCall(value);
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
              to={`/`}
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
            >
              Reddit<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </b>
        </div>
        <i
          className="fa fa-picture-o fa-5x"
          style={{ color: "white" }}
          aria-hidden="true"
        ></i>
        <h1 className="App-title" style={{ color: "white" }}>
          Hello, Giphy!
        </h1>
      </header>

      <form
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row-reverse",
          width: "56.5%",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          error
          id="outlined-helperText"
          defaultValue="Trending"
          variant="outlined"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></TextField>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "30px",
          }}
        >
          <h1>Search History</h1>
          {history.map((value) => (
            <Button
              style={{ marginBottom: "10px" }}
              variant="outlined"
              color="secondary"
              onClick={(e) => {
                searchHistory(value, e);
              }}
            >
              {value}
            </Button>
          ))}
        </ul>

        <div className={classes.root}>
          <GridList cellHeight={300} className={classes.gridList} cols={3}>
            {posts.map((value) => (
              <GridListTile key={value.id}>
                {/* <a
                href={`value.bitly_url`}
                target="_blank"
              > */}
                <img src={value.images.preview_gif.url} alt={value.title} />
                {/* </a> */}
              </GridListTile>
            ))}
          </GridList>
        </div>
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
