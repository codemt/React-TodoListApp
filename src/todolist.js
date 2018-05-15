import React, { Component } from 'react'

class TodoList extends Component {
        constructor(props){
                
            super(props);

            this.state = {
                    items : []
            }

        }

    addItem(event){

            event.preventDefault();
            if(this._inputElement.value !== "")
            var newItem = {
                    text : this._inputElement.value,
                    key : Date.now()
            };
            this.setState((prevState) => {

                return {
                    items: prevState.items.concat(newItem)

                }

            })
            this._inputElement.value = " ";
           console.log(this.state.items);

    }
  render() {
    return (
      <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem.bind(this)}>
                        <input ref={(a)=>this._inputElement = a } placeholder="enter task" />
                        <button type="submit"> add </button>
                </form>

            </div>
      </div>
    )
  }
}
export default TodoList;