import Banner from "@/components/Banner";
import CardVideoSection from "@/components/CardVideoSection";
import Footer from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     
     <HomeNavbar/>
     <Banner/>
     <CardVideoSection/>
     <Footer/>
     </main>
  );
}
  