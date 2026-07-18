export interface ProjectSection {
  title: string;
  description: string;
  images: {
    url: string;
    caption: string;
    layout?: 'full' | 'half' | 'grid';
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  duration: string;
  team: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  
  // Design process sections
  researchFindings?: string[];
  userPersonas?: {
    name: string;
    role: string;
    goals: string[];
    painPoints: string[];
  }[];
  
  designProcess: ProjectSection[];
  technicalStack?: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'urban-architecture',
    title: 'Urban Architecture',
    category: 'Architecture & Design',
    description: 'Modern architectural visualization with interactive 3D elements and immersive user experience.',
    image: 'https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1MzQ1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['3D', 'WebGL', 'React'],
    year: '2024',
    client: 'Urban Design Studio',
    role: 'Lead Developer & 3D Specialist',
    duration: '4 months',
    team: ['Product Designer', '3D Artist', 'Frontend Developer', 'Backend Developer'],
    overview: 'A comprehensive architectural visualization platform that brings modern building designs to life through interactive 3D models and immersive experiences.',
    challenge: 'The client needed a way to showcase their architectural portfolio in a way that would engage potential clients and allow them to explore designs from every angle. Traditional static images weren\'t sufficient to convey the spatial complexity of their work.',
    solution: 'We developed a WebGL-based platform using Three.js and React, allowing users to interact with 3D models in real-time. The solution includes virtual tours, material customization, and environmental lighting controls.',
    results: [
      '350% increase in client engagement time',
      '45% higher conversion rate for project inquiries',
      'Featured in Awwwards and CSS Design Awards',
      'Adopted by 15+ architecture firms worldwide'
    ],
    researchFindings: [
      'Architects spend 60% of client meetings explaining spatial relationships',
      'Clients struggle to visualize final products from 2D plans',
      '78% of potential clients want to see multiple material options',
      'Mobile viewing is crucial for on-site client presentations'
    ],
    userPersonas: [
      {
        name: 'Sarah Chen',
        role: 'Commercial Property Developer',
        goals: ['Visualize building designs before construction', 'Share designs with investors', 'Explore different material options'],
        painPoints: ['Difficult to understand 2D blueprints', 'Time-consuming approval processes', 'Limited visualization options']
      },
      {
        name: 'Michael Rodriguez',
        role: 'Residential Client',
        goals: ['See their future home in realistic detail', 'Make informed design decisions', 'Share ideas with family'],
        painPoints: ['Cannot imagine final result', 'Uncertain about material choices', 'Wants to explore space virtually']
      }
    ],
    designProcess: [
      {
        title: 'User Research & Discovery',
        description: 'Conducted interviews with architects and clients to understand pain points in the current visualization process. Analyzed competitor solutions and identified opportunities for innovation.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1761746395536-00d334eba480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2hpbmd8ZW58MXx8fHwxNzY1Mzc4NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'User research sessions and stakeholder interviews',
            layout: 'full'
          }
        ]
      },
      {
        title: 'Information Architecture',
        description: 'Mapped out user flows for different personas and created a sitemap optimizing for both desktop and mobile experiences. Prioritized features based on user needs and technical feasibility.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2NTI4MzU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'System architecture and user flow diagrams',
            layout: 'full'
          }
        ]
      },
      {
        title: 'Low-Fidelity Wireframes',
        description: 'Created initial wireframes to establish layout hierarchy and interaction patterns. Iterated based on feedback from architects and tested with potential users for usability.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ258ZW58MXx8fHwxNzY1MzA1NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Initial wireframe sketches and layout explorations',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1Mjg2Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Wireframe review sessions with stakeholders',
            layout: 'half'
          }
        ]
      },
      {
        title: 'High-Fidelity Design',
        description: 'Developed polished UI designs with attention to typography, spacing, and visual hierarchy. Created a design system with reusable components for consistency across the platform.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjUzNTgyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'High-fidelity mockups for desktop interface',
            layout: 'full'
          },
          {
            url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MzQ0MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Responsive mobile interface designs',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1MzQ1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: '3D viewer interface with material controls',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Design System',
        description: 'Built a comprehensive design system including color palettes, typography scales, component library, and interaction patterns. Documented all components for developer handoff.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb2xvcnN8ZW58MXx8fHwxNzY1MzI1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Design system color palette and tokens',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1651931803059-268de2b0417b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NjUzNTM1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'UI component library and specifications',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Interactive Prototype',
        description: 'Created high-fidelity interactive prototypes to test 3D interactions, navigation patterns, and micro-animations. Conducted usability testing with target users.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MzI2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Interactive prototype development and testing',
            layout: 'full'
          }
        ]
      },
      {
        title: 'Final Implementation',
        description: 'Worked closely with developers to ensure pixel-perfect implementation. Optimized 3D assets for performance and created smooth transitions between views.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NTM2NTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Final product interface in production',
            layout: 'full'
          },
          {
            url: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NTM1NDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Team collaboration during development',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MzU2MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Performance optimization and testing',
            layout: 'half'
          }
        ]
      }
    ],
    technicalStack: {
      frontend: ['React 18', 'TypeScript', 'Three.js', 'WebGL', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'WebSocket'],
      tools: ['Figma', 'Blender', 'GitHub', 'Vercel', 'Linear']
    }
  },
  {
    id: 'workspace-interface',
    title: 'Workspace Interface',
    category: 'UI/UX Design',
    description: 'Minimalist workspace application with focus on productivity and elegant interactions.',
    image: 'https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NTM2NTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UI/UX', 'Design System', 'Figma'],
    year: '2024',
    client: 'ProductivityHub',
    role: 'Lead Product Designer',
    duration: '3 months',
    team: ['UX Researcher', 'UI Designer', 'Frontend Developer', 'Product Manager'],
    overview: 'A comprehensive workspace management tool designed to streamline team collaboration and boost productivity through intuitive design and smart automation.',
    challenge: 'Teams were struggling with fragmented tools and complex interfaces that hindered rather than helped their workflow. The market needed a unified solution that was both powerful and simple to use.',
    solution: 'Created a minimalist interface built on a robust design system, focusing on reducing cognitive load while maintaining powerful features. Implemented smart shortcuts, customizable workflows, and seamless integrations.',
    results: [
      '10,000+ active users within 3 months',
      '4.8/5 average user rating',
      '60% reduction in time spent on task management',
      'Named "Best Productivity Tool 2024" by TechCrunch'
    ],
    designProcess: [
      {
        title: 'Research & User Insights',
        description: 'Conducted extensive user research with remote teams to understand their workflow challenges and pain points.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NTM1NDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'User interviews and research synthesis',
            layout: 'full'
          }
        ]
      },
      {
        title: 'Wireframing',
        description: 'Low-fidelity wireframes exploring different layout options and interaction patterns.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ258ZW58MXx8fHwxNzY1MzA1NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Wireframe sketches and iterations',
            layout: 'full'
          }
        ]
      },
      {
        title: 'UI Design',
        description: 'High-fidelity designs with focus on minimalism and clarity.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NTM2NTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Final UI design - Dashboard view',
            layout: 'full'
          },
          {
            url: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjUzNTgyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Task management interface',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MzQ0MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Mobile responsive design',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Design System',
        description: 'Comprehensive component library and design tokens for scalability.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1651931803059-268de2b0417b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NjUzNTM1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Component library and specifications',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb2xvcnN8ZW58MXx8fHwxNzY1MzI1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Design tokens and style guide',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Development',
        description: 'Close collaboration with developers to ensure design fidelity.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MzI2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Development and implementation',
            layout: 'full'
          }
        ]
      }
    ],
    technicalStack: {
      frontend: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'React Query'],
      backend: ['Node.js', 'GraphQL', 'MongoDB', 'Redis'],
      tools: ['Figma', 'Storybook', 'Jest', 'Cypress']
    }
  },
  {
    id: 'tech-platform',
    title: 'Tech Platform',
    category: 'Web Development',
    description: 'Abstract technology platform with dynamic data visualization and real-time updates.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MzU2MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['TypeScript', 'API', 'Animation'],
    year: '2023',
    client: 'DataViz Corp',
    role: 'Full-Stack Developer',
    duration: '5 months',
    team: ['Tech Lead', 'Data Engineer', 'UI Designer', 'QA Engineer'],
    overview: 'An advanced analytics platform that transforms complex data streams into beautiful, actionable visualizations with real-time updates and predictive insights.',
    challenge: 'Enterprise clients needed to process and visualize massive amounts of data in real-time, but existing solutions were either too slow or too complex for non-technical users.',
    solution: 'Built a high-performance platform using WebSocket connections for real-time data, custom visualization library, and machine learning integration for predictive analytics. Optimized rendering for datasets with millions of data points.',
    results: [
      'Processing 1M+ data points per second',
      'Deployed across 50+ enterprise clients',
      '99.9% uptime over 12 months',
      '$2M ARR within first year'
    ],
    designProcess: [
      {
        title: 'System Architecture',
        description: 'Designed scalable microservices architecture for real-time data processing.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2NTI4MzU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'System architecture and data flow',
            layout: 'full'
          }
        ]
      },
      {
        title: 'Interface Design',
        description: 'Created intuitive dashboards for complex data visualization.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MzU2MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Dashboard interface with real-time data',
            layout: 'full'
          },
          {
            url: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjUzNTgyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Analytics visualization components',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1651931803059-268de2b0417b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NjUzNTM1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Component library for data visualization',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Development & Testing',
        description: 'Built with performance optimization and extensive testing.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MzI2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Development process and code review',
            layout: 'full'
          }
        ]
      }
    ],
    technicalStack: {
      frontend: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Tailwind CSS'],
      backend: ['Node.js', 'Python', 'Kafka', 'PostgreSQL', 'Redis'],
      tools: ['Docker', 'Kubernetes', 'GitHub Actions', 'Grafana']
    }
  },
  {
    id: 'creative-studio',
    title: 'Creative Studio',
    category: 'Branding & Identity',
    description: 'Complete brand identity system for a modern creative studio with interactive portfolio.',
    image: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNDQzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'Motion', 'Web'],
    year: '2023',
    client: 'Studio Collective',
    role: 'Creative Director',
    duration: '6 months',
    team: ['Brand Strategist', 'Graphic Designer', 'Motion Designer', 'Developer'],
    overview: 'A complete rebrand for a creative agency, including visual identity, motion design system, and an award-winning interactive portfolio website.',
    challenge: 'The studio\'s previous brand didn\'t reflect their innovative approach and was limiting their ability to attract premium clients. They needed a complete transformation that would position them as industry leaders.',
    solution: 'Developed a bold, contemporary brand identity system with a focus on motion and interactivity. Created comprehensive brand guidelines, custom typography, and an interactive portfolio that showcases their work in an engaging way.',
    results: [
      'Won 3 international design awards',
      '200% increase in high-value client inquiries',
      'Featured in Design Milk and It\'s Nice That',
      'Brand system adopted by 8 partner agencies'
    ],
    designProcess: [
      {
        title: 'Brand Strategy',
        description: 'Developed brand positioning, values, and visual direction.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1761746395536-00d334eba480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2hpbmd8ZW58MXx8fHwxNzY1Mzc4NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Brand strategy workshops and ideation',
            layout: 'full'
          }
        ]
      },
      {
        title: 'Visual Identity',
        description: 'Created logo, color system, and typography guidelines.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNDQzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Logo design and brand marks',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb2xvcnN8ZW58MXx8fHwxNzY1MzI1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Brand color palette and system',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Website Design',
        description: 'Designed interactive portfolio website with smooth animations.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjUzNTgyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Website design mockups',
            layout: 'full'
          },
          {
            url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MzQ0MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Mobile responsive layouts',
            layout: 'half'
          },
          {
            url: 'https://images.unsplash.com/photo-1651931803059-268de2b0417b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NjUzNTM1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'UI components and interactions',
            layout: 'half'
          }
        ]
      },
      {
        title: 'Implementation',
        description: 'Developed website with advanced animations and interactions.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MzI2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Development and animation implementation',
            layout: 'full'
          }
        ]
      }
    ],
    technicalStack: {
      frontend: ['React', 'Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      backend: ['Sanity CMS', 'Node.js'],
      tools: ['Figma', 'After Effects', 'Illustrator', 'GitHub']
    }
  },
];
