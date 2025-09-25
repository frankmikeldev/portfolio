// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js and Bootstrap',
  icons: {
    icon: '/favicon.png', // ✅ your favicon
    apple: '/apple-touch-icon.png', // ✅ iOS devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
