import defaultsDeep from 'lodash.defaultsdeep';
import {defineMessages} from 'react-intl';

import {
    blockColors as darkModeBlockColors,
    extensions as darkModeExtensions
} from './dark';
import {
    blockColors as highContrastBlockColors,
    extensions as highContrastExtensions
} from './high-contrast';
import {blockColors as mintBlockColors} from './mint';
import {blockColors as sunsetBlockColors} from './sunset';
import {blockColors as defaultColors} from './default';

import defaultIcon from './default/icon.svg';
import highContrastIcon from './high-contrast/icon.svg';

const DEFAULT_THEME = 'default';
const HIGH_CONTRAST_THEME = 'high-contrast';
const DARK_THEME = 'dark';
const MINT_THEME = 'mint';
const SUNSET_THEME = 'sunset';

const mergeWithDefaults = colors => defaultsDeep({}, colors, defaultColors);

const uiThemeMap = {
    [DEFAULT_THEME]: {
        uiPrimary: 'hsla(215, 100%, 95%, 1)',
        uiSecondary: 'hsla(215, 75%, 95%, 1)',
        uiTertiary: 'hsla(215, 50%, 90%, 1)',
        uiModalOverlay: 'hsla(215, 100%, 65%, 0.9)',
        uiWhite: 'hsla(0, 100%, 100%, 1)',
        uiWhiteDim: 'hsla(0, 100%, 100%, 0.75)',
        uiWhiteTransparent: 'hsla(0, 100%, 100%, 0.25)',
        uiTransparent: 'hsla(0, 100%, 100%, 0)',
        uiBlackTransparent: 'hsla(0, 0%, 0%, 0.15)',
        uiBlackTransparent10: 'hsla(0, 0%, 0%, 0.10)',
        uiGreen: 'hsla(163, 85%, 35%, 1)',
        uiGreen2: 'hsla(163, 85%, 40%, 1)',
        textPrimary: 'hsla(225, 15%, 40%, 1)',
        textPrimaryTransparent: 'hsla(225, 15%, 40%, 0.75)'
    },
    [DARK_THEME]: {
        uiPrimary: '#121212',
        uiSecondary: '#1E1E1E',
        uiTertiary: '#2A2A2A',
        uiModalOverlay: 'rgba(0, 0, 0, 0.75)',
        uiWhite: '#2B2B2B',
        uiWhiteDim: 'rgba(43, 43, 43, 0.75)',
        uiWhiteTransparent: 'rgba(43, 43, 43, 0.25)',
        uiTransparent: 'rgba(43, 43, 43, 0)',
        uiBlackTransparent: 'rgba(255, 255, 255, 0.15)',
        uiBlackTransparent10: 'rgba(255, 255, 255, 0.10)',
        uiGreen: 'hsla(163, 85%, 35%, 1)',
        uiGreen2: 'hsla(163, 85%, 40%, 1)',
        textPrimary: '#E5E5E5',
        textPrimaryTransparent: 'rgba(229, 229, 229, 0.75)'
    },
    [HIGH_CONTRAST_THEME]: {
        uiPrimary: '#FFFFFF',
        uiSecondary: '#F7F7F7',
        uiTertiary: '#E6E6E6',
        uiModalOverlay: 'rgba(0, 0, 0, 0.8)',
        uiWhite: '#FFFFFF',
        uiWhiteDim: 'rgba(255, 255, 255, 0.75)',
        uiWhiteTransparent: 'rgba(255, 255, 255, 0.25)',
        uiTransparent: 'rgba(255, 255, 255, 0)',
        uiBlackTransparent: 'rgba(0, 0, 0, 0.25)',
        uiBlackTransparent10: 'rgba(0, 0, 0, 0.15)',
        uiGreen: 'hsla(163, 85%, 35%, 1)',
        uiGreen2: 'hsla(163, 85%, 40%, 1)',
        textPrimary: '#000000',
        textPrimaryTransparent: 'rgba(0, 0, 0, 0.75)'
    },
    [MINT_THEME]: {
        uiPrimary: '#F3FFFC',
        uiSecondary: '#E3F6F1',
        uiTertiary: '#CFEDE6',
        uiModalOverlay: 'rgba(47, 184, 163, 0.9)',
        uiWhite: '#FFFFFF',
        uiWhiteDim: 'rgba(255, 255, 255, 0.75)',
        uiWhiteTransparent: 'rgba(255, 255, 255, 0.25)',
        uiTransparent: 'rgba(255, 255, 255, 0)',
        uiBlackTransparent: 'rgba(28, 63, 58, 0.2)',
        uiBlackTransparent10: 'rgba(28, 63, 58, 0.12)',
        uiGreen: 'hsla(163, 85%, 35%, 1)',
        uiGreen2: 'hsla(163, 85%, 40%, 1)',
        textPrimary: '#2B504C',
        textPrimaryTransparent: 'rgba(43, 80, 76, 0.75)'
    },
    [SUNSET_THEME]: {
        uiPrimary: '#FFF2EA',
        uiSecondary: '#FDE3D8',
        uiTertiary: '#F7D1C3',
        uiModalOverlay: 'rgba(255, 122, 89, 0.9)',
        uiWhite: '#FFFFFF',
        uiWhiteDim: 'rgba(255, 255, 255, 0.75)',
        uiWhiteTransparent: 'rgba(255, 255, 255, 0.25)',
        uiTransparent: 'rgba(255, 255, 255, 0)',
        uiBlackTransparent: 'rgba(94, 60, 51, 0.2)',
        uiBlackTransparent10: 'rgba(94, 60, 51, 0.12)',
        uiGreen: 'hsla(163, 85%, 35%, 1)',
        uiGreen2: 'hsla(163, 85%, 40%, 1)',
        textPrimary: '#5E3C33',
        textPrimaryTransparent: 'rgba(94, 60, 51, 0.75)'
    }
};

