import TestimonialCard from "../ui/TestimonialCard";

const TestimonialsList = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-8 min-w-full flex-wrap">
      <TestimonialCard
        testimonial="We've been able to focus on building solid user experiences on top of Radix primitives. With UI components, there are just too many angles and rabbit holes to cover for product teams that wish to move quickly."
        company="Vercel"
        userName="Rauno Freiberg, UI Engineer at Vercel"
      />
      <TestimonialCard
        testimonial="Radix has significantly improved the accessibility standard in our components. We spend far less time discussing and implementing keyboard navigation, focus traps, and researching appropriate ARIA techniques for our components."
        company="CodeSandbox"
        userName="Scott Hutcheson, Product Engineer at CodeSandbox"
      />
    </div>
  );
};

export default TestimonialsList;
