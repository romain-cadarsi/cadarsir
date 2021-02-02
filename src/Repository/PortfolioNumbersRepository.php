<?php

namespace App\Repository;

use App\Entity\PortfolioNumbers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PortfolioNumbers|null find($id, $lockMode = null, $lockVersion = null)
 * @method PortfolioNumbers|null findOneBy(array $criteria, array $orderBy = null)
 * @method PortfolioNumbers[]    findAll()
 * @method PortfolioNumbers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PortfolioNumbersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PortfolioNumbers::class);
    }

    // /**
    //  * @return PortfolioNumbers[] Returns an array of PortfolioNumbers objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PortfolioNumbers
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
