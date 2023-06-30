import { parseRGBA } from '../rgba';
import { ParsedRGBA } from '../types';

describe('RGBA', () => {
    it('should parse a valid RGBA string', () => {
        expect(parseRGBA('rgba(0, 0, 0, 0)')).toStrictEqual<ParsedRGBA>({
            type: 'rgba',
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0,
        });

        expect(parseRGBA('rgba(   0  ,0      ,0,0)')).toStrictEqual<ParsedRGBA>(
            {
                type: 'rgba',
                red: 0,
                green: 0,
                blue: 0,
                alpha: 0,
            }
        );

        expect(parseRGBA('rgba(127, 127, 127, 0.5)')).toStrictEqual<ParsedRGBA>(
            {
                type: 'rgba',
                red: 127,
                green: 127,
                blue: 127,
                alpha: 0.5,
            }
        );

        expect(parseRGBA('rgba(127, 127, 127, 1)')).toStrictEqual<ParsedRGBA>({
            type: 'rgba',
            red: 127,
            green: 127,
            blue: 127,
            alpha: 1,
        });
    });

    it('should throw an error when the input is not a valid RGB string', () => {
        expect(() => {
            parseRGBA('unit testing');
        }).toThrow('Found invalid value: unit testing');

        expect(() => {
            parseRGBA('rgb(0, 0, 0, 0)');
        }).toThrow('Found invalid value: rgb(0, 0, 0, 0)');

        expect(() => {
            parseRGBA('rgba(0, 0, 0)');
        }).toThrow('Found invalid value: rgba(0, 0, 0)');

        expect(() => {
            parseRGBA('rgb(0, 0, 0, 0)');
        }).toThrow('Found invalid value: rgb(0, 0, 0, 0)');
    });

    it('should throw an error when one of the values is out of range', () => {
        expect(() => {
            parseRGBA('rgba(256, 255, 255, 0)');
        }).toThrow(
            `Found invalid value: the 'red' value must be between 0 and 255`
        );

        expect(() => {
            parseRGBA('rgba(255, 256, 255, 0.5)');
        }).toThrow(
            `Found invalid value: the 'green' value must be between 0 and 255`
        );

        expect(() => {
            parseRGBA('rgba(255, 255, 256, 1)');
        }).toThrow(
            `Found invalid value: the 'blue' value must be between 0 and 255`
        );
    });
});
