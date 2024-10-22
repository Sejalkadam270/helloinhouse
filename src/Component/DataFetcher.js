

// import React, { useEffect, useState } from 'react';
// import { jsPDF } from 'jspdf';

// const DataFetcher= () => {
//   const [data, setData] = useState([]);
//   const [sortedData, setSortedData] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/data');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setData(data);
//         setSortedData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const sortData = () => {
//     const headerRow = sortedData[0]; // Preserve header row
//     const sorted = [...sortedData.slice(1)].sort((a, b) => {
//       const valA = a[4];
//       const valB = b[4];
//       if (sortOrder === 'asc') {
//         return valA > valB ? 1 : -1;
//       } else {
//         return valA < valB ? 1 : -1;
//       }
//     });

//     setSortedData([headerRow, ...sorted]);
//     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//   };

//   const handleButtonClick = (rowIndex) => {
//     // rowIndex here is the index of data rows, adjusted for starting from the second row
//     alert(`Button in row ${rowIndex + 1} clicked!`);
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     let y = 10;

//     sortedData.forEach((rowData) => {
//       let x = 10;
//       rowData.forEach((cellData) => {
//         doc.text(cellData != null ? cellData.toString() : '', x, y);
//         x += 40;
//       });
//       y += 10;
//     });

//     doc.save('data.pdf');
//   };

//   const displayData = () => {
//     return (
//       <div>
//         <button onClick={downloadPDF} style={{ marginTop: '60px' }} className='btn'>Download as PDF</button>
//         <table style={{ borderCollapse: 'collapse', marginTop: '50px', width: '100%' }}>
//           <thead>
//             <tr>
//               <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
//               <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
//               <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
//               <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
//               <th onClick={sortData} style={{ border: '1px solid black', padding: '8px', cursor: 'pointer', textAlign: 'left' }}>
//                Sorting Attendance Score {sortOrder === 'asc' ? '🔽' : '🔼'}
//               </th>
//               <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedData.slice(1).map((rowData, rowIndex) => (
//               <tr key={rowIndex} style={{ border: '1px solid black' }}>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[0]}</td> {/* First Name */}
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[1]}</td> {/* Last Name */}
//                 {rowData.slice(2).map((cellData, cellIndex) => (
//                   <td key={cellIndex} style={{ border: '1px solid black', padding: '8px' }}>{cellData}</td>
//                 ))}
//                 <td style={{ border: '1px solid black', padding: '8px' }}>
//                   <button onClick={() => handleButtonClick(rowIndex)} className='btn'>Click Me</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {displayData()}
//     </div>
//   );
// };

// export default DataFetcher;
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const DataFetcher = () => {
  //After fetching the data, the setData function stores the entire data array
  // (which includes all rows and columns). It acts as the original, unaltered dataset, 
  //so you can refer back to it when needed
  const [data, setData] = useState([]);
  //sortedData is a modified version of data that excludes unwanted rows (e.g., the first row might be excluded for display purposes) 
  //and is affected by the sorting functionality. 
  //When the user clicks to sort the table, setSortedData updates the table rows without altering the original data.
  const [sortedData, setSortedData] = useState([]);
  //When the user clicks on a sortable column header (e.g., "Attendance Score"), 
  //setSortConfig is used to store the column being sorted (key) and the direction of sorting (asc or desc). 
  //This helps control the sorting behavior for the table.
  //key: null means that no column is sorted initially when the component first renders.
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const rawData = await response.json();//Parse JSON response
        const cleanedData = rawData.map(row => row.slice(0, 6)); //include only 6 columns// Remove unwanted columns
        const slicedData = cleanedData.slice(1); // Skip the first row for display
        setData(cleanedData); // Store the full cleaned data
        setSortedData(slicedData); // Display data excluding the first row
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Handle opening a URL in a new tab (action column button)
  const handleViewButtonClick = (url) => {
    window.open(url, '_blank');// Open the given URL in a new tab
  };
 // Function to sort the data by a specific column (only column 4 is sortable)
  const sortData = (key) => {
    if (key !== 4) {// Only sort if the key is column 4 (Attendance Score)
      return;
    }

    //If the current sortConfig.key (the last sorted column) is the same as the current key (column 4), 
    //and the current sortConfig.direction is 'asc', it will change the direction to 'desc'.

    //The sort function compares two items a and b, which represent two rows of the data.
    const direction = (sortConfig.key === key && sortConfig.direction === 'asc') ? 'desc' : 'asc';
    //parseFloat(a[key]) || 0 and parseFloat(b[key]) || 0:

//a[key] and b[key] extract the values from column 4 (Attendance Score) for the rows a and b.
//parseFloat converts these values to numbers (in case they are stored as strings).
//If the value is invalid or empty (NaN), the || 0 ensures that it defaults to 0.
    const sorted = [...sortedData].sort((a, b) => {
      const numA = parseFloat(a[key]) || 0;
      const numB = parseFloat(b[key]) || 0;
//If numA (Attendance Score of row a) is less than numB (Attendance Score of row b), return -1 for ascending order 
//or 1 for descending order, depending on the direction.
//If numA is greater than numB, return 1 for ascending order or -1 for descending order.
//If the values are equal, return 0, which keeps their original relative order.

      if (numA < numB) return direction === 'asc' ? -1 : 1;
      if (numA > numB) return direction === 'asc' ? 1 : -1;
      return 0;
    });
//After sorting, update the sortConfig state with the current sorting column (key) and the sorting direction (direction).
    setSortConfig({ key, direction });
//Update the sortedData state with the newly sorted data.
//React will then re-render the table to display the data in the new order.    
    setSortedData(sorted);
  };

  const downloadExcel = () => {
   // const headers = ["First Name", "Last Name", "Roll No", "Reg. ID", "Attendance Score", "Action"];
    const dataWithHeaders = [...data];

    const ws = XLSX.utils.aoa_to_sheet(dataWithHeaders);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, 'data.xlsx');
  };

  const displayData = () => {
    return (
      <div>
        <button onClick={downloadExcel} style={{ marginTop: '80px' }} className='btn'>
          Download as Excel
        </button>
        <table style={{ borderCollapse: 'collapse', marginTop: '50px', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>First Name</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Last Name</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Roll No</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Reg. ID</th>
              <th
                onClick={() => sortData(4)}
                style={{ border: '1px solid black', padding: '8px', textAlign: 'left', cursor: 'pointer' }}
              >
                Attendance Score {sortConfig.key === 4 ? (sortConfig.direction === 'asc' ? '🔽' : '🔼') : ''}
              </th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((rowData, rowIndex) => (
              <tr key={rowIndex} style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[0]}</td> {/* First Name */}
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[1]}</td> {/* Last Name */}
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[2]}</td> {/* Roll No */}
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[3]}</td> {/* Reg. ID */}
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[4]}</td> {/* Club Score */}
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => handleViewButtonClick(rowData[5])} className='btn'>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <div>{displayData()}</div>;
};

export default DataFetcher;
