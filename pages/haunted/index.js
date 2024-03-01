import WebLinks from '../../haunted/components/WebLinks.js';
import Seo from '../../haunted/components/Seo.js';
import seoData from '../../next-seo.config.js';


export default function Haunted() {
  const page = {
    title: seoData.haunted.title,
    excerpt: 'haunted',
    slug: '/haunted',
    coverImage: 'https://links.ethernal.su/haunted.png'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

