import ImageShow from "./ImageShow";

interface ImageListProps {
  imageLinks: string[];
}

const ImageList = (props: ImageListProps) => {
  const { imageLinks } = props;

  return (
    <div className="grid lg:grid-cols-3 sm:grid-col-1 grid-flow-row gap-16 justify-center">
      {imageLinks.map((imageLink, index) => {
        return <ImageShow imageLink={imageLink} key={index} />;
      })}
    </div>
  );
};

export default ImageList;
