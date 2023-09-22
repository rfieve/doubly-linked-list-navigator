import { DoublyLinkedListNavigator } from 'src/classes/doubly-linked-list-navigator';

export function compare(a: number, b: number) {
    return a - b;
}

export const mockedArray = [2, 5, 10, 13, 32, 50, 89];

export const mockedDLLNavigator = new DoublyLinkedListNavigator(mockedArray, compare);
export const mockedEmptyDLLNavigator = new DoublyLinkedListNavigator();
