<?php 
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $selectOption = $_POST['klapbar'];
    $selectOptionKrus = $_POST['krus'];
    $selectOptionHaner = $_POST['haner'];
    $selectOptionSdate = $_POST['startdate'];
    $selectOptionEdate = $_POST['enddate'];
    $subject = $_POST['subject'];

    $email_from = 'kmfestudlejning@hotmail.com';
    $email_subject = "Ny besked: KMfestudlejning.dk";
    $email_body = "Fra: $firstname\n". 
                  "Efternavn: $lastname\n".
                  "Email: $email\n".
                  "Telefonnr.: $phone\n".
                  "Start dato: $selectOptionSdate\n".
                  "Slut dato: $selectOptionEdate\n".
                  "Klapbar: $selectOption\n".
                  "Krus: $selectOptionKrus\n".
                  "Haner: $selectOptionHaner\n".
                  "Besked: $subject\n";

                  $to = "thomaswpedersen@hotmail.com";
                  $headers = "From: $email_from \r\n";
                  $headers .= "Reply-To: $visitor_email \r\n";
                  mail($to,$email_subject,$email_body,$headers);

                  header("Location: index.html");

    ?>