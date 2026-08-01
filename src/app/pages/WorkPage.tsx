import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArticleCard } from '../components/ArticleCard';
import { VideoCard } from '../components/VideoCard';
import { faithArticles, faithVideos } from '../data/faithContent';

export function WorkPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-6">Fe de Jesús</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Una investigación a fondo sobre lo que significa vivir la fe de Jesús hoy: artículos y
            videos que explican, con base bíblica, las doctrinas y la identidad del pueblo remanente.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm tracking-wide text-gray-500 mb-16 italic"
        >
          "Aquí está la paciencia de los santos, los que guardan los mandamientos de Dios y la fe
          de Jesús." — Apocalipsis 14:12
        </motion.p>

        <Tabs defaultValue="articulos">
          <TabsList className="mb-12">
            <TabsTrigger value="articulos">Artículos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="articulos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faithArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faithVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
