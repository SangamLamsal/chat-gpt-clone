import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import { type } from 'os'

type Props = {
  params: {
    id: string
  }
}

export default function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat Window */}
      <Chat chatId={id} />
      {/* ChatInput */}
      <ChatInput chatId={id} />
    </div>
  )
}
