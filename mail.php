<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];

if (mail("TOP-MARKET-06@yandex.ru", "Заявка",  $name. ' оставил заявку, его телефон '.$phone, "From: test@top1market.ru \r\n") )
{
    header ('Location: ./thanks.html');  // перенаправление на нужную страницу
    exit();
} else
{
    echo "Error";
}
?>