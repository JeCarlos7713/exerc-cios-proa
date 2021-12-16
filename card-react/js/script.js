function Header() {
    return <header>
        <div className="bg-black container-fluid sony p-1">
            <img className="logo" src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlibs-jetstream/resources/assets/fonts/sony_logo.svg" />
        </div>
        <div className="menu container-fluid bg-white">
            <div className="menu-left">
                <a href="#"><img className="logo-menu" src="https://logodownload.org/wp-content/uploads/2017/05/playstation-4-logo-ps4-6.png" /></a>
                <ul className="itens-menu">
                    <Menu itens="Jogos" />
                    <Menu itens="Hardware" />
                    <Menu itens="Serviços" />
                    <Menu itens="Notícias" />
                    <Menu itens="Loja" />
                    <Menu itens="Suporte" />
                </ul>
            </div>
            <div className="menu-right">
                <button className="botao">Iniciar sessão</button>
                <a href="#"><i className="bi bi-search"></i></a>
            </div>
        </div>
        <div className="hero">
            <img className="image-hero" src="https://gmedia.playstation.com/is/image/SIEPDC/kena-bridge-of-spirits-hero-01-ps5-ps4-en-26aug29?$1600px--t$" alt=".." />
        </div>
    </header>;
}

function Menu(props) {
    return <ul className="menu-left">
        <a href="#"><li className="nav-item text-dark hover">{props.itens}<i className="bi bi-arrow-down-short"></i></li></a>
    </ul>
}

function Card(props) {
    return <div className="card" key={props.id}>
        <img src={props.img} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="3" className="btn btn-primary">Saiba Mais</a>
        </div>
    </div>
}

function Produtos() {
    const cardsP = [
        {
            id: 10,
            img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-homepage-image-block-04-en-09oct20?$1600px$',
            title: 'PlayStation 4',
            text: 'Os jogos mais incríveis estão no PS4, com 1TB de armazenamento'
        },
        {
            id: 20,
            img: 'https://gmedia.playstation.com/is/image/SIEPDC/double11-202010-tw-psvr?$1600px$',
            title: 'PlayStation VR',
            text: 'Mais de 500 jogos e experiências, e subindo. Conheça todos eles'
        },
        {
            id: 30,
            img: 'https://gmedia.playstation.com/is/image/SIEPDC/dualshock-4-listing-thumb-01-ps4-en-12oct20?$1600px$',
            title: 'Acessórios',
            text: 'Aprimore sua experiência PS4 com vários acessórios oficiais.'
        }

    ]

    return (cardsP.map(cardsP_row=> (
            <div className="col-4">
                <Card title={cardsP_row.title} img={cardsP_row.img} text={cardsP_row.text} />
            </div>
    ))
    )

}

function Main() {
    return <div>
        <div className="container">
            <div className="row justify-content-center">
                <Produtos />
            </div>
        </div>
    </div>

}


function ItemSocial() {
    const redesSociais = [
        {
            id: 1,
            icon: 'bi bi-facebook',
            link: 'https://www.facebook.com/PlayStationBR'
        },
        {
            id: 2,
            icon: 'bi bi-twitter',
            link: 'https://www.twitter.com/PlayStation_BR'
        },
        {
            id: 3,
            icon: 'bi bi-youtube',
            link: 'https://www.youtube.com/user/PlayStationBR'
        },
        {
            id: 4,
            icon: 'bi bi-instagram',
            link: 'https://www.instagram.com/playstation_br'
        },
        {
            id: 5,
            icon: 'bi bi-twitch',
            link: 'https://www.twitch.tv/playstation'
        }

    ];
    return (
        redesSociais.map(redeSocial => (
            <li className="nav-item p-3" key={redeSocial.id}>
                <a className="text-white" href={redeSocial.link}>
                    <i className={redeSocial.icon}></i>
                </a>
            </li>
        ))
    );
}

function Footer() {
    return (
        <div className="footer bg-info">
            <ul className="nav justify-content-center">
                <ItemSocial />
            </ul>
        </div>
    );
}

function Template() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

let template = <Template />

ReactDOM.render(
    template,
    document.getElementById('root')
)