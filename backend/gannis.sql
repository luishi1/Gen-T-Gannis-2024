-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2024 a las 10:48:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gannis`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `uploaded_on` datetime NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id` int(8) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `edad` int(50) NOT NULL,
  `tamano` varchar(20) NOT NULL,
  `peso` float NOT NULL,
  `nivel_de_actividad` varchar(250) NOT NULL,
  `especificaciones` varchar(450) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id`, `nombre`, `edad`, `tamano`, `peso`, `nivel_de_actividad`, `especificaciones`) VALUES
(1, 'Max', 3, 'Grande', 25.5, 'Alta', 'Ninguna'),
(2, 'Luna', 2, 'Mediano', 8.2, 'Media', 'Requiere cepillado'),
(3, 'Rocky', 1, 'Pequeño', 5, 'Baja', 'Requiere correa especial'),
(4, 'Nina', 4, 'Grande', 20.3, 'Alta', 'Evitar zonas frías'),
(5, 'Milo', 5, 'Pequeño', 7, 'Media', 'Requiere supervisión continua'),
(6, 'Bella', 3, 'Mediano', 15.4, 'Baja', 'Evitar escaleras'),
(7, 'Coco', 2, 'Grande', 30, 'Alta', 'Requiere espacio amplio'),
(8, 'Simba', 6, 'Mediano', 9, 'Baja', 'Requiere comida especial'),
(9, 'Maya', 1, 'Pequeño', 4.5, 'Media', 'Requiere control médico'),
(10, 'Toby', 3, 'Grande', 18.7, 'Alta', 'Necesita estímulo físico');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
