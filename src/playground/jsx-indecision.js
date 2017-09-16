const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    
    const option = event.target.elements.option.value;

    if(option) {
        app.options.push(option);
        event.target.elements.option.value = '';
    }
    render();
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    render();
};

function render() {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{ app.subtitle }</p>}
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
            <button disabled={ !app.options.length } onClick={ onMakeDecision }>What should I do?</button>
            <button onClick={ onRemoveAll }>Remove all</button>
            <ol>
                { app.options.map(option => <li key={ option }>{ option }</li>) }
            </ol>
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();