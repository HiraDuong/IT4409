
<!DOCTYPE html>
<html>
<head>
    <title>Thông tin người</title>
</head>
<body>
    <h1>Bài 1</h1>
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <div class="question" for="name1">Họ và tên người thứ nhất:</div>
    <input type="text" name="name1" required><br>

    <div class="question" for="dob1">Ngày sinh người thứ nhất (YYYY-MM-DD):</div>
    <input type="text" name="dob1" required pattern="\d{4}-\d{2}-\d{2}"><br>

    <div class="question" for="name2">Họ và tên người thứ hai:</div>
    <input type="text" name="name2" required><br>

    <div class="question" for="dob2">Ngày sinh người thứ hai (YYYY-MM-DD):</div>
    <input type="text" name="dob2" required pattern="\d{4}-\d{2}-\d{2}"><br>

    <input id= "submit-btn" type="submit" value="Kiểm tra">
</form>

</body>
</html>

<style>
.question{
    display: inline-block;
    width: 300px;
    margin-bottom: 10px;
    padding:5px 0 ;
}
#submit-btn{
    padding:10px;
    
}
</style>




<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name1 = $_POST['name1'];
    $dob1 = new DateTime($_POST['dob1']);

    $name2 = $_POST['name2'];
    $dob2 = new DateTime($_POST['dob2']);


    $today = new DateTime();
    $age1 = $today->diff($dob1)->y;
    $age2 = $today->diff($dob2)->y;

   
    $diffDays = $dob1->diff($dob2)->days;

    echo "<h2>Kết quả:</h2>";
    echo "<p>$name1 có tuổi là $age1 tuổi.</p>";
    echo "<p>$name2 có tuổi là $age2 tuổi.</p>";
    echo "<p>Số ngày chênh lệch giữa $name1 và $name2 là $diffDays ngày.</p>";
}
?>


