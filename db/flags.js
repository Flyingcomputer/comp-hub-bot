const flags = [
  '🇦🇫',
  '🇦🇽',
  '🇦🇱',
  '🇩🇿',
  '🇦🇸',
  '🇦🇩',
  '🇦🇴',
  '🇦🇮',
  '🇦🇬',
  '🇦🇷',
  '🇦🇲',
  '🇦🇼',
  '🇦🇺',
  '🇦🇹',
  '🇦🇿',
  '🇧🇸',
  '🇧🇭',
  '🇧🇩',
  '🇧🇧',
  '🇧🇾',
  '🇧🇪',
  '🇧🇿',
  '🇧🇯',
  '🇧🇲',
  '🇧🇹',
  '🇧🇴',
  '🇧🇦',
  '🇧🇼',
  '🇧🇷',
  '🇻🇬',
  '🇧🇳',
  '🇧🇬',
  '🇧🇫',
  '🇧🇮',
  '🇰🇭',
  '🇨🇲',
  '🇨🇦',
  '🇮🇨',
  '🇨🇻',
  '🇧🇶',
  '🇰🇾',
  '🇨🇫',
  '🇹🇩',
  '🇨🇱',
  '🇨🇳',
  '🇨🇽',
  '🇨🇨',
  '🇨🇴',
  '🇰🇲',
  '🇨🇬',
  '🇨🇩',
  '🇨🇰',
  '🇨🇷',
  '🇨🇮',
  '🇭🇷',
  '🇨🇺',
  '🇨🇼',
  '🇨🇾',
  '🇨🇿',
  '🇩🇰',
  '🇩🇯',
  '🇩🇲',
  '🇩🇴',
  '🇪🇨',
  '🇪🇬',
  '🇸🇻',
  '🇬🇶',
  '🇪🇷',
  '🇪🇪',
  '🇪🇹',
  '🇫🇰',
  '🇫🇴',
  '🇫🇯',
  '🇫🇮',
  '🇫🇷',
  '🇬🇫',
  '🇵🇫',
  '🇹🇫',
  '🇬🇦',
  '🇬🇲',
  '🇬🇪',
  '🇩🇪',
  '🇬🇭',
  '🇬🇮',
  '🇬🇷',
  '🇬🇱',
  '🇬🇩',
  '🇬🇵',
  '🇬🇺',
  '🇬🇹',
  '🇬🇬',
  '🇬🇳',
  '🇬🇼',
  '🇬🇾',
  '🇭🇹',
  '🇭🇳',
  '🇭🇰',
  '🇭🇺',
  '🇮🇸',
  '🇮🇳',
  '🇮🇩',
  '🇮🇷',
  '🇮🇶',
  '🇮🇪',
  '🇮🇲',
  '🇮🇱',
  '🇮🇹',
  '🇯🇲',
  '🇯🇵',
  '🇯🇪',
  '🇯🇴',
  '🇰🇿',
  '🇰🇪',
  '🇰🇮',
  '🇽🇰',
  '🇰🇼',
  '🇰🇬',
  '🇱🇦',
  '🇱🇻',
  '🇱🇧',
  '🇱🇸',
  '🇱🇷',
  '🇱🇾',
  '🇱🇮',
  '🇱🇹',
  '🇱🇺',
  '🇲🇴',
  '🇲🇰',
  '🇲🇬',
  '🇲🇼',
  '🇲🇾',
  '🇲🇻',
  '🇲🇱',
  '🇲🇹',
  '🇲🇭',
  '🇲🇶',
  '🇲🇷',
  '🇲🇺',
  '🇾🇹',
  '🇲🇽',
  '🇫🇲',
  '🇲🇩',
  '🇲🇨',
  '🇲🇳',
  '🇲🇪',
  '🇲🇸',
  '🇲🇦',
  '🇲🇿',
  '🇲🇲',
  '🇳🇦',
  '🇳🇷',
  '🇳🇵',
  '🇳🇱',
  '🇳🇨',
  '🇳🇿',
  '🇳🇮',
  '🇳🇪',
  '🇳🇬',
  '🇳🇺',
  '🇳🇫',
  '🇰🇵',
  '🇲🇵',
  '🇳🇴',
  '🇴🇲',
  '🇵🇰',
  '🇵🇼',
  '🇵🇸',
  '🇵🇦',
  '🇵🇬',
  '🇵🇾',
  '🇵🇪',
  '🇵🇭',
  '🇵🇳',
  '🇵🇱',
  '🇵🇹',
  '🇵🇷',
  '🇶🇦',
  '🇷🇪',
  '🇷🇴',
  '🇷🇺',
  '🇷🇼',
  '🇼🇸',
  '🇸🇲',
  '🇸🇦',
  '🇸🇳',
  '🇷🇸',
  '🇸🇨',
  '🇸🇱',
  '🇸🇬',
  '🇸🇽',
  '🇸🇰',
  '🇸🇮',
  '🇬🇸',
  '🇸🇧',
  '🇸🇴',
  '🇿🇦',
  '🇰🇷',
  '🇸🇸',
  '🇪🇸',
  '🇱🇰',
  '🇧🇱',
  '🇸🇭',
  '🇰🇳',
  '🇱🇨',
  '🇵🇲',
  '🇻🇨',
  '🇸🇩',
  '🇸🇷',
  '🇸🇿',
  '🇸🇪',
  '🇨🇭',
  '🇸🇾',
  '🇹🇼',
  '🇹🇯',
  '🇹🇿',
  '🇹🇭',
  '🇹🇱',
  '🇹🇬',
  '🇹🇰',
  '🇹🇴',
  '🇹🇹',
  '🇹🇳',
  '🇹🇷',
  '🇹🇲',
  '🇹🇨',
  '🇹🇻',
  '🇻🇮',
  '🇺🇬',
  '🇺🇦',
  '🇦🇪',
  '🇬🇧',
  '🇺🇳',
  '🇺🇸',
  '🇺🇾',
  '🇺🇿',
  '🇻🇺',
  '🇻🇦',
  '🇻🇪',
  '🇻🇳',
  '🇼🇫',
  '🇪🇭',
  '🇾🇪',
  '🇿🇲',
  '🇿🇼',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
];

