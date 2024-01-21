import '../styles/globals.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <link rel="icon" href="/hackstreetlogo.ico" />
        <title>Hackstreet 2.0</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
