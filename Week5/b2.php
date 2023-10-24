<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
</head>
<body>
    <h2>QR Code Generator</h2>
    <form method="post" action="">
        <div class="text" for="fullname">Họ và Tên:</div>
        <input type="text" name="fullname" required>
        <br>
        <div class="text" for="mssv">MSSV:</div>
        <input type="text" name="mssv" required>
        <br>
        <button type="submit" name="generate">Generate QR Code</button>
    </form>

    <style>
    .text{
        margin-bottom: 10px;
    }
    input{
        padding: 2px 0;
        margin-bottom: 5px;
    }
    button{
        margin-top: 10px;
        padding: 5px;
    }
</style>

    <?php
    if (isset($_POST['generate'])) {
       
        $fullname = $_POST['fullname'];
        $mssv = $_POST['mssv'];

  
        $qr_content = "Họ và tên: $fullname\nMSSV: $mssv";

        include 'phpqrcode/qrlib.php';

   
        $qr_filename = "qrcodes/qrcode.png";

        
        QRcode::png($qr_content, $qr_filename);

   
        echo '<br><img src="' . $qr_filename . '" alt="QR Code">';
    }
    ?>
</body>

</html>

