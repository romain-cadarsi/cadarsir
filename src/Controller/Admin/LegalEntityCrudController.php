<?php

namespace App\Controller\Admin;

use App\Entity\LegalEntity;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class LegalEntityCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return LegalEntity::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            AssociationField::new('members'),
        ];
    }

}
