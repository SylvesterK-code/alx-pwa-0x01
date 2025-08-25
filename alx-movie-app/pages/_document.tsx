// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }



















import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon fallback */}
        <link rel="icon" href="/icons/android-chrome-192x192.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
