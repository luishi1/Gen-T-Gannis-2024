-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2024 a las 11:34:52
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
  `vacunado` enum('Sí','No') NOT NULL,
  `sexo` enum('Macho','Hembra') NOT NULL,
  `animal` enum('Gato','Perro') NOT NULL,
  `tamano` varchar(20) NOT NULL,
  `esterlizado` enum('Sí','No') NOT NULL,
  `peso` float NOT NULL,
  `desparasitado` enum('Sí','No') NOT NULL,
  `nivel_de_actividad` varchar(250) NOT NULL,
  `necesidades` varchar(450) NOT NULL,
  `requisitos` varchar(450) NOT NULL,
  `historia` varchar(450) NOT NULL,
  `especificaciones` varchar(450) NOT NULL,
  `fecha_alta` datetime DEFAULT NULL,
  `fecha_baja` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id`, `nombre`, `edad`, `vacunado`, `sexo`, `animal`, `tamano`, `esterlizado`, `peso`, `desparasitado`, `nivel_de_actividad`, `necesidades`, `requisitos`, `historia`, `especificaciones`, `fecha_alta`, `fecha_baja`) VALUES
(1, 'Max', 3, 'Sí', 'Macho', 'Perro', 'Grande', 'No', 25.5, 'Sí', 'Alta', 'Amor y atención', 'Casa con patio', 'Rescatado de la calle', 'Ninguna', '2024-10-31 06:14:56', NULL),
(2, 'Luna', 2, 'No', 'Hembra', 'Gato', 'Mediano', 'Sí', 8.2, 'Sí', 'Media', 'Compañía nocturna', 'Lugar seguro en casa', 'Adoptada de un refugio', 'Requiere cepillado', '2024-10-31 06:14:56', NULL),
(3, 'Rocky', 1, 'Sí', 'Macho', 'Perro', 'Pequeño', 'Sí', 5, 'No', 'Baja', 'Atención y amor', 'Cerca de veterinario', 'Encontrado en parque', 'Requiere correa especial', '2024-10-31 06:14:56', NULL),
(4, 'Nina', 4, 'No', 'Hembra', 'Perro', 'Grande', 'Sí', 20.3, 'No', 'Alta', 'Ejercicio diario', 'Dueño activo', 'Abandonada en un terreno', 'Evitar zonas frías', '2024-10-31 06:14:56', NULL),
(5, 'Milo', 5, 'Sí', 'Macho', 'Gato', 'Pequeño', 'Sí', 7, 'Sí', 'Media', 'Espacio para jugar', 'Sin otros gatos', 'Fue atropellado', 'Requiere supervisión continua', '2024-10-31 06:14:56', NULL),
(6, 'Bella', 3, 'Sí', 'Hembra', 'Perro', 'Mediano', 'No', 15.4, 'Sí', 'Baja', 'Paseos tranquilos', 'Ideal para adultos mayores', 'Criada en casa', 'Evitar escaleras', '2024-10-31 06:14:56', NULL),
(7, 'Coco', 2, 'No', 'Macho', 'Perro', 'Grande', 'No', 30, 'No', 'Alta', 'Entrenamiento regular', 'Solo personas experimentadas', 'Viene de granja', 'Requiere espacio amplio', '2024-10-31 06:14:56', NULL),
(8, 'Simba', 6, 'Sí', 'Macho', 'Gato', 'Mediano', 'No', 9, 'Sí', 'Baja', 'Lugar tranquilo', 'Sin otros animales', 'Vivió en un refugio', 'Requiere comida especial', '2024-10-31 06:14:56', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `contrasena` varchar(72) NOT NULL,
  `mail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `contrasena`, `mail`) VALUES
(1, 'Juan Pérez', 'contraseña123', 'juan.perez@example.com'),
(2, 'María Gómez', 'segura456', 'maria.gomez@example.com'),
(3, 'Carlos López', 'miContraseña789', 'carlos.lopez@example.com'),
(4, 'Ana Martínez', '1234abc', 'ana.martinez@example.com'),
(5, 'Luis Rodríguez', 'pass5678', 'luis.rodriguez@example.com'),
(6, 'Laura Fernández', 'password2023', 'laura.fernandez@example.com'),
(7, 'Javier Sánchez', 'javier1234', 'javier.sanchez@example.com'),
(8, 'Sofía Torres', 's0f1aP@ss', 'sofia.torres@example.com'),
(9, 'Diego Ramírez', 'd1eg0R@me', 'diego.ramirez@example.com'),
(10, 'Valentina Castro', 'valen2023', 'valentina.castro@example.com');

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
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
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
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
