import SectionIdentifier from "../ui/SectionIdentifier";
import SectionTitle from "../ui/SectionTitle";
import ReasonList from "./ReasonList";

const WhyRadix = () => {
  return (
    <div className="flex flex-col justify-evenly items-start gap-10 min-w-full">
      <div className="flex flex-col justify-evenly items-start gap-4">
        <SectionIdentifier text="Why Radix Primitives" />
        <SectionTitle text="Spend less time on undifferentiated work" />
        <ReasonList />
      </div>
    </div>
  );
};

export default WhyRadix;
