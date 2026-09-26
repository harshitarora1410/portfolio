import { useState } from "react";
import { MapPin, GraduationCap, Briefcase, Check, Copy, Palette } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const rawCodeSnippet = `const harshitArora = {
  code: ['Go', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  technologies: {
    frontEnd: ['React.js', 'Next.js', 'Tailwind CSS', 'Zustand'],
    backEnd: ['Go', 'Gin', 'REST APIs', 'Microservices'],
    databases: ['PostgreSQL', 'MySQL'],
    tools: ['Git', 'Docker', 'GitHub Actions', 'Postman']
  },
  currentFocus: 'Building scalable full-stack products',
  getEducation() {
    return 'Master of Computer Applications, Amity University';
  }
};`;

type TokenType =
  "keyword" | "variable" | "property" | "string" | "method" | "punctuation" | "operator";

interface Token {
  text: string;
  type: TokenType;
}

const codeLines: Token[][] = [
  // Line 1: const harshitArora = {
  [
    { text: "const ", type: "keyword" },
    { text: "harshitArora", type: "variable" },
    { text: " = ", type: "operator" },
    { text: "{", type: "punctuation" },
  ],
  // Line 2:   code: ['Go', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  [
    { text: "  code", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "'Go'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'JavaScript'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'TypeScript'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Java'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'SQL'", type: "string" },
    { text: "],", type: "punctuation" },
  ],
  // Line 3:   technologies: {
  [
    { text: "  technologies", type: "property" },
    { text: ": {", type: "punctuation" },
  ],
  // Line 4:     frontEnd: ['React.js', 'Next.js', 'Tailwind CSS', 'Zustand'],
  [
    { text: "    frontEnd", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "'React.js'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Next.js'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Tailwind CSS'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Zustand'", type: "string" },
    { text: "],", type: "punctuation" },
  ],
  // Line 5:     backEnd: ['Go', 'Gin', 'REST APIs', 'Microservices'],
  [
    { text: "    backEnd", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "'Go'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Gin'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'REST APIs'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Microservices'", type: "string" },
    { text: "],", type: "punctuation" },
  ],
  // Line 6:     databases: ['PostgreSQL', 'MySQL'],
  [
    { text: "    databases", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "'PostgreSQL'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'MySQL'", type: "string" },
    { text: "],", type: "punctuation" },
  ],
  // Line 7:     tools: ['Git', 'Docker', 'GitHub Actions', 'Postman']
  [
    { text: "    tools", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "'Git'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Docker'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'GitHub Actions'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Postman'", type: "string" },
    { text: "]", type: "punctuation" },
  ],
  // Line 8:   },
  [{ text: "  },", type: "punctuation" }],
  // Line 9:   currentFocus: 'Building scalable full-stack products',
  [
    { text: "  currentFocus", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'Building scalable full-stack products'", type: "string" },
    { text: ",", type: "punctuation" },
  ],
  // Line 10:   getEducation() {
  [
    { text: "  ", type: "punctuation" },
    { text: "getEducation", type: "method" },
    { text: "() {", type: "punctuation" },
  ],
  // Line 11:     return 'Master of Computer Applications, Amity University';
  [
    { text: "    ", type: "punctuation" },
    { text: "return ", type: "keyword" },
    {
      text: "'Master of Computer Applications, Amity University'",
      type: "string",
    },
    { text: ";", type: "punctuation" },
  ],
  // Line 12:   }
  [{ text: "  }", type: "punctuation" }],
  // Line 13: };
  [{ text: "};", type: "punctuation" }],
];

interface ThemeConfig {
  id: string;
  name: string;
  pillColor: string;
  background: string;
  border: string;
  glow: string;
  tabBg: string;
  tokens: Record<TokenType | "lineNumber", string>;
}

