type Page = {
  /**
   * Current page title
   * 
   * https://nullstack.app/context-page
   */
  title: string,
  /**
   * Path to site banner at **public** folder
   * 
   * https://nullstack.app/context-page
   */
  image: string,
  /**
   * Current page description
   * 
   * https://nullstack.app/context-page
   */
  description: string,
  /**
   * Absolute canonical url
   * 
   * https://nullstack.app/context-page
   */
  canonical: string,
  /**
   * Current page locale, example: `en-US`
   * 
   * https://nullstack.app/context-page
   */
  locale: string,
  /**
   * Related to robots.txt file generation
   * 
   * https://nullstack.app/context-page
   */
  robots: string,
  schema: object,
  /**
   * Represents the `changefreq` key in the **sitemap.xml**
   * 
   * https://nullstack.app/context-page
   */
  changes: 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never',
  /**
   * Represents the `priority` key in the **sitemap.xml**
   * 
   * sitemaps assume a `0.5` priority
   * 
   * https://nullstack.app/context-page
   */
  priority: number,
  /**
   * The page current HTTP response, example: `200`
   * 
   * https://nullstack.app/context-page
   */
  status: number
};

type Project = {
  domain: string,
  /**
   * Name of the project
   *
   * https://nullstack.app/context-project
   */
  name: string,
  shortName: string,
  color: string,
  backgroundColor: string,
  /**
   * Type of the app, example: `website`
   */
  type: string,
  display: string,
  orientation: string,
  scope: string,
  root: string,
  /**
   * App icons size/path
   * 
   * If not declared, Nullstack searchs for `icon-[WIDTH]x[HEIGHT].png` in **public** folder
   * 
   * @example { '72': '/icon-72x72.png' }
   */
  icons: object,
  /**
   * Relative or absolute url to favicon
   */
  favicon: string,
  /**
   * Relative paths
   */
  disallow: string[],
  /**
   * If active or relative/absolute url
   */
  sitemap: boolean | string,
  cdn: string,
  protocol: 'http' | 'https',
};

type CtxWorker<qType = Object>  = {
  /**
   * - keys: server functions names
   * - values: array of these functions arguments
   *
   * https://nullstack.app/service-worker#loading-screens
   */
  queues: qType,

  /**
   * When a server function is called fetching will be set to `true` until the response is resolved.
   *
   * https://nullstack.app/service-worker#loading-screens
   */
  fetching: boolean,

  /**
   * @deprecated Removed on v0.9.20 use `fetching` instead:
   *
   * https://nullstack.app/service-worker#loading-screens
   */
  loading: boolean
};

type Self = {
  initiated: boolean,
  hydrated: boolean,
  prerendered: boolean,
  /**
   * If the component is persistent
   * 
   * https://nullstack.app/persistent-components
   */
  persistent: boolean,
  /**
   * Only on client
   */
  element: HTMLElement,
  key: string
}

/**
 * https://nullstack.app/context
 */
type Context = {
  /**
   * Information about the document `head` metatags.
   *  
   * https://nullstack.app/context-page
   */
  page?: Page,

  /**
   * Information about the app manifest and some metatags.
   *
   * https://nullstack.app/context-project
   */
  project?: Project,

  /**
   * Gives you granular control of your PWA behavior.
   * 
   * https://nullstack.app/service-worker
   */
  worker?: CtxWorker,

  /**
   * It gives you information about the instance lifecycle and it's unique [key](https://nullstack.app/instance-self#instance-key).
   * 
   * https://nullstack.app/instance-self
   */
  self?: Self
};