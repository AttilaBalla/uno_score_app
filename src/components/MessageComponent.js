import {Icon, Message, Transition} from "semantic-ui-react";
import React from "react";

export const MessageComponent = ({type, text}) => {

    if (text === "") {
        return null;
    } else {
        let color, icon;
        switch (type) {
            case "error":
                color = "red";
                icon = "exclamation triangle";
                break;
            case "success":
                color = "green";
                icon = "check";
                break;
            default:
                color = "blue";
                icon = "info";
        }

        return (
            <Transition animation={"fade"} duration={750}>
                <Message attached color={color}>
                    <Icon name={icon}/>
                    {text}
                </Message>
            </Transition>
        )
    }
};