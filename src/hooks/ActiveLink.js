import React, { Children } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ActiveLink = ({ children, ...props }) => {
    const match = useRouteMatch();
    const child = Children.only(children);

    let className = child.props.className || null;

    if (match.path === props.to && props.activeClassName) {
        className = `${className !== null ? className : ""} ${
            props.activeClassName
        }`.trim();
    }

    delete props.activeClassName;

    return (
        <Link to={props.to || props.href} {...props}>
            {React.cloneElement(child, { className })}
        </Link>
    );
};

export default ActiveLink;
