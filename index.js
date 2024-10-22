const express = require('express');// Import the Express framework to create the server.
const { google } = require('googleapis');// Import the Google APIs client library, specifically for Google Sheets API.
const cors = require('cors');// Import CORS (Cross-Origin Resource Sharing) middleware to allow requests from different domains.
const keys = require('./projectinhouse-8cbd7c5e70cc.json');
const bodyParser = require('body-parser');//// Import Body Parser middleware to handle URL-encoded and JSON request bodies.
const fetch = require('node-fetch'); // Make sure to install node-fetch
const xlsx = require('xlsx');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));// Parse URL-encoded data with extended option to handle complex objects.
app.use(bodyParser.json());


const auth = new google.auth.GoogleAuth({
  keyFile: './projectinhouse-8cbd7c5e70cc.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
}); // Specify the required scopes (access permissions) for Google Sheets.

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1wGHFXFZNaitE60V-5LCaKmYHI-rsC5YiMvH8XvJjxxw';
let backupData = null; // Temporary storage for cleared data
let sheetbackup = null;
app.get('/api/data', async (req, res) => {
  try {
    const authClient = await auth.getClient();//Get the authenticated client from GoogleAuth.
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'result!A:W', // Fetch columns A to S
    });

    const rows = response.data.values; // Extract the actual data (rows) from the Google Sheets response.
    if (rows.length) {
      const filteredData = rows.map(row => [
        row[0], // Column A  
        row[1], // Column B 
        row[2], // Column C
        row[4], // Column D
        row[5], // Column E
        row[21], // Column V
      ]);
      res.status(200).json(filteredData);
    } else {
      res.status(404).send('No data found.');   
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});

// app.get('/api/data1', async (req, res) => {
//     try {
//       const response = await sheets.spreadsheets.values.get({
//         spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
//         range: 'Final!A:F', // Fetch columns A to F
//       });
//       const rows = response.data.values;
//       const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[5]]); // Extract columns A, B, C, D, and F
//       res.status(200).json(filteredData);
//     } catch (error) {
//       console.error('Error fetching data from Google Sheets:', error);
//       res.status(500).send('Error fetching data from Google Sheets');
//     }
//   });

app.get('/api/data1', async (req, res) => {
  try {
    const authClient = await auth.getClient();
    //By setting the authentication client globally, it simplifies the process of making API requests. You don’t need to pass the authentication credentials in every individual request.
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'result!A:W', // Fetch columns A to S
    });

    const rows = response.data.values;
    if (rows.length) {
      const filteredData = rows.map(row => [
        row[0], // Column A
        row[1], // Column B
        row[2], // Column C
        row[4], // Column D
        row[6], // Column F
        row[21], // Column S
      ]);
      res.status(200).json(filteredData);
    } else {
      res.status(404).send('No data found.');
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});
  
app.get('/api/data2', async (req, res) => {
  try {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'result!A:W', // Fetch columns A to S
    });

    const rows = response.data.values;
    if (rows.length) {
      const filteredData = rows.map(row => [
        row[0], // Column A
        row[1], // Column B
        row[2], // Column C
        row[4], // Column D
        row[10], // Column E
        row[12], // Column 
        row[21], // Column v
      ]);
      res.status(200).json(filteredData);
    } else {
      res.status(404).send('No data found.');
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});

  
  // app.get('/api/data3', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:H', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[7]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

   
app.get('/api/data3', async (req, res) => {
  try {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'result!A:W', // Fetch columns A to S
    });

    const rows = response.data.values;
    if (rows.length) {
      const filteredData = rows.map(row => [
        row[0], // Column A
        row[1], // Column B
        row[2], // Column C
        row[4], // Column D
        row[11], 
        row[13],
        row[14],
        row[21], 
      ]);
      res.status(200).json(filteredData);
    } else {
      res.status(404).send('No data found.');
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});
  // app.get('/api/data4', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:I', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[8]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

    
app.get('/api/data4', async (req, res) => {
  try {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'result!A:W', // Fetch columns A to S
    });

    const rows = response.data.values;
    if (rows.length) {
      const filteredData = rows.map(row => [
        row[0], // Column A
        row[1], // Column B
        row[2], // Column C
        row[4], // Column D
        row[15], // Column E
        row[21], // Column S
      ]);
      res.status(200).json(filteredData);
    } else {
      res.status(404).send('No data found.');
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});

  // app.get('/api/data5', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:J', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[9]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

