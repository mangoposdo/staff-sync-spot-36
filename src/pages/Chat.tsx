import MobileLayout from "@/components/MobileLayout";
import { motion } from "framer-motion";

const mockConversations = [
  { id: 1, name: "María López", event: "Boda García-López", lastMsg: "Perfecto, nos vemos el sábado", time: "2h", unread: 2, initials: "ML" },
  { id: 2, name: "Carlos Ruiz", event: "Fintech Summit", lastMsg: "¿A qué hora debo llegar?", time: "5h", unread: 0, initials: "CR" },
  { id: 3, name: "Ana Torres", event: "Lanzamiento Startup", lastMsg: "Confirmo asistencia", time: "1d", unread: 1, initials: "AT" },
];

const Chat = () => {
  return (
    <MobileLayout title="Mensajes">
      <div className="space-y-2 mt-4">
        {mockConversations.map((conv, i) => (
          <motion.div
            key={conv.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-xl p-3 flex items-center gap-3 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-heading font-bold text-primary">{conv.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold truncate">{conv.name}</span>
                <span className="text-[10px] text-muted-foreground flex-shrink-0">{conv.time}</span>
              </div>
              <p className="text-[10px] text-accent truncate">{conv.event}</p>
              <p className="text-xs text-muted-foreground truncate">{conv.lastMsg}</p>
            </div>
            {conv.unread > 0 && (
              <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {conv.unread}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default Chat;
