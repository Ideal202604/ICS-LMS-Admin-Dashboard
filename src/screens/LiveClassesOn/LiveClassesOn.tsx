import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

const topRowParticipants = [
  {
    name: "pankaj + 20",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: true,
    isHighlighted: false,
  },
  {
    name: "Олена Васил...",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: false,
    isHighlighted: false,
  },
  {
    name: "pankaj",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: false,
    isHighlighted: false,
  },
  {
    name: "sanjayan t. s",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: false,
    isHighlighted: false,
  },
  {
    name: "Team ICS",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: false,
    isHighlighted: false,
  },
  {
    name: "Олена Борщі...",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: false,
    isHighlighted: false,
  },
  {
    name: "Dr. Char...",
    image: "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png",
    hasAudio: true,
    isHighlighted: true,
  },
];

const secondRowParticipants = [
  "Людмила Те...",
  "Arpita",
  "Тетяна Висо...",
  "Олена Васил...",
  "Мирославець М...",
  "Леонід Віктор...",
];

const thirdRowParticipants = [
  "Наталя Васе...",
  "Наталии Пет...",
  "Роксолана Ши...",
  "Любомир Ми...",
  "Анна Михайлів...",
  "Тетяна Петру...",
];

const bottomRowParticipants = [
  "You",
  "Галина Васил...",
  "Тетяна Висо...",
  "You",
  "Галина Васил...",
  "Тетяна Висо...",
];

const assistantRows = Array.from({ length: 2 }, (_, i) => ({
  name: "Alex",
  avatar:
    i === 0
      ? "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317598-1.svg"
      : "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317598-1.svg",
  icon: "https://c.animaapp.com/monyp9byQw9qMF/img/fa6-solid-message.svg",
}));

const participantRows = Array.from({ length: 5 }, (_, i) => ({
  muted: true,
  verified: false,
  name: "Alex",
  avatar:
    i < 4
      ? "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317598.svg"
      : "https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317598-1.svg",
  icon: "https://c.animaapp.com/monyp9byQw9qMF/img/fa6-solid-message.svg",
}));

const participantTileClass =
  "relative overflow-hidden rounded-[8px] border border-[#1d1d1d] bg-[#26272b] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-200 hover:scale-[1.03] hover:border-[#3a3a3a]";

const controlButtons = [
  { icon: "📹", bg: "bg-[#d8a7aa]", textColor: "text-black", label: "Camera" },
  { icon: "🎤", bg: "bg-[#2f3034]", textColor: "text-white", label: "Mic" },
  { icon: "🙂", bg: "bg-[#2f3034]", textColor: "text-white", label: "Emoji" },
  { icon: "↗", bg: "bg-[#2f3034]", textColor: "text-white", label: "Share" },
  { icon: "✋", bg: "bg-[#2f3034]", textColor: "text-white", label: "Hand" },
  { icon: "⋮", bg: "bg-[#2f3034]", textColor: "text-white", label: "More" },
];

