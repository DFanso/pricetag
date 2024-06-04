function generatePriceTag() {
    const price = document.getElementById('price').value;
    const itemName = document.getElementById('itemName').value;
    
    // Generate barcode
    const barcodeValue = Math.random().toString().slice(2, 14);
    JsBarcode("#barcode", barcodeValue, {
        format: "CODE128",
        displayValue: false,
        width: 1,
        height: 30,
    
    });
    
    document.getElementById('priceValue').textContent = price;
    document.getElementById('itemNameValue').textContent = itemName;
    document.getElementById('barcodeValue').textContent = barcodeValue;
}

function printPriceTag() {
    printPriceTagPrint()
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

function printPriceTagPrint() {
    const priceTag = document.getElementById('priceTag');
    html2canvas(priceTag, {
        useCORS: true,
        scale: window.devicePixelRatio
    }).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const name = document.getElementById('itemNameValue').textContent;

        link.download = `${name} price-tag.png`;
        link.href = imgData;
        link.click();
    });
}