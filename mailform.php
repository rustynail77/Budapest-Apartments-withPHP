<?php

    foreach ($_POST as $key => $value) {
        if ($key==='fname') $f_name=$value;
        if ($key==='email') $e_address=$value;
        if ($key==='apt') $apt=$value;
        if ($key==='lname') $l_name=$value;
        if ($key==='freetext') $message=$value;
    }

	$my_address = "lironrsd@gmail.com";
	
	$headers = "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

	// Additional headers 
	$headers .= 'From: <budapest-apartments@rustynail77.com>' . "\r\n"; 
	
	$mailme_title = "Someone just submitted a form at Budapest Apartments js site";
	$mailme_text = '<html>
					<head>
						<title></title>
								<link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />
							</head>
							<body>
								<div font-size:22px;">Email sent from '.$f_name.' '.$l_name.'!<br>
								Regarding property number '.$apt.' saying:<br>'.$message.'
								</div>
							</body>
						</html>';
    $mailuser_title = "Thank you for checking out Budapest Apartments website!";
    $mailuser_text = '<html>
					<head>
						<title></title>
								<link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />
							</head>
							<body>
								<div font-size:22px;">Dear '.$f_name.',<br>We shall contact you shortly for more information.
								</div>
							</body>
						</html>';
	mail($e_address, $mailuser_title, $mailuser_text, $headers);			
    mail($my_address, $mailme_title, $mailme_text, $headers);			
    include './index.html';
?>