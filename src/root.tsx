import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { iubenda } from "./lib/iubenda";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#140b05" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/brand/favicon-new.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={`window._iub = window._iub || [];
window._iub.csConfiguration = window._iub.csConfiguration || {};
window._iub.csConfiguration.callback = {
  onPreferenceChange: function () {
    var map = document.querySelector('iframe[data-iubenda-google-map]');
    if (map && map.src.indexOf('https://www.google.com/maps') === 0) {
      window.location.reload();
    }
  }
};`}
        />
        <script type="text/javascript" src={iubenda.widgetUrl}></script>
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
