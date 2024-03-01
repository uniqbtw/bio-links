import { NextSeo } from 'next-seo';
import seoData from '../../next-seo.config.js';

export default function Seo({ page }) {
    const { title, excerpt, slug, coverImage } = page;
    return (
        <>
            <NextSeo
                title={title}
                titleTemplate={seoData.haunted.title}
                defaultTitle={seoData.haunted.title}
                description={seoData.haunted.description}
                canonical={seoData.haunted.url}
                openGraph={{
                    type: 'website',
                    url: `https://links.ethernal.su/haunted`,
                    title: `${title}`,
                    description: `${seoData.haunted.description}`,
                    locale: 'en_EN',
                    images: [
                        {
                            url: `https://links.ethernal.su/haunted.png`,
                            alt: `${title}`,
                        },
                    ],
                    site_name: 'links.ethernal.su/haunted',
                }}
                twitter={{
                    handle: '@xyuniq',
                    site: 'links.ethernal.su/haunted',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `${seoData.openGraph.keywords}`
                },
                {
                    name: 'twitter:image',
                    content: `${seoData.haunted.images[0].url}`
                },
                {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                }]}
                robotsProps={{
                    nosnippet: false,
                    notranslate: true,
                    noimageindex: false,
                    noarchive: false,
                    notranslate: false,
                    maxSnippet: -1,
                    maxImagePreview: 'large',
                    maxVideoPreview: -1,
                }}
            />
        </>
    );
}