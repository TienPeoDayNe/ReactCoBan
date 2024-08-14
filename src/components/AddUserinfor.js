import React, { useState } from "react";


// class AddUserInfor extends React.Component {

//     state = {
//         name: '',
//         age: ''
//     }

//     handleonchance = (event) => {
//         console.log(event.target.value)
//         this.setState({
//             name: event.target.value,
//             // age: event.target.value
//         })
//     }
//     handleonchanceage = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         // this.props.handleAddNewUser();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name  is {this.state.name} Tuoi: {this.state.age}
//                 <form onSubmit={(event) => this.handleSubmit(event)}>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleonchance(event)}
//                     />

//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleonchanceage(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {

    const [name, setname] = useState('');
    const [age, setage] = useState('');
    // state = {
    //     name: '',
    //     age: ''
    // }

    const handleonchance = (event) => {
        console.log(event.target.value)
        setname(event.target.value)

        // this.setState({
        //     name: event.target.value,
        //     // age: event.target.value
        // })
    }
    const handleonchanceage = (event) => {
        setage(event.target.value)
        // this.setState({
        //     age: event.target.value
        // })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // this.props.handleAddNewUser();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "random",
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name  is {name} Tuoi: {age}
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleonchance(event)}
                />

                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleonchanceage(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor