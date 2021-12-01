import Pulse from 'react-reveal/Pulse';

export default function Clients() {
    return (
        <section className="clients section reveal-fade">
                <div className="container">
                    <div className="
                                            clients-inner
                                            section-inner
                                            has-top-divider has-bottom-divider
                                        ">
                    <ul className="list-reset">
                        <li>
                            <Pulse>
                        <img src="images/clients-01.svg" alt="Clients 01" />
                            </Pulse>
                        </li>
                        <li>
                            <Pulse>
                        <img src="images/clients-02.svg" alt="Clients 02" />
                            </Pulse>
                        </li>
                        <li>
                            <Pulse>
                        <img src="images/clients-03.svg" alt="Clients 03" />
                            </Pulse>
                        </li>
                        <li>
                            <Pulse>
                        <img src="images/clients-04.svg" alt="Clients 04" />
                            </Pulse>
                        </li>
                        <li>
                            <Pulse>
                        <img src="images/clients-05.svg" alt="Clients 05" />
                            </Pulse>
                        </li>
                    </ul>
                    </div>
                </div>
                </section>
    )
}
