import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";

import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <title>Rick and Morty API Project</title>
      </head>
      <body lang="pt-br">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
