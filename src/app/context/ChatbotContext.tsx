// Envuelve <App> con <ChatbotProvider> una sola vez (ya está hecho en App.tsx).
// Desde cualquier componente: const { openChatbot } = useChatbot();
// openChatbot() abre el chat vacío. openChatbot("pregunta") lo abre y la envía de una vez.

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ChatbotContextValue {
  isOpen: boolean;
  openChatbot: (preguntaInicial?: string) => void;
  closeChatbot: () => void;
  pendingQuestion: string | null;
  clearPendingQuestion: () => void;
}

const ChatbotContext = createContext<ChatbotContextValue | null>(null);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);

  const openChatbot = useCallback((preguntaInicial?: string) => {
    if (preguntaInicial) setPendingQuestion(preguntaInicial);
    setIsOpen(true);
  }, []);

  const closeChatbot = useCallback(() => setIsOpen(false), []);
  const clearPendingQuestion = useCallback(() => setPendingQuestion(null), []);

  return (
    <ChatbotContext.Provider
      value={{ isOpen, openChatbot, closeChatbot, pendingQuestion, clearPendingQuestion }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error('useChatbot debe usarse dentro de un ChatbotProvider');
  return ctx;
}
