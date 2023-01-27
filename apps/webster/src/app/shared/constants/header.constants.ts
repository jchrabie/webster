export const headers: Header[] = [
  {
    type: '',
    title: 'Freelance Senior Developer sur Nantes',
    imagePath: 'https://www.webster-dev.fr/assets/logo.jpg',
    description: `Think the web different. Développeur Freelance Front sur Nantes`,
    canonical: 'https://www.webster-dev.fr',
  },
  {
    type: 'blog',
    title: 'Mon blog',
    imagePath: 'https://www.webster-dev.fr/assets/blog.jpg',
    description: 'Liste de mes articles',
    canonical: 'https://www.webster-dev.fr/blog',
  },
  {
    type: 'contact',
    title: 'Contact & Tarifs',
    imagePath: 'https://www.webster-dev.fr/assets/contact.jpg',
    description: 'Coordonnées pour me rencontrer',
    canonical: 'https://www.webster-dev.fr/contact',
  },
  {
    type: 'tips',
    title: 'Tips',
    imagePath: 'https://www.webster-dev.fr/assets/webster.png',
    description: 'Partageons des tips',
    canonical: 'https://www.webster-dev.fr/tips',
  },
  {
    type: 'competences',
    title: 'Compétences',
    imagePath: 'https://www.webster-dev.fr/assets/contact.jpg',
    description: 'Dossier de compétences',
    canonical: 'https://www.webster-dev.fr/competences',
  },
  {
    type: 'mention-legales',
    title: 'Mention Légales',
    imagePath: 'https://www.webster-dev.fr/assets/legal.jpg',
    description: 'Mention Légales',
    canonical: 'https://www.webster-dev.fr/legal',
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
