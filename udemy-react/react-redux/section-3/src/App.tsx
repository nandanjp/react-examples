import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="p-12">
      <h1 className="p-4 pb-6 text-center text-3xl">Profile Cards:</h1>
      <div className="flex flex-row w-full justify-evenly items-center gap-4 flex-wrap">
        <ProfileCard title="Amazon" imgUrl="/img/alexa.png" />
        <ProfileCard title="Microsoft" imgUrl="/img/cortana.png" />
        <ProfileCard title="Apple" imgUrl="/img/siri.png" />
      </div>
    </div>
  );
};

export default App;
