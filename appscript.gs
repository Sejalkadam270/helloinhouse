//--------------Attendance---------------
function calculateAverages() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1');
  var resultSheet = ss.getSheetByName('result');
  
  // Define headers
  var headers = ['Attendance Score'];
  //getRange(row, column, numRows, numColumns),
  resultSheet.getRange(1, 6, 1, headers.length).setValues([headers]);
  
  var data = sheet.getDataRange().getValues(); // Get all data from the sheet
  var result = [];
  
  for (var i = 1; i < data.length; i++) { // Start from 1 to skip the header row
    var kValue = data[i][10]; // Column K (index 10, since index is 0-based)
    
    var avg = 0;
    if (kValue == 'no') {
      // Calculate average for columns L to Q (indices 11 to 16)
      var sum = 0;
      var count = 0;
      for (var j = 11; j <= 16; j++) {
        if (data[i][j] !== '') {
          sum += parseFloat(data[i][j]);
          count++;
        }
      }
      avg = count > 0 ? sum / count : 0;
    } else if (kValue == 'yes') {
      // Calculate average for columns N to Q (indices 13 to 16)
      var sum = 0;
      var count = 0;
      for (var j = 13; j <= 16; j++) {
        if (data[i][j] !== '') {
          sum += parseFloat(data[i][j]);
          count++;
        }
      }
      avg = count > 0 ? sum / count : 0;
    }
    
    // Divide the average by 10
    avg = avg / 10;
    
    // Store result in 'result' sheet, Column F (index 5)
    result.push([avg]);
  }
  
  resultSheet.getRange(2, 6, result.length, 1).setValues(result); // Column F is index 6, starting from row 2
}

//------------Academics----------------
function calculateAveragesForR() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1');
  var resultSheet = ss.getSheetByName('result');
  
  // Define headers
  var headers = ['Academics Score'];
  resultSheet.getRange(1, 7, 1, headers.length).setValues([headers]);
  
  var data = sheet.getDataRange().getValues(); // Get all data from the sheet
  var result = [];
  
  for (var i = 1; i < data.length; i++) { // Start from 1 to skip the header row
    var rValue = data[i][17]; // Column R (index 17, since index is 0-based)
    
    var avg = 0;
    if (rValue == 'No') {
      // Calculate average for columns S to Y (indices 18 to 24)
      var sum = 0;
      var count = 0;
      for (var j = 18; j <= 24; j++) {
        var cellValue = data[i][j];
        if (cellValue !== '' && !isNaN(cellValue)) {
          sum += parseFloat(cellValue);
          count++;
        }
      }
      avg = count > 0 ? sum / count : 0;
    } else if (rValue == 'Yes') {
      // Calculate average for columns U to Y (indices 20 to 24)
      var sum = 0;
      var count = 0;
      for (var j = 20; j <= 24; j++) {
        var cellValue = data[i][j];
        if (cellValue !== '' && !isNaN(cellValue)) {
          sum += parseFloat(cellValue);
          count++;
        }
      }
      avg = count > 0 ? sum / count : 0;
    }
    
    // Debug logging
    Logger.log('Row: ' + (i+1) + ', R Value: ' + rValue + ', Average: ' + avg);
    
    // Store result in 'result' sheet, Column G (index 6)
    result.push([avg]);
  }
  
  resultSheet.getRange(2, 7, result.length, 1).setValues(result); // Column G is index 7, starting from row 2
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Calculate Averages for R', 'calculateAveragesForR')
      .addToUi();
}

