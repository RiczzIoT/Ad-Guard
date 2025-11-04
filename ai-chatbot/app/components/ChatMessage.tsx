interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-gray-100 text-gray-900 rounded-bl-sm'
        }`}
      >
        <div className="text-sm font-medium mb-1 opacity-70">
          {isUser ? 'You' : 'AI Assistant'}
        </div>
        <div className="text-base whitespace-pre-wrap break-words leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}
