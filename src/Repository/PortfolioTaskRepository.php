<?php

namespace App\Repository;

use App\Entity\PortfolioTask;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PortfolioTask|null find($id, $lockMode = null, $lockVersion = null)
 * @method PortfolioTask|null findOneBy(array $criteria, array $orderBy = null)
 * @method PortfolioTask[]    findAll()
 * @method PortfolioTask[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PortfolioTaskRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PortfolioTask::class);
    }

    // /**
    //  * @return PortfolioTask[] Returns an array of PortfolioTask objects
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
    public function findOneBySomeField($value): ?PortfolioTask
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
