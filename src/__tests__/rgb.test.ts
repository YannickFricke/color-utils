import { parseRGB } from '../rgb';
import { ParsedRGB } from '../types';

describe('RGB', () => {
    it('should parse a valid RGB string', () => {
        expect(parseRGB('rgb(0, 0, 0)')).toStrictEqual<ParsedRGB>({
            type: 'rgb',
            red: 0,
            green: 0,
            blue: 0,
        });

        expect(parseRGB('rgb(   0  ,0      ,0)')).toStrictEqual<ParsedRGB>({
            type: 'rgb',
            red: 0,
            green: 0,
            blue: 0,
        });
    });

    it('should throw an error when the input is not a valid RGB string', () => {
        expect(() => {
            parseRGB('unit testing');
        }).toThrow('Found invalid value: unit testing');

        expect(() => {
            parseRGB('rgba(0, 0, 0, 0)');
        }).toThrow('Found invalid value: rgba(0, 0, 0, 0)');

        expect(() => {
            // This is even an invalid RGBA string
            parseRGB('rgba(0, 0, 0)');
        }).toThrow('Found invalid value: rgba(0, 0, 0)');

        expect(() => {
            parseRGB('rgb(0, 0, 0, 0)');
        }).toThrow('Found invalid value: rgb(0, 0, 0, 0)');
    });

    it('should throw an error when one of the values is out of range', () => {
        expect(() => {
            parseRGB('rgb(256, 255, 255)');
        }).toThrow(
            `Found invalid value: the 'red' value must be between 0 and 255`
        );

        expect(() => {
            parseRGB('rgb(255, 256, 255)');
        }).toThrow(
            `Found invalid value: the 'green' value must be between 0 and 255`
        );

        expect(() => {
            parseRGB('rgb(255, 255, 256)');
        }).toThrow(
            `Found invalid value: the 'blue' value must be between 0 and 255`
        );
    });
});
