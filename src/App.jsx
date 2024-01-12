import {Navbar, Header , Download , Subscribe , Faq , Footer} from './components/index'

function App() {
  return (
    <main>
        <header className="header-bg">
          <Navbar />
          <Header />
        </header>
        <Header />
        <Download />
        <Subscribe />
        <Faq />
        <Footer />
    </main>
  );
} 

export default App;
