import React, {Component} from 'react';


export default class PostDesign extends Component {

constructor(props) {
    super(props)
    }

render() {
    return (
    <div className="bg-purple-100 w-1/3 h-96 container rounded-lg border border-purple-200">
        <div className="mx-auto items-center rounded-lg bg-blue-100">
            <p className="py-2 px-4 text-lg">post title</p>
        </div>
    </div>
    )
    }
}