import WhyRadixCard from "../ui/WhyRadixCard";

const ReasonList = () => {
  return (
    <div className="flex flex-row justify-evenly items-start gap-6 min-w-full flex-wrap">
      <WhyRadixCard
        title="Save time. Ship faster."
        description="It takes a lot of time to develop and maintain robust UI components, and it's mostly undifferentiated work. Building on top of Radix components will save you time and money, so you can ship a better product faster."
      />
      <WhyRadixCard
        title="Save time. Ship faster."
        description="It's no secret that robust UI components are tricky to build. Nailing accessibility details and complex logic sucks time away from product feature development. With Radix, you can focus on your unique engineering challenges instead."
      />
    </div>
  );
};

export default ReasonList;
