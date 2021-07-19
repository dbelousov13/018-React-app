
function BoilingVerdict (props) {
    if (props.celsius >=100){
        return <p>Water will boil</p>;
    }
    return <p>Water will not boil</p>
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={temperature:""};
    }

    handleChange(e) {
        this.setState({temperature:e.target.value});
    }
    
    
    render() {
        const temperature=this.state.temperature;
        return (
            <fieldset>
                <legend>Input temp in Celcius</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}

<ReactDom>.render(
    <Calculator/>
    document.GetElementById('root')
    );