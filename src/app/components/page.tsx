import React, { ReactNode } from 'react';
import Link from 'next/link'; // Import Next.js Link component

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <nav>
          <ul className="flex space-x-8 justify-center">
            <li>
              <Link href="/" className="text-xl font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-xl font-semibold">
                About
              </Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Event Ticketing System</p>
      </footer>
    </div>
  );
};

export default Layout;
