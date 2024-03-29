const getEmote = require('../utils/getEmote');

module.exports.regions = [
  {
    key: 'region1',
    name: 'Europe',
    description: 'Germany, Finland, Italy, Spain ...',
    emote: '🇪🇺',
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region2',
      'region3',
      'region5',
    ],
    countries: [
      '🇦🇽',
      '🇦🇱',
      '🇦🇩',
      '🇦🇹',
      '🇧🇾',
      '🇧🇪',
      '🇧🇦',
      '🇧🇬',
      '🇭🇷',
      '🇨🇾',
      '🇨🇿',
      '🇩🇰',
      '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      '🇪🇪',
      '🇫🇴',
      '🇫🇮',
      '🇫🇷',
      '🇩🇪',
      '🇬🇮',
      '🇬🇷',
      '🇬🇬',
      '🇭🇺',
      '🇮🇸',
      '🇮🇪',
      '🇮🇲',
      '🇮🇹',
      '🇯🇪',
      '🇰🇿',
      '🇽🇰',
      '🇱🇻',
      '🇱🇮',
      '🇱🇹',
      '🇱🇺',
      '🇲🇹',
      '🇲🇪',
      '🇲🇩',
      '🇲🇨',
      '🇳🇱',
      '🇲🇰',
      '🇳🇴',
      '🇵🇱',
      '🇵🇹',
      '🇷🇴',
      '🇷🇺',
      '🇸🇲',
      '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      '🇷🇸',
      '🇸🇰',
      '🇸🇮',
      '🇪🇸',
      '🇸🇪',
      '🇨🇭',
      '🇹🇷',
      '🇺🇦',
      '🇬🇧',
      '🇻🇦',
      '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    ],
  },
  {
    key: 'region2',
    name: 'Africa',
    description: 'Egypt, Ghana, South Africa, Somalia ...',
    emote: getEmote('flag_afu', '879351148396552192'),
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region1',
      'region3',
      'region5',
    ],
    countries: [
      '🇩🇿',
      '🇦🇴',
      '🇧🇯',
      '🇧🇼',
      '🇧🇫',
      '🇧🇮',
      '🇨🇲',
      '🇮🇨',
      '🇨🇻',
      '🇨🇫',
      '🇪🇦',
      '🇹🇩',
      '🇰🇲',
      '🇨🇩',
      '🇩🇯',
      '🇪🇬',
      '🇬🇶',
      '🇪🇷',
      '🇸🇿',
      '🇪🇹',
      '🇹🇫',
      '🇬🇦',
      '🇬🇲',
      '🇬🇭',
      '🇬🇳',
      '🇬🇼',
      '🇨🇮',
      '🇰🇪',
      '🇱🇸',
      '🇱🇷',
      '🇱🇾',
      '🇲🇬',
      '🇲🇼',
      '🇲🇱',
      '🇲🇷',
      '🇲🇺',
      '🇾🇹',
      '🇲🇦',
      '🇲🇿',
      '🇳🇦',
      '🇳🇪',
      '🇳🇬',
      '🇨🇬',
      '🇷🇪',
      '🇷🇼',
      '🇸🇭',
      '🇸🇹',
      '🇸🇳',
      '🇸🇨',
      '🇸🇱',
      '🇸🇴',
      '🇿🇦',
      '🇸🇸',
      '🇸🇩',
      '🇹🇿',
      '🇹🇬',
      '🇹🇳',
      '🇪🇭',
      '🇺🇬',
      '🇿🇲',
      '🇿🇼',
    ],
  },
  {
    key: 'region3',
    name: 'North America',
    description: 'USA, Canada, Greenland ...',
    emote: getEmote('flag_oas', '879352809215098900'),
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region1',
      'region2',
      'region4',
    ],
    countries: [
      '🇦🇮',
      '🇦🇬',
      '🇦🇼',
      '🇧🇸',
      '🇧🇧',
      '🇧🇿',
      '🇧🇲',
      '🇨🇦',
      '🇨🇺',
      '🇨🇼',
      '🇩🇲',
      '🇰🇾',
      '🇬🇱',
      '🇬🇩',
      '🇬🇵',
      '🇬🇹',
      '🇭🇹',
      '🇭🇳',
      '🇲🇶',
      '🇲🇸',
      '🇳🇮',
      '🇧🇱',
      '🇰🇳',
      '🇱🇨',
      '🇲🇫',
      '🇵🇲',
      '🇻🇨',
      '🇸🇽',
      '🇹🇹',
      '🇹🇨',
      '🇻🇬',
      '🇻🇮',
      '🇺🇸',
      '🇺🇲',
    ],
  },
  {
    key: 'region4',
    name: 'South America',
    description: 'Peru, Chile, Brazil, Colombia ...',
    emote: getEmote('flag_sau', '879358909557669908'),
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region3',
      'region6',
      'region7',
    ],
    countries: [
      '🇦🇷',
      '🇧🇴',
      '🇧🇻',
      '🇧🇷',
      '🇧🇶',
      '🇨🇱',
      '🇨🇨',
      '🇨🇴',
      '🇨🇷',
      '🇩🇴',
      '🇪🇨',
      '🇸🇻',
      '🇫🇰',
      '🇬🇫',
      '🇬🇾',
      '🇯🇲',
      '🇲🇽',
      '🇵🇦',
      '🇵🇾',
      '🇵🇪',
      '🇵🇷',
      '🇬🇸',
      '🇸🇷',
      '🇺🇾',
      '🇻🇪',
    ],
  },
  {
    key: 'region5',
    name: 'West Asia',
    description: 'Qatar, Iran, Saudi Arabia, Israel ...',
    emote: getEmote('flag_arl', '879352072171044884'),
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region1',
      'region2',
    ],
    countries: [
      '🇦🇫',
      '🇦🇲',
      '🇦🇿',
      '🇧🇭',
      '🇧🇩',
      '🇧🇹',
      '🇬🇪',
      '🇰🇼',
      '🇮🇳',
      '🇮🇷',
      '🇮🇶',
      '🇮🇱',
      '🇯🇴',
      '🇰🇬',
      '🇱🇧',
      '🇲🇻',
      '🇳🇵',
      '🇴🇲',
      '🇵🇰',
      '🇵🇸',
      '🇶🇦',
      '🇸🇦',
      '🇱🇰',
      '🇸🇾',
      '🇹🇯',
      '🇹🇲',
      '🇦🇪',
      '🇺🇿',
      '🇾🇪',
    ],
  },
  {
    key: 'region6',
    name: 'East Asia',
    description: 'Japan, China, South Korea, Macau ...',
    emote: getEmote('flag_eas', '879351178138374226'),
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region4',
      'region7',
    ],
    countries: [
      '🇧🇳',
      '🇰🇭',
      '🇨🇳',
      '🇭🇰',
      '🇮🇩',
      '🇯🇵',
      '🇱🇦',
      '🇲🇴',
      '🇲🇾',
      '🇲🇳',
      '🇲🇲',
      '🇰🇵',
      '🇵🇭',
      '🇸🇬',
      '🇰🇷',
      '🇹🇼',
      '🇹🇱',
      '🇹🇭',
      '🇻🇳',
    ],
  },
  {
    key: 'region7',
    name: 'Oceania',
    description: 'Australia, Tuvalu, Samoa, Kiribati ...',
    emote: getEmote('flag_ocu', '879366554532339834'),
    default: false,
    rankedEnabled: true,
    profileEnabled: true,
    nearbyRegions: [
      'region4',
      'region6',
    ],
    countries: [
      '🇦🇸',
      '🇦🇺',
      '🇨🇽',
      '🇨🇰',
      '🇬🇺',
      '🇫🇯',
      '🇭🇲',
      '🇵🇫',
      '🇰🇮',
      '🇲🇭',
      '🇫🇲',
      '🇳🇷',
      '🇳🇨',
      '🇳🇿',
      '🇳🇺',
      '🇳🇫',
      '🇲🇵',
      '🇵🇼',
      '🇵🇬',
      '🇵🇳',
      '🇼🇸',
      '🇸🇧',
      '🇹🇰',
      '🇹🇴',
      '🇹🇻',
      '🇻🇺',
      '🇼🇫',
    ],
  },
  {
    key: 'regionFree',
    name: 'No region lock',
    description: 'Worldwide',
    emote: null,
    default: true,
    rankedEnabled: true,
    profileEnabled: false,
    nearbyRegions: [],
    countries: []
  },
];
