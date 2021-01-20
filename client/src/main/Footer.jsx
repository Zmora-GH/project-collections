import React from 'react';
import { ColorContext } from '../core/context';

export default function Footer() {
    return (
        <ColorContext.Consumer>
            {({colormode}) => (
                <footer className={"container text-center mt-2 py-2 " + colormode.asClasses}>
                    <p>
                        © 2020-2021 Bla-Bla-Company, Inc.  ·
                        <a href="#"> BadLink#1 </a>
                          ·
                        <a href="#"> BadLink#2 </a>
                        <span></span>
                    </p>
                </footer>
            )}
        </ColorContext.Consumer>
    )
}
