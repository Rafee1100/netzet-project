import './globals.css';
import './bootstrap-client';

export const metadata = {
  title: 'Fametonic',
  description: 'Turn Social Media Into a Profitable Career',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
