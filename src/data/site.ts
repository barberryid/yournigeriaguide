export const SITE = {
  name: 'Your Nigeria Guide',
  guideName: 'Benjamin',
  guideFullName: 'Adebayo Benjamin',
  phoneDisplay: '+234 906 510 2421',
  phoneE164: '+2349065102421',
  whatsappUrl:
    'https://wa.me/2349065102421?text=Hello%20Benjamin%2C%20I%20found%20Your%20Nigeria%20Guide%20online.%20I%20am%20interested%20in%20a%20guided%20trip%20in%20Nigeria.%20Can%20you%20help%20me%20plan%20it%3F',
  price: 'USD 50 per day',

  // Canonical domain (no trailing slash). Used to build canonical + Open Graph URLs.
  domain: 'https://www.yournigeriaguide.com',
  siteUrl: 'https://www.yournigeriaguide.com/',

  // Default metadata (homepage). Individual pages can override via BaseLayout props.
  title: 'Your Nigeria Guide | Private Guide in Lagos and Nigeria',
  description:
    'Explore Lagos and Nigeria with Adebayo Benjamin, a trusted local private guide. Get help with Lagos tours, custom Nigeria itineraries, airport arrival, WhatsApp planning, and Nigeria visa invitation letter support.',
  ogTitle: 'Your Nigeria Guide | Private Guide in Lagos and Nigeria',
  ogDescription:
    'Explore Lagos and Nigeria with Adebayo Benjamin, a trusted local private guide. Contact Benjamin easily on WhatsApp.',

  // Open Graph / social share image (1200x630).
  ogImage: '/images/og/your-nigeria-guide-og.jpg',
  ogImageAlt: 'Your Nigeria Guide private guide service in Nigeria',
};

// Single source of truth for the FAQ. Used both for the visible FAQ section
// and the FAQPage JSON-LD so the two can never drift apart.
export const FAQ = [
  {
    q: 'How do I contact Benjamin?',
    a: 'The easiest way is WhatsApp at +234 906 510 2421. Send your travel dates, group size, and what you would like to do in Nigeria, and Benjamin will reply with practical advice.',
  },
  {
    q: 'How much does Benjamin charge?',
    a: 'The guiding fee is USD 50 per day. Extra costs such as transport, meals, entrance fees, and accommodation are separate. Message Benjamin with your plans so he can explain what to expect.',
  },
  {
    q: 'Can Benjamin help with a Nigeria visa invitation letter?',
    a: 'Benjamin can help with a letter of invitation for travellers who need support for their Nigeria visa process. Visa rules can change, so always confirm current requirements with official Nigerian immigration, your nearest Nigerian embassy, or a consulate before booking travel.',
  },
  {
    q: 'Does Benjamin guide in Lagos?',
    a: 'Yes. Benjamin can help with Lagos tours, local transport, markets, food, beaches, culture, and practical first-day support for visitors arriving in Lagos, Nigeria.',
  },
];
