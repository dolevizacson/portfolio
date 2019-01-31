const content = {
  home: {
    about: 'Full Stack developer, ',
    moto: 'Try to find moments to laugh, even in bad times',
  },
  skills: [
    {
      key: 1,
      topic: 'Front-End',
      image: '/frontendImage.png',
      stack: [
        {
          key: 11,
          language: 'JavaScript',
          icon: 'js-square',
          shortData: 'here will be written shorten knowledge about javascript',
          longData: [
            'stuff about java script',
            'more stuff about java script',
            'more stuff about java script',
          ],
        },
        {
          key: 12,
          language: 'React',
          icon: 'react',
          shortData: 'here will be written shorten knowledge about react',
          longData: [
            'stuff about react',
            'more stuff about react',
            'more stuff about react',
          ],
        },
      ],
    },
    {
      key: 2,
      topic: 'Back-End',
      image: '/backendImage.png',
      stack: [
        {
          key: 21,
          language: 'Java',
          icon: 'java',
          shortData: 'here will be written shorten knowledge about java',
          longData: [
            'stuff about java',
            'more stuff about java',
            'more stuff about java',
          ],
        },
      ],
    },
  ],
};

export default content;
