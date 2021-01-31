console.log('hello there from src/app.js!!!')






console.log('hello from babel-react')
console.log('hahaha')


// #########################################################
// #########################################################
// #########################################################





class Header extends React.Component {
  render() {
    this.props
    return (
      <div className="componentOutline">
        <p>this is from header</p>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div className="componentOutline">
        <button>What should i do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    this.props
    return (
      <div className="componentOutline">
        <p>this is the Option component</p>
        <p>Options count: {this.props.options.length}</p>
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div className="componentOutline">
        <p>this is the Option component</p>
      </div>
    )
  }
}



class AddOptions extends React.Component {
  render() {
    return (
      <div className="componentOutline">
        add options component here
      </div>
    )
  }
}



// #########################################################
// MAIN APP
class IndecisionApp extends React.Component {

  render() {

    const title = "The Indecision App"
    const subtitle = "Put your life in the hands of a computer"
    const options = ['thing one', 'thing throw', 'thing three']

    return (
      <div className="mainAppOutline">
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOptions />
      </div>
    )
  }
}
// #########################################################


const jsx = (
  <div>
    <h1>title</h1>
    <IndecisionApp />
  </div>
)

ReactDOM.render(<IndecisionApp />, document.getElementById('root1'))



// #########################################################
// #########################################################
// #########################################################




// ReactDOM.render(template2, document.getElementById('root2'))

// #########################################################
// #########################################################
// #########################################################