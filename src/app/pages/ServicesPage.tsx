import { motion } from 'motion/react';
import { Palette, Code, Layers, Sparkles, Laptop, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered interfaces that delight users and drive engagement.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems',
    ],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'High-performance web applications built with modern technologies.',
    features: [
      'React & TypeScript',
      'Responsive Design',
      'API Integration',
      'Performance Optimization',
      'Testing & QA',
    ],
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Scalable design systems that ensure consistency across your products.',
    features: [
      'Component Libraries',
      'Design Tokens',
      'Documentation',
      'Version Control',
      'Team Training',
    ],
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Comprehensive brand identities that communicate your unique value.',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Language',
      'Marketing Materials',
      'Brand Strategy',
    ],
  },
  {
    icon: Laptop,
    title: 'Interactive Prototypes',
    description: 'High-fidelity prototypes to validate ideas before development.',
    features: [
      'Figma Prototypes',
      'Micro-interactions',
      'Animation Design',
      'User Flows',
      'A/B Testing',
    ],
  },
  {
    icon: Users,
    title: 'Consulting',
    description: 'Strategic guidance to help your team build better digital products.',
    features: [
      'Design Audits',
      'Team Workshops',
      'Process Optimization',
      'Technology Selection',
      'Best Practices',
    ],
  },
];

const process = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, users, and challenges through research and analysis.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Developing a clear roadmap and defining success metrics for the project.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Creating beautiful, functional designs through an iterative process.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building the solution with clean code and modern best practices.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploying your product and ensuring a smooth transition to production.',
  },
  {
    number: '06',
    title: 'Support',
    description: 'Ongoing maintenance, optimization, and feature enhancements.',
  },
];

export function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive design and development services to bring your digital vision to life.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="mb-6" size={40} />
              <h3 className="text-2xl tracking-tight mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl tracking-tight mb-16"
          >
            My Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl tracking-tighter text-gray-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl tracking-tight mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how I can help bring your vision to life.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white rounded-full tracking-wide hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
