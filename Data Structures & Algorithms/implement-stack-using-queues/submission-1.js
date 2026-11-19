class MyStack {
    constructor() {
        this.items =[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(item) {
        this.items.push(item)
    }

    /**
     * @return {number}
     */
    pop() {
        if(!this.items.length){
            return null
        }
       return this.items.pop()
    }

    /**
     * @return {number}
     */
    top() {
        if(!this.items.length){
            return null
        }        
        return this.items[this.items.length-1]
    }

    /**
     * @return {boolean}
     */
    empty() {
    
        return (!this.items.length)
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
