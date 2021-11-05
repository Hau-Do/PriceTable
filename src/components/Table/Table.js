import { Button } from "..";

const HOVER_COLOR = 'wheat';
const LEAVE_COLOR = 'white';
const CLICKED_COLOR = '#525252';

const Table = ({ data, onCell }) => {

    const changeColorRow = (event, color) => {
        let numChild = event.currentTarget.children;
        for(let i = 0; i < numChild.length; i++){
            numChild[i].style.backgroundColor = color;
        }
    }

    const changeColorColumn = (event, numRows, color) => {
        for(let i = 0; i < numRows; i++){
            document.getElementsByClassName(event.target.className)[i].style.backgroundColor = color;
        }
    }

    const mouseEnterColumn = (e, priceByBizDay, numRows) => {
        changeColorColumn(e, numRows, HOVER_COLOR);
        e.target.style.backgroundColor = 'gray';
        document.getElementById('order-days').innerText = 'Business Days';
        document.getElementById('order-days').innerText += ':'+ priceByBizDay.business_day;
        document.getElementById('order-quantity').innerText = 'Quantity';
        document.getElementById('order-quantity').innerText += ':'+ priceByBizDay.quantity;
    }

    const mouseLeaveColumn = (e, priceByBizDay, numRows) => {
        changeColorColumn(e, numRows, LEAVE_COLOR);
        e.target.style.backgroundColor = HOVER_COLOR;
    }

    const clickCell = (e, priceByBizDay) => {
        onCell(priceByBizDay);
        e.target.style.backgroundColor = CLICKED_COLOR;
    }

    return(
        <div className="page-table">
            <h3 style={{position:'absolute',left:10}}>Price Table</h3>
            <div style={{display:'grid',placeItems:'center',height:'80vh'}} className="table-div">
                <table>
                    <tbody>
                        {data.map((pricesByQuantity, index) => 
                            <tr key={index} onMouseEnter={(event) => changeColorRow(event, HOVER_COLOR)} onMouseLeave={(event) => changeColorRow(event, LEAVE_COLOR)}>
                                {pricesByQuantity.map((priceByBizDay, idx) => 
                                    <td 
                                        className={`td${idx}`}
                                        key={idx} 
                                        style={{padding:10, paddingRight:25, paddingLeft:25, backgroundColor:LEAVE_COLOR, fontSize:10}}
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