import "../assets/css/style.css";
import Clients from "../components/clients";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Pricing from "../components/pricing";


export default function Homepage() {
    return (
        <div className="body-wrap">
            <Header />
            
            <main className="site-content">
                
                <Hero />
                <Clients />
                <Features />
                <Pricing />
            </main>
            <Footer />
        </div>

    )
}
