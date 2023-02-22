import Navbar from "./components/navbar";
// import photo from '../src/assets/'
const Home = () => {
    return (
        <div className="bg-[url('../src/assets/home/background-home-mobile.jpg')] h-screen bg-cover bg-no-repeat md:bg-[url('../src/assets/home/background-home-desktop.jpg')] md:h-screen md:bg-cover md:bg-no-repeat">
        <Navbar/>
        </div>
    );
}
 
export default Home;