import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Calendar, Clock } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl mb-4">Project not found</h1>
        <Link to="/work" className="text-blue-600 hover:underline">
          Back to all projects
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="pt-32 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-sm tracking-wide hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm text-gray-500 tracking-wide">{project.category}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
          <h1 className="text-5xl md:text-7xl tracking-tighter mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Project Info Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-3 text-gray-500">
              <Users size={18} />
              <h3 className="text-sm tracking-wide">Client</h3>
            </div>
            <p className="text-lg">{project.client}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-3 text-gray-500">
              <Calendar size={18} />
              <h3 className="text-sm tracking-wide">Duration</h3>
            </div>
            <p className="text-lg">{project.duration}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-3 text-gray-500">
              <Clock size={18} />
              <h3 className="text-sm tracking-wide">Role</h3>
            </div>
            <p className="text-lg">{project.role}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-sm tracking-wide mb-3 text-gray-500">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-1 bg-white rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl tracking-tight mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-wide mb-4 text-gray-500">Team</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.team.map((member) => (
                  <span key={member} className="px-4 py-2 bg-gray-50 rounded-full text-sm">
                    {member}
                  </span>
                ))}
              </div>

              {project.technicalStack && (
                <>
                  <h3 className="text-sm tracking-wide mb-4 text-gray-500">Tech Stack</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technicalStack.frontend.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-black text-white rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.technicalStack.backend && (
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Backend</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technicalStack.backend.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-700 text-white rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl tracking-tight mb-6">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.challenge}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl tracking-tight mb-6">The Solution</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.solution}
          </p>
        </motion.div>
      </div>

      {/* User Research Section */}
      {project.researchFindings && (
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl tracking-tight mb-12"
            >
              Research Insights
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.researchFindings.map((finding, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{finding}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* User Personas */}
      {project.userPersonas && (
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-tight mb-12"
          >
            User Personas
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.userPersonas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl"
              >
                <h3 className="text-2xl tracking-tight mb-2">{persona.name}</h3>
                <p className="text-gray-600 mb-6">{persona.role}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm tracking-wide mb-3 text-gray-500">Goals</h4>
                  <ul className="space-y-2">
                    {persona.goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm tracking-wide mb-3 text-gray-500">Pain Points</h4>
                  <ul className="space-y-2">
                    {persona.painPoints.map((pain) => (
                      <li key={pain} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-500 mt-1">✕</span>
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Design Process Sections */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl tracking-tight mb-16"
          >
            Design Process
          </motion.h2>

          {project.designProcess.map((section, sectionIndex) => (
            <div key={section.title} className="mb-24 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl text-gray-700 tracking-tighter">
                    {String(sectionIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-gray-800" />
                </div>
                <h3 className="text-3xl tracking-tight mb-4">{section.title}</h3>
                <p className="text-gray-400 max-w-3xl leading-relaxed">
                  {section.description}
                </p>
              </motion.div>

              {/* Images based on layout */}
              <div className="space-y-6">
                {section.images.map((image, imageIndex) => {
                  if (image.layout === 'full') {
                    return (
                      <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-500">{image.caption}</p>
                      </motion.div>
                    );
                  }
                  
                  return null;
                })}

                {/* Half layout images - group them */}
                <div className="grid md:grid-cols-2 gap-6">
                  {section.images
                    .filter(img => img.layout === 'half')
                    .map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-500">{image.caption}</p>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl tracking-tight mb-12">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 leading-relaxed pt-1">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation to Next/Previous Projects */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Link to={`/work/${prevProject.id}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={prevProject.image}
                alt={prevProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-white/80 mb-3">
                  <ArrowLeft size={18} />
                  <span className="text-sm tracking-wide">Previous Project</span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl tracking-tight">{prevProject.title}</h3>
                <p className="text-white/70 text-sm mt-2">{prevProject.category}</p>
              </div>
            </motion.div>
          </Link>

          <Link to={`/work/${nextProject.id}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-white/80 mb-3 justify-end">
                  <span className="text-sm tracking-wide">Next Project</span>
                  <ArrowRight size={18} />
                </div>
                <h3 className="text-white text-2xl md:text-3xl tracking-tight text-right">{nextProject.title}</h3>
                <p className="text-white/70 text-sm mt-2 text-right">{nextProject.category}</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