const THEMES: ThemeConfig[] = [
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    pillColor: "#7aa2f7",
    background: "#1a1b26",
    border: "rgba(122, 162, 247, 0.3)",
    glow: "0 12px 35px -12px rgba(122, 162, 247, 0.35)",
    tabBg: "rgba(26, 27, 38, 0.75)",
    tokens: {
      keyword: "#bb9af7",
      variable: "#7dcfff",
      property: "#7aa2f7",
      method: "#ff9e64",
      string: "#9ece6a",
      operator: "#89ddff",
      punctuation: "#c0caf5",
      lineNumber: "#444b6a",
    },
  },
  {
    id: "dracula",
    name: "Dracula",
    pillColor: "#ff79c6",
    background: "#282a36",
    border: "rgba(189, 147, 249, 0.35)",
    glow: "0 12px 35px -12px rgba(189, 147, 249, 0.35)",
    tabBg: "rgba(40, 42, 54, 0.75)",
    tokens: {
      keyword: "#ff79c6",
      variable: "#8be9fd",
      property: "#50fa7b",
      method: "#ffb86c",
      string: "#f1fa8c",
      operator: "#ff79c6",
      punctuation: "#f8f8f2",
      lineNumber: "#6272a4",
    },
  },
  {
    id: "synthwave",
    name: "Synthwave",
    pillColor: "#ff71ce",
    background: "#181226",
    border: "rgba(255, 113, 206, 0.35)",
    glow: "0 12px 35px -12px rgba(255, 113, 206, 0.35)",
    tabBg: "rgba(24, 18, 38, 0.75)",
    tokens: {
      keyword: "#ff71ce",
      variable: "#01cdfe",
      property: "#05ffa1",
      method: "#b967ff",
      string: "#ffd319",
      operator: "#01cdfe",
      punctuation: "#ffffff",
      lineNumber: "#695e86",
    },
  },
  {
    id: "one-dark",
    name: "One Dark",
    pillColor: "#61afef",
    background: "#21252b",
    border: "rgba(97, 175, 239, 0.3)",
    glow: "0 12px 35px -12px rgba(97, 175, 239, 0.3)",
    tabBg: "rgba(33, 37, 43, 0.75)",
    tokens: {
      keyword: "#c678dd",
      variable: "#e06c75",
      property: "#e5c07b",
      method: "#61afef",
      string: "#98c379",
      operator: "#56b6c2",
      punctuation: "#abb2bf",
      lineNumber: "#4b5263",
    },
  },
  {
    id: "monokai",
    name: "Monokai",
    pillColor: "#a6e22e",
    background: "#272822",
    border: "rgba(249, 38, 114, 0.35)",
    glow: "0 12px 35px -12px rgba(249, 38, 114, 0.3)",
    tabBg: "rgba(39, 40, 34, 0.75)",
    tokens: {
      keyword: "#f92672",
      variable: "#66d9ef",
      property: "#fd971f",
      method: "#a6e22e",
      string: "#e6db74",
      operator: "#f92672",
      punctuation: "#f8f8f2",
      lineNumber: "#75715e",
    },
  },
];

export function About() {
  const [activeThemeId, setActiveThemeId] = useState("tokyo-night");
  const [copied, setCopied] = useState(false);

  const activeTheme: ThemeConfig =
    THEMES.find((t) => t.id === activeThemeId) ?? (THEMES[0] as ThemeConfig);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCodeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Here you will find more information about me, what I do, and my current skills"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <img
              src={profile.photo}
              alt={profile.name}
              className="glow-ring w-full max-w-md rounded-2xl object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Get to know me!</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm a <strong className="text-foreground">Software Engineer</strong> building
              production-grade full-stack applications with Go, Gin, React.js, Next.js and
              PostgreSQL. I work across REST APIs, third-party integrations and production debugging
              to ship reliable, client-facing features.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I care about clean, modular architecture — separation of concerns, validation, error
              handling and scalable API design — and I enjoy solving complex problems in fast-moving
              Agile teams.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-accent" />
                {profile.location}
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="size-4 text-accent" />
                Software Engineer at RemoteState, Noida
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="size-4 text-accent" />
                Master of Computer Applications — Amity University, Noida
              </p>
            </div>
          </div>
        </div>

        {/* Themed Interactive Code Window */}
        <div
          className="mt-14 overflow-hidden rounded-2xl border transition-all duration-300"
          style={{
            backgroundColor: activeTheme.background,
            borderColor: activeTheme.border,
            boxShadow: activeTheme.glow,
          }}
        >
          {/* Header Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 transition-colors duration-300"
            style={{
              borderColor: activeTheme.border,
              backgroundColor: activeTheme.tabBg,
            }}
          >
            {/* Window controls & file name */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-[#ff5f56]/90 transition-opacity hover:opacity-100" />
                <span className="size-3 rounded-full bg-[#ffbd2e]/90 transition-opacity hover:opacity-100" />
                <span className="size-3 rounded-full bg-[#27c93f]/90 transition-opacity hover:opacity-100" />
              </div>
              <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
                <span className="rounded bg-blue-500/20 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-blue-400">
                  TS
                </span>
                <span className="font-mono text-xs text-muted-foreground">harshit.ts</span>
              </div>
            </div>

            {/* Controls: Theme Selector + Copy */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Palette className="hidden size-3.5 sm:inline" />
                <span className="hidden font-mono text-[11px] md:inline">Theme:</span>
              </div>

              {/* Theme Buttons */}
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/25 p-1">
                {THEMES.map((theme) => {
                  const isActive = theme.id === activeTheme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setActiveThemeId(theme.id)}
                      className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-mono transition-all ${
                        isActive
                          ? "bg-white/15 font-medium text-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                      title={`Switch to ${theme.name} theme`}
                    >
                      <span
                        className="size-2 rounded-full transition-transform"
                        style={{
                          backgroundColor: theme.pillColor,
                          transform: isActive ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                      <span className="hidden sm:inline">{theme.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-mono text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground"
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span className="font-medium text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Editor Code Body */}
          <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
            <div className="table w-full">
              {codeLines.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  className="table-row rounded transition-colors hover:bg-white/[0.03]"
                >
                  <span
                    className="table-cell select-none py-0.5 pr-4 text-right font-mono text-xs opacity-50 sm:pr-6"
                    style={{ color: activeTheme.tokens.lineNumber }}
                  >
                    {lineIdx + 1}
                  </span>
                  <span className="table-cell whitespace-pre py-0.5">
                    {line.map((token, tokenIdx) => (
                      <span
                        key={tokenIdx}
                        className="transition-colors duration-200"
                        style={{ color: activeTheme.tokens[token.type] }}
                      >
                        {token.text}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
