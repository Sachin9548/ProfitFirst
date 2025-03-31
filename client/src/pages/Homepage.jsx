import Blogsection from "../components/Blogsection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import ProfitAnalyticsSection from "../components/ProfitAnalyticsSection";
import RetentionAnalyticsSection from "../components/RetentionAnalyticsSection";
import SDKIntegrationsSection from "../components/SDKIntegrationsSection";
import SolutionsSection from "../components/SolutionsSection";
import TrustedBrandsMarquee from "../components/TrustedBrandsMarquee";

const Homepage = () => {
    return (
        // <div className="bg-[linear-gradient(135deg,#33C375,#002726)]">
        // <div   style={{ background: 'linear-gradient(to bottom, #0f0f0f, #000000 90%)' }}>
        <div className="bg-[#101218]">

        <Navbar />
        <Herosection/>
        <TrustedBrandsMarquee/>
        <SDKIntegrationsSection/>
        <SolutionsSection/>
        <ProfitAnalyticsSection/>
        <RetentionAnalyticsSection/>
        <Blogsection/>
        <Pricing/>
        <FAQ/>
        <Footer/>
        </div>
      
    )
}

export default Homepage;