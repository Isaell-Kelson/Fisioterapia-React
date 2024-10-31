'use client';
import Gallery from "./components/gallery";
import Header from "./components/header";
import Info from "./components/info";
import Intro from "./components/intro";
import Work from "./components/work";
import Comments from "./components/comments";
import Footer from "./components/footer";
import Region from "@/app/components/localization";



export default function Home() {
    return (
        <main>
            < Header/>
            < Intro/>
            < Info/>
            < Work/>
            < Gallery/>
            < Comments/>
            < Region/>
            < Footer/>
        </main>
    );
}
