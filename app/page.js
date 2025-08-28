import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/headerSection/Header";
import Dashboard from "@/components/dashboard/Dashboard";
import Footer from "@/components/footerSection/Footer";

export default function Home() {
  return (
    <>
       <Header/>
       <Dashboard/>
       <Footer/>
    </>
  );
}
