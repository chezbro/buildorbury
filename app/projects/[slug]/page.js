import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const projects = {
  tripshaman: { 
    title: 'TripShaman', 
    description: 'A travel planning app that helps you discover hidden gems.',
    features: ['Personalized itineraries', 'Local recommendations', 'Budget tracking']
  },
  codecollab: { 
    title: 'CodeCollab', 
    description: 'Real-time collaborative coding platform for teams.',
    features: ['Live code sharing', 'Video conferencing', 'Version control integration']
  },
  healthtrack: { 
    title: 'HealthTrack', 
    description: 'Personal health and fitness tracking application.',
    features: ['Activity monitoring', 'Nutrition logging', 'Progress visualizations']
  },
};

export default function Project({ params }) {
  const { slug } = params;
  const project = projects[slug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-8 animate-slide-up">{project.description}</p>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
          <ul className="list-disc pl-6">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600 mb-2">{feature}</li>
            ))}
          </ul>
        </div>
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}