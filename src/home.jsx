import Navbar from "./components/navbar";
// import photo from '../src/assets/'
const Home = () => {
  return (
    <div className="bg-[url('../public/assets/home/background-home-mobile.jpg')] h-screen bg-cover bg-no-repeat md:bg-[url('../src/assets/home/background-home-desktop.jpg')] md:h-screen md:bg-cover md:bg-no-repeat">
      <Navbar />
      <div className="p-8 mt-4">
        <h1 className="text-fontWhite text-center pt-8x uppercase text-xl font-Barlow">
          SO,You Want To Travel To
        </h1>
        <h1 className="text-center text-white font-Bellefair p-6 text-6xl">
          SPACE
        </h1>
        <p className="text-fontWhite text-center text-lg font-Barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div className="rounded-full w-20 h-20 p-20  text-2xl font-semibold mx-auto bg-white mt-12 flex justify-center items-center">
          <p className=" font-Bellefair">Explore</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
