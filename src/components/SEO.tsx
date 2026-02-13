import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    canonical?: string;
    schema?: object;
}

const SEO = ({
    title,
    description = "NIT America is a U.S.-based global brand licensing and email infrastructure company connecting American brands to Asian markets.",
    keywords = "NIT America, Messaging Infrastructure, Global Distribution, Brand Licensing, Korea Market Entry, Kakao Business, Naver Messaging",
    ogImage = "https://nitamerica.com/ogtag.png",
    ogType = 'website',
    canonical = "https://nitamerica.com",
    schema,
}: SEOProps) => {
    const siteTitle = "NIT America | Global Brand Licensing & Email Marketing Infrastructure";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
