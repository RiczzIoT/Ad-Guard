# AI Chatbot

A modern, intelligent AI-powered chatbot built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🤖 **Intelligent Conversations** - AI-powered responses with contextual understanding
- 💬 **Real-time Chat Interface** - Smooth, responsive chat experience
- 🎨 **Modern UI Design** - Clean, beautiful interface with gradient backgrounds
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Efficient** - Built with Next.js 14+ and optimized for performance
- 🎭 **Typing Indicators** - Visual feedback while AI is thinking
- ✨ **Smooth Animations** - Polished user experience with fade-in effects

## Tech Stack

- **Framework:** Next.js 16.0.1 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Custom React components
- **API:** Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd ai-chatbot
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the chatbot.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
ai-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── components/
│   │   ├── ChatContainer.tsx     # Main chat container with state management
│   │   ├── ChatMessage.tsx       # Individual message component
│   │   └── ChatInput.tsx         # Message input field
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## Features Explained

### Chat Components

- **ChatContainer**: Manages the chat state, message history, and API communication
- **ChatMessage**: Displays individual messages with role-based styling (user vs assistant)
- **ChatInput**: Handles user input with keyboard shortcuts (Enter to send, Shift+Enter for new line)

### AI API

The `/api/chat` endpoint provides intelligent responses with:
- Contextual understanding of common greetings and questions
- Dynamic response generation
- Simulated thinking time for realistic interaction
- Error handling and validation

### Styling

- Gradient background (blue to indigo)
- Rounded message bubbles with role-based colors
- Smooth animations and transitions
- Responsive design for all screen sizes
- Loading indicators with animated dots

## Customization

### Connecting to Real AI Services

To connect to OpenAI, Anthropic, or other AI services, modify `/app/api/chat/route.ts`:

```typescript
// Example: OpenAI Integration
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: body.messages,
  }),
});
```

### Styling Customization

Modify colors, spacing, and design in:
- `app/globals.css` - Global styles and animations
- Component files - Tailwind classes for specific components
- `tailwind.config.ts` - Tailwind theme customization

## Environment Variables

Create a `.env.local` file for API keys (when integrating real AI services):

```env
OPENAI_API_KEY=your_api_key_here
# or
ANTHROPIC_API_KEY=your_api_key_here
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Support

For questions or issues, please open an issue on the repository.

---

Built with ❤️ using Next.js and React
