export const headers: Header[] = [
  {
    type: '',
    title: 'Freelance Senior Developer sur Nantes',
    imagePath: 'https://www.webster.com/assets/logo.jpg',
    description: `Think the web different. Développeur Freelance Front sur Nantes`,
    canonical: 'https://www.webster.com',
  },
  {
    type: 'blog',
    title: 'Mon blog',
    imagePath: 'https://www.webster.com/assets/blog.jpg',
    description: 'Liste de mes articles',
    canonical: 'https://www.webster.com/blog',
  },
  {
    type: 'contact',
    title: 'Contact & Tarifs',
    imagePath: 'https://www.webster.com/assets/contact.jpg',
    description: 'Coordonnées pour me rencontrer',
    canonical: 'https://www.webster.com/contact',
  },
];

export interface Header {
  type?: string;
  title: string;
  imagePath: string;
  description: string;
  canonical: string;
}

export function getHeaderByType(type: string): Header {
  return headers?.find((header) => header.type === type) || ({} as Header);
}
