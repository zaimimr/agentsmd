import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgentsMD - Agentic Coding Workshop",
  description: "Learn agentic coding patterns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-foreground">
                  <svg
                    className="w-[93px] h-[31px] tablet:w-[105px] tablet:h-[34px]"
                    width="93"
                    height="30"
                    viewBox="0 0 93 30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3653_1143)">
                      <path d="M24.2178 15.0149C25.159 14.6172 25.6783 13.7424 25.6783 12.5017C25.6783 10.7519 24.4125 9.73389 22.2541 9.73389H17.8887V21.5049H22.6274C25.0779 21.5049 26.4897 20.28 26.4897 18.1803C26.4897 16.5101 25.6783 15.3967 24.2178 15.0149ZM21.9945 11.3087C23.1954 11.3087 23.8932 11.8495 23.8932 12.7721C23.8932 13.8378 23.2278 14.4582 22.0594 14.4582H19.7063V11.3087H21.9945ZM19.7063 19.9301V15.858H22.2217C23.7309 15.858 24.6397 16.6056 24.6397 17.894C24.6397 19.1825 23.812 19.9301 22.4164 19.9301H19.7063Z"></path>
                      <path d="M37.005 21.5049V19.9301H31.5036V9.73389H29.686V21.5049H37.005Z"></path>
                      <path d="M50.1159 21.5049L45.8641 9.73389H43.4947L39.2267 21.5049H41.1741L42.3912 17.9895H46.9514L48.1685 21.5049H50.1159ZM44.6794 11.4359L46.3996 16.4147H42.943L44.6794 11.4359Z"></path>
                      <path d="M60.397 18.6098L54.8307 9.73389H52.9319V21.5049H54.7495V12.613L60.3646 21.5049H62.2146V9.73389H60.397V18.6098Z"></path>
                      <path d="M75.3937 21.5049L70.509 14.4423L74.5985 9.73389H72.359L67.7988 15.0944V9.73389H65.9813V21.5049H67.7988V17.5759L69.3081 15.8262L73.1218 21.5049H75.3937Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M88.2214 19.6728C90.4228 18.037 91.3558 16.4465 91.3558 15C91.3558 13.5535 90.4228 11.9629 88.2214 10.3272C86.039 8.70548 82.7996 7.1911 78.6812 5.89673C70.4586 3.31248 59.0183 1.69353 46.3235 1.69353C33.6288 1.69353 22.1885 3.31248 13.9659 5.89673C9.84742 7.1911 6.6081 8.70548 4.42562 10.3272C2.22422 11.9629 1.29125 13.5535 1.29125 15C1.29125 16.4465 2.22422 18.037 4.42562 19.6728C6.6081 21.2945 9.84742 22.8089 13.9659 24.1032C22.1885 26.6875 33.6288 28.3064 46.3235 28.3064C59.0183 28.3064 70.4586 26.6875 78.6812 24.1032C82.7996 22.8089 86.039 21.2945 88.2214 19.6728ZM46.3235 29.5588C71.9073 29.5588 92.6471 23.0406 92.6471 15C92.6471 6.95937 71.9073 0.441162 46.3235 0.441162C20.7397 0.441162 0 6.95937 0 15C0 23.0406 20.7397 29.5588 46.3235 29.5588Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3653_1143">
                        <rect
                          width="92.6471"
                          height="30.8824"
                          fill="white"
                          transform="translate(0 -0.441162)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="flex gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/tasks"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tasks
                  </Link>
                  <Link
                    href="/tasks/new"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    New Task
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            <p>Workshop by Zaim Imran @ Blank</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