//---------------Higher Studies Exam----------
function calculatePointsExam() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var examType = dataSheet.getRange("AB" + i).getValue();
    var percentageValue = dataSheet.getRange("AC" + i).getValue().toString().split("/")[0]; // Extract the value before "/"
    var percentage = parseInt(percentageValue, 10); // Parse the extracted value to an integer
    var points;
    targetSheet.getRange("H1").setValue("Higher Studies Exam Score");
    targetSheet.getRange("I1").setValue("Exam Title");
    
    // Determine points based on exam type and percentage
    if (examType === "GATE") {
      // Determine points for GATE exam
      if (percentage >= 90 && percentage <= 100) {
        points = 9;
      } else if (percentage >= 80 && percentage <= 90) {
        points = 8;
      } else if (percentage >= 70 && percentage <= 80) {
        points = 7;
      } else if (percentage > 60 && percentage <= 70) {
        points = 6;
      } else {
        points = 0; // No points if percentage doesn't meet any criteria
      }
    } else if (examType === "GRE") {
      // Determine points for GRE exam
      if (percentage >= 320 && percentage <= 340) {
        points = 10;
      } else if (percentage >= 280 && percentage < 320) {
        points = 8;
      } else if (percentage >= 250 && percentage < 280) {
        points = 7;
      } else {
        points = 0; // No points if percentage doesn't meet any criteria
      }
    } else if (examType === "GMAT") {
      // Determine points for GMAT exam
      if (percentage >= 750 && percentage <=800) {
        points = 10;
      } else if (percentage >= 600 && percentage < 750) {
        points = 9;
      } else if (percentage >= 500 && percentage < 600) {
        points = 8;
      } else if (percentage >= 400 && percentage < 450) {
        points = 7;
      } else {
        points = 0; // No points if percentage doesn't meet any criteria
      }
    } else if (examType === "CAT") {
      // Determine points for CAT exam
      if (percentage >= 98 && percentage <= 100) {
        points = 10;
      } else if (percentage >= 96 && percentage <= 98) {
        points = 9;
      } else if (percentage >= 94 && percentage <= 96) {
        points = 8;
      } else if (percentage >= 92 && percentage <= 94) {
        points = 7;
      } else if (percentage >= 90 && percentage <= 92) {
        points = 6;
      } else if (percentage >= 85 && percentage <= 90) {
        points = 2;
      } else {
        points = 0; // No points if percentage doesn't meet any criteria
      }
    } else {
      points = 0; // No points if exam type is not recognized
    }
    
    // Set the points value to column J in target sheet
    targetSheet.getRange("H" + i).setValue(points);
    
    // Set the exam name to column K in target sheet
    targetSheet.getRange("I" + i).setValue(examType);
  }
}

//-------------placement----------------
function calculatePoints1Placed() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var valueAD = dataSheet.getRange("AF" + i).getValue();
    var points;
    
    // Extract the numerical part before the space character, if present
    var numericValue;
    if (typeof valueAD === 'string' && valueAD.includes(' ')) {
      numericValue = parseFloat(valueAD.split(' ')[0]);
    } else {
      numericValue = parseFloat(valueAD);
    }
    
    // Round down float values to the nearest integer
    numericValue = Math.floor(numericValue);
    
    // Determine points based on the extracted numerical value
    if (numericValue >= 6 && numericValue < 7.5) {
      points = 6;
    } else if (numericValue >= 4 && numericValue < 6) {
      points = 5;
    } else if (numericValue >= 7.5 && numericValue <= 8) {
      points = 7.5;
    } else if (numericValue >= 8 && numericValue <= 10) {
      points = 8;
    } else if (numericValue >= 11 && numericValue <= 15) {
      points = 8.5;
    } else if (numericValue >= 15 && numericValue <= 20) {
      points = 9;
    } else if (numericValue >= 20 && numericValue <= 30) {
      points = 9.5;
    } else if (numericValue >= 30) {
      points = 10;
    } else {
      points = 0; // No points if value doesn't meet any criteria
    }
    
    // Set the points value to column L in the target sheet
    targetSheet.getRange("J" + i).setValue(points);
    targetSheet.getRange("J1").setValue("Placement Score");
  } 
}
//-----------------Publication-----------
function assignPointsBasedOnColumns() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column K
  targetSheet.getRange("K1").setValue("Publication Score");
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var points = 0;
    
    // Check each column and assign points accordingly
    var amValue = dataSheet.getRange("AM" + i).getValue();
    var anValue = dataSheet.getRange("AN" + i).getValue();
    var aoValue = dataSheet.getRange("AO" + i).getValue();
    var apValue = dataSheet.getRange("AP" + i).getValue();
    var aqValue = dataSheet.getRange("AQ" + i).getValue();
    var arValue = dataSheet.getRange("AR" + i).getValue();
    var asValue = dataSheet.getRange("AS" + i).getValue();
    var atValue = dataSheet.getRange("AT" + i).getValue();
    var auValue = dataSheet.getRange("AU" + i).getValue();
    
    if (amValue === 'on') points += 5;
    if (anValue === 'on') points += 5;
    if (aoValue === 'on') points += 4;
    if (apValue === 'on') points += 5;
    if (aqValue === 'on') points += 3;
    if (arValue === 'on') points += 3;
    if (asValue === 'on') points += 2;
    if (atValue === 'on') points += 0;
    if (auValue === 'on') points += 1;
    
    // Normalize points to be out of 10
    var maxPoints = 28; // Maximum possible points based on the values assigned
    var normalizedPoints = (points / maxPoints) * 10;
    
    // Set the normalized points value to column K in the target sheet
    targetSheet.getRange("K" + i).setValue(normalizedPoints);
  } 
}