const messages = defineMessages({
    [DEFAULT_THEME]: {
        id: 'gui.theme.default',
        defaultMessage: 'Original',
        description: 'label for original theme'
    },
    [DARK_THEME]: {
        id: 'gui.theme.dark',
        defaultMessage: 'Dark',
        description: 'label for dark mode theme'
    },
    [HIGH_CONTRAST_THEME]: {
        id: 'gui.theme.highContrast',
        defaultMessage: 'High Contrast',
        description: 'label for high theme'
    },
    [MINT_THEME]: {
        id: 'gui.theme.mint',
        defaultMessage: 'Mint',
        description: 'label for mint theme'
    },
    [SUNSET_THEME]: {
        id: 'gui.theme.sunset',
        defaultMessage: 'Sunset',
        description: 'label for sunset theme'
    }
});

const themeMap = {
    [DEFAULT_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: defaultColors,
        extensions: {},
        label: messages[DEFAULT_THEME],
        icon: defaultIcon
    },
    [DARK_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: mergeWithDefaults(darkModeBlockColors),
        extensions: darkModeExtensions,
        label: messages[DARK_THEME],
        icon: defaultIcon
    },
    [HIGH_CONTRAST_THEME]: {
        blocksMediaFolder: 'blocks-media/high-contrast',
        colors: mergeWithDefaults(highContrastBlockColors),
        extensions: highContrastExtensions,
        label: messages[HIGH_CONTRAST_THEME],
        icon: highContrastIcon
    },
    [MINT_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: mergeWithDefaults(mintBlockColors),
        extensions: {},
        label: messages[MINT_THEME],
        icon: defaultIcon
    },
    [SUNSET_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: mergeWithDefaults(sunsetBlockColors),
        extensions: {},
        label: messages[SUNSET_THEME],
        icon: defaultIcon
    }
};

const getColorsForTheme = theme => {
    const themeInfo = themeMap[theme];

    if (!themeInfo) {
        throw new Error(`Undefined theme ${theme}`);
    }

    return themeInfo.colors;
};

const getHexChannelPair = hexString => parseInt(hexString, 16);

