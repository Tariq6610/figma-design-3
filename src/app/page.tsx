import ClientsResponse from "@/components/ClientsResponse";
import Customise from "@/components/Customise";
import Extension from "@/components/Extension";
import FavoriteApps from "@/components/FavoriteApps";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Proj_Work_Container from "@/components/Proj-Work-Container";
import SponcersAndData from "@/components/SponcersAndData";
import Try_taskey from "@/components/Try-taskey";



export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <Proj_Work_Container />
    <Extension />
    <Customise />
    <Plan />
    <Try_taskey />
    <SponcersAndData />
    <FavoriteApps />
    <ClientsResponse />
    <Footer />
   </>
  );
}
