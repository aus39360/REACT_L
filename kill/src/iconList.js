import React, { Component } from 'react'

class Icon extends Component {
    static defaultProps= {
        options: [
            "angru",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };
    constructor(props) {
        super(props);
        this.state = { icons: []};
        this.show = this.show.bind(this);
    }
    show() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState ({icons: [...this.state.icons, newIcon]})
    }
    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`}></i>)
        return(
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.show}>CLICK!</button>
            </div>
        )
    }
}

export default Icon;