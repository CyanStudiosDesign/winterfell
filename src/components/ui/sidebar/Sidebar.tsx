"use client";

import {
  PanelLeft,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Settings,
  Box,
  Terminal,
} from "lucide-react";

import { useSidebar } from "@/components/ui/provider/SidebarProvider";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const {
    collapsed,
    toggleSidebar,

    playgroundOpen,
    togglePlayground,

    modelsOpen,
    toggleModels,

    docsOpen,
    toggleDocs,

    settingsOpen,
    toggleSettings,
  } = useSidebar();

  return (
    <div className="flex min-h-screen bg-canvas">
      <div
        className={cn(
          "bg-canvas border-r border-border transition-all duration-200",
          collapsed ? "w-16" : "w-56 sm:w-64 md:w-80",
        )}
      >
        <div className="flex h-full flex-col">
          <div
            className={cn(
              "flex items-center justify-between p-2 sm:p-3 md:p-4 border-b border-border",
            )}
          >
            <button
              onClick={toggleSidebar}
              className={cn(
                "p-2",
                "rounded-md",
                "border border-border",
                "bg-canvas",
                "hover:bg-subtle",
                "focus-ring-visible",
              )}
            >
              <PanelLeft className="h-5 w-5 text-fg" />
            </button>

            {!collapsed && <span className="text-sm text-fg-muted">Menu</span>}
          </div>

          {!collapsed && (
            <div className="px-3 sm:px-4 md:px-6 py-2 text-sm text-fg-muted">
              Platform
            </div>
          )}

          <div className="flex-1 px-2 sm:px-3">
            <div className="space-y-1">
              <button
                onClick={togglePlayground}
                className={cn(
                  "w-full",
                  "flex",
                  "items-center",
                  "gap-3",
                  "px-2 md:px-3",
                  "py-3",
                  "rounded-md",
                  "hover:bg-subtle",
                  "text-fg",
                  "focus-ring-visible",
                )}
              >
                <Terminal className="h-5 w-5" />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-left text-sm">Playground</span>

                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        playgroundOpen && "rotate-180",
                      )}
                    />
                  </>
                )}
              </button>

              {!collapsed && playgroundOpen && (
                <div className="ml-3 sm:ml-4 md:ml-6 flex flex-col border-l border-border pl-2 sm:pl-3 md:pl-4">
                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    History
                  </button>

                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Starred
                  </button>

                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Settings
                  </button>
                </div>
              )}

              <button
                onClick={toggleModels}
                className="w-full flex items-center gap-3 px-2 md:px-3 py-3 rounded-md hover:bg-subtle text-fg focus-ring-visible"
              >
                <Box className="h-5 w-5" />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-left text-sm">Models</span>

                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        modelsOpen && "rotate-90",
                      )}
                    />
                  </>
                )}
              </button>

              {!collapsed && modelsOpen && (
                <div className="ml-3 sm:ml-4 md:ml-6 flex flex-col border-l border-border pl-2 sm:pl-3 md:pl-4">
                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Genesis
                  </button>

                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Explorer
                  </button>

                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Quantum
                  </button>
                </div>
              )}

              <button
                onClick={toggleDocs}
                className="w-full flex items-center gap-3 px-2 md:px-3 py-3 rounded-md hover:bg-subtle text-fg focus-ring-visible"
              >
                <BookOpen className="h-5 w-5" />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-left text-sm">
                      Documentation
                    </span>

                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        docsOpen && "rotate-90",
                      )}
                    />
                  </>
                )}
              </button>

              {!collapsed && docsOpen && (
                <div className="ml-3 sm:ml-4 md:ml-6 flex flex-col border-l border-border pl-2 sm:pl-3 md:pl-4">
                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Introduction
                  </button>

                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Get Started
                  </button>
                </div>
              )}

              <button
                onClick={toggleSettings}
                className="w-full flex items-center gap-3 px-2 md:px-3 py-3 rounded-md hover:bg-subtle text-fg focus-ring-visible"
              >
                <Settings className="h-5 w-5" />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-left text-sm">Settings</span>

                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        settingsOpen && "rotate-90",
                      )}
                    />
                  </>
                )}
              </button>

              {!collapsed && settingsOpen && (
                <div className="ml-3 sm:ml-4 md:ml-6 flex flex-col border-l border-border pl-2 sm:pl-3 md:pl-4">
                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    General
                  </button>

                  <button className="py-3 text-left text-fg-muted hover:text-fg">
                    Billing
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
