import { useState } from "react";
import Button from "../Button";

const PaperSize = ({ onChange }) => {
    const [paperSize, setPaperSize] = useState('');
    
    const selectOption = (e) => {
        setPaperSize(e.target.value);
    }

    return (
        <div className="page-size-select">
            <h3>Select Paper Size</h3>
            <select onChange={selectOption}  className="dropdown" name="pagesize" id="pagesize">
                <option value="A4">A4</option>
                <option value="A5">A5</option>
                <option value="B4">B4</option>
                <option value="B5">B5</option>
            </select>
            <div className="apply">
                <Button type="button" title='Apply' onClick={() => onChange(paperSize)}/>
            </div>
        </div>
    );
};
export default PaperSize;