DROP TABLE IF EXISTS `Reunionvideoconferencia` ;
CREATE TABLE IF NOT EXISTS Reunionvideoconferencia (
 `id` INT NOT NULL AUTO_INCREMENT,
 `uuid` VARCHAR(45) NOT NULL,
 `idsistemaexterno` VARCHAR(100) NOT NULL,
 `urljoin` VARCHAR(512) NOT NULL,
 `urlstart` VARCHAR(512) NOT NULL,
 `hostid` VARCHAR(45) NOT NULL,
 `createdate` BIGINT(20) NOT NULL,
 `nombre` VARCHAR(128) NOT NULL, PRIMARY KEY (`id`))
; 


-- -----------------------------------------------------
-- Table `Ocurrencia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ocurrencia` ;
CREATE TABLE IF NOT EXISTS Ocurrencia (
 `id` INT NOT NULL AUTO_INCREMENT,
 `idexterno` VARCHAR(100) NOT NULL,
 `starttime` BIGINT(20) NOT NULL,
 `duracion` INT NOT NULL,
 `status` VARCHAR(45) NOT NULL,
 `ReunionvideoconferenciaId` INT NOT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_ocurrencia_Reunionvideoconferencia1` FOREIGN KEY (`ReunionvideoconferenciaId`) REFERENCES Reunionvideoconferencia (`id`))
;


-- -----------------------------------------------------
-- Table `Grabacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Grabacion` ;
CREATE TABLE IF NOT EXISTS Grabacion (
 `id` INT NOT NULL AUTO_INCREMENT,
 `ocurrenciaId` INT NOT NULL,
 `idexterno` VARCHAR(100) NOT NULL,
 `playurl` VARCHAR(512) NOT NULL,
 `duracion` INT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_grabacion_ocurrencia1` FOREIGN KEY (`ocurrenciaId`) REFERENCES Ocurrencia (`id`))
;


-- -----------------------------------------------------
-- Table `Archivo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Archivo` ;
CREATE TABLE IF NOT EXISTS Archivo (
 `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `idexterno` VARCHAR(100) NOT NULL,
 `formato` VARCHAR(45) NOT NULL,
 `grabacionId` INT NOT NULL,
 `url` VARCHAR(512) NOT NULL,
 `pesobyte` BIGINT  NULL, CONSTRAINT `fk_archivo_grabacion1` FOREIGN KEY (`grabacionId`) REFERENCES Grabacion (`id`))
;


-- -----------------------------------------------------
-- Table `Contacto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Contacto` ;
CREATE TABLE IF NOT EXISTS Contacto (
 `id` INT NOT NULL AUTO_INCREMENT,
 `email1` VARCHAR(45) NOT NULL,
 `email2` VARCHAR(45) NULL DEFAULT NULL,
 `nombre` VARCHAR(45) NOT NULL,
 `telefono` VARCHAR(45) NULL DEFAULT NULL, PRIMARY KEY (`id`))
;
CREATE UNIQUE INDEX email ON Contacto (`email1` ASC) ;


-- -----------------------------------------------------
-- Table `Cohorte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Cohorte` ;
CREATE TABLE IF NOT EXISTS Cohorte (
 `id` INT NOT NULL AUTO_INCREMENT,
 `nombre` VARCHAR(45) NOT NULL,
 `codigo` VARCHAR(10) NOT NULL,
 `descripcion` VARCHAR(45) NOT NULL,
 `fechainicio` DATE NOT NULL,
 `fechafinal` DATE NOT NULL,
 `coordinadoracademicoId` INT NOT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_cohorte_contactos` FOREIGN KEY (`coordinadoracademicoId`) REFERENCES Contacto (`id`))
;


-- -----------------------------------------------------
-- Table `Cursocohorte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Cursocohorte` ;
CREATE TABLE IF NOT EXISTS Cursocohorte (
 `id` INT NOT NULL AUTO_INCREMENT,
 `nombre` VARCHAR(45) NOT NULL,
 `cohorteId` INT NOT NULL,
 `isprogramadoenreuniones` TINYINT NOT NULL,
 `idlms` VARCHAR(15) NULL DEFAULT NULL,
 `urllms` VARCHAR(100) NULL DEFAULT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_cursoscohorte_cohorte1` FOREIGN KEY (`cohorteId`) REFERENCES Cohorte (`id`))
;


-- -----------------------------------------------------
-- Table `Materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Materia` ;
CREATE TABLE IF NOT EXISTS Materia (
 `id` INT NOT NULL AUTO_INCREMENT,
 `idexterno` VARCHAR(45) NOT NULL,
 `nombre` VARCHAR(45) NOT NULL, PRIMARY KEY (`id`))
;
CREATE UNIQUE INDEX index_idexterno ON Materia (`idexterno` ASC) ;


-- -----------------------------------------------------
-- Table `Cursoprogramado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Cursoprogramado` ;
CREATE TABLE IF NOT EXISTS Cursoprogramado (
 `id` INT NOT NULL AUTO_INCREMENT,
 `materiaId` INT NOT NULL,
 `grupo` INT NOT NULL,
 `cohorteId` INT NOT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_Cursoprogramado_Cohorte1` FOREIGN KEY (`cohorteId`) REFERENCES Cohorte (`id`), CONSTRAINT `fk_cursoprogramado_Materia1` FOREIGN KEY (`materiaId`) REFERENCES Materia (`id`))
