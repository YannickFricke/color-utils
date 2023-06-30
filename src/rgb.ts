import { InvalidValueError } from './errors';
import { ParsedRGB } from './types';
import { isInRange } from './utils/isInRange';

/**
 * Tries to parse the given input string as CSS RGB color
 *
 * @param {string} input - The input to parse
 * @throws {InvalidValueError} - When the input is not a valid CSS RGB string e.g. "rgb(0, 0, 0)". Whitespaces between the values dont matter.
 * @throws {InvalidValueError} - When the red value is < 0 or > 255
 * @throws {InvalidValueError} - When the green value is < 0 or > 255
 * @throws {InvalidValueError} - When the blue value is < 0 or > 255
 * @returns {ParsedRGB} The parsed RGB values
 */
export function parseRGB(input: string): ParsedRGB {
    const rgbRegex =
        /^\s*rgb\(\s*(?<red>\d{1,3})\s*,\s*(?<green>\d{1,3})\s*,\s*(?<blue>\d{1,3})\s*\)\s*$/;

    const matches = rgbRegex.exec(input);

    if (matches === null) {
        throw new InvalidValueError(input);
    }

    const redValue = parseInt(matches.groups!.red, 10);
    const greenValue = parseInt(matches.groups!.green, 10);
    const blueValue = parseInt(matches.groups!.blue, 10);

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

    return {
        type: 'rgb',
        red: redValue,
        green: greenValue,
        blue: blueValue,
    };
}
