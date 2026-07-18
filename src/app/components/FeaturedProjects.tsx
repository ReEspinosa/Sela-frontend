import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-4">Featured Work</h2>
            <p className="text-gray-600 text-lg">
              Selected projects showcasing design and development expertise
            </p>
          </div>
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 text-sm tracking-wide hover:gap-4 transition-all"
            >
              View All Projects
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-sm tracking-wide"
            >
              View All Projects
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
