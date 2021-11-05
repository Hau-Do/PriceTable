import { render, screen } from '@testing-library/react';
import { formatPrice } from './helper';

describe('formatPrice', () => {
    const testCases = [
        { received: undefined, expected: undefined },
        { received: 2580, expected: '2,580' },
    ];
    for(const testcase of testCases) {
        test(`should return ${testcase.expected}`, () => {
            const inputPrice = 2580;
            const outputPrice = '2,580';
            expect(formatPrice(testcase.received)).toEqual(testcase.expected);
        });
    }
});
