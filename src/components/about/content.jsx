import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import BoxContainer from "../element/boxContainer";

export default function aboutContent() {
    const APPVERSION = "0.1";
    const APPNAME = "Fishtask Management";
    const APPDESCRIPTION = "Simple task management using React and integration with database Pouch Store";
    const DEVELOPERS = [
        {
            name: "Risyandi",
            email: "hello@risyandi.com",
            role: "Software Engineer"
        }
    ];

    return (
        <BoxContainer>
            <List subheader={<ListSubheader>Application Information</ListSubheader>}>
                <ListItem>
                    <ListItemText primary={APPNAME} secondary={APPDESCRIPTION} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={APPVERSION} secondary="Version" />
                </ListItem>
            </List>
            <List
                subheader={
                    <ListSubheader>
                        {DEVELOPERS.length === 1 ? "Developer" : "Developers"}
                    </ListSubheader>
                }
            >
                {DEVELOPERS.map(({ name, email, role }, index) => (
                    <ListItem
                        key={index}
                        button={!!email}
                        onClick={() =>
                            !!email && `mailto:${email}?subject=${APPNAME}%20${APPVERSION}`
                        }
                        title={!!email && "Send an email"}
                    >
                        <ListItemText
                            primary={`${name}${email ? " (" + email + ")" : ""}`}
                            secondary={role}
                        />
                        {!!email && (
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                        )}
                    </ListItem>
                ))}
            </List>
        </BoxContainer>
    );
}