app.get('/api/data5', async (req, res) => {
  try {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'result!A:W', // Fetch columns A to S
    });

    const rows = response.data.values;
    if (rows.length) {
      const filteredData = rows.map(row => [
        row[0], // Column A
        row[1], // Column B
        row[2], // Column C
        row[4], // Column D
        row[7],
        row[8], 
        row[21], // Column S
      ]);
      res.status(200).json(filteredData);
    } else {
      res.status(404).send('No data found.');
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});
  // app.get('/api/data6', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:K', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[10]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  app.get('/api/data7', async (req, res) => {
    try {
      const authClient = await auth.getClient();
      google.options({ auth: authClient });
  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'result!A:W', // Fetch columns A to S
      });
  
      const rows = response.data.values;
      if (rows.length) {
        const filteredData = rows.map(row => [
          row[0], // Column A
          row[1], // Column B
          row[2], // Column C
          row[4], // Column D
          row[9], // Column E
          row[21], // Column S
        ]);
        res.status(200).json(filteredData);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });
  // app.get('/api/data8', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:L', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[11]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  
  app.get('/api/data8', async (req, res) => {
    try {
      const authClient = await auth.getClient();
      google.options({ auth: authClient });
  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'result!A:W', // Fetch columns A to S
      });
  
      const rows = response.data.values;
      if (rows.length) {
        const filteredData = rows.map(row => [
          row[0], // Column A
          row[1], // Column B
          row[2], // Column C
          row[4], // Column D
          row[16], // Column E
          row[21], // Column S
        ]);
        res.status(200).json(filteredData);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });
  
  // app.get('/api/data8', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:M', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[12]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  
  // app.get('/api/data9', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:N', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[13]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });


   
  app.get('/api/data9', async (req, res) => {
    try {
      const authClient = await auth.getClient();
      google.options({ auth: authClient });
  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'result!A:W', // Fetch columns A to S
      });
  
      const rows = response.data.values;
      if (rows.length) {
        const filteredData = rows.map(row => [
          row[0], // Column A
          row[1], // Column B
          row[2], // Column C
          row[4], // Column D
          row[17], // Column E
          row[21], // Column S
        ]);
        res.status(200).json(filteredData);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  // app.get('/api/data13', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:O', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[14]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });


  
   
  app.get('/api/data13', async (req, res) => {
    try {
      const authClient = await auth.getClient();
      google.options({ auth: authClient });
  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'result!A:W', // Fetch columns A to S
      });
  
      const rows = response.data.values;
      if (rows.length) {
        const filteredData = rows.map(row => [
          row[0], // Column A
          row[1], // Column B
          row[2], // Column C
          row[4], // Column D
          row[18], // Column E
          row[21], // Column S
        ]);
        res.status(200).json(filteredData);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });
  
  // app.get('/api/data12', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:P', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[15]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  
   
  app.get('/api/data12', async (req, res) => {
    try {
      const authClient = await auth.getClient();
      google.options({ auth: authClient });
  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'result!A:W', // Fetch columns A to S
      });
  
      const rows = response.data.values;
      if (rows.length) {
        const filteredData = rows.map(row => [
          row[0], // Column A
          row[1], // Column B
          row[2], // Column C
          row[4], // Column D
          row[20], // Column E
          row[21], // Column S
        ]);
        res.status(200).json(filteredData);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

   
  app.get('/api/data11', async (req, res) => {
    try {
      const authClient = await auth.getClient();
      google.options({ auth: authClient });
  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'result!A:W', // Fetch columns A to S
      });
  
      const rows = response.data.values;
      if (rows.length) {
        const filteredData = rows.map(row => [
          row[0], // Column A
          row[1], // Column B
          row[2], // Column C
          row[4], // Column D
          row[22], // Column E
          row[21], // Column S
        ]);
        res.status(200).json(filteredData);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });


    
  // app.get('/api/data11', async (req, res) => {
  //   try {
  //     const authClient = await auth.getClient();
  //     google.options({ auth: authClient });
  
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: spreadsheetId,
  //       range: 'Final!A:S', // Fetch columns A to S
  //     });
  
  //     const rows = response.data.values;
  //     if (rows.length) {
  //       const filteredData = rows.map(row => [
  //         row[0], // Column A
  //         row[1], // Column B
  //         row[2], // Column C
  //         row[3], // Column D
  //         row[15], // Column E
  //         row[18], // Column S
  //       ]);
  //       res.status(200).json(filteredData);
  //     } else {
  //       res.status(404).send('No data found.');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  
  // app.get('/api/data11', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:Q', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[16]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  // app.get('/api/data10', async (req, res) => {
  //   try {
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
  //       range: 'Final!A:R', // Fetch columns A to F
  //     });
  //     const rows = response.data.values;
  //     const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[17]]); // Extract columns A, B, C, D, and F
  //     res.status(200).json(filteredData);
  //   } catch (error) {
  //     console.error('Error fetching data from Google Sheets:', error);
  //     res.status(500).send('Error fetching data from Google Sheets');
  //   }
  // });

  // Endpoint to delete data from Google Sheets
 
app.delete('/api/clear', async (req, res) => {
  try {
    // Get current data before clearing
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'result!A:Z',
    });
    backupData = response.data.values;// // Store the fetched data for backup

    console.log('Backup data:', backupData); // Log backup data

    // Clear the sheet
     // Clear the sheet by removing all values
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: 'result!A:Z',
    });

    res.status(200).send('Sheet cleared successfully');
  } catch (error) {
    console.error('Error clearing sheet:', error);
    res.status(500).send('Error clearing sheet');
  }
});

 
app.delete('/api/clearsheet1', async (req, res) => {
  try {
    // Get current data before clearing
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:Z',
    });
    sheetbackup = response.data.values;

    console.log('Backup data:', sheetbackup); // Log backup data

    // Clear the sheet
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: 'Sheet1!A:Z',
    });

    res.status(200).send('Sheet cleared successfully');
  } catch (error) {
    console.error('Error clearing sheet:', error);
    res.status(500).send('Error clearing sheet');
  }
});

