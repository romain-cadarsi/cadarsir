<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210202160030 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE blog (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, slug VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, legal_entity_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, job VARCHAR(255) NOT NULL, INDEX IDX_C74404553DA5256D (image_id), INDEX IDX_C74404556DEC420C (legal_entity_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, path VARCHAR(255) NOT NULL, alt VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE legal_entity (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio (id INT AUTO_INCREMENT NOT NULL, featured_image_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, short_description VARCHAR(1000) NOT NULL, heading VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, finally VARCHAR(10000) NOT NULL, keywords LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', my_work_on_this_project VARCHAR(255) NOT NULL, INDEX IDX_A9ED10623569D950 (featured_image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio_image (portfolio_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_98652E1AB96B5643 (portfolio_id), INDEX IDX_98652E1A3DA5256D (image_id), PRIMARY KEY(portfolio_id, image_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio_portfolio_task (portfolio_id INT NOT NULL, portfolio_task_id INT NOT NULL, INDEX IDX_3ED618F0B96B5643 (portfolio_id), INDEX IDX_3ED618F0DB032E48 (portfolio_task_id), PRIMARY KEY(portfolio_id, portfolio_task_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio_portfolio_numbers (portfolio_id INT NOT NULL, portfolio_numbers_id INT NOT NULL, INDEX IDX_C4069219B96B5643 (portfolio_id), INDEX IDX_C4069219C8D0C8ED (portfolio_numbers_id), PRIMARY KEY(portfolio_id, portfolio_numbers_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio_numbers (id INT AUTO_INCREMENT NOT NULL, chiffre INT NOT NULL, description VARCHAR(1000) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio_task (id INT AUTO_INCREMENT NOT NULL, portfolio_id INT DEFAULT NULL, icon VARCHAR(255) NOT NULL, description VARCHAR(1000) NOT NULL, title VARCHAR(255) NOT NULL, INDEX IDX_624F9CDFB96B5643 (portfolio_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE testimony (id INT AUTO_INCREMENT NOT NULL, client_id INT DEFAULT NULL, description VARCHAR(1000) NOT NULL, INDEX IDX_523C948719EB6921 (client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE client ADD CONSTRAINT FK_C74404553DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('ALTER TABLE client ADD CONSTRAINT FK_C74404556DEC420C FOREIGN KEY (legal_entity_id) REFERENCES legal_entity (id)');
        $this->addSql('ALTER TABLE portfolio ADD CONSTRAINT FK_A9ED10623569D950 FOREIGN KEY (featured_image_id) REFERENCES image (id)');
        $this->addSql('ALTER TABLE portfolio_image ADD CONSTRAINT FK_98652E1AB96B5643 FOREIGN KEY (portfolio_id) REFERENCES portfolio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_image ADD CONSTRAINT FK_98652E1A3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_portfolio_task ADD CONSTRAINT FK_3ED618F0B96B5643 FOREIGN KEY (portfolio_id) REFERENCES portfolio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_portfolio_task ADD CONSTRAINT FK_3ED618F0DB032E48 FOREIGN KEY (portfolio_task_id) REFERENCES portfolio_task (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_portfolio_numbers ADD CONSTRAINT FK_C4069219B96B5643 FOREIGN KEY (portfolio_id) REFERENCES portfolio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_portfolio_numbers ADD CONSTRAINT FK_C4069219C8D0C8ED FOREIGN KEY (portfolio_numbers_id) REFERENCES portfolio_numbers (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_task ADD CONSTRAINT FK_624F9CDFB96B5643 FOREIGN KEY (portfolio_id) REFERENCES portfolio (id)');
        $this->addSql('ALTER TABLE testimony ADD CONSTRAINT FK_523C948719EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE testimony DROP FOREIGN KEY FK_523C948719EB6921');
        $this->addSql('ALTER TABLE client DROP FOREIGN KEY FK_C74404553DA5256D');
        $this->addSql('ALTER TABLE portfolio DROP FOREIGN KEY FK_A9ED10623569D950');
        $this->addSql('ALTER TABLE portfolio_image DROP FOREIGN KEY FK_98652E1A3DA5256D');
        $this->addSql('ALTER TABLE client DROP FOREIGN KEY FK_C74404556DEC420C');
        $this->addSql('ALTER TABLE portfolio_image DROP FOREIGN KEY FK_98652E1AB96B5643');
        $this->addSql('ALTER TABLE portfolio_portfolio_task DROP FOREIGN KEY FK_3ED618F0B96B5643');
        $this->addSql('ALTER TABLE portfolio_portfolio_numbers DROP FOREIGN KEY FK_C4069219B96B5643');
        $this->addSql('ALTER TABLE portfolio_task DROP FOREIGN KEY FK_624F9CDFB96B5643');
        $this->addSql('ALTER TABLE portfolio_portfolio_numbers DROP FOREIGN KEY FK_C4069219C8D0C8ED');
        $this->addSql('ALTER TABLE portfolio_portfolio_task DROP FOREIGN KEY FK_3ED618F0DB032E48');
        $this->addSql('DROP TABLE blog');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE legal_entity');
        $this->addSql('DROP TABLE portfolio');
        $this->addSql('DROP TABLE portfolio_image');
        $this->addSql('DROP TABLE portfolio_portfolio_task');
        $this->addSql('DROP TABLE portfolio_portfolio_numbers');
        $this->addSql('DROP TABLE portfolio_numbers');
        $this->addSql('DROP TABLE portfolio_task');
        $this->addSql('DROP TABLE testimony');
    }
}
