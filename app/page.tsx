import CompetitionJourney from "./components/CompetitionJourney";
import Banner from "./components/Banner";
import QuesAns from "./components/QuesAns";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";
import PartnersSponsors from "./components/PartnersSponsors";

const partnerLogos = [
  { src: "/onushonditshu.jpg", href: "https://partner1.com" },
  { src: "/BRACU.png", href: "https://www.bracu.ac.bd" },
  { src: "/Diganta.jpg", href: "https://www.facebook.com/profile.php?id=61574161791951" },
];

const sponsorLogos = [
  { src: "/sponsor1.jpg", href: "https://sponsor1.com" },
  { src: "/sponsor2.jpg", href: "https://sponsor2.com" },
  { src: "/sponsor3.jpg", href: "https://sponsor3.com" },
];

export default function Home() {
  return (
    <div className="scroll-smooth px-6 sm:py-10 space-y-20 max-w-4xl mx-auto">
      <div id="banner">
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="journey">
        <CompetitionJourney />
      </div>

      <div id="register">
        <RegisterForm />
      </div>

      <div id="questions">
        <QuesAns />
      </div>

      {/* Partners and Sponsors Section */}
      <div id="partners-sponsors" className="space-y-16">
        <PartnersSponsors logos={partnerLogos} title="Our Partners" />
        <PartnersSponsors logos={sponsorLogos} title="Our Sponsors" />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}