export const LiveClassesOn = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-black">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] bg-black">
        {/* Left Sidebar — Participants Panel */}
        <aside className="flex w-full max-w-[230px] flex-col bg-white animate-in slide-in-from-left duration-300">
          <img
            className="h-[148px] w-full object-cover"
            alt="Frame"
            src="https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317590.png"
          />
          <section className="flex flex-1 flex-col overflow-hidden">
            {/* Header */}
            <header className="flex items-center justify-between px-3 pb-1 pt-2">
              <button
                type="button"
                onClick={() => navigate("/live-classes")}
                className="flex h-5 w-5 items-center justify-center rounded transition-opacity duration-150 hover:opacity-70"
                aria-label="Close panel"
              >
                <img
                  className="h-4 w-4"
                  alt="Close"
                  src="https://c.animaapp.com/monyp9byQw9qMF/img/hugeicons-cancel-01.svg"
                />
              </button>
              <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-6 text-black">
                Participants
              </h1>
              <button
                type="button"
                className="flex h-5 w-5 items-center justify-center rounded transition-opacity duration-150 hover:opacity-70"
                aria-label="External link"
              >
                <img
                  className="h-4 w-4"
                  alt="External link"
                  src="https://c.animaapp.com/monyp9byQw9qMF/img/prime-external-link.svg"
                />
              </button>
            </header>

            {/* Mute All / Verify All */}
            <div className="flex items-center justify-center gap-8 px-3 pb-2 pt-1">
              <button
                type="button"
                className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#e02323] transition-opacity duration-150 hover:opacity-75"
              >
                Mute All
              </button>
              <button
                type="button"
                className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#00c950] transition-opacity duration-150 hover:opacity-75"
              >
                Verify All
              </button>
            </div>

            {/* Everyone count */}
            <section className="px-3 pt-1">
              <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                <h2 className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#111111]">
                  Everyone (26)
                </h2>
                <img
                  className="h-5 w-10"
                  alt="Frame"
                  src="https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317596.svg"
                />
              </div>
            </section>

            {/* Scrollable list */}
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 pb-3 pt-2">
              {/* Instructor */}
              <section className="border-b border-gray-300 pb-3">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#111111]">
                  Instructor (1)
                </h3>
                <div className="flex items-end gap-[22px] pt-2">
                  <img
                    className="h-6 w-6 shrink-0"
                    alt="Instructor avatar"
                    src="https://c.animaapp.com/monyp9byQw9qMF/img/frame-1321317598-1.svg"
                  />
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#111111]">
                    Miss. Dorle
                  </p>
                </div>
              </section>

              {/* Assistants */}
              <section className="border-b border-gray-300 pb-2">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#111111]">
                  Assistant (2)
                </h3>
                <div className="pt-1">
                  {assistantRows.map((assistant, index) => (
                    <div
                      key={`assistant-${index}`}
                      className="flex items-center gap-[7px] py-2.5 transition-colors duration-150 hover:bg-gray-50 rounded"
                    >
                      <img className="h-6 w-6 shrink-0" alt="Avatar" src={assistant.avatar} />
                      <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#111111]">
                        {assistant.name}
                      </p>
                      <img className="h-4 w-4 shrink-0" alt="Message" src={assistant.icon} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Participants */}
              <section>
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#111111]">
                  Participants (29)
                </h3>
                <div className="pt-1">
                  {participantRows.map((participant, index) => (
                    <div
                      key={`participant-${index}`}
                      className="flex items-center gap-[7px] py-2.5 transition-colors duration-150 hover:bg-gray-50 rounded"
                    >
                      <span className="flex w-4 shrink-0 items-center justify-center">
                        {participant.muted && (
                          <span className="[font-family:'Roboto',Helvetica] text-[12px] leading-none text-[#e02323]">
                            🎤
                          </span>
                        )}
                      </span>
                      <img className="h-6 w-6 shrink-0" alt="Avatar" src={participant.avatar} />
                      <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#111111]">
                        {participant.name}
                      </p>
                      <img className="h-4 w-4 shrink-0" alt="Message" src={participant.icon} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </aside>

        {/* Main Content — Video Grid */}
        <section className="flex min-w-0 flex-1 flex-col bg-black px-8 pb-4 pt-3 animate-in fade-in duration-500">
          {/* Row 1 — 7 tiles */}
          <div className="grid grid-cols-7 gap-3">
            {topRowParticipants.map((participant, index) => (
              <Card
                key={`top-row-${index}`}
                className={`${participantTileClass} h-[73px] p-0 ${participant.isHighlighted ? "ring-2 ring-[#f0d3a8]" : ""}`}
              >
                <CardContent className="relative flex h-full p-0">
                  <div className="flex h-full w-full flex-col justify-between">
                    <div className="flex items-start justify-between p-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a3a3a]">
                        {participant.hasAudio ? (
                          <span className="text-[10px] text-white">🔊</span>
                        ) : (
                          <span className="text-[10px] text-white">•</span>
                        )}
                      </div>
                      <div className="flex h-4 w-4 items-center justify-center">
                        <span className="text-[10px] text-white">🔇</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="h-9 w-9 overflow-hidden rounded-full bg-[#d9d9d9]">
                        <img
                          className="h-full w-full object-cover"
                          alt={participant.name}
                          src={participant.image}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 rounded-b-[8px] bg-[#2f3034] px-2 py-1">
                      <span className="text-[10px] text-white">🎙</span>
                      <p className="[font-family:'Roboto',Helvetica] truncate text-[10px] font-normal leading-3 text-white">
                        {participant.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Row 2 — 6 tiles */}
          <div className="mt-4 grid grid-cols-6 gap-3">
            {secondRowParticipants.map((name, index) => (
              <Card
                key={`second-row-${index}`}
                className={`${participantTileClass} h-[73px] p-0`}
              >
                <CardContent className="relative flex h-full items-center justify-center p-0">
                  <div className="absolute bottom-1 left-1 right-1 rounded-full bg-[#2f3034] px-2 py-1">
                    <p className="[font-family:'Roboto',Helvetica] truncate text-[10px] font-normal leading-3 text-white">
                      {name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Row 3 — 6 tiles */}
          <div className="mt-4 grid grid-cols-6 gap-3">
            {thirdRowParticipants.map((name, index) => (
              <Card
                key={`third-row-${index}`}
                className={`${participantTileClass} h-[73px] p-0`}
              >
                <CardContent className="relative flex h-full items-center justify-center p-0">
                  <div className="absolute bottom-1 left-1 right-1 rounded-full bg-[#2f3034] px-2 py-1">
                    <p className="[font-family:'Roboto',Helvetica] truncate text-[10px] font-normal leading-3 text-white">
                      {name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Row 4 — 3 tiles (capped) */}
          <div className="mt-4 grid max-w-[510px] grid-cols-3 gap-3">
            {bottomRowParticipants.slice(0, 3).map((name, index) => (
              <Card
                key={`bottom-row-${index}`}
                className={`${participantTileClass} h-[73px] p-0`}
              >
                <CardContent className="relative flex h-full items-center justify-center p-0">
                  <div className="absolute bottom-1 left-1 right-1 rounded-full bg-[#2f3034] px-2 py-1">
                    <p className="[font-family:'Roboto',Helvetica] truncate text-[10px] font-normal leading-3 text-white">
                      {name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Control Bar */}
          <footer className="mt-auto flex justify-center pt-3">
            <div className="flex items-center gap-2 rounded-full bg-[#1f2024] px-3 py-2 shadow-lg animate-in slide-in-from-bottom duration-300">
              {controlButtons.map((btn) => (
                <Button
                  key={btn.label}
                  type="button"
                  variant="secondary"
                  aria-label={btn.label}
                  className={`h-auto rounded-full ${btn.bg} px-4 py-2 ${btn.textColor} hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95`}
                >
                  <span className="text-xs">{btn.icon}</span>
                </Button>
              ))}
              <Button
                type="button"
                aria-label="End call"
                onClick={() => navigate("/live-classes")}
                className="h-auto rounded-full bg-[#e33c35] px-4 py-2 text-white hover:bg-[#e33c35]/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="text-xs">📞</span>
              </Button>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
};
