<?php

namespace App\Entity;

use App\Repository\PortfolioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PortfolioRepository::class)
 */
class Portfolio
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
    private $title;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $shortDescription;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $heading;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $link;




    /**
     * @ORM\ManyToOne(targetEntity=Image::class, inversedBy="portfolios")
     */
    private $featuredImage;

    /**
     * @ORM\ManyToMany(targetEntity=Image::class)
     */
    private $images;


    /**
     * @ORM\Column(type="string", length=10000)
     */
    private $finally;

    /**
     * @ORM\Column(type="array")
     */
    private $keywords = [];

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $myWorkOnThisProject;

    /**
     * @ORM\ManyToMany(targetEntity=PortfolioTask::class)
     */
    private $task;

    /**
     * @ORM\ManyToMany(targetEntity=PortfolioNumbers::class)
     */
    private $numbers;

    /**
     * @return mixed
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * @param mixed $link
     */
    public function setLink($link): void
    {
        $this->link = $link;
    }

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->numbers = new ArrayCollection();
        $this->task = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getHeading(): ?string
    {
        return $this->heading;
    }

    public function setHeading(string $heading): self
    {
        $this->heading = $heading;

        return $this;
    }

    public function getFeaturedImage(): ?Image
    {
        return $this->featuredImage;
    }

    public function setFeaturedImage(?Image $featuredImage): self
    {
        $this->featuredImage = $featuredImage;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        $this->images->removeElement($image);

        return $this;
    }


    public function getFinally(): ?string
    {
        return $this->finally;
    }

    public function setFinally(string $finally): self
    {
        $this->finally = $finally;

        return $this;
    }

    public function getKeywords(): ?array
    {
        return $this->keywords;
    }

    public function setKeywords(array $keywords): self
    {
        $this->keywords = $keywords;

        return $this;
    }

    public function getStringKeyWords() : string
    {
        return implode('","',$this->keywords);
    }

    public function getMyWorkOnThisProject(): ?string
    {
        return $this->myWorkOnThisProject;
    }

    public function setMyWorkOnThisProject(string $myWorkOnThisProject): self
    {
        $this->myWorkOnThisProject = $myWorkOnThisProject;

        return $this;
    }

    /**
     * @return Collection|PortfolioTask[]
     */
    public function getTask(): Collection
    {
        return $this->task;
    }

    public function addTask(PortfolioTask $task): self
    {
        if (!$this->task->contains($task)) {
            $this->task[] = $task;
        }

        return $this;
    }

    public function removeTask(PortfolioTask $task): self
    {
        $this->task->removeElement($task);

        return $this;
    }

    /**
     * @return Collection|PortfolioNumbers[]
     */
    public function getNumbers(): Collection
    {
        return $this->numbers;
    }

    public function addNumber(PortfolioNumbers $number): self
    {
        if (!$this->numbers->contains($number)) {
            $this->numbers[] = $number;
        }

        return $this;
    }

    public function removeNumber(PortfolioNumbers $number): self
    {
        $this->numbers->removeElement($number);

        return $this;
    }

}
