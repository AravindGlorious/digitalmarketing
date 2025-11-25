export const metadata = {
  title: "A Square Digital Marketing",
  description: "Digital marketing agency website built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
