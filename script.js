function generatePriceTag() {
    const price = document.getElementById('price').value;
    const itemName = document.getElementById('itemName').value;
    
    // Generate barcode
    const barcodeValue = Math.random().toString().slice(2, 14);
    JsBarcode("#barcode", barcodeValue, {
        format: "CODE128",
        displayValue: false,
        width: 1.4,
        height: 40
    });
    
    document.getElementById('priceValue').textContent = price;
    document.getElementById('itemNameValue').textContent = itemName;
    document.getElementById('barcodeValue').textContent = barcodeValue;
}

function printPriceTag() {
    const priceTag = document.getElementById('priceTag');
    const printWindow = window.open('', '_blank', 'width=50,height=30');
    printWindow.document.write('<html><head><title>Print Price Tag</title>');
    printWindow.document.write('<link rel="stylesheet" href="styles.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(priceTag.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(function() {
        printWindow.print();
        printWindow.close();
    }, 100);
}