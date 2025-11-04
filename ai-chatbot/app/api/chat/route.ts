import { NextRequest, NextResponse } from 'next/server';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: Message[];
}

const AI_RESPONSES = [
  "That's an interesting question! Let me help you with that.",
  "I understand what you're asking. Here's my perspective on that topic.",
  "Great question! Based on my knowledge, I can tell you that...",
  "I'd be happy to help you with that. Let me explain...",
  "That's a thoughtful inquiry. From what I know...",
  "Excellent point! Here's what I think about that...",
  "I appreciate your question. Let me provide some insights...",
  "That's worth exploring. In my understanding...",
];

const CONTEXTUAL_RESPONSES: Record<string, string> = {
  hello: "Hello! It's great to chat with you. How can I assist you today?",
  hi: "Hi there! I'm here to help. What would you like to know?",
  help: "I'm an AI assistant here to help answer your questions, provide information, and have meaningful conversations. Just ask me anything!",
  'who are you': "I'm an AI chatbot designed to assist you with questions, provide information, and engage in helpful conversations.",
  'what can you do': "I can answer questions, provide explanations, help with problem-solving, engage in discussions, and assist with various tasks. What would you like help with?",
  thanks: "You're welcome! Feel free to ask if you need anything else.",
  'thank you': "You're very welcome! I'm happy to help anytime.",
  bye: "Goodbye! It was nice chatting with you. Come back anytime!",
  goodbye: "Take care! Feel free to return whenever you need assistance.",
};

function generateAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  for (const [key, response] of Object.entries(CONTEXTUAL_RESPONSES)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  
  if (lowerMessage.includes('?')) {
    const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
    return `${randomResponse} Regarding your question about "${userMessage.slice(0, 50)}${userMessage.length > 50 ? '...' : ''}", I'd say that this is a complex topic that requires careful consideration. While I don't have access to real-time data or external APIs in this demo, I can provide general insights based on common knowledge.`;
  }
  
  if (lowerMessage.includes('how') || lowerMessage.includes('why') || lowerMessage.includes('what')) {
    return `That's a great question about "${userMessage.slice(0, 50)}${userMessage.length > 50 ? '...' : ''}". While I'm a demo AI chatbot without real-time capabilities, I can tell you that understanding such topics often requires breaking them down into smaller parts and examining each aspect carefully.`;
  }
  
  return `I appreciate you sharing that with me. You mentioned: "${userMessage.slice(0, 100)}${userMessage.length > 100 ? '...' : ''}". While I'm currently a demo version without external AI integration, I'm designed to engage in meaningful conversations. In a production environment, I would be connected to advanced AI models to provide more sophisticated responses.`;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const lastMessage = body.messages[body.messages.length - 1];
    
    if (!lastMessage || lastMessage.role !== 'user') {
      return NextResponse.json(
        { error: 'Last message must be from user' },
        { status: 400 }
      );
    }

    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    const aiResponse = generateAIResponse(lastMessage.content);

    return NextResponse.json({
      message: aiResponse,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
