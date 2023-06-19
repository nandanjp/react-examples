interface ImageShowProps {
  imageLink: string;
}

const ImageShow = (props: ImageShowProps) => {
  const { imageLink } = props;

  return (
    <div className="bg-black shadow-lg shadow-blue-300 rounded-xl border-2 border-white/25 p-4">
      <img
        src={imageLink}
        alt="some car image I guess"
        className="object-contain rounded-xl shadow-lg"
      />
    </div>
  );
};

export default ImageShow;
