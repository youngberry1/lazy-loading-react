import { Link } from 'react-router-dom';

export default function About() {
   return (
      <main className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 flex items-center justify-center p-8'>
         <section className='max-w-3xl bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-8 relative'>
            <h1 className='text-4xl font-extrabold text-center mb-6 text-blue-400 tracking-tight'>
               🚗 About Tesla Motors
            </h1>

            <p className='text-gray-300 leading-relaxed mb-4'>
               Tesla Motors, founded in 2003 by a group of engineers including
               Elon Musk, set out with a bold mission — to accelerate the
               world’s transition to sustainable energy. Today, Tesla is a
               leader in electric vehicles, clean energy solutions, and
               cutting-edge battery technology.
            </p>

            <p className='text-gray-300 leading-relaxed mb-4'>
               The company’s first car, the Roadster, proved that electric
               vehicles could deliver incredible performance. Later models like
               the Model S, Model 3, Model X, and Model Y made EVs accessible to
               a much wider audience while setting new standards for safety and
               efficiency.
            </p>

            <p className='text-gray-300 leading-relaxed mb-4'>
               Beyond cars, Tesla has expanded into solar panels, battery
               storage systems, and autonomous driving software. Each innovation
               brings the company closer to its vision of a cleaner, more
               sustainable future for all.
            </p>

            <blockquote className='border-l-4 border-blue-500 pl-4 italic text-gray-400 mt-6'>
               “When something is important enough, you do it even if the odds
               are not in your favor.” — Elon Musk
            </blockquote>

            {/* ✅ Styled Back Button */}
            <nav className='text-center mt-10'>
               <Link
                  to='/'
                  className='inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-blue-500/40'
               >
                  ← Back to Home
               </Link>
            </nav>
         </section>
      </main>
   );
}
