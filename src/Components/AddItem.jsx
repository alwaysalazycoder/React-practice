import React from 'react'

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ProductName : "",
            ProductPrice : 1
        };
    }
    render() {
        return (
            <form className='row mb-5' onSubmit = {(e) =>{
                e.preventDefault();
                this.props.addItem(this.state.ProductName , Number(this.state.ProductPrice));
                }}
            >
                <div className="mb-3 col-4">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name = "productName"
                        aria-describedby="name"
                        onChange={(e) => {
                            this.setState({ProductName : e.currentTarget.value})
                        }}
                        value = {this.state.ProductName}

                    />
                    
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="inputPrice" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name = "productPrice"
                        onChange={(e) => {
                            this.setState({ProductPrice : Number(e.currentTarget.value)})
                        }}
                        // value = {Number(this.state.ProductPrice)}

                    />
                </div>
               
                <button type="submit" className="btn btn-primary col-2" >
                    Add
                </button>
            </form>

        )
    }
}

export default AddItem;