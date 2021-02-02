<?php

namespace App\Controller\Admin;

use App\Entity\Blog;
use App\Entity\Client;
use App\Entity\Image;
use App\Entity\LegalEntity;
use App\Entity\Portfolio;
use App\Entity\PortfolioNumbers;
use App\Entity\PortfolioTask;
use App\Entity\Testimony;
use App\Service\BlogService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Cadarsir Dashboard');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Clients', 'fas fa-list', Client::class);
        yield MenuItem::linkToCrud('Images', 'fas fa-list', Image::class);
        yield MenuItem::linkToCrud('Sociétés', 'fas fa-list', LegalEntity::class);
        yield MenuItem::linkToCrud('Portfolios', 'fas fa-list', Portfolio::class);
        yield MenuItem::linkToCrud('Portfolio chiffres', 'fas fa-list', PortfolioNumbers::class);
        yield MenuItem::linkToCrud('Portfolio taches', 'fas fa-list', PortfolioTask::class);
        yield MenuItem::linkToCrud('Témoignages ', 'fas fa-list', Testimony::class);
        yield MenuItem::linkToCrud('Blogs ', 'fas fa-list', Blog::class);
    }
}
