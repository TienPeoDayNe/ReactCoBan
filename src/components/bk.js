import React from "react";


class DisplayInfor extends React.Component {
    state = {
        isshowList: true
    }
    handleShowHide = () => {
        this.setState({
            isshowList: !this.state.isshowList
        })
    }
    render() {
        const { ListUser } = this.props;
        // console.table(ListUser)
        return (
            <div>
                < div >
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isshowList === true ? "Show list" : "Hide"}
                    </span>
                </div >

                <div>
                    {ListUser.map((user) => {
                        return (
                            <div key={user.id}>
                                {this.state.isshowList &&
                                    <div className={+user.age > 18 ? "red" : "blue"}>
                                        <div> My name {user.name}</div>
                                        <div> My age {user.age}</div>
                                        <hr />
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default DisplayInfor

