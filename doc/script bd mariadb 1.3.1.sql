SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cohortes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Reunionvideoconferencia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Reunionvideoconferencia` ;

CREATE TABLE IF NOT EXISTS `Reunionvideoconferencia` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `uuid` VARCHAR(45) NOT NULL UNIQUE,
  `idsistemaexterno` VARCHAR(100) NOT NULL UNIQUE,
  `urljoin` VARCHAR(1024) NOT NULL,
  `urlstart` VARCHAR(1024) NOT NULL,
  `hostid` VARCHAR(45) NOT NULL,
  `createdate` INT(11) UNSIGNED NOT NULL,
  `nombre` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Ocurrencia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ocurrencia` ;

CREATE TABLE IF NOT EXISTS `Ocurrencia` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idexterno` VARCHAR(100) NOT NULL UNIQUE,
  `starttime` INT(11) UNSIGNED NOT NULL,
  `duracion` INT(11) NOT NULL COMMENT 'En segundos',
  `status` VARCHAR(45) NOT NULL,
  `ReunionvideoconferenciaId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_ocurrencia_Reunionvideoconferencia1`
    FOREIGN KEY (`ReunionvideoconferenciaId`)
    REFERENCES `Reunionvideoconferencia` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Grabacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Grabacion` ;

CREATE TABLE IF NOT EXISTS `Grabacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `ocurrenciaId` INT(11) NOT NULL,
  `idexterno` VARCHAR(100) NOT NULL UNIQUE,
  `playurl` VARCHAR(1024) NOT NULL,
  `duracion` INT(11) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_grabacion_ocurrencia1`
    FOREIGN KEY (`ocurrenciaId`)
    REFERENCES `Ocurrencia` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Archivo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Archivo` ;

CREATE TABLE IF NOT EXISTS `Archivo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idexterno` VARCHAR(100) NOT NULL UNIQUE,
  `formato` VARCHAR(45) NOT NULL,
  `grabacionId` INT(11) NOT NULL,
  `url` VARCHAR(1024) NOT NULL,
  `pesobyte` BIGINT UNSIGNED NULL COMMENT 'En bytes',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_archivo_grabacion1`
    FOREIGN KEY (`grabacionId`)
    REFERENCES `Grabacion` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Contacto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Contacto` ;

CREATE TABLE IF NOT EXISTS `Contacto` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email1` VARCHAR(45) NOT NULL,
  `email2` VARCHAR(45) NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `email` ON `Contacto` (`email1` ASC);


-- -----------------------------------------------------
-- Table `Cohorte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Cohorte` ;

CREATE TABLE IF NOT EXISTS `Cohorte` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL COMMENT 'Un nombre para la cohorte, ejemplos\\nPregrados Virtuales Ingeniera\\nArchivistica\\n',
  `codigo` VARCHAR(10) NOT NULL COMMENT 'Un identificador corto, sin espacios para identificar la cohorte.\\nEjemplo\\n20191',
  `descripcion` VARCHAR(45) NOT NULL COMMENT 'Una breve explicación de la cohorte',
  `fechainicio` DATE NOT NULL,
  `fechafinal` DATE NOT NULL,
  `coordinadoracademicoId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cohorte_contactos`
    FOREIGN KEY (`coordinadoracademicoId`)
    REFERENCES `Contacto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Cursocohorte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Cursocohorte` ;

CREATE TABLE IF NOT EXISTS `Cursocohorte` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `cohorteId` INT(11) NOT NULL,
  `isprogramadoenreuniones` TINYINT(4) NOT NULL,
  `idlms` VARCHAR(15) NULL DEFAULT NULL,
  `urllms` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cursoscohorte_cohorte1`
    FOREIGN KEY (`cohorteId`)
    REFERENCES `Cohorte` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'cursos que pertenecen a la cohorte, esta tabla relaciona las materias y los cursos incluidos para esa cohorte. Además relaciona el id en un sistema externo virtual';


-- -----------------------------------------------------
-- Table `Materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Materia` ;

CREATE TABLE IF NOT EXISTS `Materia` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idexterno` VARCHAR(45) NOT NULL COMMENT 'Id del sistema externo es el codigo de la materia en el sistema externo',
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `index_idexterno` ON `Materia` (`idexterno` ASC);


