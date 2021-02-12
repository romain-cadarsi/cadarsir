<?php

namespace App\Controller;

use App\Entity\Portfolio;
use App\Kernel;
use App\Repository\BlogRepository;
use App\Repository\PortfolioRepository;
use App\Repository\TestimonyRepository;
use App\Service\MailService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class WebsiteController extends AbstractController
{




    /**
     * @Route("/contact", name="contact")
     */
    public function contact(Request $request,MailService $mailService)
    {
        if($request->request->get('email')){
            $email = $request->request->get('email');
            $nom = $request->request->get('nom');
            $prenom = $request->request->get('prenom');
            $message = $request->request->get('message');
            $mailService->sendMail($nom,$prenom,$email,$message);
            return $this->render('website/message.html.twig', [
                'message' => "Message envoyé, vous recevrez une réponse sous peu si une réponse est requise.",
                'slider1' => "Votre message est" ,
                'slider21' => "En cours d'envoi" ,
                'slider22' => "Envoyé" ,
                'slider23' => "Réceptionné"]);
        }
        else{
            return $this->render('website/contact.html.twig');
        }
    }


    /**
     * @Route("sent", name="mailSent")
     */
    public function messageEnvoye(){

    }

    /**
     * @Route("/bepatient", name="bePatient")
     */
    public function enCours(){
        //$message = "Bonjour Romain Cadarsi, vous avez reçu un message de" . $_POST['nom'] . $_POST['prenom'] . "\n Qui dit : \n " . $_POST['message'];
        //mail('dev@cadarsir.fr', 'Message client', $message);
        return $this->render('website/message.html.twig', [
            'message' => "Aïe, il semble que cette page n'est pas encore terminée , revenez bientôt pour la voir ! \n La patience est une vertu.",
            'slider1' => "Oups, cette page est" ,
            'slider21' => "Non disponible" ,
            'slider22' => "En création" ,
            'slider23' => "Prévu pour bientôt"]);
    }

    /**
     * @Route("/", name="home")
     */
    public function index(PortfolioRepository $portfolioRepository,TestimonyRepository $testimonyRepository)
    {
        $allPortfolios = $portfolioRepository->findAll();
        $allTestimony = $testimonyRepository->findAll();
        return $this->render('website/accueil.html.twig', [
            'portfolios' => $allPortfolios,
            'testimonies' => $allTestimony
        ]);
    }

    /**
     * @Route("/portfolio", name="allPortfolio")
     */
    public function allPortfolio(PortfolioRepository $portfolioRepository)
    {
        $allPortfolio = $portfolioRepository->findAll();
        return $this->render('website/portfolio.html.twig', [
            'portfolios' => $allPortfolio
        ]);
    }

    /**
     * @Route("/portfolio/{slug}", name="showPortfolio" , methods={"GET"})
     */
    public function showPortfolio(string $slug, PortfolioRepository $portfolioRepository)
    {
        $portfolio = $portfolioRepository->findOneBy(['slug' => $slug ]);
        return $this->render('website/portfolioBase.html.twig', [
            'p' => $portfolio
        ]);
    }

    /**
     * @Route("/blog", name="allBlog")
     */
    public function allBlog(BlogRepository $blogRepository)
    {
        $allblog = $blogRepository->findAll();
        return $this->render('website/blog.html.twig', [
            'blogs' => $allblog
        ]);
    }

    /**
     * @Route("/blog/{slug}", name="showBlog" , methods={"GET"})
     */
    public function showBlog(string $slug, BlogRepository $blogRepository)
    {
        $blog = $blogRepository->findOneBy(['slug' => $slug]);
        return $this->render('website/blogBase.html.twig', [
            'b' => $blog
        ]);
    }

    /**
     * @Route("/xhr/uploadImage", name="uploadImage")
     */
    public function uploadImage( Request $request, Kernel $kernel)
    {
        $uploadDirectory = 'images/embedImage/';
        $path = $kernel->getProjectDir().'/public/' . $uploadDirectory;
        echo($_FILES['file']['name']);
        $image = $path . basename($_FILES['file']['name']);
        if (move_uploaded_file($_FILES['file']['tmp_name'], $image)) {
            echo "File is valid, and was successfully uploaded.\n";
        } else {
            echo "Possible file upload attack!\n";
        }
        return $this->render('blank.html.twig');
    }

    /**
     * @Route("/xhr/getImages", name="getImages")
     */
    public function getImages( Kernel $kernel)
    {
        $uploadDirectory = 'images/embedImage';
        $path = $kernel->getProjectDir().'/public/' . $uploadDirectory;
        $files = array_diff(scandir($path), array('..', '.'));
        $htmlresponse = "";
        $urlpath = "/images/embedImage/";
        foreach ($files as $file){
            $htmlresponse .= '<img src="' . $urlpath . $file . '"> ';
        }
        return new Response($htmlresponse);
    }

    /**
     * @Route("/imageSandbox", name="imageSandbox")
     */
    public function imageSandbox()
    {
        return $this->render('dragAndDropSandbox.html.twig', [
            'metaDescription' => "a simple drag and drop images sandbox",
            'title' => 'Drag it, Drop it, Copy it!'
        ]);
    }















}
