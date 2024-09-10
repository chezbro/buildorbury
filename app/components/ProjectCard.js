import Link from 'next/link';

const ProjectCard = ({ title, description, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href="/tripshaman"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          View TripShaman
        </Link>
        <Link 
          href="/traderschool"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          View TraderSchool
        </Link>        
      </div>
    </div>
  );
};

export default ProjectCard;