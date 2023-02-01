export const linkList: Link[] = [
  {
    type: 'sideNav.home',
    icon: 'home',
    url: '/',
  },
  {
    type: 'sideNav.contact',
    icon: 'contacts',
    url: '/contact',
  },
  {
    type: 'Tips',
    icon: 'speaker_notes',
    url: '/tips',
  },
  {
    type: 'Compétences',
    icon: 'speaker_notes',
    url: '/competences',
  },
];

export interface Link {
  type: string;
  icon: string;
  url: string;
}
