import React, { useState } from 'react';
import Sketch from 'react-p5';
import './styles.css';

import DragDrop from '../utils/DragDropExports';

const CSVvisualizer = () => {    
    const [index, setIndex] = useState(0);
    const [table, setTable] = useState([]);
    const [headers, setHeaders] = useState([]);
    let p5_ref;

    // Setup method for p5 canvas
    const p5setup = (p5, canvasRef) => {
        p5.frameRate(20);
        p5.createCanvas(300, 300).parent(canvasRef);
    }

    // Canvas Draw Method
    const p5draw = (p5) => {
        p5_ref = p5;
        p5.background(0);
        
        // p5.rect(10, 10, Math.abs(Math.sin(p5.frameCount/30)*280), Math.abs(Math.sin(p5.frameCount/30)*280));
        let d = 10;
        if (table.length > 0) {
            p5.translate(p5.width /2 , p5.height / 2);
            for (let i = 0; i < 8; i++){ 
                let r = 0;
                for (const i in headers) {
                    r += 120 / headers.length;
                    // console.log(table[index][i])
                    if (isNaN(table[index][headers[i]])) {
                        d = 15;
                    } else {
                        d = table[index][headers[i]];
                    }
                    p5.circle(0, -r, d);
                }
                // p5.rotate();
                p5.rotate((2*Math.PI) / 8);
            }
        }
    }

    const setTableData = (tableData) => {
        console.log(table);
        setTable(tableData);
    }

    const setHeaderData = (headerData) => {
        console.log(headerData);
        setHeaders(headerData);
    }

    const onButtonClick = (e) => {
        const inc = parseInt(String(e.target.value));
        if (index == 0 && inc == -1) {
            return;
        } else if (index == table.length - 1 && inc == 1) {
            return;
        } else {
            setIndex(index + inc);
            p5draw(p5_ref);
        }
    }

    return (
        <div>
            <strong>Le Viz</strong>
            <div className="csv container">
                <div className="d-flex csv row">
                    <div className="mr-5">
                        <strong className="mb-5">Images:</strong>
                        <div className="csv images">
                            <button 
                                className="csv scroll-buttons"
                                value={-1}
                                onClick={onButtonClick}
                                >
                                left
                            </button>
                            <div className="csv image-display">
                                <Sketch setup={p5setup} draw={p5draw} />
                            </div>
                            <button 
                                className="csv scroll-buttons"
                                value={1}
                                onClick={onButtonClick}
                                >
                                right
                            </button>
                        </div>
                    </div>
                    <div>
                        <strong className="mb-2">Current Index: </strong>
                        <p>{index + 1} / {table.length}</p>
                        <div>
                            <strong>Data</strong>
                            <div>
                                {headers.map((header, i) => {
                                    return (
                                        <p>{header}: {table[index][header]}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <strong>Upload CSV or XLSX File</strong>
                    <div className="drag-drop container">
                        <DragDrop setTableDataCallback={setTableData} setSearchDataCallback={setHeaderData} text="Drag and Drop .csv or .xlsx Files Here"/>
                    </div>
                </div>
                <div className="mt-3">
                    <strong>Options</strong>
                    <div className="mt-1 csv options">
                        <button>
                            vIsUaLiZe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CSVvisualizer;