;


-- -----------------------------------------------------
-- Table `Recurrencia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Recurrencia` ;
CREATE TABLE IF NOT EXISTS Recurrencia (
 `id` INT NOT NULL AUTO_INCREMENT,
 `nombre` VARCHAR(45) NOT NULL, PRIMARY KEY (`id`))
;


-- -----------------------------------------------------
-- Table `Horariocurso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Horariocurso` ;
CREATE TABLE IF NOT EXISTS Horariocurso (
 `id` INT NOT NULL AUTO_INCREMENT,
 `cursocohorteId` INT NOT NULL,
 `cohorteId` INT NOT NULL,
 `fechainicial` DATE NOT NULL,
 `fechafinal` DATE NOT NULL,
 `lunes` TINYINT NULL DEFAULT NULL,
 `martes` TINYINT NULL DEFAULT NULL,
 `miercoles` TINYINT NULL DEFAULT NULL,
 `jueves` TINYINT NULL DEFAULT NULL,
 `viernes` TINYINT NULL DEFAULT NULL,
 `sabado` TINYINT NULL DEFAULT NULL,
 `domingo` TINYINT NULL DEFAULT NULL,
 `duracion` INT NOT NULL,
 `profesor1Id` INT NOT NULL,
 `necesitavideoconferencia` TINYINT NOT NULL,
 `recurrenciaId` INT NOT NULL,
 `periodo` INT NOT NULL,
 `reunionvideoconferenciaId` INT NULL DEFAULT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_horariocurso_recurrencia1` FOREIGN KEY (`recurrenciaId`) REFERENCES Recurrencia (`id`), CONSTRAINT `fk_horariocurso_reunionvideoconferencia1` FOREIGN KEY (`reunionvideoconferenciaId`) REFERENCES Reunionvideoconferencia (`id`), CONSTRAINT `fk_horarioscurso_cohorte1` FOREIGN KEY (`cohorteId`) REFERENCES Cohorte (`id`), CONSTRAINT `fk_horarioscurso_contactos1` FOREIGN KEY (`profesor1Id`) REFERENCES Contacto (`id`), CONSTRAINT `fk_horarioscurso_cursoscohorte1` FOREIGN KEY (`cursocohorteId`) REFERENCES Cursocohorte (`id`))
;


-- -----------------------------------------------------
-- Table `Metacurso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Metacurso` ;
CREATE TABLE IF NOT EXISTS Metacurso (
 `id` INT NOT NULL AUTO_INCREMENT,
 `cursoscohorteId` INT NOT NULL,
 `cursoprogramadoId` INT NOT NULL, PRIMARY KEY (`id`), CONSTRAINT `fk_Metacurso_cursoprogramado1` FOREIGN KEY (`cursoprogramadoId`) REFERENCES Cursoprogramado (`id`), CONSTRAINT `fk_metacurso_cursoscohorte1` FOREIGN KEY (`cursoscohorteId`) REFERENCES Cursocohorte (`id`))
;


/* SET SQL_MODE=@OLD_SQL_MODE; */
/* SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS; */
/* SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS; */

-- ------------------------------------------------------
-- Curadurias
-- ------------------------------------------------------
DROP TABLE IF EXISTS Formulario ;

-- -- Estructura de tabla para la tabla Formulario
CREATE TABLE IF NOT EXISTS Formulario (
 id INT NOT NULL AUTO_INCREMENT, 
 nombre VARCHAR(50) NOT NULL, JSON TEXT NOT NULL, PRIMARY KEY (`id`)) ;
DROP TABLE IF EXISTS Respuesta ;

-- -- Estructura de tabla para la tabla Respuesta
CREATE TABLE IF NOT EXISTS Respuesta (
 id INT NOT NULL AUTO_INCREMENT, 
 formularioId INT NOT NULL, 
 respuestas TEXT NOT NULL, 
 formularioRespuestas TEXT NOT NULL, 
 fechaHora TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), CONSTRAINT `fk_formulario_respuesta` FOREIGN KEY (`formularioId`) REFERENCES Formulario (`id`)) ; COMMIT;