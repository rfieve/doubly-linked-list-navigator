import { DoublyLinkedListNavigator } from 'src/classes/doubly-linked-list-navigator';

export function compare(a: number, b: number) {
    return a - b;
}

export const mockedArray = [2, 5, 10, 13, 32, 50, 89],
             mockedDLLNavigator = new DoublyLinkedListNavigator(mockedArray, compare),
             mockedEmptyDLLNavigator = new DoublyLinkedListNavigator();
