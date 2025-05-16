import CarShow from "./Carshow";
import { Certificates } from "./Certificates";
import { Flipers } from "./Flipers";
import { HowItWorks } from "./HowItWorks";
import { Show } from "./Show";
import { CommingSoon } from "./CommingSoon";
import SlickSection from "./SlickSection";
import useTitle from "../../Hooks/UseTitle";

export const Home = () => {
  useTitle("Home");
  return (
    <>
      <CarShow />
      <Certificates />
      <Flipers />
      <SlickSection />
      <HowItWorks />
      <Show />
      <CommingSoon />
    </>
  );
};
