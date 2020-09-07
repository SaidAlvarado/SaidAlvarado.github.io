<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "your email address";
 
    $email_subject = "Your email subject line";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 

 
     
 
    $first_name = $_POST['first_name']; // required
 
    $last_name = $_POST['last_name']; // required
	
	$guest_name = $_POST['guest_name']; // required
	
	$number_of_guests = $_POST['Number_of_Guests']; // required
 
    $email_from = $_POST['email']; // required
 
    $telephone = $_POST['telephone']; // not required
	
	$will_attend = $_POST['will_you_attend']; // required
	
	$will_attend_hrc = $_POST['will_you_attend_hrc']; // required
	
	$additional_options = implode(' | ', $_POST['checkbox_group_1']); // required
 
    $comments = $_POST['comments']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
 
  }
 
  if(!preg_match($string_exp,$last_name)) {
 
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
 
  }
 
 if(!preg_match($string_exp,$guest_name)) {
 
    $error_message .= 'The Guest Name you entered does not appear to be valid.<br />';
 
  }
 
 if(strlen($number_of_guests) < 1) {
		$error_message .= 'The number of guests answer you entered do not appear to be valid.<br />';
	}
	
 if(count($will_attend) < 1) {
		$error_message .= 'The will you attend answer you entered do not appear to be valid.<br />';
	}
	
 if(count($will_attend_hrc) < 1) {
		$error_message .= 'The will you attend answer you entered do not appear to be valid.<br />';
	}	
 
 
  if(strlen($comments) < 2) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 

    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
	
	$email_message .= "Guest Name: ".clean_string($guest_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
	
	$email_message .= "Will Attend: ".clean_string($will_attend[0])."\r\n";
	
	$email_message .= "Will Attend HRC: ".clean_string($will_attend_hrc[0])."\r\n";
	
	$email_message .= 'Additional options selected: ' . $additional_options . "\r\n";
 
    $email_message .= "Comments: ".clean_string($comments)."\n";
	
	$email_message .= "Number of Guests: ".clean_string($number_of_guests)."\r\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers); 
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 <script language="javascript" type="text/javascript">
		alert('Thank you for the RSVP. We will contact you shortly.');
		window.location.href = "/";
		</script>

 
 
 
<?php
 
}
 
?>