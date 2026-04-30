import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useSidebar } from "./AppLayout";

export const SharedTopNav = (): JSX.Element => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { openMobile, toggleCollapsed } = useSidebar();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[84px] w-full items-center bg-white shadow-[0px_0px_4px_#00000040]">
      {/* ── Logo zone (desktop) — always 292px wide matching sidebar ── */}
      <div className="hidden lg:flex h-full w-[292px] shrink-0 items-center justify-start bg-[#0957a1] px-5">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center focus:outline-none"
          aria-label="Home"
        >
          <img
            className="h-[34px] w-auto"
            alt="ICS Global"
            src="https://c.animaapp.com/mojway8gcahMoK/img/ics-global-white-1.svg"
          />
        </button>
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={openMobile}
        className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 active:scale-95 lg:hidden"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {/* ── Desktop sidebar toggle ── */}
      <button
        type="button"
        aria-label="Toggle sidebar width"
        onClick={toggleCollapsed}
        className="mx-3 hidden lg:flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 active:scale-95"
      >
        <img
          className="h-5 w-5"
          alt="Toggle sidebar"
          src="https://c.animaapp.com/mokyrf7o6Bvd2I/img/vector.svg"
        />
      </button>

      {/* ── Mobile logo ── */}
      <button
        type="button"
        onClick={() => navigate("/")}
        aria-label="Home"
        className="mr-auto flex items-center pl-1 lg:hidden"
      >
        <span className="[font-family:'Roboto',Helvetica] text-lg font-bold text-[#0957a1]">
          ICS
        </span>
      </button>

      {/* ── Search bar ── */}
      <form
        className="hidden sm:flex min-w-0 flex-1 justify-center px-2"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <div
          className={`relative w-full transition-all duration-300 ${
            searchFocused ? "max-w-[560px]" : "max-w-[471px]"
          }`}
        >
          <img
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 opacity-60"
            alt="Search"
            src="https://c.animaapp.com/mokyrf7o6Bvd2I/img/search.svg"
          />
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search"
            placeholder="Search"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="h-[42px] rounded-[10px] border-gray-300 bg-white pl-10 pr-3 shadow-[var(--shadow-xs)] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-500 placeholder:text-gray-500 transition-all duration-300 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30 focus-visible:ring-offset-0 focus-visible:border-[#0957a1]/40"
          />
        </div>
      </form>

      {/* ── Right actions ── */}
      <nav aria-label="Header actions" className="flex shrink-0 items-center gap-2 pr-4 sm:gap-3 sm:pr-5">
        {/* Upgrade */}
        <Button
          type="button"
          className="hidden sm:inline-flex h-auto rounded-md border border-gray-300 bg-[#0957a1] px-3 py-1.5 md:px-4 md:py-2 [font-family:'Roboto',Helvetica] text-sm md:text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-sm active:scale-[0.98]"
        >
          Upgrade
        </Button>

        {/* View As Learner */}
        <Button
          type="button"
          className="hidden md:inline-flex h-auto rounded-md border border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#bfdfff] hover:shadow-sm active:scale-[0.98]"
        >
          View As Learner
        </Button>

        {/* Help */}
        <Button
          type="button"
          variant="outline"
          className="hidden lg:inline-flex h-auto gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
        >
          <img className="h-5 w-5" alt="Help" src="https://c.animaapp.com/mokyrf7o6Bvd2I/img/help-circle.svg" />
          Help
        </Button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200 hover:bg-gray-100 active:scale-95"
        >
          <img className="h-6 w-6" alt="Notifications" src="https://c.animaapp.com/mokyrf7o6Bvd2I/img/frame.svg" />
        </button>

        <Separator orientation="vertical" className="mx-0.5 hidden sm:block h-8 bg-gray-200" />

        {/* User avatar */}
        <Avatar className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer rounded-lg bg-[#0957a1] transition-all duration-200 hover:opacity-90 hover:shadow-md">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="[font-family:'Roboto',Helvetica] rounded-lg bg-[#0957a1] text-base font-medium text-white">
            J
          </AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};
