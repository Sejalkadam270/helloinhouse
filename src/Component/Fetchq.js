

import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';

const Fetchq= () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data11');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
        setSortedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sortData = () => {
    const headerRow = sortedData[0]; // Preserve header row
    const sorted = [...sortedData.slice(1)].sort((a, b) => {
      const valA = a[4];
      const valB = b[4];
      if (sortOrder === 'asc') {
        return valA > valB ? 1 : -1;
      } else {
        return valA < valB ? 1 : -1;
      }
    });

    setSortedData([headerRow, ...sorted]);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleButtonClick = (rowIndex) => {
    // rowIndex here is the index of data rows, adjusted for starting from the second row
    alert(`Button in row ${rowIndex + 1} clicked!`);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 10;

    sortedData.forEach((rowData) => {
      let x = 10;
      rowData.forEach((cellData) => {
        doc.text(cellData != null ? cellData.toString() : '', x, y);
        x += 40;
      });
      y += 10;
    });

    doc.save('data.pdf');
  };

  const displayData = () => {
    return (
      <div>
        <button onClick={downloadPDF} style={{ marginTop: '60px' }} className='btn'>Download as PDF</button>
        <table style={{ borderCollapse: 'collapse', marginTop: '50px', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              <th onClick={sortData} style={{ border: '1px solid black', padding: '8px', cursor: 'pointer', textAlign: 'left' }}>
               Sorting Amcat Exam Score {sortOrder === 'asc' ? '🔽' : '🔼'}
              </th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.slice(1).map((rowData, rowIndex) => (
              <tr key={rowIndex} style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[0]}</td> {/* First Name */}
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[1]}</td> {/* Last Name */}
                {rowData.slice(2).map((cellData, cellIndex) => (
                  <td key={cellIndex} style={{ border: '1px solid black', padding: '8px' }}>{cellData}</td>
                ))}
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => handleButtonClick(rowIndex)} className='btn'>Click Me</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {displayData()}
    </div>
  );
};

export default Fetchq;

