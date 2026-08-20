// Móntalo una sola vez en App.tsx (ya está hecho). Se conecta a tu backend
// en VITE_BACKEND_URL + /api/chat, ahora en streaming: el texto aparece
// palabra por palabra según el asistente lo va generando.

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useChatbot } from '../context/ChatbotContext';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PREGUNTAS_SUGERIDAS = [
  '¿Por qué los adventistas guardan el sábado?',
  '¿Qué dice la Biblia sobre lo que pasa después de la muerte?',
  '¿Cómo se recibe la salvación?',
  '¿Por qué es importante el bautismo?',
  '¿Qué dice la Biblia sobre la alimentación?',
  '¿Cuándo y cómo será la segunda venida de Cristo?',
];

const MENSAJE_BIENVENIDA: Message = {
  role: 'assistant',
  content:
    'Hola, soy el Asistente Bíblico. Puedes preguntarme sobre el sábado, la muerte, la salvación, el bautismo, la alimentación, la segunda venida o cualquier duda sobre la Biblia.',
};

export function ChatbotWidget() {
  const { isOpen, openChatbot, closeChatbot, pendingQuestion, clearPendingQuestion } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([MENSAJE_BIENVENIDA]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isSending, isOpen]);

  useEffect(() => {
    if (isOpen && pendingQuestion) {
      enviarPregunta(pendingQuestion);
      clearPendingQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pendingQuestion]);

  async function enviarPregunta(texto: string) {
    const pregunta = texto.trim();
    if (!pregunta || isSending) return;

    const nuevoHistorial: Message[] = [...messages, { role: 'user', content: pregunta }];
    setMessages(nuevoHistorial);
    setInput('');
    setError(null);
    setIsSending(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nuevoHistorial }),
      });

      if (!res.ok || !res.body) throw new Error('Respuesta no válida del servidor');

      // Agregamos un mensaje vacío del asistente, que vamos a ir rellenando
      // según lleguen los pedazos de texto (streaming).
      setIsSending(false);
      setIsStreaming(true);
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lineas = buffer.split('\n');
        buffer = lineas.pop() || '';

        for (const linea of lineas) {
          const trimmed = linea.trim();
          if (!trimmed.startsWith('data:')) continue;

          const payload = trimmed.slice(5).trim();
          if (payload === '[DONE]') continue;

          try {
            const json = JSON.parse(payload);
            if (json.content) {
              setMessages((prev) => {
                const copia = [...prev];
                const ultimo = copia[copia.length - 1];
                copia[copia.length - 1] = { ...ultimo, content: ultimo.content + json.content };
                return copia;
              });
            }
          } catch {
            // fragmento incompleto, se ignora
          }
        }
      }

      setIsStreaming(false);
    } catch {
      setError('No pudimos enviar tu pregunta. Intenta de nuevo en unos segundos.');
      setIsSending(false);
      setIsStreaming(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    enviarPregunta(input);
  }

  const cargando = isSending || isStreaming;

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="boton-chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openChatbot()}
            className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-black text-white rounded-full tracking-wide shadow-lg hover:bg-gray-800 transition-colors"
            aria-label="Abrir Asistente Bíblico"
          >
            Asistente Bíblico
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel-chat"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-label="Asistente Bíblico"
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100vh-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            <header className="flex items-center justify-between px-5 py-4 bg-black text-white">
              <span className="tracking-tight">Asistente Bíblico</span>
              <button
                onClick={closeChatbot}
                aria-label="Cerrar Asistente Bíblico"
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-3 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'ml-auto bg-black text-white rounded-br-sm'
                      : 'mr-auto bg-gray-100 text-black rounded-bl-sm'
                  }`}
                >
                  {m.content}
                  {isStreaming && m.role === 'assistant' && i === messages.length - 1 && (
                    <span className="inline-block w-1.5 h-4 ml-0.5 bg-black/40 animate-pulse align-middle" />
                  )}
                </div>
              ))}

              {isSending && (
                <div className="mr-auto bg-gray-100 text-gray-500 italic px-4 py-3 rounded-xl rounded-bl-sm text-sm">
                  Escribiendo...
                </div>
              )}

              {error && <p className="text-center text-sm text-red-600">{error}</p>}
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-5 pb-3">
                {PREGUNTAS_SUGERIDAS.map((pregunta) => (
                  <button
                    key={pregunta}
                    onClick={() => enviarPregunta(pregunta)}
                    className="text-left text-xs tracking-wide px-3 py-2 rounded-full border border-gray-200 hover:border-black transition-colors"
                  >
                    {pregunta}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2 px-5 py-4 border-t border-gray-100">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta sobre la Biblia o la fe adventista..."
                disabled={cargando}
                aria-label="Escribe tu pregunta"
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                disabled={cargando || !input.trim()}
                aria-label="Enviar pregunta"
                className="p-3 bg-black text-white rounded-full disabled:opacity-40 hover:bg-gray-800 transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
