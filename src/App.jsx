import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));

function Home() {
   return (
      <main className='min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100'>
         <h1 className='text-5xl font-bold text-blue-400 mb-4'>🏠 Home Page</h1>
         <p className='text-gray-400 mb-6'>
            Welcome! Click below to learn more about Tesla.
         </p>

         <Link
            to='/about'
            className='bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-6 rounded-lg shadow-md'
         >
            Go to About Page
         </Link>
      </main>
   );
}

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route
               path='/about'
               element={
                  <Suspense
                     fallback={
                        <div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black'>
                           <h2 className='text-center text-gray-400 text-2xl sm:text-3xl md:text-4xl font-semibold animate-pulse'>
                              Loading...
                           </h2>
                        </div>
                     }
                  >
                     <About />
                  </Suspense>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}
