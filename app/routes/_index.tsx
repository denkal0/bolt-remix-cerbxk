import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Navbar } from "~/components/navbar";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "WorkFlow App" },
    { name: "description", content: "Welcome to WorkFlow!" },
  ];
};

export default function Index() {
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <div className="container mx-auto flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold mb-4 text-center text-primary">Welcome to WorkFlow</h1>
        <p className="text-xl mb-8 text-center text-foreground">Your productivity solution for modern teams.</p>
        <Button onClick={handleGetStarted} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
      </div>
    </div>
  );
}