import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { SharedTopNav } from "./SharedTopNav";
import { SharedSidebar } from "./SharedSidebar";

/* ─── Sidebar context ─────────────────────────────────────────────────────── */
export interface SidebarCtx {
  collapsed:       boolean;
  mobileOpen:      boolean;
  toggleCollapsed: () => void;
  openMobile:      () => void;
  closeMobile:     () => void;
}

const SidebarContext = createContext<SidebarCtx>({
  collapsed:       false,
  mobileOpen:      false,
  toggleCollapsed: () => {},
  openMobile:      () => {},
  closeMobile:     () => {},
});

export const useSidebar = () => useContext(SidebarContext);

/* ─── Layout constants (px) ─────────────────────────────────────────────── */
export const SIDEBAR_EXPANDED  = 240;
export const SIDEBAR_COLLAPSED = 64;
export const NAVBAR_HEIGHT     = 64;

/* ─── AppLayout ──────────────────────────────────────────────────────────── */
interface AppLayoutProps {
  children:   ReactNode;
  className?: string;
}

export const AppLayout = ({ children, className = "" }: AppLayoutProps): JSX.Element => {
  const [collapsed,  setCollapsed]  = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop,  setIsDesktop]  = useState(false);

  useEffect(() => {
    const check = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setMobileOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const ctx: SidebarCtx = {
    collapsed,
    mobileOpen,
    toggleCollapsed: () => setCollapsed((p) => !p),
    openMobile:      () => setMobileOpen(true),
    closeMobile:     () => setMobileOpen(false),
  };

  const sidebarW    = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED;
  const mainMarginL = isDesktop ? sidebarW : 0;

  return (
    <SidebarContext.Provider value={ctx}>
      <div className="min-h-screen w-full bg-[#f4f6f9]">

        {/* ── Fixed top navbar ── */}
        <SharedTopNav />

        {/* ── Mobile backdrop overlay ── */}
        <div
          className={[
            "fixed inset-0 z-30 bg-black/50 lg:hidden",
            "transition-opacity duration-300 ease-in-out",
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          ].join(" ")}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* ── Fixed sidebar ── */}
        <SharedSidebar />

        {/* ── Main content ── */}
        <main
          className={[
            "transition-[margin-left] duration-300 ease-in-out overflow-x-hidden",
            className,
          ].join(" ")}
          style={{
            marginTop:  NAVBAR_HEIGHT,
            marginLeft: mainMarginL,
            minHeight:  `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          }}
        >
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
};
