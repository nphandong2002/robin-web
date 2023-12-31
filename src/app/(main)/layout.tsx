import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import LayoutMain from '@/layouts/main/layout';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/hook/useAuth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <LayoutMain>{children}</LayoutMain>
        </body>
      </html>
    </SessionProvider>
  );
}