-- -----------------------------------------------------
-- Table `Cursoprogramado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Cursoprogramado` ;

CREATE TABLE IF NOT EXISTS `Cursoprogramado` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `materiaId` INT(11) NOT NULL,
  `grupo` INT(11) NOT NULL,
  `cohorteId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Cursoprogramado_Cohorte1`
    FOREIGN KEY (`cohorteId`)
    REFERENCES `Cohorte` (`id`),
  CONSTRAINT `fk_cursoprogramado_Materia1`
    FOREIGN KEY (`materiaId`)
    REFERENCES `Materia` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Recurrencia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Recurrencia` ;

CREATE TABLE IF NOT EXISTS `Recurrencia` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Horariocurso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Horariocurso` ;

CREATE TABLE IF NOT EXISTS `Horariocurso` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cursocohorteId` INT(11) NOT NULL,
  `cohorteId` INT(11) NOT NULL,
  `fechainicial` DATE NOT NULL COMMENT 'Incluye el día y la hora de inicio',
  `fechafinal` DATE NOT NULL COMMENT 'Solo se tiene en cuenta para el final de la recurrencia',
  `lunes` TINYINT(4) NULL DEFAULT NULL,
  `martes` TINYINT(4) NULL DEFAULT NULL,
  `miercoles` TINYINT(4) NULL DEFAULT NULL,
  `jueves` TINYINT(4) NULL DEFAULT NULL,
  `viernes` TINYINT(4) NULL DEFAULT NULL,
  `sabado` TINYINT(4) NULL DEFAULT NULL,
  `domingo` TINYINT(4) NULL DEFAULT NULL,
  `duracion` INT(11) NOT NULL COMMENT 'En minutos',
  `profesor1Id` INT(11) NOT NULL COMMENT 'Con este profesor es que se programa la clase en zoom',
  `necesitavideoconferencia` TINYINT(4) NOT NULL,
  `recurrenciaId` INT(11) NOT NULL COMMENT 'Recurrencia 0 y periodo 0 significa que la fecha inicial y fecha fina debe ser la misma or que es un evento unico. \\nEjemplo: encuentros sincronicos de pifle',
  `periodo` INT(11) NOT NULL,
  `reunionvideoconferenciaId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_horariocurso_recurrencia1`
    FOREIGN KEY (`recurrenciaId`)
    REFERENCES `Recurrencia` (`id`),
  CONSTRAINT `fk_horariocurso_reunionvideoconferencia1`
    FOREIGN KEY (`reunionvideoconferenciaId`)
    REFERENCES `Reunionvideoconferencia` (`id`),
  CONSTRAINT `fk_horarioscurso_cohorte1`
    FOREIGN KEY (`cohorteId`)
    REFERENCES `Cohorte` (`id`),
  CONSTRAINT `fk_horarioscurso_contactos1`
    FOREIGN KEY (`profesor1Id`)
    REFERENCES `Contacto` (`id`),
  CONSTRAINT `fk_horarioscurso_cursoscohorte1`
    FOREIGN KEY (`cursocohorteId`)
    REFERENCES `Cursocohorte` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Metacurso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Metacurso` ;

CREATE TABLE IF NOT EXISTS `Metacurso` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cursoscohorteId` INT(11) NOT NULL,
  `cursoprogramadoId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Metacurso_cursoprogramado1`
    FOREIGN KEY (`cursoprogramadoId`)
    REFERENCES `Cursoprogramado` (`id`),
  CONSTRAINT `fk_metacurso_cursoscohorte1`
    FOREIGN KEY (`cursoscohorteId`)
    REFERENCES `Cursocohorte` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
