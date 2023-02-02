export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground': '#2f2e538a',
    '--background': '#fff',
    '--background-light': '#efefef',

    '--primary': '#a55afe',

    '--text': '#201f47',
    '--text-light': '#2f2e53',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground': '#2f2e538a',
    '--background': '#201f47',
    '--background-light': '#2f2e53',

    '--primary': '#a55afe',

    '--text': '#fff',
    '--text-light': '#efefef',
  },
};
