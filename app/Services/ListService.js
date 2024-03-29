import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        console.log("Hi from List Service")
        this.getLists()
        this.saveLists()
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        
    }

    deleteList(index) {
        this.saveLists()
        if (window.confirm("Are you sure you want to delete list?")) { 
            _state.lists.splice(index, 1)
        }
        this.saveLists()
    }

    addItem(listIndex, newItem) {
        _state.lists[listIndex].listItem.push(newItem)
        this.saveLists()
    }

    deleteItem(listIndex, itemIndex) {
        if (window.confirm("Are your sure you want to delete item?")) { 
            _state.lists[listIndex].listItem.splice(itemIndex, 1)
        }
        this.saveLists()
    }


    get List() {
       return  _state.lists.map(li => new List(li))
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
