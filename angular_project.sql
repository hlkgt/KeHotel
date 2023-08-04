-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2023 at 09:19 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `hotel_name` varchar(25) NOT NULL,
  `rate` enum('1','2','3','4','5') NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `image_profile` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `username`, `hotel_name`, `rate`, `deskripsi`, `date`, `image_profile`) VALUES
(1, 'user123', 'Kamar Deluxe', '5', 'Sangat menyukai kamar ini! Pemandangan indah dan pelayanannya luar biasa.', '2023-07-20', 'profil-image-1.jpg'),
(2, 'hotellover', 'Suite Mewah', '4', 'Suite ini nyaman dan fasilitasnya lengkap. Sedikit kebisingan dari luar tapi tetap memuaskan.', '2023-07-18', 'profil-image-2.jpg'),
(3, 'traveler17', 'Kamar Standar', '3', 'Kamar standar dengan harga yang wajar. Layanan ramah tapi kurang ada fasilitas tambahan.', '2023-07-15', 'profil-image-3.jpg'),
(4, 'vacationtime', 'Kamar Keluarga', '4', 'Kamar luas dan cocok untuk keluarga. Anak-anak senang dengan area bermainnya.', '2023-07-12', 'profil-image-4.jpg'),
(5, 'wanderlust88', 'Kamar Superior', '2', 'Kamar nyaman tapi perlu ditingkatkan kebersihannya. Sayangnya AC kurang dingin.', '2023-07-10', 'profil-image-5.jpg'),
(6, 'relaxandunwind', 'Villa Mewah', '5', 'Villa mewah dengan kolam renang pribadi. Suasana tenang dan santai.', '2023-07-08', 'profil-image-6.jpg'),
(7, 'businessnomad', 'Kamar Eksekutif', '4', 'Kamar eksekutif dengan fasilitas lengkap untuk pebisnis. Sarapan lezat!', '2023-07-05', 'profil-image-1.jpg'),
(8, 'budgettraveler', 'Kamar Hemat', '3', 'Kamar hemat tapi nyaman untuk menginap singkat. Tidak ada masalah selama menginap.', '2023-07-03', 'profil-image-2.jpg'),
(9, 'backpackerlife', 'Kamar Klasik', '1', 'Kamar sangat sederhana dan kebersihan kurang terjaga. Tidak direkomendasikan.', '2023-07-01', 'profil-image-3.jpg'),
(10, 'familyadventures', 'Kamar Family', '4', 'Kamar luas dan cocok untuk keluarga besar. Anak-anak senang dengan fasilitasnya.', '2023-06-28', 'profil-image-4.jpg'),
(11, 'vipguest', 'Kamar VIP', '5', 'Pelayanan kelas atas dan kamar yang mewah. Semua kebutuhan terpenuhi dengan baik.', '2023-06-25', 'profil-image-5.jpg'),
(12, 'romanticgetaway', 'Kamar Romantis', '5', 'Kamar sangat romantis untuk pasangan. Suasana malam yang indah.', '2023-06-23', 'profil-image-6.jpg'),
(13, 'exploringtheworld', 'Kamar Deluxe', '4', 'Kamar dengan pemandangan indah dan dekat dengan objek wisata.', '2023-06-20', 'profil-image-1.jpg'),
(14, 'luxurytraveler', 'Suite Mewah', '5', 'Suite mewah dengan layanan yang istimewa. Harga sebanding dengan fasilitas.', '2023-06-18', 'profil-image-2.jpg'),
(15, 'wanderer123', 'Kamar Standar', '3', 'Kamar standar yang lumayan nyaman. Harganya sepadan dengan kualitas.', '2023-06-15', 'profil-image-3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(15) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `rate` enum('1','2','3','4','5') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lists`
--

INSERT INTO `lists` (`id`, `image`, `title`, `price`, `deskripsi`, `rate`) VALUES
(1, 'url_image_1.jpg', 'Kamar Deluxe ', '100.000', 'Kamar Deluxe dengan pemandangan indah', '4'),
(2, 'url_image_2.jpg', 'Suite Mewah', '250.000', 'Suite mewah dengan fasilitas lengkap', '5'),
(3, 'url_image_3.jpg', 'Kamar Standar', '75.000', 'Kamar Nyaman dengan harga terjangkau', '3'),
(4, 'url_image_4.jpg', 'Kamar Keluarga', '300.000', 'Kamar luas cocok untuk keluarga', '4'),
(5, 'url_image_5.jpg', 'Kamar Superior', '120.000', 'Kamar nyaman dengan fasilitas modern', '2'),
(6, 'url_image_6.jpg', 'Villa Mewah', '180.000', 'Villa mewah dengan kolam renang pribadi', '4'),
(7, 'url_image_7.jpg', 'Kamar Eksekutif', '90.000', 'Kamar dengan fasilitas lengkap untuk eksekutif', '3'),
(8, 'url_image_8.jpg', 'Kamar Hemat', '210.000', 'Kamar hemat dengan kenyamanan terjamin', '5'),
(9, 'url_image_9.jpg', 'Kamar Kelasik', '50.000', 'Kamar sederhana namun nyaman', '1'),
(10, 'url_image_10.jpg', 'Kamar Family', '350.000', 'Kamar luas untuk keluarga', '5'),
(11, 'url_image_11.jpg', 'Kamar VIP', '80.000', 'Kamar VIP dengan pelayanan kelas atas', '3'),
(12, 'url_image_12.jpg', 'Kamar Romantis', '200.000', 'Kamar romantis untuk momen berdua', '5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
