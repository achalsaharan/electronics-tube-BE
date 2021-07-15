const videos = [
    {
        videoId: 'nL34zDTPkcs',
        name: 'You can learn Arduino in 15 minutes',
        thumbnailUrl:
            'https://i.ytimg.com/vi/nL34zDTPkcs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDv-UzdqFh4QKPVBpQ3yNTj0r_HXg',
        views: 13456,
        categories: ['arduino', 'basics'],
    },

    {
        videoId: 'ZejQOX69K5M',
        name: 'Ultrasonic Sensor HC-SR04 and Arduino Tutorial',
        thumbnailUrl:
            'https://i.ytimg.com/vi/ZejQOX69K5M/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDmW22DNsIHUR8428p9FSA9oZkyrA',
        views: 13456,
        categories: ['ultrasonic sensor', 'arduino'],
    },
    {
        videoId: '6rmErwU5E-k',
        name: 'Soldering Crash Course: Basic Techniques, Tips and Advice!',
        thumbnailUrl:
            'https://i.ytimg.com/vi/6rmErwU5E-k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLARsWYTcFz3JtwtgOD5mnNYZ_Iopg',
        views: 13456,
        categories: ['soldering', 'basics'],
    },
    {
        videoId: 'dZZynJLmTn8',
        name: 'Arduino LCD Tutorial | How To Control An LCD',
        thumbnailUrl:
            'https://i.ytimg.com/vi/dZZynJLmTn8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCRMVANS_cHn7LC9k3mMYhmmkLMtQ',
        views: 13456,
        categories: ['arduino'],
    },
    {
        videoId: 'kUHmYKWwuWs',
        name: 'Using Servo Motors with Arduino',
        thumbnailUrl:
            'https://i.ytimg.com/vi/kUHmYKWwuWs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBqpYtsNrHNHfioaAjMRStH1PgwZA',
        views: 13456,
        categories: ['arduino', 'servo motors'],
    },
    {
        videoId: 'dyjo_ggEtVU',
        name: 'Controlling DC Motors with the L298N H Bridge and Arduino',
        thumbnailUrl:
            'https://i.ytimg.com/vi/dyjo_ggEtVU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD8Gj7VTxNbogXArb7vyUhHoNalVA',
        views: 13456,
        categories: ['arduino', 'motor driver'],
    },
    {
        videoId: 'BpJCAafw2qE',
        name: 'Raspberry Pi 4 Getting Started',
        thumbnailUrl:
            'https://i.ytimg.com/vi/BpJCAafw2qE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMh9W7pyG_-lK2xw02JWeLKZ96JQ',
        views: 13456,
        categories: ['raspberry pi', 'basics'],
    },
    {
        videoId: '8grooZWbH9Y',
        name: 'Getting Started With The Raspberry Pi 4 - Use It As A Linux PC',
        thumbnailUrl:
            'https://i.ytimg.com/vi/8grooZWbH9Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA2M3L-CEPtJ9nw7KdmtSuTPqwqtA',
        views: 13456,
        categories: ['raspberry pi', 'basics', 'setup'],
    },
    {
        videoId: '6nW1amknZT4',
        name: 'How to install Windows 10 on a Raspberry Pi 4 8GB',
        thumbnailUrl:
            'https://i.ytimg.com/vi/6nW1amknZT4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBHxbeMwovraAALpjXCSrICMAzjkA',
        views: 13456,
        categories: ['raspberry pi', 'windows', 'setup'],
    },
    {
        videoId: '6WReFkfrUIk',
        name: 'How to Use a Breadboard',
        thumbnailUrl:
            'https://i.ytimg.com/vi/6WReFkfrUIk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjTDaBCAovHo5zTlYZtQ0j_CO6WA',
        views: 13456,
        categories: ['breadboard', 'basics'],
    },
    {
        videoId: '6Maq5IyHSuc',
        name: 'A simple guide to electronic components',
        thumbnailUrl:
            'https://i.ytimg.com/vi/6Maq5IyHSuc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDr7xQzCxpQXLxc-mr5b1xUwgMBiA',
        views: 13456,
        categories: ['basics'],
    },

    {
        videoId: 'ogb0DTqsZEs',
        name: 'LiPo Batteries Explained',
        thumbnailUrl:
            'https://i.ytimg.com/vi/ogb0DTqsZEs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBaPQzQ-rFslRwDVlan5uYjdiQFqg',
        views: 13456,
        categories: ['lipo batteries', 'basics'],
    },
    {
        videoId: 'TdUK6RPdIrA',
        name: 'How to Use a Multimeter for Beginners',
        thumbnailUrl:
            'https://i.ytimg.com/vi/TdUK6RPdIrA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCQZ1tYeBZT-Jj937DcjGD9ILChFg',
        views: 13456,
        categories: ['multimeter', 'basics'],
    },
];

module.exports = { videos };
