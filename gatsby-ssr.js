import { wrapRootElement as wrap } from './wrap-root-element';
import config from './src/config/website';

export const wrapRootElement = wrap;

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: config.siteLanguage });
};
