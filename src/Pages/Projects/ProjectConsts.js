import currcon from '../../assets/ProjectImages/currency-convertor.png'
import passgen from "../../assets/ProjectImages/password-generator.png"
import qrgen from "../../assets/ProjectImages/qr-generator.png"
import huffman from "../../assets/ProjectImages/huffman.png"
import spm from "../../assets/ProjectImages/spm.png"

const projects = [
    {
      id: 1,
      title: " Secure Password Manager",
      description: "Developed a secure Password Manager using React.js, Node.js, Express, and MongoDB, ensuring complete protection of user credentials with AES-256 encryption. Optimized retrieval speed with indexed queries for instant access and built a responsive, minimal UI using Tailwind CSS and Shadcn, achieving seamless usability across devices.",
      image: spm, 
      liveLink: "https://pass-manager-frontend-kohl.vercel.app/",
      repoLink: "https://github.com/lokii9024/pass-manager-Backend",
    },
    {
      id: 2,
      title: "Huffman Compressor",
      description: "Developed a Huffman-based text file compressor/decompressor achieving up to 65–75% size reduction for large datasets. Implemented a custom binary header format to minimize metadata overhead and designed an interactive Huffman Tree visualization to enhance algorithm explainability. Built an analytics dashboard displaying compression results, improving transparency and user understanding of performance gains.",
      image: huffman, 
      liveLink: "https://huffpress-psi.vercel.app/",
      repoLink: "https://github.com/lokii9024/huffman-compressor-web-",
    },
    {
      id: 3,
      title: "Password-generator",
      description: "A React-based Random Password Generator web app styled with Tailwind CSS. Users can customize password length and include letters, numbers, and special characters. Features instant copy functionality for seamless usability.",
      image: passgen,
      liveLink: "https://password-generator-theta-amber-26.vercel.app/",
      repoLink: "https://github.com/lokii9024/password-generator",
    },
    {
      id: 4,
      title: "Currency-Convertor",
      description: "Interactive currency converter tool built with HTML, CSS, and JavaScript, allowing users to convert between multiple currencies.",
      image: currcon, 
      liveLink: "https://cuurency-convertor.vercel.app/",
      repoLink: "https://github.com/lokii9024/tic-tac-toe",
    },
    {
      id: 5,
      title: "QR-Generator",
      description: "A simple QR Code Generator web app built with HTML, CSS, and JavaScript. Enter any URL to instantly generate a scannable QR code, with options to download and share easily.",
      image: qrgen,
      liveLink: "https://qr-generator-plum.vercel.app/",
      repoLink: "https://github.com/lokii9024/QR-Generator",
    },
  ];

  export default projects