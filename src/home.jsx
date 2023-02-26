import Navbar from "./components/navbar";
// import photo from '../src/assets/'
const Home = () => {
  return (
    <div className="bg-[url('../public/assets/home/background-home-mobile.jpg')] h-screen bg-cover bg-no-repeat md:bg-[url('../public/assets/home/background-home-desktop.jpg')] md:h-screen md:bg-cover md:bg-no-repeat ">
      <div className="md:container md:mx-auto">
        <Navbar />
        <div className="p-8 md:flex md:items-center md:justify-center md:mt-20">
          <div className="md:w-1/2 ">
            <h1 className="text-fontWhite text-center pt-8x uppercase text-xl font-Barlow md:text-start md:text-3xl">
              SO,You Want To Travel To
            </h1>
            <h1 className="text-center text-white font-Bellefair p-6 text-6xl md:text-start md:text-9xl">
              SPACE
            </h1>
            <p className="text-fontWhite text-center text-lg font-Barlow md:text-start md:text-xl">
              Let’s face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </div>
          <div className="rounded-full w-20 h-20 p-20  text-2xl font-semibold mx-auto bg-white mt-12 flex justify-center items-center md:w-30 md:h-30 md:p-36">
            <p className=" font-Bellefair">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
