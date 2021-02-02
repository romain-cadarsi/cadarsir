<?php

namespace App\Entity;

use App\Repository\PortfolioNumbersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PortfolioNumbersRepository::class)
 */
class PortfolioNumbers
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $chiffre;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChiffre(): ?int
    {
        return $this->chiffre;
    }

    public function setChiffre(int $chiffre): self
    {
        $this->chiffre = $chiffre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function __toString(): string
    {
     return $this->chiffre . ' ' . $this->description;
    }
}