//------------hackathon------------
function calculatePointsHackthon() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  var rangeAN = dataSheet.getRange("AX2:AX" + lastRow);
  var rangeAO = dataSheet.getRange("AY2:AY" + lastRow);
  var rangeG = targetSheet.getRange("L2:L" + lastRow);
  var valuesAN = rangeAN.getValues();
  var valuesAO = rangeAO.getValues();
  var points = [];

  for (var i = 0; i < valuesAN.length; i++) {
    var pointsToAdd = 0;
    if (valuesAN[i][0] === "Inter-National") {
      if (valuesAO[i][0] === "1st Rank") {
        pointsToAdd = 10;
      } else if (valuesAO[i][0] === "2nd Rank") {
        pointsToAdd = 9;
      } else if (valuesAO[i][0] === "3rd Rank") {
        pointsToAdd = 8;
      }
      else{
         pointsToAdd = 4;
      }
    } else if (valuesAN[i][0] === "National") {
      if (valuesAO[i][0] === "1st Rank") {
        pointsToAdd = 9;
      } else if (valuesAO[i][0] === "2nd Rank") {
        pointsToAdd = 8;
      } else if (valuesAO[i][0] === "3rd Rank") {
        pointsToAdd = 7;
      }else{
       pointsToAdd = 3;
      }
    }
    points.push([pointsToAdd]);
  }

  rangeG.setValues(points);

  var headerCell = targetSheet.getRange("L1");
  headerCell.setValue("Hackathon Score"); 
}
//-------------patent----------------
function assignPointsBasedOnAJ() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column M
  targetSheet.getRange("M1").setValue("Patent Score");
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var ajValue = dataSheet.getRange("AJ" + i).getValue();
    var points = 0;
    
    // Assign points based on AJ value
    if (ajValue == 1) {
      points = 9;
    } else if (ajValue > 1) {
      points = 10;
    }
    
    // Set the points value to column M in the target sheet
    targetSheet.getRange("M" + i).setValue(points);
  } 
}
//--------------Physically travelled hackthon------
function assignValuesBasedOnAZ() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add headers to columns N and O
  targetSheet.getRange("N1").setValue("Physically travelled hackthon");
  targetSheet.getRange("O1").setValue("Place");
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var azValue = dataSheet.getRange("AZ" + i).getValue();
    var baValue = dataSheet.getRange("BA" + i).getValue();
    var azResultValue = '';
    
    // Check the value in column AZ
    if (azValue === 'YES') {
      azResultValue = 'YES';
    }
    
    // Set the result values to columns N and O in the target sheet
    targetSheet.getRange("N" + i).setValue(azResultValue);
    targetSheet.getRange("O" + i).setValue(baValue);
  } 
}
//-------Club----------
function assignPointsBasedOnBC() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column P
  targetSheet.getRange("P1").setValue("Club Score");
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var bcValue = dataSheet.getRange("BC" + i).getValue();
    var points = 0;
    
    // Assign points based on BC value
    if (bcValue === 'Volunteer') {
      points = 5;
    } else if (bcValue === 'Main Head') {
      points = 10;
    } else if (bcValue === 'Team Head') {
      points = 8;
    } else {
      points = 0; // None of the above
    }
    
    // Set the points value to column P in the target sheet
    targetSheet.getRange("P" + i).setValue(points);
  } 
}

//--------------Sport------------

