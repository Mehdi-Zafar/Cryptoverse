import { Button } from "@mui/material";
import Currency from "./Currency";
import Stats from "./Stats";
import MainNews from "./MainNews";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Main = () => {
  const [coins, setCoins] = useState(null);
  const [news, setNews] = useState(null);
  const location = useLocation();

  console.log(coins);
  console.log(news);
  const optionsCoins = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const optionsNews = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      optionsCoins
    )
      .then((response) => response.json())
      .then((response) => setCoins(response))
      .catch((err) => console.error(err));

    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw",
      optionsNews
    )
      .then((response) => response.json())
      .then((response) => setNews(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main">
      {coins && news ? (
        <>
          {location.pathname === "/" ? (
            <>
              <Stats coins={coins} />
              <div className="heading-button">
                <h1 className="cryptocurrency-heading">Cryptocurrencies</h1>
                <div className="flex-btn">
                  <Link to="/cryptocurrencies">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#060F2A",
                        "&:hover": { backgroundColor: "#060F4F" },
                      }}
                    >
                      Show More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="card-container">
                {coins &&
                  coins?.data?.coins.slice(0, 6).map((coin) => {
                    return <Currency key={coin.uuid} coin={coin} />;
                  })}
              </div>
              <div className="block-btn">
                <Link to="/cryptocurrencies">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#060F2A",
                      "&:hover": { backgroundColor: "#060F4F" },
                    }}
                  >
                    Show More
                  </Button>
                </Link>
              </div>
              <div className="heading-button">
                <h1 className="cryptocurrency-heading">News</h1>
                <div className="flex-btn">
                  <Link to="/news">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#060F2A",
                        "&:hover": { backgroundColor: "#060F4F" },
                      }}
                    >
                      Show More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="news-container">
                {/* {news &&
                  news.value.slice(0, 4).map((news) => {
                    return <MainNews key={news.datePublished} news={news} />;
                  })} */}
                Not available at the moment
              </div>
              <div className="block-btn">
                <Link to="/news">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#060F2A",
                      "&:hover": { backgroundColor: "#060F4F" },
                    }}
                  >
                    Show More
                  </Button>
                </Link>
              </div>
            </>
          ) : location.pathname === "/cryptocurrencies" ? (
            <div className="all-currencies">
              <h1>Cryptocurrencies</h1>
              <div className="card-container">
                {coins &&
                  coins.data.coins.map((coin) => {
                    return <Currency key={coin.uuid} coin={coin} />;
                  })}
              </div>
            </div>
          ) : location.pathname === "/news" ? (
            <div className="all-news">
              <h1>News</h1>
              <div className="news-container">
                {/* {news &&
                  news.value.map((news) => {
                    return <MainNews key={news.datePublished} news={news} />;
                  })} */}
                Not available at the moment
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#060F2A"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
