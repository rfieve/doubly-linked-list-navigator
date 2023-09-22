import { CompareFunction, DLLNode, DoublyLinkedList } from '@romainfieve/doubly-linked-list';

export class DoublyLinkedListNavigator<T> extends DoublyLinkedList<T> {
    private cursor? : DLLNode<T>;

    constructor(elements = [] as T[], compare?: CompareFunction<T>) {
        super(elements, compare);
        this.cursor = this.l.tail;
    }

    public get current() {
        return this.cursor;
    }

    /**
     * Sets the current cursor position to the amount of steps from the current cursor position.
     * @param steps the number of steps to go to.
     * @returns the dll navigator.
     */
    public readonly go = (steps: number) => {
        const dir = steps > 0 ? 'next' : 'prev';

        let current = this.cursor;
        let i = Math.abs(steps);

        while (i > 0 && current?.[dir]) {
            current = current[dir];
            i--;
        }

        if (current) {
            this.cursor = current;
        }

        return this;
    };

    /**
     * Sets the current cursor position to the first node matching the element.
     * @param element the element to go to.
     * @returns the dll navigator.
     */
    public readonly goTo = (element: T) => {
        const result = this.findOne(element);

        if (result) {
            this.cursor = result;
        }

        return this;
    };

    /**
     * Sets the current cursor position to next node.
     * @returns the dll navigator.
     */
    public readonly goNext = () => {
        if (this.cursor?.next) {
            this.cursor = this.cursor.next;
        }
        return this;
    };

    /**
     * Sets the current cursor position to prev node.
     * @returns the dll navigator.
     */
    public readonly goPrev = () => {
        if (this.cursor?.prev) {
            this.cursor = this.cursor.prev;
        }
        return this;
    };

    /**
     * Sets the current cursor position to head node.
     * @returns the dll navigator.
     */
    public readonly goHead = () => {
        if (this.l.head) {
            this.cursor = this.l.head;
        }
        return this;
    };

    /**
     * Sets the current cursor position to tail node.
     * @returns the dll navigator.
     */
    public readonly goTail = () => {
        if (this.l.tail) {
            this.cursor = this.l.tail;
        }
        return this;
    };
}
