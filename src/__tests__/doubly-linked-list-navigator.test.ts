import { mockedDLLNavigator, mockedEmptyDLLNavigator } from './_mocks';

describe('DoublyLinkedListNavigator', () => {
    beforeEach(() => {
        mockedDLLNavigator.goTo(13);
    });

    it('should goTo correctly', () => {
        mockedDLLNavigator.goTo(2);
        expect(mockedDLLNavigator.current?.data).toBe(2);
    });

    it('should go correctly', () => {
        mockedDLLNavigator.go(1);
        expect(mockedDLLNavigator.current?.data).toBe(32);

        mockedDLLNavigator.go(-2);
        expect(mockedDLLNavigator.current?.data).toBe(10);
    });

    it('should not go beyond the head or tail', () => {
        mockedDLLNavigator.go(100);
        expect(mockedDLLNavigator.current?.data).toBe(89);

        mockedDLLNavigator.go(-100);
        expect(mockedDLLNavigator.current?.data).toBe(2);
    });

    it('should not fail when going through an empty dll', () => {
        mockedEmptyDLLNavigator.go(100);
        expect(mockedEmptyDLLNavigator.current?.data).toBeUndefined();

        mockedEmptyDLLNavigator.go(-100);
        expect(mockedEmptyDLLNavigator.current?.data).toBeUndefined();
    });

    it('should goPrev correctly', () => {
        mockedDLLNavigator.goPrev().goPrev();
        expect(mockedDLLNavigator.current?.data).toBe(5);
    });

    it('should not fail when goPrev through an empty dll', () => {
        mockedEmptyDLLNavigator.goPrev();
        expect(mockedEmptyDLLNavigator.current?.data).toBeUndefined();
    });

    it('should goNext correctly', () => {
        mockedDLLNavigator.goNext().goNext();
        expect(mockedDLLNavigator.current?.data).toBe(50);
    });

    it('should not fail when goNext through an empty dll', () => {
        mockedEmptyDLLNavigator.goNext();
        expect(mockedEmptyDLLNavigator.current?.data).toBeUndefined();
    });

    it('should goHead correctly', () => {
        mockedDLLNavigator.goHead();
        expect(mockedDLLNavigator.current?.data).toBe(2);
    });

    it('should goTail correctly', () => {
        mockedDLLNavigator.goTail();
        expect(mockedDLLNavigator.current?.data).toBe(89);
    });
});
