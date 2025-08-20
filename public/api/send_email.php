<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// reCAPTCHA configuration
// IMPORTANT: Replace this with your actual reCAPTCHA secret key
// You can get this from https://www.google.com/recaptcha/admin
$recaptcha_secret = '6Lf51qsrAAAAAFbE7tbQtDJMunDo0Jj7SMGa37dQ'; // Replace with your secret key
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['submit'])) {
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $subject = $_POST['subject'] ?? '';
        $message = $_POST['message'] ?? '';
        $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';
        
        // Validate reCAPTCHA
        if (empty($recaptcha_response)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Please complete the reCAPTCHA verification'
            ]);
            exit;
        }
        
        // Verify reCAPTCHA with Google
        $recaptcha_data = [
            'secret' => $recaptcha_secret,
            'response' => $recaptcha_response,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
        ];
        
        $recaptcha_options = [
            'http' => [
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query($recaptcha_data)
            ]
        ];
        
        $recaptcha_context = stream_context_create($recaptcha_options);
        $recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
        $recaptcha_json = json_decode($recaptcha_result, true);
        
        if (!$recaptcha_json['success']) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'reCAPTCHA verification failed. Please try again.'
            ]);
            exit;
        }
        
        // Validate required fields
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'All fields are required'
            ]);
            exit;
        }
        
        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Invalid email format'
            ]);
            exit;
        }
        
        $to = "info@aidocr.com";
        $headers = "From: Webpage Sales $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/html\r\n";
        
        $mailBody = "Name: $name<br>";
        $mailBody .= "Email: $email<br>";
        $mailBody .= "Subject: $subject<br>";
        $mailBody .= "Message: $message<br>";
        
        if (mail($to, $subject, $mailBody, $headers)) {
            echo json_encode([
                'success' => true,
                'message' => 'Email sent successfully. We will get back to you shortly.'
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to send email. Please try again.'
            ]);
        }
    } else {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid request'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?> 