function assignPointsBasedOnBE_BF_BG() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column Q
  targetSheet.getRange("Q1").setValue("Sport Score");
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var beValue = dataSheet.getRange("BE" + i).getValue();
    var points = 0;
    
    if (beValue === 'YES') {
      var bfValue = dataSheet.getRange("BF" + i).getValue();
      var bgValue = dataSheet.getRange("BG" + i).getValue();
      
      // Assign points based on BF and BG values
      switch (bfValue) {
        case 'Inter-College':
          if (bgValue === '1st Rank') points = 7;
          else if (bgValue === '2nd Rank') points = 6;
          else if (bgValue === '3rd Rank') points = 5;
          else if (bgValue === 'Participated') points = 2;
          else if (bgValue === 'Not-Participated') points = 0;
          break;
        case 'District Level':
          if (bgValue === '1st Rank') points = 8;
          else if (bgValue === '2nd Rank') points = 7;
          else if (bgValue === '3rd Rank') points = 6;
          else if (bgValue === 'Participated') points = 3;
          else if (bgValue === 'Not-Participated') points = 0;
          break;
        case 'National Level':
          if (bgValue === '1st Rank') points = 9;
          else if (bgValue === '2nd Rank') points = 8;
          else if (bgValue === '3rd Rank') points = 7;
          else if (bgValue === 'Participated') points = 4;
          else if (bgValue === 'Not-Participated') points = 0;
          break;
        case 'International Level':
          if (bgValue === '1st Rank') points = 10;
          else if (bgValue === '2nd Rank') points = 9;
          else if (bgValue === '3rd Rank') points = 8;
          else if (bgValue === 'Participated') points = 5;
          else if (bgValue === 'Not-Participated') points = 0;
          break;
        case 'Other':
          if (bgValue === '1st Rank') points = 6;
          else if (bgValue === '2nd Rank') points = 5;
          else if (bgValue === '3rd Rank') points = 4;
          else if (bgValue === 'Participated') points = 1;
          else if (bgValue === 'Not-Participated') points = 0;
          break;
      }
    }
    
    // Set the points value to column Q in the target sheet
    targetSheet.getRange("Q" + i).setValue(points);
  } 
}
//---------------Intership---------------------

function assignValuesBasedOnSalaryRange() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dataSheet = ss.getSheetByName("Sheet1");
  const targetSheet = ss.getSheetByName("result");
  
  const dataRange = dataSheet.getRange("BK2:BK");
  const values = dataRange.getValues();
  targetSheet.getRange("R1").setValue("Intership Score");
  
  const salaryMap = {
    "50,000+": 10,
    "20k to 50k": 9,
    "5k to 20k": 6,
    "Unpaid": 5,
    "PICT(in-house)": 8
  };

  const headers = dataSheet.getRange(1, 1, 1, dataSheet.getLastColumn()).getValues()[0];
 

  for (let i = 0; i < values.length; i++) {
    const salaryRange = values[i][0];
    const points = salaryMap[salaryRange];
    targetSheet.getRange("R" + (i + 2)).setValue(points);
  }
}

//-------------Certificate--------------------- 
function assignPointsBasedOnBN() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column T
  targetSheet.getRange("S1").setValue("Certificate Score");
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    var bnValue = dataSheet.getRange("BN" + i).getValue();
    var points = 0;
    
    // Assign points based on BN value
    if (bnValue >= 1 && bnValue <= 9) {
      points = bnValue;
    } else if (bnValue >= 10) {
      points = 10;
    } else {
      points = 0; // If the value is not in the range, assign 0 points
    }
    
    // Set the points value to column T in the target sheet
    targetSheet.getRange("S" + i).setValue(points);
  } 
}
//-----------Certificate Count---------
function copyBNToT() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var targetSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column T
  targetSheet.getRange("T1").setValue("No Of Certificates");
  
  // Loop through each row and copy BN values to T
  for (var i = 2; i <= lastRow; i++) {
    var bnValue = dataSheet.getRange("BN" + i).getValue();
    targetSheet.getRange("T" + i).setValue(bnValue);
  }
}

