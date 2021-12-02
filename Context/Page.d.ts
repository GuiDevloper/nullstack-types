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
  status: number,
  /**
   * Event raised when `page.title` changes.
   * 
   * Only on client.
   * 
   * https://nullstack.app/context-page#custom-events
   */
  event: string
};