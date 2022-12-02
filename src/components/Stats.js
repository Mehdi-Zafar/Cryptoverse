import millify from "millify";

const Stats = (props) => {

    return ( 
        <>
        <h1 className="stats-heading">Stats</h1>
        <div className="stats">
            <div className="stat">
                <p>Total Cryptocurrencies</p>
                <h4>{props.coins ? props.coins.data.stats.totalCoins : "Not Available"}</h4>
            </div>
            <div className="stat">
                <p>Total Exchanges</p>
                <h4>{props.coins ? props.coins.data.stats.totalExchanges : "Not Available"}</h4>
            </div>
            <div className="stat">
                <p>Total Market Cap</p>
                <h4>{props.coins ? millify(props.coins.data.stats.totalMarketCap) : "Not Available"}</h4>
            </div>
            <div className="stat">
                <p>Total 24th Volume</p>
                <h4>{props.coins ? millify(props.coins.data.stats.total24hVolume) : "Not Available"}</h4>
            </div>
            <div className="stat">
                <p>Total Markets</p>
                <h4>{props.coins ? props.coins.data.stats.totalMarkets : "Not Available"}</h4>
            </div>
        </div>
        </>
     );
}
 
export default Stats;