class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility  = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={ this.handleToggleVisibility }>{ this.state.visibility ? 'Hide details' : 'Show details' }</button>
                { this.state.visibility && <p>These are the details</p> }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let toggled = false;

// const onToggle = () => {
//     toggled = !toggled;
//     render();
// };

// function render() {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={ onToggle }>{ toggled ? 'Hide details' : 'Show details' }</button>
//             { toggled && <p>These are the details</p> }
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();