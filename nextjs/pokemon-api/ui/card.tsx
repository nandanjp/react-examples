import { Fragment } from "react";

export const Card = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => {
  return (
    <Fragment>
      <a
        href={href}
        className="group rounded-lg border border-transparent px-6 py-4 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 transition ease-in-out duration-300 hover:translate-x-1 hover:-translate-y-1 flex flex-col"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-xl font-semibold`}>
          {title}{" "}
          {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span> */}
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
      </a>
    </Fragment>
  );
};
