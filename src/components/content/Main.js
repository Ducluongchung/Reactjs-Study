import React, { Component } from 'react';

class Main extends Component {
    render() {
        const Order =
        {
            orderTitle: 'col-lg-6 ',
            orderImage: 'col-lg-6 '
        }
        const Contents = [
            {
                title: "For those about to rock...",
                image: "img/01.jpg",
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid,mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem,ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci,beatae obcaecati'
            },
            {
                title: "We salute you!",
                image: "img/02.jpg",
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
            },
            {
                title: "Let there be rock!",
                image: "img/03.jpg",
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
            },
        ]
        return (
            <div>
                {
                    Contents.map((item,index) => {
                        debugger
                        if ((index+1) % 2 === 1) {
                            Order.orderTitle += 'order-lg-2';
                            Order.orderImage += 'order-lg-1';
                        }
                        return (
                            <section key = {index}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className={Order.orderTitle}>
                                            <div className="p-5">
                                                <img className="img-fluid rounded-circle" src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div className={Order.orderImage}>
                                            <div className="p-5">
                                                <h2 className="display-4">{item.title}</h2>
                                                <p>
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        );
    }
}

export default Main;