//--------------------------Amcat-----------------
function calculateAverageBV_BW() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var resultSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Add header to column U
  resultSheet.getRange("U1").setValue("Amcat Score");
  
  // Loop through each row and calculate average
  for (var i = 2; i <= lastRow; i++) {
    var bvValue = dataSheet.getRange("BV" + i).getValue();
    var bwValue = dataSheet.getRange("BW" + i).getValue();
    
    var average = (bvValue + bwValue) / 2;
    
    // Set the average value to column U in the result sheet
    resultSheet.getRange("U" + i).setValue(average);
  }
}
//--------copy name,id,roll,no----------
function copyAtoE() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var resultSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Copy the range A1:E1 (header) and A2:E (data) from 'Sheet1' to 'result' sheet
  var rangeToCopy = dataSheet.getRange("A1:E" + lastRow);
  rangeToCopy.copyTo(resultSheet.getRange("A1:E" + lastRow));
}
//-----photo------
function copyHtoV() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Sheet1");
  var resultSheet = ss.getSheetByName("result");
  
  var lastRow = dataSheet.getLastRow();
  
  // Copy the range H1:H(lastRow) from 'Sheet1' to 'result' sheet's V1:V(lastRow)
  var rangeToCopy = dataSheet.getRange("H1:H" + lastRow);
  rangeToCopy.copyTo(resultSheet.getRange("V1:V" + lastRow));
}
//patent+publication

function sumKandMColumns() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var resultSheet = ss.getSheetByName("result");
  
  var lastRow = resultSheet.getLastRow();
  
  // Loop through each row
  for (var i = 2; i <= lastRow; i++) {
    // Get values from columns K and M
    var kValue = resultSheet.getRange("K" + i).getValue();
    var mValue = resultSheet.getRange("M" + i).getValue();
    
    // Ensure values are numbers; if not, convert them or default to 0
    kValue = parseFloat(kValue) || 0;
    mValue = parseFloat(mValue) || 0;
    
    // Calculate the sum
    var sum = kValue + mValue;
    
    // Store the sum back in column K
    resultSheet.getRange("K" + i).setValue(sum);
  } 
}

//--------overall rating------------------

function calculateAndSetValues1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("result");
  
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("A2:V" + lastRow); // Assuming data starts from row 2
  
  var values = range.getValues();
  var result = [];
  
  for (var i = 0; i < values.length; i++) {
    var F = values[i][5];  // Column F (Attendance)
    var G = values[i][6];  // Column G(Academics)
    var H = values[i][7];  // Column H//(exam)
    var J = values[i][9];  // Column J(placement)
     var K = values[i][10];  // Column K()(Publication)
    var L = values[i][11]; // Column L(Hackathon)
    var P = values[i][15]; // Column p(Club)
      var Q = values[i][16]; // Column Q(Sport)
       var R = values[i][17]; // Column R(Intership)
      var S = values[i][18]; // Column S(Certificate)
       var U = values[i][20]; // Column (Amcat)
  
    // Calculate average of columns J and L, then apply 15% multiplier
    var avgHandJ = ((H + J) / 2) * 0.15;

    var resultValue = (0.1 * F) + (0.2 * G) +avgHandJ+ (0.05 * K) + (0.1 * L) + (0.1 * P) + (0.05 * Q) + (0.05 * S)+(0.05*U)+(0.1*R);
    
    result.push([resultValue]);
  }
  
  // Set the calculated values in column R
  var outputRange = sheet.getRange("W2:W" + (result.length + 1));
   sheet.getRange("W1").setValue("Overall Rating");
  outputRange.setValues(result);
}

function doPost(e) {
  var action = e.parameter.action;
  if (action === 'runAllFunctions') {
    calculateAverages();
    calculateAveragesForR();
    calculatePointsExam();
    calculatePoints1Placed();
    assignPointsBasedOnColumns();
    calculatePointsHackthon();
    assignPointsBasedOnAJ();
    assignValuesBasedOnAZ();
    assignPointsBasedOnBC();
    assignPointsBasedOnBE_BF_BG();
    assignValuesBasedOnSalaryRange();
    assignPointsBasedOnBN();
    copyBNToT();
    copyAtoE();
    copyHtoV();
    sumKandMColumns() ;
    calculateAverageBV_BW();
    calculateAndSetValues1()
    return ContentService.createTextOutput("Functions executed successfully.");
  }
  return ContentService.createTextOutput("Invalid action.");
}




