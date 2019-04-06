	
<?php

// the message



// print_r($_POST);exit;

$msg = '';
// $msg .= "Email : ".$_POST['email']."\n";
$msg .= "Telephone : ".$_POST['telephone']."\n";
$msg .= "Comment : ".$_POST['comment']."\n";


// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
if(mail("example@example.com","User Inquiry",$msg))
{
     echo "<script type='text/javascript'>alert('Email send successfully');</script>";
     
     echo "<script type='text/javascript'>window.location = 'http://gisp.com.pk/index.html'</script>";
     
}  
else
{
     echo "<script type='text/javascript'>alert('Email send successfully');</script>";
     echo "<script type='text/javascript'>window.location = 'http://gisp.com.pk/index.html'</script>";
}


 ?>
 