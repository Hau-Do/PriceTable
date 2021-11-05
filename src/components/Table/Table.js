import { Button } from "..";

const Table = ({ data, onCell }) => {

    const mouseEnterRow=(e)=>{
        let numChild = e.currentTarget.children;
        for(let i = 0; i < numChild.length; i++){
            numChild[i].style.backgroundColor = 'wheat';
        }
    }
    
    const mouseLeaveRow=(e)=>{
        let numChild = e.currentTarget.children;
        for(let i = 0; i < numChild.length; i++){
            numChild[i].style.backgroundColor = 'white';
        }
    }

    const mouseEnterColumn = (e, priceByBizDay, numRows) => {
        for(let i = 0;i<numRows;i++){
            document.getElementsByClassName(e.target.className)[i].style.backgroundColor = 'wheat';
        }
        e.target.style.backgroundColor = 'gray';
        document.getElementById('order-days').innerText = 'Business Days';
        document.getElementById('order-days').innerText += ':'+ priceByBizDay.business_day;
        document.getElementById('order-quantity').innerText = 'Quantity';
        document.getElementById('order-quantity').innerText += ':'+ priceByBizDay.quantity;
    }

    const mouseLeaveColumn = (e, priceByBizDay, numRows) => {
        for(let i = 0; i < numRows; i++){
            document.getElementsByClassName(e.target.className)[i].style.backgroundColor = 'white';
        }
        e.target.style.backgroundColor = 'wheat';
    }

    const clickCell = (e, priceByBizDay) => {
        onCell(priceByBizDay);
        e.target.style.backgroundColor = '#525252';
        
    }

    return(
        <div className="page-table">
            <h3 style={{position:'absolute',left:10}}>Price Table</h3>
            <div style={{display:'grid',placeItems:'center',height:'80vh'}} className="table-div">
                <table>
                    <tbody>
                        {data.map((pricesByQuantity, index) => 
                            <tr key={index} onMouseEnter={mouseEnterRow} onMouseLeave={mouseLeaveRow}>
                                {pricesByQuantity.map((priceByBizDay, idx) => 
                                    <td 
                                        className={`td${idx}`}
                                        key={idx} 
                                        style={{padding:10, paddingRight:25,paddingLeft:25,backgroundColor:"white",fontSize:10}}
                                        onMouseEnter={(e) => mouseEnterColumn(e, priceByBizDay, data.length)} 
                                        onMouseLeave={(e) => mouseLeaveColumn(e, priceByBizDay, data.length)} 
                                        onClick={(e) => clickCell(e, priceByBizDay)}
                                    >
                                        {priceByBizDay.price}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
                <Button type="submit" title="See More"></Button>
            </div>
        </div>
    );
};

export default Table;