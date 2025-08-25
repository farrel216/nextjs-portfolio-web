import * as image from "../../public/images";
import icon from "./Icon";

const exp = [
  {
    position: "IT Infrastructure Automation",
    company: "PT Bank CIMB Niaga Tbk.",
    time: `Oct '24 - Present`,
    address: "Tangerang Selatan, Indonesia",
    description: `Infrastructure as a Code Developer`,
  },
  {
    position: "Software Developer",
    company: "Randstack Innovation Lab",
    time: `Feb '24 - Dec '24`,
    address: "Jakarta, Indonesia",
    description: `Working as a Backend Developer`,
  },
  {
    position: "Full Stack Developer",
    company: "Ministry of Education, Culture and Research",
    time: `Aug '23 - Des '23`,
    address: "Jakarta, Indonesia",
    description: `Developed a dashboard feature on the resource directorate web
    and create a REST API that provide API to integrate cloud database and ditdaya dashboard with JWT authentication.`,
  },
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
    title: "API Docusign Integration",
    img: image.docusign,
    alt: "Docusign API Integration",
    tech: [icon.express, icon.react, icon.docusign],
  },
  {
    title: "KTP Image Detection",
    img: image.ktp,
    alt: "CNN KTP Image Detection",
    tech: [icon.python],
    demo: "https://colab.research.google.com/drive/1h6hkDPyvdFPy8tNxMd4WpWab9amCzN4X",
  },
  {
    title: "Dashboard Ditdaya Kemdikbud",
    img: image.dashboard,
    alt: "Dashboard Ditdaya Kemdikbud",
    tech: [icon.laravel, icon.grafana, icon.postgre],
    demo: "https://ditdaya.kemdikbud.go.id/dashboard-sumberdaya",
  },
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
