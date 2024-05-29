const nlMessages = {
  homepage: {
    title: 'Homepage',
  },
  whatIsAikido: {
    title: 'Wat is Aikido?',
  },
  practicalInfo: {
    title: 'Praktische informatie',
  },
  ourDojo: {
    title: 'Onze dojo',
  },
  links: {
    title: 'Links',
  },
  common: {
    hamburger: {
      close: 'Sluit',
      menu: 'Menu',
    },
    info: {
      title: 'Aikido in Gent',
      subtitle: 'Ontdek een authentieke Japanse krijgskunst',
      tuesday: 'Dinsdag',
      thursday: 'Donderdag',
      address: 'Sportzaal Neptunus <br /> Botestraat 98, 9032 Wondelgem',
      telephone: 'Telefoon',
      email: 'E-mail',
      practicalInfo: 'Praktische informatie',
    },
  },
};

export type Messages = typeof nlMessages;

// eslint-disable-next-line import/no-default-export -- i18n
export default nlMessages;
