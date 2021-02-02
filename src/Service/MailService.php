<?php
namespace App\Service;

use DateInterval;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Validator\Constraints\Date;
use Twig\Environment;


class MailService{

    private $mailer;
    private $twig;

    public function __construct(MailerInterface $mailer,Environment $twig){
        $this->mailer = $mailer;
        $this->twig = $twig;
    }


    public function sendMail($nom,$prenom,$adresse,$message){
        $email = (new Email())
            ->from('dev@cadarsir.fr')
            ->subject("Nouveau message de $nom $prenom")
            ->html("<p>Vous avez reçu un nouveau message de $nom $prenom : </p>
                            <p><b>$message</b></p>
                            <p>Recontactez le sur son adresse mail : $adresse </p>");
        $email->to("dev@cadarsir.fr");
        $email->ensureValidity();
        $this->mailer->send($email);

        return '0';
    }


}