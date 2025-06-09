import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Router />
      </main>
      <footer className="bg-white border-t mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Random Recipe Generator © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}


