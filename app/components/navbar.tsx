import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface NavbarProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

export function Navbar({ showLogin, setShowLogin }: NavbarProps) {
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  return (
    <>
      <nav className="bg-primary p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-primary-foreground font-bold text-xl">WorkFlow</div>
          <div>
            <Button onClick={toggleLogin} className="mr-2 bg-secondary hover:bg-secondary/90">Login</Button>
            <Button onClick={toggleSignup} className="bg-accent hover:bg-accent/90">Sign Up</Button>
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Card className="w-[350px] bg-card">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle>Login</CardTitle>
              <CardDescription className="text-primary-foreground/80">Enter your credentials to login</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowLogin(false)}>Cancel</Button>
              <Button className="bg-accent hover:bg-accent/90">Login</Button>
            </CardFooter>
            <div className="text-center pb-4">
              <span className="text-sm">No account? </span>
              <Button variant="link" onClick={toggleSignup} className="text-secondary">Sign Up</Button>
            </div>
          </Card>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Card className="w-[350px] bg-card">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle>Sign Up</CardTitle>
              <CardDescription className="text-primary-foreground/80">Create a new account</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowSignup(false)}>Cancel</Button>
              <Button className="bg-accent hover:bg-accent/90">Sign Up</Button>
            </CardFooter>
            <div className="text-center pb-4">
              <span className="text-sm">Already have an account? </span>
              <Button variant="link" onClick={toggleLogin} className="text-secondary">Login</Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}