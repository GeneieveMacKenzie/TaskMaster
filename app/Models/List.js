



export default class List {
    constructor(data) {
        this.name = data.name
        this.listItem = data.listItem || []
    }

    getTemplate(index) {
        let template = `
            <div class="col-4 border p-3 m-auto">
                <button type='btn-sm' onclick='app.controllers.listController.deleteList(${index})'>X</button>
                <H1>${this.name}</H1>
                `
        template += this.drawItems(index)
        template += `
                <form onsubmit = "app.controllers.listController.addItem(event, ${index})">
                    <div class= "form-group">
                        <input type="text" class="form-control" name="item" placeholder='Add Item' required>
                    </div>
                <button class="btn-sm btn-danger" type= "submit">add item</button>
                </form>
            </div >
            `
        return template
    }

    drawItems(listIndex) {
        let itemTemplate = ''
        this.listItem.forEach((item, itemIndex) => {
            itemTemplate += `<div class="row"><dl>${item}<span onclick='app.controllers.listController.deleteItem(${listIndex}, ${itemIndex})'><i class="fas fa-times deletebutton"></i></span></div>`
        });
        return itemTemplate
    }


    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
}