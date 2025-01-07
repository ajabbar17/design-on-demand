export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: 'AdsBot-Google',
          crawlDelay: 1,
        },
       
      ],
      sitemap: 'https://www.designondemand.solutions/sitemap.xml',
    }
  }