interface SectionTitleProps {
  text: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props;

  return (
    <p className="text-3xl text-white tracking-wider max-w-4xl text-left">
      {text}
    </p>
  );
};

export default SectionTitle;
