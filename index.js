const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const keys = require('./credentials.json');

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M';
let backupData = null; // Temporary storage for cleared data

app.get('/api/data', async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
      range: 'Final!A:E',
    });
    const rows = response.data.values;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).send('Error fetching data from Google Sheets');
  }
});


app.get('/api/data1', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:F', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[5]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });


  app.get('/api/data2', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:G', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[6]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  
  app.get('/api/data3', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:H', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[7]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });
  app.get('/api/data4', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:I', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[8]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  app.get('/api/data5', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:J', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[9]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });


  
  app.get('/api/data6', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:K', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[10]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  
  app.get('/api/data7', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:L', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[11]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  
  app.get('/api/data8', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:M', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[12]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  
  app.get('/api/data9', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:N', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[13]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  app.get('/api/data13', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:O', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[14]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  
  app.get('/api/data12', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:P', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[15]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  
  app.get('/api/data11', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:Q', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[16]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  app.get('/api/data10', async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1oPUQVdksJALGQHDsrdMhPVBRURZvhO9SDDncR2Yfg2M',
        range: 'Final!A:R', // Fetch columns A to F
      });
      const rows = response.data.values;
      const filteredData = rows.map(row => [row[0], row[1], row[2], row[3], row[17]]); // Extract columns A, B, C, D, and F
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      res.status(500).send('Error fetching data from Google Sheets');
    }
  });

  // Endpoint to delete data from Google Sheets
 
app.delete('/api/clear', async (req, res) => {
  try {
    // Get current data before clearing
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Final!A:Z',
    });
    backupData = response.data.values;

    console.log('Backup data:', backupData); // Log backup data

    // Clear the sheet
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: 'Final!A:Z',
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
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Final!A1',
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

   
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
