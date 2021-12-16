function Title () {
    return <h1 className="title">Hello, World! I'm a function</h1>;
}

function Text () {
    return <p className="text">Loren ipsun sit dolor amet</p>;
}

function Layout () {
    return <div>
    <Title />
    <Text />
    </div>;
}

function Menu () {
    return <div className="header"> 
    <h1 className="logo">Restaurante</h1>
        <ul className="menu">
            <a href=""><li>Sobre</li></a>
            <a href=""><li>Preço</li></a>
            <a href=""><li>Contato</li></a>
        </ul>
    </div>
}

function Hero () {
    return <div className="hero">
    </div>
}

function Header () {
    return <div>
        <Menu />
        <Hero />
    </div>;
}

let body = <Header />;

ReactDOM.render(
    body,
    document.getElementById('container')
)