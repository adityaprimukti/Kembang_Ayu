-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jul 2024 pada 15.59
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kembangayu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_assessments`
--

CREATE TABLE `tbl_assessments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `assessment` text NOT NULL,
  `day` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_assessments`
--

INSERT INTO `tbl_assessments` (`id`, `name`, `assessment`, `day`) VALUES
(1, 'Angel', 'Sangat memuaskan pelayanannya', '2024-06-13'),
(2, 'Angel', 'Website ini sangat membantu bagi kami kaum wanita', '2024-06-13'),
(3, 'Angel', 'Website ini sangat membantu bagi kaum wanita', '2024-06-13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_contacts`
--

CREATE TABLE `tbl_contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `branch` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_contacts`
--

INSERT INTO `tbl_contacts` (`id`, `name`, `telepon`, `email`, `subject`, `message`, `branch`) VALUES
(1, 'Angel', '087789081364', 'angel@gmail.com', 'Fitur Tambahkan layanan', 'terjadi bug pada reservasi', 'Green House Boutique'),
(2, 'Angel', '087789081364', 'angel@gmail.com', 'Fitur Tambahkan layanan', 'terjadi bug pada reservasi', 'Green House Boutique'),
(3, 'Angel', '087789081364', 'angel@gmail.com', 'Fitur Tambahkan layanan', 'terjadi bug pada reservasi', 'Green House Boutique');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_reglog`
--

CREATE TABLE `tbl_reglog` (
  `id` int(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_reglog`
--

INSERT INTO `tbl_reglog` (`id`, `username`, `password`, `email`, `phone`) VALUES
(1, 'Angel', '123', 'angel@gmail.com', '087789081364');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_reservations`
--

CREATE TABLE `tbl_reservations` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service` varchar(255) NOT NULL,
  `branch` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `day` date NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_reservations`
--

INSERT INTO `tbl_reservations` (`id`, `user_id`, `service`, `branch`, `name`, `phone`, `email`, `day`, `price`, `status`) VALUES
(2, 1, 'Hair Treatment', 'Branch 2', 'Angel', '087789081364', 'angel@gmail.com', '2024-06-13', 400000, 'Confirmed'),
(3, 1, 'Hair Treatment', 'Branch 2', 'Angel', '087789081364', 'angel@gmail.com', '2024-06-13', 400000, 'Confirmed'),
(4, 1, 'Nails', 'Branch 4', 'Angel', '087789081364', 'angel@gmail.com', '2024-06-15', 1500000, 'Confirmed'),
(5, 1, 'Nails', 'Branch 3', 'Angel', '087789081364', 'angel@gmail.com', '2024-06-21', 1500000, 'Pending');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_assessments`
--
ALTER TABLE `tbl_assessments`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_reglog`
--
ALTER TABLE `tbl_reglog`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_reservations`
--
ALTER TABLE `tbl_reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_assessments`
--
ALTER TABLE `tbl_assessments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tbl_reglog`
--
ALTER TABLE `tbl_reglog`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tbl_reservations`
--
ALTER TABLE `tbl_reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_reservations`
--
ALTER TABLE `tbl_reservations`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_reglog` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
