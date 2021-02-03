<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ClientRepository::class)
 */
class Client
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $job;

    /**
     * @ORM\ManyToOne(targetEntity=Image::class)
     */
    private $image;

    /**
     * @ORM\ManyToOne(targetEntity=LegalEntity::class, inversedBy="members")
     */
    private $legalEntity;

    /**
     * @ORM\OneToMany(targetEntity=Testimony::class, mappedBy="client")
     */
    private $testimonies;

    public function __construct()
    {
        $this->testimonies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getJob(): ?string
    {
        return $this->job;
    }

    public function setJob(string $job): self
    {
        $this->job = $job;

        return $this;
    }

    public function getImage(): ?Image
    {
        return $this->image;
    }

    public function setImage(?Image $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getLegalEntity(): ?LegalEntity
    {
        return $this->legalEntity;
    }

    public function setLegalEntity(?LegalEntity $legalEntity): self
    {
        $this->legalEntity = $legalEntity;

        return $this;
    }

    /**
     * @return Collection|Testimony[]
     */
    public function getTestimonies(): Collection
    {
        return $this->testimonies;
    }

    public function addTestimony(Testimony $testimony): self
    {
        if (!$this->testimonies->contains($testimony)) {
            $this->testimonies[] = $testimony;
            $testimony->setClient($this);
        }

        return $this;
    }

    public function removeTestimony(Testimony $testimony): self
    {
        if ($this->testimonies->removeElement($testimony)) {
            // set the owning side to null (unless already changed)
            if ($testimony->getClient() === $this) {
                $testimony->setClient(null);
            }
        }

        return $this;
    }

    public function __toString(){
        return $this->name;
    }
}
