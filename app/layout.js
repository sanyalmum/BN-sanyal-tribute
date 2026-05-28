export const metadata = {
  title: "Birendranath Sanyal Tribute",
  description: "Tribute website for Birendranath Sanyal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
