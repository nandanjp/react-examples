interface HeroTitleProps {
  title: string;
  description: string;
}

const HeroTitle = (props: HeroTitleProps) => {
  const { title, description } = props;

  return (
    <div className="flex flex-col gap-6 justify-start items-start min-w-full px-10 pt-8">
      <p className="text-7xl text-white tracking-wider font-semibold max-w-xl self-start">
        {title}
      </p>
      <p className="text-2xl text-white/40 tracking-wide max-w-xl self-start">
        {description}
      </p>
    </div>
  );
};

export default HeroTitle;
