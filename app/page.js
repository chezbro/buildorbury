import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

const projects = [
  { title: 'TripShaman', description: 'A travel planning app that helps you discover hidden gems.', slug: 'tripshaman' },
  { title: 'CodeCollab', description: 'Real-time collaborative coding platform for teams.', slug: 'codecollab' },
  { title: 'HealthTrack', description: 'Personal health and fitness tracking application.', slug: 'healthtrack' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-fade-in">Welcome to BuildOrBury</h1>
          <p className="text-xl text-gray-600 animate-slide-up">Showcasing innovative NextJS and ReactJS web applications</p>
        </section>
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section id="contact" className="text-center animate-fade-in">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">Interested in collaborating or have questions? Let's connect!</p>
          <a href="mailto:your.email@example.com" className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition-colors">
            Contact Me
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}