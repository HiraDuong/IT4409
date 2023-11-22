<html><head><title> Order Product 2 </title> </head>
<body>
<form action="order3.php" method="post">
<?php $sample_hidden = $_POST["sample_hidden"];
$product = $_POST["product"]; $quantity = $_POST["quantity"];
print "<p class='highlight'>";
print "Hidden value=$sample_hidden </p><br>";
print "You selected product=$product and quantity=$quantity";