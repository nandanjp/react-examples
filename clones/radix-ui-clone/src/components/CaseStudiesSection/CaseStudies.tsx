import BasicLink from "../ui/BasicLink";
import CompanyList from "../ui/CompanyList";
import SectionIdentifier from "../ui/SectionIdentifier";
import SectionTitle from "../ui/SectionTitle";
import TestimonialsList from "./TestimonialsList";
import WhyRadix from "./WhyRadix";

const CaseStudies = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-24 min-w-[60%] py-12 px-16">
      <div className="flex flex-col justify-evenly items-start gap-6 self-start">
        <div className="flex flex-col justify-evenly items-start gap-2 self-start">
          <SectionIdentifier text="Case Studies" />
          <SectionTitle text="World-class teams use Radix Primitives to power their products" />
        </div>
        <TestimonialsList />
        <BasicLink text="And dozens more companies" />
        <CompanyList />
      </div>
      <WhyRadix />
    </div>
  );
};

export default CaseStudies;
