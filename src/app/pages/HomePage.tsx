import { Hero } from '../components/Hero';
import { VerseOfDay } from '../components/VerseOfDay';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { CallToAction } from '../components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <VerseOfDay />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
