"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoadingOverlay from "./LoadingOverlay";

export default function LoadingOverlayExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartLoading = () => {
    setIsLoading(true);
    // Simulate loading completion after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Loading Overlay Example</h2>
      <p className="text-muted-foreground">
        Click the button below to see the loading overlay in action.
      </p>
      
      <Button onClick={handleStartLoading} disabled={isLoading}>
        {isLoading ? "Loading..." : "Start Loading"}
      </Button>

      <LoadingOverlay 
        isLoading={isLoading}
        duration={3000}
        onComplete={() => console.log("Loading completed!")}
      />
    </div>
  );
} 