import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-sm bg-electric px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-electric-glow">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BAMRL Pvt Ltd | Precision Aluminium Engineering for Aerospace" },
      { name: "description", content: "BAMRL - Bharati Advance Material Research Lab. NABL-accredited metallurgical testing & precision aluminium engineering for aerospace and defense applications. 48-hour certification turnaround." },
      { name: "author", content: "BAMRL Pvt Ltd" },
      { name: "keywords", content: "aerospace engineering, aluminium structures, metallurgical testing, NABL accredited, UAV design, FEA simulation, defense manufacturing, Pune" },
      { property: "og:title", content: "BAMRL Pvt Ltd | Precision Aluminium Engineering for Aerospace" },
      { property: "og:description", content: "BAMRL - Bharati Advance Material Research Lab. NABL-accredited metallurgical testing & precision aluminium engineering for aerospace and defense applications. 48-hour certification turnaround." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BAMRL Pvt Ltd | Precision Aluminium Engineering for Aerospace" },
      { name: "twitter:description", content: "BAMRL - Bharati Advance Material Research Lab. NABL-accredited metallurgical testing & precision aluminium engineering for aerospace and defense applications. 48-hour certification turnaround." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8cc64de7-4f55-43d9-935c-f699a1de6fbc/id-preview-8fc3ca62--8c7ca296-21be-4502-8ddb-c8ec28966085.lovable.app-1775648649812.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8cc64de7-4f55-43d9-935c-f699a1de6fbc/id-preview-8fc3ca62--8c7ca296-21be-4502-8ddb-c8ec28966085.lovable.app-1775648649812.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
