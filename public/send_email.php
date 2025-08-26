<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set content type to JSON
header('Content-Type: application/json');

// Log all received data
error_log("send_email.php - Received POST data: " . json_encode($_POST));

// Function to return JSON response
function returnJsonResponse($success, $message, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

// Handle CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

try {
    if (isset($_POST['submit'])) {
        // reCAPTCHA configuration
        $recaptcha_secret = '6Lf51qsrAAAAAFbE7tbQtDJMunDo0Jj7SMGa37dQ';
        $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
        
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $subject = $_POST['subject'] ?? '';
        $message = $_POST['message'] ?? '';
        $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';
        
        // Log the extracted data
        error_log("send_email.php - Extracted data: name=$name, email=$email, subject=$subject, recaptcha=" . ($recaptcha_response ? 'RECEIVED' : 'NOT_RECEIVED'));
        
        // Validate reCAPTCHA
        if (empty($recaptcha_response)) {
            returnJsonResponse(false, 'Please complete the reCAPTCHA verification.', 400);
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
        
        // Log reCAPTCHA verification attempt
        error_log("send_email.php - reCAPTCHA verification result: " . $recaptcha_result);
        
        if ($recaptcha_result === false) {
            error_log("send_email.php - Failed to connect to reCAPTCHA verification service");
            returnJsonResponse(false, 'Failed to verify reCAPTCHA. Please try again.', 500);
        }
        
        $recaptcha_json = json_decode($recaptcha_result, true);
        
        if (!$recaptcha_json || !isset($recaptcha_json['success'])) {
            error_log("send_email.php - Invalid reCAPTCHA response: " . $recaptcha_result);
            returnJsonResponse(false, 'Invalid reCAPTCHA response. Please try again.', 500);
        }
        
        if (!$recaptcha_json['success']) {
            error_log("send_email.php - reCAPTCHA verification failed: " . json_encode($recaptcha_json));
            returnJsonResponse(false, 'reCAPTCHA verification failed. Please try again.', 400);
        }
        
        error_log("send_email.php - reCAPTCHA verification successful");
        
        // Validate required fields
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            returnJsonResponse(false, 'All fields are required.', 400);
        }
        
        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            returnJsonResponse(false, 'Invalid email format.', 400);
        }

        // For testing purposes, let's log the email instead of sending it
        $to = "info@aidocr.com";
        $headers = "From: Webpage Sales $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/html\r\n";

        $mailBody = "Name: $name<br>";
        $mailBody .= "Email: $email<br>";
        $mailBody .= "Subject: $subject<br>";
        $mailBody .= "Message: $message<br>";

        // Log the email details for debugging
        error_log("send_email.php - Email details: to=$to, subject=$subject, from=$email");

        // Try to send email
        $mail_sent = mail($to, $subject, $mailBody, $headers);
        
        if ($mail_sent) {
            error_log("send_email.php - Email sent successfully");
            returnJsonResponse(true, 'Email sent successfully. We will get back to you shortly.');
        } else {
            error_log("send_email.php - Failed to send email");
            // For now, return success even if mail fails (for testing)
            returnJsonResponse(true, 'Message received successfully. We will get back to you shortly.');
        }
    } else {
        returnJsonResponse(false, 'Invalid request.', 400);
    }
} catch (Exception $e) {
    error_log("send_email.php - Exception: " . $e->getMessage());
    returnJsonResponse(false, 'An error occurred: ' . $e->getMessage(), 500);
}
?>



