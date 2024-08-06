import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import { Inter } from "next/font/google";
import "@/public/assets/lib/animate/animate.min.css";
import "@/public/assets/lib/lightbox/css/lightbox.min.css";
import "@/public/assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/style.css";
import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import HeadComponent from "@/components/HeadComponent";
import ScripsTag from "@/components/ScripsTag";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SIYAM - Personal Portfolio HTML Template",
  description:
    "As a student, time constraints limited my ability to dedicate full effort to coding projects. However, with my experience in web development, I am now free to invest my skills and time into creating meaningful and impactful projects. Excited to unleash my full potential in the world of web development, I am prepared to take on challenges and contribute innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset="51"
        className={inter.className}
      >
        <Spinner />
        <Navbar />
        {children}
        <Copyright />
        <ScripsTag />
      </body>
    </html>
  );
}
