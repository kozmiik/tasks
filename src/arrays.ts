/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newList: number[] = [];
    if (numbers.length === 1) {
        newList.push(numbers[0], numbers[0]);
    } else if (numbers.length > 1) {
        newList.push(numbers[0], numbers[numbers.length - 1]);
    }
    return newList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted = numbers.map((value: string): number =>
        parseInt(value) ? parseInt(value) : 0
    );
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const removeSign = str.replace(/^\$/, "");
        const parse = parseInt(removeSign, 10);
        return isNaN(parse) ? 0 : parse;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((message) => !message.endsWith("?"))
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = ["red", "blue", "green"];
    if (colors.length === 0) {
        return true;
    }
    return colors.every((color) => RGB.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce(
        (iterator, currentValue) => iterator + currentValue,
        0
    );
    const addendsString = addends.join("+");
    return `${sum}=${addendsString}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negative: number[] = [];
    let first = false;
    let sum = 0;
    values.filter((num: number): void => {
        if (num < 0 && first === false) {
            negative.push(num);
            negative.push(sum);
            first = true;
        } else {
            negative.push(num);
            sum += num;
        }
    });
    if (first === false) {
        negative.push(sum);
    }
    return negative;
}
