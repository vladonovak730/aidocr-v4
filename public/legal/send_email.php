<!DOCTYPE html>
<html>

<head>

	<meta charset="utf-8">
	<!-- <base href="/"> -->

	<title>
		Aidocr
	</title>
	<meta name="description"
		content="We are revolutionizing the way you access and utilize information within your enterpsie files and any other data. Our private AI knowledge search engine is designed to eliminate the struggle in finding crucial insights and make your organisation much more efficent and resilient.">

	<meta name="viewport" content="width=device-width">

	<link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
	<link rel="manifest" href="images/favicon/site.webmanifest">
	<link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#107de0">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<meta property="og:title" content="Aidocr">

	<link rel="stylesheet" href="css/main.min.css">

	<meta http-equiv="refresh" content="2;URL=./index.html">


</head>

	<body>

		<header class="header2 section-menu" id="header">

			<div class="header__top">
				<div class="container">

					<div class="header__top-wrapper">

						<button class="header__top-hamburger hamburger--slider" arial-label="Btn menu" type="button">
							<span></span>
							<span></span>
							<span></span>
						</button>

						<a class="header__top-logo" href="./index.html">
							aidocr
						</a>
					</div>
				</div>
			</div>

			
		</header>

		<main>
			<section class="mission section-menu" id="mission">
				<div class="container">

					<h3 class="mission__title title">Thanks for your message</h3>
	
					<p class="mission__text text">
						
						<?php
							if (isset($_POST['submit'])) {

								$email = $_POST['email'];
								$subject = $_POST['subject'];
								$message = $_POST['message'];
							
								$to = "info@investife.com"; // Replace with the recipient's email address
								$headers = "From: Webpage Sales $name <$email>\r\n";
								$headers .= "Reply-To: $email\r\n";
								$headers .= "Content-Type: text/html\r\n";
							
								$mailBody = "Name: $name<br>";
								$mailBody .= "Email: $email<br>";
								$mailBody .= "Subject: $subject<br>";
								$mailBody .= "Message: $message<br>";
							
								if (mail($to, $subject, $mailBody, $headers)) {
									echo "Email sent successfully. We will get back to shortly. You will be redirected to the main page in 2 seconds. Otherwise click ... <a href='./index.html'> here</a> ";
								} else {
									echo "Failed to send email - Please try again. You will be redirected in 2 seconds";
								}
							}

						?>

						
					</p>
				</div>
			</section>

		</main>






		<footer class="footer">

			<div class="footer__top">
				<div class="container">

					<div class="footer__top-wrapper">
						<a class="footer__top-logo" href="#">
							aidocr
						</a>

						<div class="footer__top-item">
							<h5 class="footer__top-title">Made by Investife AG</h5>
							<ul class="footer__top-list">
								<li class="list__item">Sihleggstrasse 23</li>
								<li class="list__item">8832 Wollerau</li>
								<li class="list__item">Switzerland</li>
							</ul>
						</div>

						<div class="footer__top-item">
							<h5 class="footer__top-title">Phone:</h5>
							<ul class="footer__top-list">
								<li class="list__item">
									<a class="list__link" property="telephone" href="tel:+41798108299">CH +41 79 810 82 99</a>
								</li>

								<li class="list__item">
									<a class="list__link" property="telephone" href="tel:+4915162746456">DE + 49 151 627 464 56</a>
								</li>

								<li class="list__item">
									<h5 class="list__title footer__top-title">Email:</h5>
									<a class="list__link" property="email" href="info@aidocr.com">info{at}}aidocr.com</a>
								</li>
							</ul>
						</div>


						<div class="footer__top-item">
							<h5 class="footer__top-title">Useful links:</h5>

							<ul class="footer__top-list">
								<li class="list__item">
									<a class="list__link" href="/">Home</a>
								</li>
								<li class="list__item">
									<a class="list__link" href="https://www.google.com/" target="_blank">Legal</a>
								</li>
								<li class="list__item">
									<a class="list__link" href="https://www.google.com/" target="_blank">Disclaimer</a>
								</li>
								<li class="list__item">
									<a class="list__link" href="https://www.google.com/" target="_blank">Book a meeting</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="footer__bottom">
				<div class="container">
					© Copyright AIDOCR by Investife AG, Switerland. All Rights Reserved
				</div>
			</div>

			<button id="goTop">top</button>
		</footer>

		<script src="js/app.min.js"></script>

	</body>

</html>



