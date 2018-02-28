<?php 
$name = $_POST['userName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$forsend = "Имя: $name \ne-mail: $email \nТелефон: $phone \nСообщение: $text";
$anserw = $name . ", спасибо за заявку, мы свяжемся с Вами в ближайшее время.";
$array = ['userName' => $name, 'email' => $email, 'phone' => $phone, 'text' => $text, 'anserw' => $anserw, 'forsend' => $forsend];
//mail("sevwrestler@gmail.com","Заявка на тренировку", $name);
echo json_encode($array);
?>