import { ParsedRGBA } from './types';
import { isInRange } from './utils/isInRange';
import { InvalidValueError } from './errors';

const rgbaRegex =
    /^\s*rgba\(\s*(?<red>\d{1,3})\s*,\s*(?<green>\d{1,3})\s*,\s*(?<blue>\d{1,3})\s*,\s*(?<alpha>(?:0(?:\.\d+)?|1(?:\.0+)?))\s*\)\s*$/;

/**
 * Checks if the given input matches the CSS RGBA color string
 *
 * @param {string} input - The input to check
 * @returns {boolean} Returns true when the input matches the CSS RGBA color string. Otherwise false is returned.
 */
export function isRGBA(input: string): boolean {
    return rgbaRegex.test(input);
}

/**
 * Tries to parse the given input string as CSS RGBA color
 *
 * @param {string} input - The input to parse
 * @throws {InvalidValueError} - When the input is not a valid CSS RGB string e.g. "rgb(0, 0, 0)". Whitespaces between the values dont matter.
 * @throws {InvalidValueError} - When the red value is < 0 or > 255
 * @throws {InvalidValueError} - When the green value is < 0 or > 255
 * @throws {InvalidValueError} - When the blue value is < 0 or > 255
 * @throws {InvalidValueError} - When the alpha value is < 0 or > 1
 * @returns {ParsedRGBA} The parsed RGBA values
 */
export function parseRGBA(input: string): ParsedRGBA {
    const matches = rgbaRegex.exec(input);

    if (matches === null) {
        throw new InvalidValueError(input);
    }

    const redValue = parseInt(matches.groups!.red, 10);
    const greenValue = parseInt(matches.groups!.green, 10);
    const blueValue = parseInt(matches.groups!.blue, 10);
    const alphaValue = parseFloat(matches.groups!.alpha);

    if (isInRange(redValue, 0, 255) === false) {
        throw new InvalidValueError(
            "the 'red' value must be between 0 and 255"
        );
    }

    if (isInRange(greenValue, 0, 255) === false) {
        throw new InvalidValueError(
            "the 'green' value must be between 0 and 255"
        );
    }

    if (isInRange(blueValue, 0, 255) === false) {
        throw new InvalidValueError(
            "the 'blue' value must be between 0 and 255"
        );
    }

    if (isInRange(alphaValue, 0, 1) === false) {
        throw new InvalidValueError(
            "the 'alpha' value must be between 0 and 1"
        );
    }

    return {
        type: 'rgba',
        red: redValue,
        green: greenValue,
        blue: blueValue,
        alpha: alphaValue,
    };
}
