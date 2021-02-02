<?php

namespace App\Controller\Admin;

use App\Entity\PortfolioTask;
use Doctrine\ORM\Utility\IdentifierFlattener;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use phpDocumentor\Reflection\DocBlock\Description;

class PortfolioTaskCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PortfolioTask::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('icon'),
            TextField::new('title'),
            TextareaField::new('description'),
        ];
    }
}
