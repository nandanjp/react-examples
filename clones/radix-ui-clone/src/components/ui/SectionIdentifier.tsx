interface SectionIdentifierProps {
  text: string;
}

const SectionIdentifier = (props: SectionIdentifierProps) => {
  const { text } = props;
  return (
    <p className="text-[#0bc5b3] text-md tracking-wide text-left capitalize">
      {text}
    </p>
  );
};

export default SectionIdentifier;