app.post('/api/undo-clear', async (req, res) => {
  try {
    if (backupData) {
      console.log('Restoring data:', backupData); // Log data being restored

      // Restore the backup data
      //'RAW' is used to ensure the data from backupData is written exactly as is, without any modification.
      //This is required to specify what data you want to update in the spreadsheet. Here, values: backupData means the data that was backed up earlier will be restored to the specified range.
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'result!A1',
        valueInputOption: 'RAW',
        requestBody: {
          values: backupData,
        },
      });
      backupData = null; // Clear the backup after restoring
      res.status(200).send('Data restored successfully');
    } else {
      res.status(400).send('No backup data to restore');
    }
  } catch (error) {
    console.error('Error restoring sheet:', error);
    res.status(500).send('Error restoring sheet');
  }
});


app.post('/api/undo-clearsheet1', async (req, res) => {
  try {
    if (sheetbackup) {
      console.log('Restoring data:', sheetbackup); // Log data being restored

      // Restore the backup data
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        requestBody: {    
          values: sheetbackup,
        },
      });
    sheetbackup = null; // Clear the backup after restoring
      res.status(200).send('Data Sheet1 restored successfully');
    } else {
      res.status(400).send('No backup data to restore');
    }
  } catch (error) {
    console.error('Error restoring sheet:', error);
    res.status(500).send('Error restoring sheet');
  }
});

//new URLSearchParams({...}) creates a URL-encoded string,
// which in this case specifies the action to be performed by the Google Apps Script.   
//username=john+doe&email=john%40example.com&age=25 application/x-www-form-urlencoded
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvT3zk81_cKvJfjwDomXHCy-IUKCfk4dF6yvkDY2ICHheqj8_DcCV5CPNbIrKw60x2Yg/exec';
app.post('/run-functions', async (req, res) => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        action: 'runAllFunctions',
      }),
    });
    
    const result = await response.text();
    res.send(result);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});


app.get('/api/download-sheet1', async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './projectinhouse-8cbd7c5e70cc.json', // Replace with the path to your credentials file
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    const spreadsheetId = '1wGHFXFZNaitE60V-5LCaKmYHI-rsC5YiMvH8XvJjxxw';
    const range = 'Sheet1!A1:BY'; // Corrected range notation

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (rows && rows.length) {
      // Create a new workbook and add the data
      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.aoa_to_sheet(rows);//Converts the array of arrays (rows) into a worksheet.
//      A workbook is essentially the entire Excel file, which can contain multiple sheets. 
//ws: This represents the worksheet object. A worksheet is a single sheet within the workbook.
xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

      // Write the workbook to a buffer
      //Creates a buffer containing the Excel file data.
      const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
//This header specifies how the content should be handled by the browser.
      res.setHeader('Content-Disposition', 'attachment; filename=Sheet1.xlsx');
     // Specifies that the content being sent is an Excel spreadsheet in the OpenXML format, which is used by modern versions of Microsoft Excel
      res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.send(buf);
    } else {
      res.status(404).send('No data found.');
    }
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    res.status(500).send('Error fetching sheet data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
