import {Navbar} from "../../components";
import Video from "../../video/Video";
import Header from "../../components/Header";
import Services from "../../components/services/Services";
import ParticlesDemo from "./Particles";

export default function Home() {
    return (
        <div class="wrapper">
           {/**  <Navbar/> */}
            <Header/>
            <Video />
            <Services />

        </div>
    );
    }