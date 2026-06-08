import {
  Flame,
  Sparkles,
  CheckCircle,
  Calendar,
  MessageSquare,
  UserPlus,
  Zap,
  Target,
} from "lucide-react";

const activities = [
  { icon: Flame,         text: "Hotel lead found",        city: "Asaba"         },
  { icon: Sparkles,      text: "AI message sent",          city: "Lagos"         },
  { icon: CheckCircle,   text: "Client replied",           city: "Enugu"         },
  { icon: Calendar,      text: "Meeting booked",           city: "Warri"         },
  { icon: Target,        text: "Restaurant scored 9/10",   city: "Abuja"         },
  { icon: Zap,           text: "Follow-up delivered",      city: "Port Harcourt" },
  { icon: CheckCircle,   text: "Deal closed",              city: "Asaba"         },
  { icon: Flame,         text: "Boutique lead saved",      city: "Lagos"         },
  { icon: MessageSquare, text: "WhatsApp reply received",  city: "Ibadan"        },
  { icon: UserPlus,      text: "New prospect added",       city: "Benin City"    },
];

const items = [...activities, ...activities];

export default function Marquee() {
  return (
    <div className="relative py-4 border-y border-base-800/60 overflow-hidden bg-base-900/20">
      {/* fade edges */}
      <div className="absolute left-0 inset-y-0 w-16 z-10 bg-gradient-to-r from-base-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 z-10 bg-gradient-to-l from-base-950 to-transparent pointer-events-none" />

      <div
        className="flex gap-8 w-max"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {items.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs text-base-500 whitespace-nowrap shrink-0"
          >
            <a.icon size={13} className="text-brand-400 shrink-0" />
            <span className="text-base-300">{a.text}</span>
            <span className="text-base-700">·</span>
            <span className="text-brand-400/60">{a.city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
