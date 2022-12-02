import { useState,useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import millify from "millify";
import { ThreeDots } from 'react-loader-spinner';
import EastRoundedIcon from '@mui/icons-material/EastRounded';


const Exchanges = () => {

  const [exchanges,setExchanges] = useState(null)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    useEffect(()=>{
        fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
        .then(response => response.json())
        .then(response => setExchanges(response.data.exchanges))
        .catch(err => console.error(err));
    },[])

    console.log(exchanges)
    
    const columns = [
        { id: 'name', label: 'Exchanges', minWidth: 170 },
        { id: '24hVolume', label: '24h Trade Volume', minWidth: 100,align: 'center', },
        {
          id: 'numberOfMarkets',
          label: 'Markets',
          minWidth: 170,
          align: 'center',
          format: (value) => value.toLocaleString('en-US'),
        },
        // {
        //   id: 'rank',
        //   label: 'Change',
        //   minWidth: 170,
        //   align: 'center',
        //   format: (value) => value.toLocaleString('en-US'),
        // },
      ];
      

    return ( 
        <div className="exchanges">
            {exchanges ?
            <>
            <h1>Exchanges</h1>
                <div className="swipe-right">Swipe to view info &nbsp;<EastRoundedIcon/></div>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth ,fontWeight:"bold"}}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exchanges && exchanges.map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align} sx={{fontSize:"1.1rem"}}>
                                        {column.id === 'name' ?
                                        <div style={{display:"flex",alignItems:"center"}}>{row.rank}. <Avatar alt="Remy Sharp" src={row.iconUrl} sx={{height:'40px',marginInline:'3px'}}/>&nbsp;{value}</div> :
                                        column.id === '24hVolume' ? millify(value): value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
            </>: 
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
 
export default Exchanges;