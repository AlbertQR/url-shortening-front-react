import { AdvancedStatistics, Footer, GetStartedPanel, Header, Navbar, Shorten } from '../components/User';

export const Home = () => {
  return (
    <>
      <header className="bg-white">
        <Navbar/>
        <Header/>
      </header>
      <main>
        <Shorten/>
        <AdvancedStatistics/>
      </main>
      <GetStartedPanel/>
      <Footer/>
    </>
  );
}