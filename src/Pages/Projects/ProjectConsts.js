import currcon from '../../assets/ProjectImages/currency-convertor.png'
import passgen from "../../assets/ProjectImages/password-generator.png"
import qrgen from "../../assets/ProjectImages/qr-generator.png"
import huffman from "../../assets/ProjectImages/huffman.png"
import spm from "../../assets/ProjectImages/spm.png"
import lpg from "../../assets/ProjectImages/lpg.png"
import heart from "../../assets/ProjectImages/heart.png"

const projects = [
    {
      id: 1,
      title: " Learning Path Generator",
      description: "Developed an AI-powered Learning Path Generator using React.js and modern UI libraries, enabling users to create structured, goal-oriented learning roadmaps in seconds. Built a scalable, component-driven frontend with a polished Polaris design system, featuring dynamic modules, progress tracking, and responsive layouts for seamless cross-device usage. Integrated API-driven content fetching and optimized state management to ensure fast, intuitive, and engaging learning experiences.",
      image: lpg, 
      liveLink: "https://learning-path-generator-sigma.vercel.app/",
      repoLink: "https://github.com/lokii9024/learning_path_generator",
    },
    {
      id: 2,
      title: " Secure Password Manager",
      description: "Developed a secure Password Manager using React.js, Node.js, Express, and MongoDB, ensuring complete protection of user credentials with AES-256 encryption. Optimized retrieval speed with indexed queries for instant access and built a responsive, minimal UI using Tailwind CSS and Shadcn, achieving seamless usability across devices.",
      image: spm, 
      liveLink: "https://pass-manager-frontend-kohl.vercel.app/",
      repoLink: "https://github.com/lokii9024/pass-manager-Backend",
    },
    {
      id: 3,
      title: "Heart Disease Predictor",
      description: "Developed a Heart Disease Prediction web application using Python, Streamlit, and Scikit-learn, leveraging an SVM model to accurately assess patient risk based on clinical parameters. Implemented feature scaling and preprocessing pipelines to ensure reliable predictions, and integrated real-time probability outputs for better interpretability. Designed an interactive and responsive UI for seamless user input and instant results, demonstrating end-to-end machine learning deployment from model training to production-ready application.",
      image: heart, 
      liveLink: "https://heart-disease-prediction-app-iul4eabs7wih7n5javvrrl.streamlit.app/",
      repoLink: "https://github.com/lokii9024/Heart-Disease-Prediction-App"
    },
    {
      id: 4,
      title: "Huffman Compressor",
      description: "Developed a Huffman-based text file compressor/decompressor achieving up to 65–75% size reduction for large datasets. Implemented a custom binary header format to minimize metadata overhead and designed an interactive Huffman Tree visualization to enhance algorithm explainability. Built an analytics dashboard displaying compression results, improving transparency and user understanding of performance gains.",
      image: huffman, 
      liveLink: "https://huffpress-psi.vercel.app/",
      repoLink: "https://github.com/lokii9024/huffman-compressor-web-",
    },
    {
      id: 5,
      title: "Password-generator",
      description: "A React-based Random Password Generator web app styled with Tailwind CSS. Users can customize password length and include letters, numbers, and special characters. Features instant copy functionality for seamless usability.",
      image: passgen,
      liveLink: "https://password-generator-theta-amber-26.vercel.app/",
      repoLink: "https://github.com/lokii9024/password-generator",
    },
    {
      id: 6,
      title: "Currency-Convertor",
      description: "Interactive currency converter tool built with HTML, CSS, and JavaScript, allowing users to convert between multiple currencies.",
      image: currcon, 
      liveLink: "https://cuurency-convertor.vercel.app/",
      repoLink: "https://github.com/lokii9024/tic-tac-toe",
    },
    {
      id: 7,
      title: "QR-Generator",
      description: "A simple QR Code Generator web app built with HTML, CSS, and JavaScript. Enter any URL to instantly generate a scannable QR code, with options to download and share easily.",
      image: qrgen,
      liveLink: "https://qr-generator-plum.vercel.app/",
      repoLink: "https://github.com/lokii9024/QR-Generator",
    },
  ];

  export default projects