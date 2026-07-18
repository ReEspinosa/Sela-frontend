import { motion } from 'motion/react';
import { Code2, Palette, Layers, Sparkles, Award, Users, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description: 'Expert in modern web technologies including React, TypeScript, and Node.js',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful, user-centered interfaces with attention to detail',
  },
  {
    icon: Layers,
    title: 'Architecture',
    description: 'Building scalable systems with clean, maintainable code',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Pushing boundaries with creative solutions and cutting-edge tech',
  },
];

const stats = [
  { icon: Award, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Zap, value: '8+', label: 'Years Experience' },
];

const experience = [
  {
    company: 'Creative Digital Agency',
    role: 'Senior Creative Developer',
    period: '2020 - Present',
    description: 'Leading digital product development and design for Fortune 500 clients and innovative startups.',
  },
  {
    company: 'Tech Startup Inc.',
    role: 'Lead Product Designer',
    period: '2018 - 2020',
    description: 'Designed and shipped multiple successful product features, growing the user base from 10K to 500K users.',
  },
  {
    company: 'Design Studio',
    role: 'UI/UX Designer',
    period: '2016 - 2018',
    description: 'Crafted beautiful user experiences for web and mobile applications across various industries.',
  },
];

export function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                I&apos;m a multidisciplinary creative professional with over 8 years of experience 
                in digital product design and development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My work combines technical expertise with creative vision to build experiences 
                that are not only functional but delightful. I believe in the power of design 
                to solve complex problems and create meaningful connections.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently based in San Francisco, working with startups and established 
                brands to bring their digital visions to life. When I&apos;m not designing or coding, 
                you can find me exploring new technologies, contributing to open source, or 
                speaking at design conferences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl tracking-tight mb-6">Core Expertise</h3>
              <div className="space-y-3">
                {['User Interface Design', 'Front-end Development', 'Interactive Prototyping', 
                  'Design Systems', 'Motion Design', '3D & WebGL', 'Brand Identity', 
                  'User Research'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="bg-black text-white py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-4" size={40} />
                <div className="text-5xl tracking-tight mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl tracking-tight mb-12"
        >
          What I Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <skill.icon className="mb-4" size={32} />
              <h4 className="text-xl tracking-tight mb-2">{skill.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl tracking-tight mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-black pl-6"
              >
                <div className="text-sm text-gray-500 mb-2">{job.period}</div>
                <h3 className="text-2xl tracking-tight mb-1">{job.role}</h3>
                <div className="text-gray-600 mb-3">{job.company}</div>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
