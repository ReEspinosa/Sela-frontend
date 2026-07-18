import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { CallToAction } from '../components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
