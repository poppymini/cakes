
<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $name=$_GET['name'];
  echo $name;
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name1=$_POST['name'];  
  echo $name1;
}