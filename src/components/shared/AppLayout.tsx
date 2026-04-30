import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { SharedTopNav } from "./SharedTopNav";
import { SharedSidebar } from "./SharedSidebar";

interface SidebarCtx {
  collapsed: boolean;
  mobileOpen: boolean;
  toggleCollapsed: () => void;
  openMobile: () => void;
  closeMobile: () => void;
}

const SidebarContext = createContext<SidebarCtx>({
  collapsed: false,
  mobileOpen: false,
  toggleCollapsed: () => {},
  openMobile: () => {},
  closeMobile: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout = ({ children, className = "" }: AppLayoutProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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
    openMobile: () => setMobileOpen(true),
    closeMobile: () => setMobileOpen(false),
  };

  const sidebarW = collapsed ? 72 : 292;
  const mainMargin = isDesktop ? sidebarW : 0;

  return (
    <SidebarContext.Provider value={ctx}>
      <div className="min-h-screen w-full bg-[#f8f8f8]">
        {/* Fixed top navbar */}
        <SharedTopNav />

        {/* Mobile overlay backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Fixed sidebar */}
        <SharedSidebar />

        {/* Main content area */}
        <main
          className={`mt-[84px] min-h-[calc(100vh-84px)] transition-[margin-left] duration-300 ease-in-out overflow-x-hidden ${className}`}
          style={{ marginLeft: mainMargin }}
        >
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
};
