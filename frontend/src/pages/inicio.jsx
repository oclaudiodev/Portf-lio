import { useNavigate } from 'react-router';
import './inicio.scss'
import { toast } from 'react-toastify';



export default function Inicio() {

    const navegar = useNavigate();

    async function uSair() {
        try {
            localStorage.removeItem('token');
            toast('Você saiu da conta.');
            navegar('/');
        } catch (err) {
            toast('Erro ao sair: ' + err.message);
        }
    }

    return (
        <div className="inicio">
            <section className="apresentacao">
                <div className="texto">
                    <h1> Olá, eu sou <span>Cláudio</span></h1>
                    <h2>Desenvolvedor Full Stack</h2>
                    <p>
                        Transformo ideias em soluções completas. Desenvolvo aplicações do front ao back-end, unindo design intuitivo e arquitetura robusta. Utilizo tecnologias como <strong>React</strong>, <strong>Node.js Express</strong>, <strong>MySQL </strong> e <strong>SCSS</strong>, sempre com foco em performance, escalabilidade e experiência do usuário.
                    </p>

                    <div className="botoes">
                        <a
                            href="https://github.com/oclaudiodev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            🚀 Ver Projetos
                        </a>
                        <a
                            href="https://wa.me/5511951008673?text=Olá%2C+vi+seu+portfólio+e+gostaria+de+conversar!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secundario"
                        >
                            Contato
                        </a>
                    </div>
                </div>

                <div className="imagem">
                    <img src='/src/assets/images/image.png' />
                </div>
            </section>

            <section id="projetos" className="projetos">
                <h2> Projetos em Destaque</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Dashboard de Inscrições</h3>
                        <p>Visualização de dados com React e integração de APIs.</p>
                    </div>
                    <div className="card">
                        <h3>Landing Page</h3>
                        <p>Design moderno, animações suaves e total responsividade.</p>
                    </div>
                    <div className="card">
                        <h3>Conectando Gerações (TCC T.I)</h3>
                        <p>Website completo desenvolvido como Trabalho de Conclusão de Curso em T.I., utilizando React, Node.js e MySQL. O projeto tem como objetivo conectar diferentes gerações por meio de uma plataforma interativa e acessível.</p>
                    </div>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2> Entre em Contato</h2>
                <p>Vamos conversar sobre oportunidades e novos projetos!</p>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=7claudiosouza@gmail.com&su=Contato%20via%20Portfólio&body=Olá%20Cláudio%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                >
                    Enviar E-mail
                </a>
            </section>
            <div className='botao-sair'>
                <button onClick={uSair}>sair</button>
            </div>
        </div>
    )
}
