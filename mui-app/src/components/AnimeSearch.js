import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Divider } from "@mui/material";
import AnimeBar from "./AnimeBar";
import axios from "axios";
import animeImage from "../assets/onepunchman.jpg";

const AnimeSearch = () => {
  const [animeData, setAnimeData] = useState([]);
  const [query, setQuery] = useState("");
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);

  console.log("page", page);

  const ApiFetch = async () => {
    await axios
      .get(
        `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${query}&order_by=favorites&sort=desc`
      )
      .then((res) => {
        setAnimeData(res.data.data);
        setPageData(res.data.pagination);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ApiFetch();
  }, [page, query]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${animeImage})`,
          backgroundSize:'cover',
          positionL:'relative',
          height:'100%',
          width:'100%',
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom:'100px',
          paddingTop:'100px'
        }}
      >
        <h1 style={{color:'white'}}>Search Anime Characters</h1>

        <div
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "15px",
            padding: "4px",
          }}
        >
          <SearchRoundedIcon  style={{color:'white'}}/>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              background:"white",
              marginLeft: "5px",
              border: "1px solid white",
            }}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "90%",
              fontSize: "22px",
              border: "none",
              outline: "none",
              marginLeft: "10px",
              background:'none',
              color:'white'
            }}
          />
        </div>
      </div>

      <Divider
        style={{
          background: "black",
          border: "1px solid black",
        }}
      />

      <AnimeBar
        animeData={animeData}
        pageData={pageData}
        setPage={setPage}
        page={page}
      />
    </>
  );
};

export default AnimeSearch;
