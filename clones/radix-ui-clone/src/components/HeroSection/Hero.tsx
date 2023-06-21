import MainButton from "../ui/MainButton";
import HeroComponentCardList from "./HeroComponentCardList";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="text-xl text-blue-500 p-10 flex flex-col justify-evenly items-start gap-10">
      <HeroTitle
        title="Why waste time reinventing UI components?"
        description="Unstyled, accessible components for building high-quality design systems and web apps in React."
      />
      <MainButton text="Install Primitives" />
      <HeroComponentCardList />
    </div>
  );
};

export default Hero;
