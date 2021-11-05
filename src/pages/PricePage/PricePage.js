import { useEffect, useState } from 'react';
import axios from "axios";
import { GoToCart, PaperSize, Table } from "../../components";
import { HOST_API, PRICES } from '../../constants';

const DEFAULT_PAPER_SIZE = 'A4';

const PricePage = ()=>{
    const [prices, setPrices] = useState([]);
    const [spiecePriceInfo, setSpiecePriceInfo] = useState({});
    
    useEffect(() => {
        requestData(DEFAULT_PAPER_SIZE);
    }, []);

    const requestData = async (paperSize) => {
        try {
            const { data } = await axios.get(`${HOST_API}${PRICES}`, {
                params: { 'paper_size': paperSize }
            });
            setPrices(data.prices);
        } catch(err) {
            console.error(err);
        }
    } 

    return(
        <>
            <div className="grid-layout">
                <PaperSize onChange={requestData}/>
                <Table data={prices} onCell={(priceInfo) => setSpiecePriceInfo(priceInfo)}/>
            </div>
            <GoToCart data={spiecePriceInfo}/>
        </>
    )
}
export default PricePage;