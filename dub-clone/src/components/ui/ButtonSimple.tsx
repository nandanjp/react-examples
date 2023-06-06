type typeButtonSimple = {
  text: string;
  alternative?: boolean;
};

const ButtonSimple = (props: typeButtonSimple) => {
  let { alternative } = props;
  const { text } = props;

  alternative ??= false;

  if (alternative) {
    return (
      <button className="text-sm transition ease-in-out bg-transparent text-slate-950 hover:border-neutral-950 border-solid border-2 rounded-full py-2 px-5">
        {text}
      </button>
    );
  }
  return (
    <button className="text-sm transition ease-in-out bg-neutral-950 text-white hover:bg-white hover:text-black border-solid border-2 border-neutral-950 py-2 px-5 rounded-full shadow-lg">
      {text}
    </button>
  );
};

export default ButtonSimple;
