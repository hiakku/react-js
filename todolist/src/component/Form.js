import React from 'react';
export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            title: '',
            descrp: '',
            status: 'Pending',
            fields: 0,
            lists: []
        }
    }
    

    myChangeHandler = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    descpChangeHandler = (event) => {
       this.setState({
        descrp: event.target.value
    });
    }
    statChangeHandler = (event) => {
        this.setState({
            status: event.target.value
        });
    }
    
    displayStatus = () => {
        let rows = [];
        for(let i = 0; i < this.state.fields; i++) {
            rows.push (
                <tr>
                    <td>{this.state.title}</td>
                    <td>{this.state.descrp}</td>
                    <td>{this.state.status}</td>

                    https://www.youtube.com/watch?v=3GtAE9RZHVc
                </tr>
            )
        }
        return rows;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState ({
            fields: this.state.fields+1,
            list: [this.state.title, this.state.descrp, this.state.status]
        })
    }

    render(){
        return (
            <div>
                <h1>ToDo List</h1>
                <div className="container">
                    <form className="col-sm-5" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" required="required" value={this.state.title} onChange={this.myChangeHandler}  />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" id="description" required="required" value={this.state.descrp} onChange={this.descpChangeHandler} />
                        </div>
                        <div>
                            <label htmlFor="status">Status:</label>
                            <select name="status" id="status" required="required" onChange={this.statChangeHandler}>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <table className="col-sm-7" id="tablearea">
                        <thead>
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Status</td>
                        </tr>
                        </thead>
                        <tbody>{this.displayStatus()}</tbody>
                    </table>
                </div>
            </div>
        )
    }
}