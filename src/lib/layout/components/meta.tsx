import { Helmet } from "react-helmet-async";

const APP_NAME = "Cryptron";

export const Meta = () => {
  return (
    <Helmet>
      <title>Cryptron</title>
      <meta name='description' content='Cryptron' />

      <meta name='application-name' content={APP_NAME} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={APP_NAME} />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='theme-color' content='#FFFFFF' />

      <link
        rel='shortcut icon'
        type='image/x-icon'
        href='/assets/cryptron-logo.ico'
      />
    </Helmet>
  );
};
