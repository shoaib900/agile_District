import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
//////////////////////////////////////////////////////////
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const pixabayAPI = {
  url: "https://pixabay.com/api/",
  key: "35320678-71c9df4f983251d4c0daa4b3c",
};

const Home = () => {
  const [data, setData] = useState([]);

  const pageLimit = 5;
//   const apiData = `${pixabayAPI.url}?key=${pixabayAPI.key}&per_page=${3}&page=${1}`
  const apiData = `${pixabayAPI.url}?key=${pixabayAPI.key}`

  const getList = () => {
    const pageNo =Math.ceil(data.length/pageLimit) +1;
    const queryParam =  `&per_page=${pageLimit}&page=${pageNo}`
    const finalUrl = apiData + queryParam;

    console.log( "final URL",finalUrl);
    
    axios.get(finalUrl)
    .then( res => {
        const apiRes = res?.data.hits;
        console.log("apiData: api response", apiRes);
        const allData = [...data,...apiRes]
        setData(allData)
    }).catch(error => console.log("error",error))
  }

  useEffect(() => {
    // axios
    //   .get(`${pixabayAPI.url}?key=${pixabayAPI.key}`)
    //   .then((response) => {
    //     console.log(response.data.hits);
    //     setData(response.data.hits);
    //   })
    //   .catch((err) => console.log(err));

      getList();

  }, []);
  const getMoreData = () => {
    getList();
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        top: "70px",
      }}
    >

<InfiniteScroll
    dataLength={data.length}
    next={getMoreData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
  >
      {data && data.map((item, index) => {
        return (
          <div key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  p: 1,
                  width: {
                    xs: 300, //0
                    sm: 400, //600
                    md: 500, //900
                    lg: 600, //1200
                    xl: 500, //1536
                  },
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <h1>{item.user}</h1>
                <img src={item.largeImageURL} alt="img" />
                <p>Likes: {item.likes}</p>
              </Paper>
            </Box>
          </div>
        );
      })}
  </InfiniteScroll>
    </div>
  );
};

export default Home;
