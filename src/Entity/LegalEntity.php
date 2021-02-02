<?php

namespace App\Entity;

use App\Repository\LegalEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LegalEntityRepository::class)
 */
class LegalEntity
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
     * @ORM\OneToMany(targetEntity=Client::class, mappedBy="legalEntity")
     */
    private $members;

    public function __construct()
    {
        $this->members = new ArrayCollection();
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

    /**
     * @return Collection|Client[]
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function addMember(Client $member): self
    {
        if (!$this->members->contains($member)) {
            $this->members[] = $member;
            $member->setLegalEntity($this);
        }

        return $this;
    }

    public function removeMember(Client $member): self
    {
        if ($this->members->removeElement($member)) {
            // set the owning side to null (unless already changed)
            if ($member->getLegalEntity() === $this) {
                $member->setLegalEntity(null);
            }
        }

        return $this;
    }
}
