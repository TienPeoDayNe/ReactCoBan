import React, { useState } from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         ListUser: [
//             { id: "1", name: "Khang", age: "25" },
//             { id: "2", name: "Tien", age: "44" },
//             { id: "3", name: "Khoa", age: "11" }
//         ]
//     }
//     handleAddNewUser = (userobj) => {
//         this.setState({
//             ListUser: [userobj, ...this.state.ListUser]
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br /> <br />
//                 <DisplayInfor
//                     ListUser={this.state.ListUser}

//                 />
//             </div>
//         );
//     }
// }

const MyComponent = (props) => {
    const [Listuser, setListuser] = useState(
        [
            { id: "1", name: "Khang", age: "25" },
            { id: "2", name: "Tien", age: "44" },
            { id: "3", name: "Khoa", age: "11" }
        ]
    );


    // state = {
    //     ListUser: [
    //         { id: "1", name: "Khang", age: "25" },
    //         { id: "2", name: "Tien", age: "44" },
    //         { id: "3", name: "Khoa", age: "11" }
    //     ]
    // }
    const handleAddNewUser = (userobj) => {
        setListuser([userobj, ...Listuser])

        // this.setState({
        //     ListUser: [userobj, ...this.state.ListUser]
        // })
    }
    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br /> <br />
            <DisplayInfor
                ListUser={Listuser}

            />
        </div>
    )
}
export default MyComponent;