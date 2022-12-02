import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { ThreeDots } from 'react-loader-spinner';

const SingleCurrency = () => {

    const [coin,setCoin] = useState(null)
    const {id} = useParams();

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

    useEffect(()=>{
        window.scrollTo(0, 0)
        fetch(`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
            .then(response => response.json())
            .then(response => setCoin(response.data.coin))
            .catch(err => console.error(err));
    },[])

    function convertToText(html){
        const tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }

    return ( 
        <div className="single-coin">
            {coin ?
            <>
            <div className="single-coin-heading">
                <h1>{coin.name}</h1>
                <img src={coin.iconUrl} alt="" />
            </div>
            <div className="stats-row">
                <div className="single-stat">
                    <h3>Rank</h3>
                    <h2>{coin.rank}</h2>
                </div>
                <div className="single-stat">
                    <h3>Price</h3>
                    <h2>{millify(coin.price)} USD</h2>
                </div>
            </div>
            <div className="stats-row">
                <div className="single-stat">
                    <h3>All Time High</h3>
                    <h2>{millify(coin.allTimeHigh.price)} USD</h2>
                </div>
                <div className="single-stat">
                    <h3>Number of markets</h3>
                    <h2>{coin.numberOfMarkets}</h2>
                </div>
                <div className="single-stat">
                    <h3>Number of Exchanges</h3>
                    <h2>{coin.numberOfExchanges}</h2>
                </div>
            </div>
            <div className="stats-row">
                <div className="single-stat">
                    <h3>Market Cap</h3>
                    <h2>{millify(coin.marketCap)}</h2>
                </div>
                <div className="single-stat">
                    <h3>24h Volume</h3>
                    <h2>{millify(coin['24hVolume'])}</h2>
                </div>
            </div>
            <div className="stat-desc">
                <h3>Description:</h3>
                <div className="desc">{convertToText(coin.description)}</div>
            </div>
            <div className="links">
                <h3>Links:</h3>
                <ul>
                    {coin.links.map((link)=>{
                        return (
                            <li><a href={link.url} target="_blank">{link.url}</a> ({link.name})</li>
                        )
                    })}
                </ul>
            </div>
            </> :
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
            </div>}
        </div>
     );
}
 
export default SingleCurrency;