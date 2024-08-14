class Node {
    constructor(){
        this.head = null;
        this.tail = null;
    }
append(node){
}
peek(value, current = this.head){
}
size(current = this.head, acum = 1){
}
remove(value, current = this.head){
    if(this.head === null){
        return false
    }
    if(this.head.value === value){
        this.head = this.head.next
        this.head.prev = null;
        return this.head;
    }
    if(current.next !== null){
        if(current.next.value === value){
            current.next = current.next.next;
            current.next.prev = current;
            return true;
        }else{
            return this.remove(value, current.next)
        }
    }
}
print(){
}
}

