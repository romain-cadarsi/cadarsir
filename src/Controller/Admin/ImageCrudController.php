<?php

namespace App\Controller\Admin;

use App\Entity\Image;
use Doctrine\DBAL\Types\TextType;
use Doctrine\ORM\Utility\IdentifierFlattener;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ImageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Image::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            ImageField::new('path')->setUploadDir('public/images')->setUploadedFileNamePattern('images/[name].[extension]'),
            TextField::new('alt')
        ];
    }

}