const hexToRgb = color => {
    const normalized = color.replace('#', '');
    if (normalized.length === 3) {
        return {
            r: getHexChannelPair(normalized[0] + normalized[0]),
            g: getHexChannelPair(normalized[1] + normalized[1]),
            b: getHexChannelPair(normalized[2] + normalized[2])
        };
    }
    return {
        r: getHexChannelPair(normalized.slice(0, 2)),
        g: getHexChannelPair(normalized.slice(2, 4)),
        b: getHexChannelPair(normalized.slice(4, 6))
    };
};

const toRgba = (color, alpha) => {
    if (!color || typeof color !== 'string') {
        return color;
    }
    if (color.startsWith('#')) {
        const {r, g, b} = hexToRgb(color);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return color;
};

const blendWithWhite = (color, alpha) => {
    if (!color || typeof color !== 'string' || !color.startsWith('#')) {
        return color;
    }
    const {r, g, b} = hexToRgb(color);
    const blendChannel = channel => Math.round((1 - alpha) * 255 + alpha * channel);
    return `rgb(${blendChannel(r)}, ${blendChannel(g)}, ${blendChannel(b)})`;
};

const getCategoryAccent = (theme, categoryColors) => (
    theme === DARK_THEME ? categoryColors.tertiary : categoryColors.primary
);

const getLooksAccent = (theme, categoryColors) => (
    theme === DARK_THEME ? categoryColors.tertiary : categoryColors.secondary
);

const getThemeStyle = theme => {
    const themeInfo = themeMap[theme];

    if (!themeInfo) {
        throw new Error(`Undefined theme ${theme}`);
    }

    const colors = themeInfo.colors;
    const ui = uiThemeMap[theme] || uiThemeMap[DEFAULT_THEME];
    const motionPrimary = getCategoryAccent(theme, colors.motion);
    const looksAccent = getLooksAccent(theme, colors.looks);
    const penPrimary = getCategoryAccent(theme, colors.pen);
    const extensionsPrimary = penPrimary;

    return {
        '--ui-primary': ui.uiPrimary,
        '--ui-secondary': ui.uiSecondary,
        '--ui-tertiary': ui.uiTertiary,
        '--ui-modal-overlay': ui.uiModalOverlay || toRgba(motionPrimary, 0.9),
        '--ui-white': ui.uiWhite,
        '--ui-white-dim': ui.uiWhiteDim,
        '--ui-white-transparent': ui.uiWhiteTransparent,
        '--ui-transparent': ui.uiTransparent,
        '--ui-black-transparent': ui.uiBlackTransparent,
        '--ui-black-transparent-10': ui.uiBlackTransparent10,
        '--ui-green': ui.uiGreen,
        '--ui-green-2': ui.uiGreen2,
        '--text-primary': ui.textPrimary,
        '--text-primary-transparent': ui.textPrimaryTransparent,
        '--motion-primary': motionPrimary,
        '--motion-tertiary': colors.motion.tertiary,
        '--looks-secondary': looksAccent,
        '--looks-secondary-dark': theme === DARK_THEME ? looksAccent : colors.looks.tertiary,
        '--looks-transparent': toRgba(looksAccent, 0.35),
        '--looks-light-transparent': toRgba(looksAccent, 0.15),
        '--sound-primary': getCategoryAccent(theme, colors.sounds),
        '--sound-tertiary': colors.sounds.tertiary,
        '--control-primary': getCategoryAccent(theme, colors.control),
        '--data-primary': getCategoryAccent(theme, colors.data),
        '--pen-primary': penPrimary,
        '--pen-tertiary': colors.pen.tertiary,
        '--pen-transparent': toRgba(penPrimary, 0.25),
        '--extensions-primary': extensionsPrimary,
        '--extensions-tertiary': colors.pen.tertiary,
        '--extensions-transparent': toRgba(extensionsPrimary, 0.35),
        '--extensions-light': blendWithWhite(extensionsPrimary, 0.35),
        '--drop-highlight': blendWithWhite(motionPrimary, 0.65)
    };
};

export {
    DEFAULT_THEME,
    DARK_THEME,
    HIGH_CONTRAST_THEME,
    MINT_THEME,
    SUNSET_THEME,
    defaultColors,
    getColorsForTheme,
    getThemeStyle,
    themeMap
};
