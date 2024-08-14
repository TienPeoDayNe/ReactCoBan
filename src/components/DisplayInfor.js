import React, { useState } from "react";
import './DisplayInfor.scss';



// class DisplayInfor extends React.Component {

//     render() {
//         const { ListUser } = this.props;
//         // console.table(ListUser)
//         return (
//             <div className="display-infor">
//                 {true &&
//                     <>
//                         {ListUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "red" : "blue"}>
//                                     <>
//                                         <div> My name {user.name}</div>
//                                         <div> My age {user.age}</div>
//                                     </>
//                                     <button>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}</>}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { ListUser } = props;
    const [isShowHidelistuser, setshowhidelistuser] = useState(true);    // console.table(ListUser)

    const handleshowhidelistuser = () => {
        setshowhidelistuser(!isShowHidelistuser);
    }
    return (
        <div className="display-infor">
            <div>
                <span onClick={() => handleshowhidelistuser()}>
                    {isShowHidelistuser === true ? "Hide" : "Show"}
                </span>
            </div>
            {isShowHidelistuser &&
                <>
                    {ListUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "red" : "blue"}>
                                <>
                                    <div> My name {user.name}</div>
                                    <div> My age {user.age}</div>
                                </>
                                <button>Delete</button>
                                <hr />
                            </div>
                        )
                    })}</>}
        </div>
    )

}
export default DisplayInfor

