import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-bs-theme="dark">
      <Head>

        <link rel="icon" type="" href="/logo.png" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/bootstrap-btn.min.css" />
        <link rel="stylesheet" href="/boxicons.min.css" />
        <link rel="stylesheet" href="/css/boxicons.css" />
        <link rel="stylesheet" href="/css/animations.css" />
        <link rel="stylesheet" href="/css/boxicons.min.css" />
        <link rel="stylesheet" href="/css/transformation.css" />
        {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" /> */}
        <script src="/js/theme.min.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
