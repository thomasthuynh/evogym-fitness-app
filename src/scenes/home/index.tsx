import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 100, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home page text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 100, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>

            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="md:justify-items flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16">
          <img src={HomePageGraphic} alt="Home page graphic" />
        </div>
      </motion.div>

      {/* SPONSERS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="Redbull sponsor" />
              <img src={SponsorForbes} alt="Forbes sponsor" />
              <img src={SponsorFortune} alt="Fortune sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default index;
