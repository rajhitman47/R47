/**
 * ==========================================================================
 * GOOGLE APPS SCRIPT FOR ARMOUR47 ORDERS
 * ==========================================================================
 * 
 * Follow these steps to link your website order form to a Google Sheet:
 * 
 * STEP 1: Create a new Google Sheet (or open an existing one).
 * STEP 2: In the top menu, go to "Extensions" > "Apps Script".
 * STEP 3: Delete any default code in the editor and paste the code below.
 * STEP 4: Click the Save icon (floppy disk).
 * STEP 5: Click the "Deploy" button at the top right > select "New deployment".
 * STEP 6: Click the gear icon next to "Select type" and choose "Web app".
 * STEP 7: Configure the deployment settings:
 *         - Description: "Armour47 Order Form API"
 *         - Execute as: "Me" (your email)
 *         - Who has access: "Anyone" (crucial, so the website can submit data)
 * STEP 8: Click "Deploy".
 * STEP 9: Review Permissions (if prompted):
 *         - Click "Authorize access", choose your Google account.
 *         - Click "Advanced" > "Go to Untitled project (unsafe)" / "Go to Armour47 (unsafe)".
 *         - Click "Allow".
 * STEP 10: Copy the "Web app URL" provided in the deployment window.
 * STEP 11: Paste this URL in your "config.js" file inside the GOOGLE_SHEET_URL field:
 *          const CONFIG = { GOOGLE_SHEET_URL: "PASTE_THE_URL_HERE" };
 * 
 * That's it! Your website forms will now log directly to your Google Sheet!
 */

function doPost(e) {
  try {
    // Parse incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Open the Active Spreadsheet and sheet named "Orders"
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Orders");
    
    // Create sheet if it does not exist
    if (!sheet) {
      sheet = ss.insertSheet("Orders");
      // Set headers
      sheet.appendRow([
        "Order ID", 
        "Date", 
        "Product ID", 
        "Product Name", 
        "Unit Price", 
        "Size", 
        "Color", 
        "Quantity", 
        "Total Amount", 
        "Customer Name", 
        "Customer Email", 
        "Phone Number", 
        "Shipping Address"
      ]);
      // Format header row (bold, grey background)
      var headerRange = sheet.getRange(1, 1, 1, 13);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#e0e0e0");
      sheet.setFrozenRows(1);
    }
    
    // Append the row data
    sheet.appendRow([
      data.orderId,
      data.date,
      data.productId,
      data.productName,
      parseFloat(data.price),
      data.size,
      data.color,
      parseInt(data.quantity),
      parseFloat(data.totalAmount),
      data.customerName,
      data.customerEmail,
      data.customerPhone,
      data.customerAddress
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Order logged successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Armour47 API Web App active. Send a POST request with order data to log orders.")
    .setMimeType(ContentService.MimeType.TEXT);
}
