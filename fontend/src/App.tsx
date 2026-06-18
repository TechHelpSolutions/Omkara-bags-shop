import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Home from "./components/Home"; // Hum homepage code ko yahan ya alag component me rkhenge

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-background text-foreground font-sans">
        {/* Global Navigation Header */}
        <SiteHeader />
        
        {/* Main Content View */}
        <main className="min-h-[60vh]">
          <Home />
        </main>
        
        {/* Global Footer & Floating Widget */}
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}

export default App;
