import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import '../components/styles.css'

function DragDrop({ setTableDataCallback, setSearchDataCallback, text }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const EXT = file.name.split('.').pop().toLowerCase();
      if (EXT !== 'csv' && EXT !== 'xlsx') {
        return console.log('File Must be .csv');
      }

      if (EXT === 'csv') {
        const reader = new FileReader();

        reader.onabout = () => console.log("ABORT");
        reader.onerror = () => console.log("ERROR");
        reader.onload = () => {
          const csv = reader.result;
          const lines = csv.split("\n");
          const headers = lines[0].split(',');
          var result = [];

          for (var i = 1; i < lines.length; i++) {
            var parsedLine = {};
            var currentLine = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
              parsedLine[headers[j]] = currentLine[j];
            }
            result.push(parsedLine);
          }
          result.pop();
          // result = JSON.stringify(result);
          console.log(result);
          setTableDataCallback(result);
          setSearchDataCallback(headers);
        }
        reader.readAsText(file)
      } else {
        const reader = new FileReader();

        reader.onabout = () => console.log("ABORT");
        reader.onerror = () => console.log("ERROR");
        reader.onload = (e) => {
          const binaryString = e.target.result;
          const wb = XLSX.read(binaryString, { type: 'binary' });
          const ws = wb.Sheets[wb.SheetNames[0]];

          const csv = XLSX.utils.sheet_to_csv(ws, { header: 1 });
          const lines = csv.split("\n");
          const headers = lines[0].split(',');
          var result = [];

          for (var i = 1; i < lines.length; i++) {
            var parsedLine = {};
            var currentLine = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
              parsedLine[headers[j]] = currentLine[j];
            }
            result.push(parsedLine);
          }
          result.pop();
          // result = JSON.stringify(result);
          console.log(result);
          setTableDataCallback(result);
          setSearchDataCallback(headers);
        }
        reader.readAsBinaryString(file);
      }
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="drag-drop component">
      <br/>
      <div {...getRootProps()}>
        <input {...getInputProps()} className="drag-drop target"/>
        <p className="drag-drop-text">{text}</p>
      </div>
      <br/>
    </div>
  );
}

export default DragDrop;
