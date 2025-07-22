import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">HR HAVEN</div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="border-primary/20 hover:bg-primary/10"
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4 text-orange" />
          ) : (
            <Moon className="h-4 w-4 text-orange" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;