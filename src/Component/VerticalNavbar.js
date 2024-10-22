// import React from 'react';
// import { Link } from 'react-router-dom';

// const VerticalNavbar = () => {
//   const clearSheet = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clear', {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Sheet cleared successfully');
//       } else {
//         alert('Failed to clear the sheet');
//       }
//     } catch (error) {
//       console.error('Error clearing sheet:', error);
//       alert('Error clearing sheet');
//     }
//   };

//   const undoClear = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/undo-clear', {
//         method: 'POST',
//       });

//       if (response.ok) {
//         alert('Data restored successfully');
//       } else {
//         alert('Failed to restore the data');
//       }
//     } catch (error) {
//       console.error('Error restoring data:', error);
//       alert('Error restoring data');
//     }
//   };

//   return (
//     <div className="vertical-navbar">
//       <ul>
//         <li>
//           <Link to="/page1">Attendance</Link>
//         </li>
//         <li>
//           <Link to="/page2">Academics</Link>
//         </li>
//         <li>
//           <Link to="/page3">Patent and Publication</Link>
//         </li>
//         <li>
//           <Link to="/page4">Hackathon</Link>
//         </li>
//         <li>
//           <Link to="/page5">Club</Link>
//         </li>
//         <li>
//           <Link to="/page6">Higher Studies Exam</Link>
//         </li>
//         <li>
//           <Link to="/page7">Placement</Link>
//         </li>
//         <li>
//           <Link to="/page8">Sport</Link>
//         </li>
//         <li>
//           <Link to="/page9">Internship</Link>
//         </li>
//         <li>
//           <Link to="/page10">Certificates</Link>
//         </li>
//         <li>
//           <Link to="/page11">Amcat Exam</Link>
//         </li>
//         <li>
//           <Link to="/page12">Overall Rating</Link>
//         </li>
//       </ul>
//       <button onClick={clearSheet} className='one '>Clear Sheet</button>
//       <button onClick={undoClear} className='one'>Undo Clear</button>
//     </div>
//   );
// };

// export default VerticalNavbar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const VerticalNavbar = () => {
//   const clearSheet = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clear', {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Sheet cleared successfully');
//       } else {
//         alert('Failed to clear the sheet');
//       }
//     } catch (error) {
//       console.error('Error clearing sheet:', error);
//       alert('Error clearing sheet');
//     }
//   };

//   const clearSheet1 = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clearsheet1', {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Sheet1 cleared successfully');
//       } else {
//         alert('Failed to clear the sheet');
//       }
//     } catch (error) {
//       console.error('Error clearing sheet:', error);
//       alert('Error clearing sheet');
//     }
//   };

//   const undoClear = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/undo-clear', {
//         method: 'POST',
//       });

//       if (response.ok) {
//         alert('Data restored successfully');
//       } else {
//         alert('Failed to restore the data');
//       }
//     } catch (error) {
//       console.error('Error restoring data:', error);
//       alert('Error restoring data');
//     }
//   };
//   const undoClearSheet1 = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/undo-clearsheet1', {
//         method: 'POST',
//       });

//       if (response.ok) {
//         alert('Data restored successfully');
//       } else {
//         alert('Failed to restore the data');
//       }
//     } catch (error) {
//       console.error('Error restoring data:', error);
//       alert('Error restoring data');
//     }
//   };

//   const generateData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/run-functions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const text = await response.text();
//         console.log(text); // Handle the response if needed
//         alert('Data generated successfully');
//       } else {
//         alert('Failed to generate data');
//       }
//     } catch (error) {
//       console.error('Error generating data:', error);
//       alert('Error generating data');
//     }
//   };

//   return (
//     <div className="vertical-navbar">
//       <ul>
//         <li>
//           <Link to="/page1">Attendance</Link>
//         </li>
//         <li>
//           <Link to="/page2">Academics</Link>
//         </li>
//         <li>
//           <Link to="/page3">Patent and Publication</Link>
//         </li>
//         <li>
//           <Link to="/page4">Hackathon</Link>
//         </li>
//         <li>
//           <Link to="/page5">Club</Link>
//         </li>
//         <li>
//           <Link to="/page6">Higher Studies Exam</Link>
//         </li>
//         <li>
//           <Link to="/page7">Placement</Link>
//         </li>
//         <li>
//           <Link to="/page8">Sport</Link>
//         </li>
//         <li>
//           <Link to="/page9">Internship</Link>
//         </li>
//         <li>
//           <Link to="/page10">Certificates</Link>
//         </li>
//         <li>
//           <Link to="/page11">Amcat Exam</Link>
//         </li>
//         <li>
//           <Link to="/page12">Overall Rating</Link>
//         </li>
//       </ul>
//       <button onClick={clearSheet} className='one'>Clear Sheet</button>
//       <button onClick={undoClear} className='one'>Undo Clear</button>
//       <button onClick={clearSheet1} className='one'>Clear Sheet1</button>
//       <button onClick={undoClearSheet1} className='one'>Undo Clear Sheet1</button>
//       <button onClick={generateData} className='one'>Generate</button>
//     </div>
//   );
// };

// export default VerticalNavbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {
  const [selectedAction, setSelectedAction] = useState('');

  const handleActionChange = async (event) => {
    const action = event.target.value;
    setSelectedAction(action);

    try {
      let response;
      switch (action) {
        case 'clearSheet':
          response = await fetch('http://localhost:3001/api/clear', { method: 'DELETE' });
          break;
        case 'undoClear':
          response = await fetch('http://localhost:3001/api/undo-clear', { method: 'POST' });
          break;
        case 'clearSheet1':
          response = await fetch('http://localhost:3001/api/clearsheet1', { method: 'DELETE' });
          break;
        case 'undoClearSheet1':
          response = await fetch('http://localhost:3001/api/undo-clearsheet1', { method: 'POST' });
          break;
        case 'generateData':
          response = await fetch('http://localhost:3001/run-functions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });
          break;
        case 'downloadSheet1':
          window.location.href = 'http://localhost:3001/api/download-sheet1';
          break;
        default:
          return;
      }

      if (response && response.ok) {
        alert(`${action.replace(/([A-Z])/g, ' $1')} executed successfully`);
      } 
    } catch (error) {
      console.error(`Error executing ${action}:`, error);
      alert(`Error executing ${action}`);
    }
  };

  return (
    <div className="vertical-navbar">
      <ul>
        <li><Link to="/page1">Attendance</Link></li>
        <li><Link to="/page2">Academics</Link></li>
        <li><Link to="/page3">Patent and Publication</Link></li>
        <li><Link to="/page4">Hackathon</Link></li>
        <li><Link to="/page5">Club</Link></li>
        <li><Link to="/page6">Higher Studies Exam</Link></li>
        <li><Link to="/page7">Placement</Link></li>
        <li><Link to="/page8">Sport</Link></li>
        <li><Link to="/page9">Internship</Link></li>
        <li><Link to="/page10">Certificates</Link></li>
        <li><Link to="/page11">Amcat Exam</Link></li>
        <li><Link to="/page12">Overall Rating</Link></li>
      </ul>
      <select value={selectedAction} onChange={handleActionChange}>
        <option value="">Select an action</option>
        <option value="clearSheet">Clear Result Sheet</option>
        <option value="undoClear">Undo Result Sheet</option>
        <option value="clearSheet1">Clear Main Sheet</option>
        <option value="undoClearSheet1">Undo Main Sheet</option>
        <option value="generateData">Generate Output</option>
        <option value="downloadSheet1">Download Main Sheet</option>
      </select>
    </div>
  );
};

export default VerticalNavbar;
