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
    type: 'Blog',
    icon: 'speaker_notes',
    url: '/blog',
  },
];

export interface Link {
  type: string;
  icon: string;
  url: string;
}
