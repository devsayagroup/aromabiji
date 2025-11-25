interface HeadProps {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  image?: string;
  author?: string;
  twitterHandle?: string;
}

export default function Head({
  title,
  description,
  url,
  keywords = "",
  image = "/logo/AromaBiji-WildLuwak.png", 
  author = "Aroma Biji",
  twitterHandle = "@aromabiji.id",
}: HeadProps) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={author} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Theme Color */}
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}