module.exports.flags = flags;

// noinspection NonAsciiCharacters
const flagCodeMap = {
  '🇦🇨': 'AC',
  '🇦🇩': 'AD',
  '🇦🇪': 'AE',
  '🇦🇫': 'AF',
  '🇦🇬': 'AG',
  '🇦🇮': 'AI',
  '🇦🇱': 'AL',
  '🇦🇲': 'AM',
  '🇦🇴': 'AO',
  '🇦🇶': 'AQ',
  '🇦🇷': 'AR',
  '🇦🇸': 'AS',
  '🇦🇹': 'AT',
  '🇦🇺': 'AU',
  '🇦🇼': 'AW',
  '🇦🇽': 'AX',
  '🇦🇿': 'AZ',
  '🇧🇦': 'BA',
  '🇧🇧': 'BB',
  '🇧🇩': 'BD',
  '🇧🇪': 'BE',
  '🇧🇫': 'BF',
  '🇧🇬': 'BG',
  '🇧🇭': 'BH',
  '🇧🇮': 'BI',
  '🇧🇯': 'BJ',
  '🇧🇱': 'BL',
  '🇧🇲': 'BM',
  '🇧🇳': 'BN',
  '🇧🇴': 'BO',
  '🇧🇶': 'BQ',
  '🇧🇷': 'BR',
  '🇧🇸': 'BS',
  '🇧🇹': 'BT',
  '🇧🇻': 'BV',
  '🇧🇼': 'BW',
  '🇧🇾': 'BY',
  '🇧🇿': 'BZ',
  '🇨🇦': 'CA',
  '🇨🇨': 'CC',
  '🇨🇩': 'CD',
  '🇨🇫': 'CF',
  '🇨🇬': 'CG',
  '🇨🇭': 'CH',
  '🇨🇮': 'CI',
  '🇨🇰': 'CK',
  '🇨🇱': 'CL',
  '🇨🇲': 'CM',
  '🇨🇳': 'CN',
  '🇨🇴': 'CO',
  '🇨🇵': 'CP',
  '🇨🇷': 'CR',
  '🇨🇺': 'CU',
  '🇨🇻': 'CV',
  '🇨🇼': 'CW',
  '🇨🇽': 'CX',
  '🇨🇾': 'CY',
  '🇨🇿': 'CZ',
  '🇩🇪': 'DE',
  '🇩🇬': 'DG',
  '🇩🇯': 'DJ',
  '🇩🇰': 'DK',
  '🇩🇲': 'DM',
  '🇩🇴': 'DO',
  '🇩🇿': 'DZ',
  '🇪🇦': 'EA',
  '🇪🇨': 'EC',
  '🇪🇪': 'EE',
  '🇪🇬': 'EG',
  '🇪🇭': 'EH',
  '🇪🇷': 'ER',
  '🇪🇸': 'ES',
  '🇪🇹': 'ET',
  '🇪🇺': 'EU',
  '🇫🇮': 'FI',
  '🇫🇯': 'FJ',
  '🇫🇰': 'FK',
  '🇫🇲': 'FM',
  '🇫🇴': 'FO',
  '🇫🇷': 'FR',
  '🇬🇦': 'GA',
  '🇬🇧': 'GB',
  '🇬🇩': 'GD',
  '🇬🇪': 'GE',
  '🇬🇫': 'GF',
  '🇬🇬': 'GG',
  '🇬🇭': 'GH',
  '🇬🇮': 'GI',
  '🇬🇱': 'GL',
  '🇬🇲': 'GM',
  '🇬🇳': 'GN',
  '🇬🇵': 'GP',
  '🇬🇶': 'GQ',
  '🇬🇷': 'GR',
  '🇬🇸': 'GS',
  '🇬🇹': 'GT',
  '🇬🇺': 'GU',
  '🇬🇼': 'GW',
  '🇬🇾': 'GY',
  '🇭🇰': 'HK',
  '🇭🇲': 'HM',
  '🇭🇳': 'HN',
  '🇭🇷': 'HR',
  '🇭🇹': 'HT',
  '🇭🇺': 'HU',
  '🇮🇨': 'IC',
  '🇮🇩': 'ID',
  '🇮🇪': 'IE',
  '🇮🇱': 'IL',
  '🇮🇲': 'IM',
  '🇮🇳': 'IN',
  '🇮🇴': 'IO',
  '🇮🇶': 'IQ',
  '🇮🇷': 'IR',
  '🇮🇸': 'IS',
  '🇮🇹': 'IT',
  '🇯🇪': 'JE',
  '🇯🇲': 'JM',
  '🇯🇴': 'JO',
  '🇯🇵': 'JP',
  '🇰🇪': 'KE',
  '🇰🇬': 'KG',
  '🇰🇭': 'KH',
  '🇰🇮': 'KI',
  '🇰🇲': 'KM',
  '🇰🇳': 'KN',
  '🇰🇵': 'KP',
  '🇰🇷': 'KR',
  '🇰🇼': 'KW',
  '🇰🇾': 'KY',
  '🇰🇿': 'KZ',
  '🇱🇦': 'LA',
  '🇱🇧': 'LB',
  '🇱🇨': 'LC',
  '🇱🇮': 'LI',
  '🇱🇰': 'LK',
  '🇱🇷': 'LR',
  '🇱🇸': 'LS',
  '🇱🇹': 'LT',
  '🇱🇺': 'LU',
  '🇱🇻': 'LV',
  '🇱🇾': 'LY',
  '🇲🇦': 'MA',
  '🇲🇨': 'MC',
  '🇲🇩': 'MD',
  '🇲🇪': 'ME',
  '🇲🇫': 'MF',
  '🇲🇬': 'MG',
  '🇲🇭': 'MH',
  '🇲🇰': 'MK',
  '🇲🇱': 'ML',
  '🇲🇲': 'MM',
  '🇲🇳': 'MN',
  '🇲🇴': 'MO',
  '🇲🇵': 'MP',
  '🇲🇶': 'MQ',
  '🇲🇷': 'MR',
  '🇲🇸': 'MS',
  '🇲🇹': 'MT',
  '🇲🇺': 'MU',
  '🇲🇻': 'MV',
  '🇲🇼': 'MW',
  '🇲🇽': 'MX',
  '🇲🇾': 'MY',
  '🇲🇿': 'MZ',
  '🇳🇦': 'NA',
  '🇳🇨': 'NC',
  '🇳🇪': 'NE',
  '🇳🇫': 'NF',
  '🇳🇬': 'NG',
  '🇳🇮': 'NI',
  '🇳🇱': 'NL',
  '🇳🇴': 'NO',
  '🇳🇵': 'NP',
  '🇳🇷': 'NR',
  '🇳🇺': 'NU',
  '🇳🇿': 'NZ',
  '🇴🇲': 'OM',
  '🇵🇦': 'PA',
  '🇵🇪': 'PE',
  '🇵🇫': 'PF',
  '🇵🇬': 'PG',
  '🇵🇭': 'PH',
  '🇵🇰': 'PK',
  '🇵🇱': 'PL',
  '🇵🇲': 'PM',
  '🇵🇳': 'PN',
  '🇵🇷': 'PR',
  '🇵🇸': 'PS',
  '🇵🇹': 'PT',
  '🇵🇼': 'PW',
  '🇵🇾': 'PY',
  '🇶🇦': 'QA',
  '🇷🇪': 'RE',
  '🇷🇴': 'RO',
  '🇷🇸': 'RS',
  '🇷🇺': 'RU',
  '🇷🇼': 'RW',
  '🇸🇦': 'SA',
  '🇸🇧': 'SB',
  '🇸🇨': 'SC',
  '🇸🇩': 'SD',
  '🇸🇪': 'SE',
  '🇸🇬': 'SG',
  '🇸🇭': 'SH',
  '🇸🇮': 'SI',
  '🇸🇯': 'SJ',
  '🇸🇰': 'SK',
  '🇸🇱': 'SL',
  '🇸🇲': 'SM',
  '🇸🇳': 'SN',
  '🇸🇴': 'SO',
  '🇸🇷': 'SR',
  '🇸🇸': 'SS',
  '🇸🇹': 'ST',
  '🇸🇻': 'SV',
  '🇸🇽': 'SX',
  '🇸🇾': 'SY',
  '🇸🇿': 'SZ',
  '🇹🇦': 'TA',
  '🇹🇨': 'TC',
  '🇹🇩': 'TD',
  '🇹🇫': 'TF',
  '🇹🇬': 'TG',
  '🇹🇭': 'TH',
  '🇹🇯': 'TJ',
  '🇹🇰': 'TK',
  '🇹🇱': 'TL',
  '🇹🇲': 'TM',
  '🇹🇳': 'TN',
  '🇹🇴': 'TO',
  '🇹🇷': 'TR',
  '🇹🇹': 'TT',
  '🇹🇻': 'TV',
  '🇹🇼': 'TW',
  '🇹🇿': 'TZ',
  '🇺🇦': 'UA',
  '🇺🇬': 'UG',
  '🇺🇲': 'UM',
  '🇺🇳': 'UN',
  '🇺🇸': 'US',
  '🇺🇾': 'UY',
  '🇺🇿': 'UZ',
  '🇻🇦': 'VA',
  '🇻🇨': 'VC',
  '🇻🇪': 'VE',
  '🇻🇬': 'VG',
  '🇻🇮': 'VI',
  '🇻🇳': 'VN',
  '🇻🇺': 'VU',
  '🇼🇫': 'WF',
  '🇼🇸': 'WS',
  '🇽🇰': 'XK',
  '🇾🇪': 'YE',
  '🇾🇹': 'YT',
  '🇿🇦': 'ZA',
  '🇿🇲': 'ZM',
  '🇿🇼': 'ZW',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿': 'GB_EN',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿': 'GB_SC',
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿': 'GB_WA',
};

