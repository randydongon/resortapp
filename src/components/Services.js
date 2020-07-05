import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free cocktails',
                info: 'Emmet Abbreviation Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eos expedita id reiciendis fugit',

            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Emmet Abbreviation Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eos expedita id reiciendis fugit',

            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Emmet Abbreviation Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eos expedita id reiciendis fugit',

            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Emmet Abbreviation Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eos expedita id reiciendis fugit',

            },
        ],

    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => <article key={index}
                            className='service' >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>)}
                </div>

            </section>
        )
    }
}
