/**
 * Represents a parsed RGB value
 */
export type ParsedRGB = {
    type: 'rgb';
    red: number;
    green: number;
    blue: number;
};

/**
 * Represents a parsed RGBA value
 */
export type ParsedRGBA = {
    type: 'rgba';
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