const flagToCode = (flag) => flagCodeMap[flag];

module.exports.flagToCode = flagToCode;

// noinspection NonAsciiCharacters
const flagName = {
  '🇦🇫': 'Afghanistan',
  '🇦🇽': 'Åland Islands',
  '🇦🇱': 'Albania',
  '🇩🇿': 'Algeria',
  '🇦🇸': 'American Samoa',
  '🇦🇩': 'Andorra',
  '🇦🇴': 'Angola',
  '🇦🇮': 'Anguilla',
  '🇦🇶': 'Antarctica',
  '🇦🇬': 'Antigua and Barbuda',
  '🇦🇷': 'Argentina',
  '🇦🇲': 'Armenia',
  '🇦🇼': 'Aruba',
  '🇦🇺': 'Australia',
  '🇦🇹': 'Austria',
  '🇦🇿': 'Azerbaijan',
  '🇧🇸': 'Bahamas',
  '🇧🇭': 'Bahrain',
  '🇧🇩': 'Bangladesh',
  '🇧🇧': 'Barbados',
  '🇧🇾': 'Belarus',
  '🇧🇪': 'Belgium',
  '🇧🇿': 'Belize',
  '🇧🇯': 'Benin',
  '🇧🇲': 'Bermuda',
  '🇧🇹': 'Bhutan',
  '🇧🇴': 'Bolivia',
  '🇧🇦': 'Bosnia and Herzegovina',
  '🇧🇼': 'Botswana',
  '🇧🇻': 'Bouvet Island',
  '🇧🇷': 'Brazil',
  '🇮🇴': 'British Indian Ocean Territory',
  '🇧🇳': 'Brunei',
  '🇧🇬': 'Bulgaria',
  '🇧🇫': 'Burkina Faso',
  '🇧🇮': 'Burundi',
  '🇰🇭': 'Cambodia',
  '🇨🇲': 'Cameroon',
  '🇨🇦': 'Canada',
  '🇨🇻': 'Cape Verde',
  '🇧🇶': 'Caribbean Netherlands',
  '🇰🇾': 'Cayman Islands',
  '🇨🇫': 'Central African Republic',
  '🇹🇩': 'Chad',
  '🇨🇱': 'Chile',
  '🇨🇳': 'China',
  '🇨🇽': 'Christmas Island',
  '🇨🇨': 'Cocos (Keeling) Islands',
  '🇨🇴': 'Colombia',
  '🇰🇲': 'Comoros',
  '🇨🇬': 'Republic of the Congo',
  '🇨🇩': 'DR Congo',
  '🇨🇰': 'Cook Islands',
  '🇨🇷': 'Costa Rica',
  '🇨🇮': "Côte d'Ivoire (Ivory Coast)",
  '🇭🇷': 'Croatia',
  '🇨🇺': 'Cuba',
  '🇨🇼': 'Curaçao',
  '🇨🇾': 'Cyprus',
  '🇨🇿': 'Czechia',
  '🇩🇰': 'Denmark',
  '🇩🇯': 'Djibouti',
  '🇩🇲': 'Dominica',
  '🇩🇴': 'Dominican Republic',
  '🇪🇨': 'Ecuador',
  '🇪🇬': 'Egypt',
  '🇸🇻': 'El Salvador',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿': 'England',
  '🇬🇶': 'Equatorial Guinea',
  '🇪🇷': 'Eritrea',
  '🇪🇪': 'Estonia',
  '🇸🇿': 'Eswatini (Swaziland)',
  '🇪🇹': 'Ethiopia',
  '🇫🇰': 'Falkland Islands',
  '🇫🇴': 'Faroe Islands',
  '🇫🇯': 'Fiji',
  '🇫🇮': 'Finland',
  '🇫🇷': 'France',
  '🇬🇫': 'French Guiana',
  '🇵🇫': 'French Polynesia',
  '🇹🇫': 'French Southern and Antarctic Lands',
  '🇬🇦': 'Gabon',
  '🇬🇲': 'Gambia',
  '🇬🇪': 'Georgia',
  '🇩🇪': 'Germany',
  '🇬🇭': 'Ghana',
  '🇬🇮': 'Gibraltar',
  '🇬🇷': 'Greece',
  '🇬🇱': 'Greenland',
  '🇬🇩': 'Grenada',
  '🇬🇵': 'Guadeloupe',
  '🇬🇺': 'Guam',
  '🇬🇹': 'Guatemala',
  '🇬🇬': 'Guernsey',
  '🇬🇳': 'Guinea',
  '🇬🇼': 'Guinea-Bissau',
  '🇬🇾': 'Guyana',
  '🇭🇹': 'Haiti',
  '🇭🇲': 'Heard Island and McDonald Islands',
  '🇭🇳': 'Honduras',
  '🇭🇰': 'Hong Kong',
  '🇭🇺': 'Hungary',
  '🇮🇸': 'Iceland',
  '🇮🇳': 'India',
  '🇮🇩': 'Indonesia',
  '🇮🇷': 'Iran',
  '🇮🇶': 'Iraq',
  '🇮🇪': 'Ireland',
  '🇮🇲': 'Isle of Man',
  '🇮🇱': 'Israel',
  '🇮🇹': 'Italy',
  '🇯🇲': 'Jamaica',
  '🇯🇵': 'Japan',
  '🇯🇪': 'Jersey',
  '🇯🇴': 'Jordan',
  '🇰🇿': 'Kazakhstan',
  '🇰🇪': 'Kenya',
  '🇰🇮': 'Kiribati',
  '🇰🇵': 'North Korea',
  '🇰🇷': 'South Korea',
  '🇽🇰': 'Kosovo',
  '🇰🇼': 'Kuwait',
  '🇰🇬': 'Kyrgyzstan',
  '🇱🇦': 'Laos',
  '🇱🇻': 'Latvia',
  '🇱🇧': 'Lebanon',
  '🇱🇸': 'Lesotho',
  '🇱🇷': 'Liberia',
  '🇱🇾': 'Libya',
  '🇱🇮': 'Liechtenstein',
  '🇱🇹': 'Lithuania',
  '🇱🇺': 'Luxembourg',
  '🇲🇴': 'Macau',
  '🇲🇬': 'Madagascar',
  '🇲🇼': 'Malawi',
  '🇲🇾': 'Malaysia',
  '🇲🇻': 'Maldives',
  '🇲🇱': 'Mali',
  '🇲🇹': 'Malta',
  '🇲🇭': 'Marshall Islands',
  '🇲🇶': 'Martinique',
  '🇲🇷': 'Mauritania',
  '🇲🇺': 'Mauritius',
  '🇾🇹': 'Mayotte',
  '🇲🇽': 'Mexico',
  '🇫🇲': 'Micronesia',
  '🇲🇩': 'Moldova',
  '🇲🇨': 'Monaco',
  '🇲🇳': 'Mongolia',
  '🇲🇪': 'Montenegro',
  '🇲🇸': 'Montserrat',
  '🇲🇦': 'Morocco',
  '🇲🇿': 'Mozambique',
  '🇲🇲': 'Myanmar',
  '🇳🇦': 'Namibia',
  '🇳🇷': 'Nauru',
  '🇳🇵': 'Nepal',
  '🇳🇱': 'Netherlands',
  '🇳🇨': 'New Caledonia',
  '🇳🇿': 'New Zealand',
  '🇳🇮': 'Nicaragua',
  '🇳🇪': 'Niger',
  '🇳🇬': 'Nigeria',
  '🇳🇺': 'Niue',
  '🇳🇫': 'Norfolk Island',
  '🇲🇰': 'North Macedonia',
  '🇲🇵': 'Northern Mariana Islands',
  '🇳🇴': 'Norway',
  '🇴🇲': 'Oman',
  '🇵🇰': 'Pakistan',
  '🇵🇼': 'Palau',
  '🇵🇸': 'Palestine',
  '🇵🇦': 'Panama',
  '🇵🇬': 'Papua New Guinea',
  '🇵🇾': 'Paraguay',
  '🇵🇪': 'Peru',
  '🇵🇭': 'Philippines',
  '🇵🇳': 'Pitcairn Islands',
  '🇵🇱': 'Poland',
  '🇵🇹': 'Portugal',
  '🇵🇷': 'Puerto Rico',
  '🇶🇦': 'Qatar',
  '🇷🇪': 'Réunion',
  '🇷🇴': 'Romania',
  '🇷🇺': 'Russia',
  '🇷🇼': 'Rwanda',
  '🇧🇱': 'Saint Barthélemy',
  '🇸🇭': 'Saint Helena, Ascension and Tristan da Cunha',
  '🇰🇳': 'Saint Kitts and Nevis',
  '🇱🇨': 'Saint Lucia',
  '🇲🇫': 'Saint Martin',
  '🇵🇲': 'Saint Pierre and Miquelon',
  '🇻🇨': 'Saint Vincent and the Grenadines',
  '🇼🇸': 'Samoa',
  '🇸🇲': 'San Marino',
  '🇸🇹': 'São Tomé and Príncipe',
  '🇸🇦': 'Saudi Arabia',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿': 'Scotland',
  '🇸🇳': 'Senegal',
  '🇷🇸': 'Serbia',
  '🇸🇨': 'Seychelles',
  '🇸🇱': 'Sierra Leone',
  '🇸🇬': 'Singapore',
  '🇸🇽': 'Sint Maarten',
  '🇸🇰': 'Slovakia',
  '🇸🇮': 'Slovenia',
  '🇸🇧': 'Solomon Islands',
  '🇸🇴': 'Somalia',
  '🇿🇦': 'South Africa',
  '🇬🇸': 'South Georgia',
  '🇸🇸': 'South Sudan',
  '🇪🇸': 'Spain',
  '🇱🇰': 'Sri Lanka',
  '🇸🇩': 'Sudan',
  '🇸🇷': 'Suriname',
  '🇸🇯': 'Svalbard and Jan Mayen',
  '🇸🇪': 'Sweden',
  '🇨🇭': 'Switzerland',
  '🇸🇾': 'Syria',
  '🇹🇼': 'Taiwan',
  '🇹🇯': 'Tajikistan',
  '🇹🇿': 'Tanzania',
  '🇹🇭': 'Thailand',
  '🇹🇱': 'Timor-Leste',
  '🇹🇬': 'Togo',
  '🇹🇰': 'Tokelau',
  '🇹🇴': 'Tonga',
  '🇹🇹': 'Trinidad and Tobago',
  '🇹🇳': 'Tunisia',
  '🇹🇷': 'Turkey',
  '🇹🇲': 'Turkmenistan',
  '🇹🇨': 'Turks and Caicos Islands',
  '🇹🇻': 'Tuvalu',
  '🇺🇬': 'Uganda',
  '🇺🇦': 'Ukraine',
  '🇦🇪': 'United Arab Emirates',
  '🇬🇧': 'United Kingdom',
  '🇺🇳': 'United Nations',
  '🇺🇸': 'United States',
  '🇺🇲': 'United States Minor Outlying Islands',
  '🇺🇾': 'Uruguay',
  '🇺🇿': 'Uzbekistan',
  '🇻🇺': 'Vanuatu',
  '🇻🇦': 'Vatican City (Holy See)',
  '🇻🇪': 'Venezuela',
  '🇻🇳': 'Vietnam',
  '🇻🇬': 'British Virgin Islands',
  '🇻🇮': 'United States Virgin Islands',
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿': 'Wales',
  '🇼🇫': 'Wallis and Futuna',
  '🇪🇭': 'Western Sahara',
  '🇾🇪': 'Yemen',
  '🇿🇲': 'Zambia',
  '🇿🇼': 'Zimbabwe',
};
module.exports.flagName = flagName;
