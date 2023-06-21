import CompanyLogo, { Company } from "./CompanyLogo";

const companies: Company[] = [
  Company.Notion,
  Company.Discord,
  Company.Instagram,
  Company.LinkedIn,
  Company.Figma,
  Company.Vercel,
  Company.GitHub,
];

const CompanyList = () => {
  return (
    <div className="flex flex-row gap-6 justify-evenly items-center p-2">
      {companies.map((company, index) => (
        <CompanyLogo company={company} key={index} />
      ))}
    </div>
  );
};

export default CompanyList;
