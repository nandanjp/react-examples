interface CardProps {
  title: string;
  imgUrl: string;
  handle?: string;
}

const ProfileCard = (props: CardProps) => {
  const { title, imgUrl } = props;
  return (
    <div className="flex flex-col justify-evenly items-center gap-2 w-96 rounded-3xl bg-white/25 text-gray-300 px-4 py-6 shadow-lg border border-1 border-white/50 hover:translate-x-1 hover:-translate-y-1 hover:bg-white/50 hover:text-white transition duration-300 ease-in-out min-h-96">
      <h1 className="text-2xl pb-4 px-2 tracking-wider">{title}</h1>
      <img
        src={imgUrl}
        alt={`${title}'s Voice Assistant`}
        // className="rounded-3xl object-contain py-2 min-h-2/5 min-w-full"
        className="rounded-3xl object-contain py-2"
      />
      <p className="w-full p-4 min-h-2/5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        suscipit totam voluptatem officia eius porro dolore, rem praesentium
        aperiam inventore id enim deserunt eveniet similique in ipsam numquam
        doloribus sint.
      </p>
    </div>
  );
};

export default ProfileCard;
