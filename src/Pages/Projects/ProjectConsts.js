import currcon from '../../assets/ProjectImages/currency-convertor.png'
import passgen from "../../assets/ProjectImages/password-generator.png"
import qrgen from "../../assets/ProjectImages/qr-generator.png"

const projects = [
    {
      id: 1,
      title: "Currency-Convertor",
      description: "Interactive currency converter tool built with HTML, CSS, and JavaScript, allowing users to convert between multiple currencies.",
      image: currcon, 
      liveLink: "https://cuurency-convertor.vercel.app/",
      repoLink: "https://github.com/lokii9024/tic-tac-toe",
    },
    {
      id: 2,
      title: "Password-generator",
      description: "A React-based Random Password Generator web app styled with Tailwind CSS. Users can customize password length and include letters, numbers, and special characters. Features instant copy functionality for seamless usability.",
      image: passgen,
      liveLink: "https://password-generator-theta-amber-26.vercel.app/",
      repoLink: "https://github.com/lokii9024/password-generator",
    },
    {
      id: 3,
      title: "QR-Generator",
      description: "A simple QR Code Generator web app built with HTML, CSS, and JavaScript. Enter any URL to instantly generate a scannable QR code, with options to download and share easily.",
      image: qrgen,
      liveLink: "https://qr-generator-plum.vercel.app/",
      repoLink: "https://github.com/lokii9024/QR-Generator",
    },
  ];

  export default projects