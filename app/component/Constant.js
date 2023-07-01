import * as image from "../../public/images";
import icon from "./Icon";

const exp = [
  {
    position: "Computer Network Laboratory Assistant",
    company: "Diponegoro University",
    time: `Feb '23 - May '23`,
    address: "Semarang, Indonesia",
    description: `Facilitated lecturer to provide guidance, discussion, and encourage skills to 58 of total computer science once a week for learning concepts, technologies, and principles used in the development and management of computer networks.`,
  },
  {
    position: "Algorithm Analysis and Strategy Laboratory Assistant",
    company: "Diponegoro University",
    time: `Feb '23 - May '23`,
    address: "Semarang, Indonesia",
    description: `Facilitated lecturer to provide guidance, discussion, and encourage skills to 53 of total computer science students once a week about how to design, analyze, and implement algorithms efficiently and effectively in solving certain problems.`,
  },
  {
    position: "Web Developer Intern",
    company: "PT Rekayasa Agromarin Indonesia",
    time: `Aug '22 - Des '22`,
    address: "Jepara, Indonesia",
    description:
      'Developed a software to receive and collect data from sensors installed in the fishing environment in real time. Part of "Magang Bersertifikat Kampus Merdeka Matching Fund KEDAIREKA"',
  },
];

const project = [
  {
    title: "E-Commerce Website",
    img: image.ecomm,
    alt: "Website E-Commerce",
    tech: [icon.express, icon.react, icon.tailwind, icon.mongodb],
    github: "https://github.com",
    demo: "https://monitoring.cemebsa.com",
  },
  {
    title: "Monitoring Sensor Website",
    img: image.monitoring,
    alt: "Website Monitoring",
    tech: [icon.codeigniter, icon.bootstrap, icon.mysql],
    github: "https://github.com/farrel216/KJABB-Monitoring-Web",
    demo: "https://monitoring.cemebsa.com",
  },
  {
    title: "Sentiment Analysis IKN",
    alt: "Sentiment Analysis",
    tech: [icon.flask, icon.python],
    img: image.ikn,
    demo: "https://iknlogosentiment.onrender.com/",
    github: "https://github.com/farrel216/GEMASTIK-SentimentAnalysisLogoIKN",
  },
  {
    title: "Predict Stress Level",
    img: image.clustering,
    alt: "Website Clustering",
    tech: [icon.flask, icon.python, icon.bootstrap],
    demo: "https://predict-stress-level.onrender.com/",
    github: "https://github.com/farrel216/ML-Clustering",
  },
  {
    title: "Koperasi Kejujuran",
    img: image.koperasi,
    alt: "Koperasi Kejujuran",
    tech: [icon.laravel, icon.bootstrap, icon.mysql],
    github: "https://github.com/farrel216/koperasi_kejujuran",
  },
  {
    title: "SIA Informatika",
    img: image.sia,
    alt: "SIA IF",
    tech: [icon.php, icon.bootstrap, icon.mysql],
    github: "https://github.com/farrel216/PPL_C_2022_6",
  },
  {
    title: "Image Classification",
    img: image.klasifikasi,
    alt: "Klasifikasi Gambar",
    tech: [icon.python],
    github: "https://github.com/farrel216/rockpaperscissors-dicoding",
  },
  {
    title: "Truck Game OpenGL",
    img: image.truk,
    alt: "Truck Game",
    tech: [icon.cpp, icon.opengl],
    github: "https://github.com/farrel216/game-trukgandeng",
  },
  {
    title: "Ticket Sale MVC",
    alt: "Ticket",
    tech: [icon.java],
    github: "https://github.com/farrel216/TiketPenjualan-MVC",
  },
  {
    title: "TCP Connection",
    alt: "TCP",
    tech: [icon.java],
    github: "https://github.com/farrel216/TCPconnection",
  },
];

export { exp, project };
