import React, { Component } from 'react';

export class TodoItem extends Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
  }
  deleteItem(event){
    const deleteUrl = window.apiUrl + '/deleteItemById';
    fetch(deleteUrl + '/' + this.props.item.itemId, {
      method: 'delete'
    }).then(response => {
        if (response.ok) {
          this.props.changeData(this.props.item.list);
        }
      });
  }
  changeItemStatus(event){
    const updateUrl = window.apiUrl + '/changeItemStatusById';
    fetch(updateUrl + '/' + this.props.item.itemId, {
      method: 'put'
    }).then(response => {
        if (response.ok) {
          this.props.changeData(this.props.item.list);
        }
      });
  }
  render(){

    var status = "enabled";
    if(this.props.item.status){
      status = "disabled";
    }else{
      if(new Date(this.props.item.deadline.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")) < new Date()){
        status = "expired";
      }
    }
    return (
      <tr className={status}>
        <td onClick={this.changeItemStatus}>{this.props.item.itemName}</td>
        <td onClick={this.changeItemStatus}>{this.props.item.itemDesc}</td>
        <td onClick={this.changeItemStatus}>{this.props.item.createDate}</td>
        <td onClick={this.changeItemStatus}>{this.props.item.deadline}</td>
        <td><button onClick={this.deleteItem} type="button" className="close">&times;</button></td>
      </tr>
    );
  }
}
