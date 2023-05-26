import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    SwipeableDrawer,
    Switch
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { get as getOption, set as setOption } from "./options";

const LISTS = [
    {
        items: [
            { type: "item", title: "About", href: "/about", Icon: InfoIcon }
        ]
    }
];

const LARGER = false;

export default function DashboardDrawer({ open, onClose, onOpen }) {
    const [filter, setFilter] = useState(getOption("filter", v => v === "true"));
    const [progress, setProgress] = useState(getOption("progress", v => v === "true"));
    const [showDeleted, setShowDeleted] = useState(getOption("showDeleted", v => v === "true"));

    useEffect(() => {
        setOption("filter", filter);
    }, [filter]);

    useEffect(() => {
        setOption("progress", progress);
    }, [progress]);
    
    useEffect(() => {
        setOption("showDeleted", showDeleted);   
    }, [showDeleted]);

    return (
        <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
            <List subheader={<ListSubheader>Settings</ListSubheader>}>
                <ListItem button onClick={() => setFilter(!filter)}>
                <ListItemIcon>
                    <Switch checked={filter} />
                </ListItemIcon>
                <ListItemText primary="Filter" secondary={filter ? "On" : "Off"} />
                </ListItem>
                <ListItem button onClick={() => setProgress(!progress)}>
                <ListItemIcon>
                    <Switch checked={progress} />
                </ListItemIcon>
                <ListItemText
                    primary="Progress"
                    secondary={progress ? "On" : "Off"}
                />
                </ListItem>
                <ListItem button onClick={() => setShowDeleted(!showDeleted)}>
                <ListItemIcon>
                    <Switch checked={showDeleted} />
                </ListItemIcon>
                <ListItemText
                    primary="Show deleted"
                    secondary={showDeleted ? "On" : "Off"}
                />
                </ListItem> 
            </List>

            {LISTS.map(({ header, items }, listIndex) => (
                <List
                key={listIndex}
                subheader={<ListSubheader>{header}</ListSubheader>}
                >
                {items.map((item, itemIndex) => (
                    <DrawerItem key={itemIndex} {...item} />
                ))}
                </List>
            ))}
        </SwipeableDrawer>
    );
}

const DrawerItem = ({ type, title, href, Icon }) => {
    const { push } = useHistory();

    if (type === "divider") {
        return <Divider />;
    } else if (type === "item") {
        const isLink = !!href;
        const isExternal = isLink && href.startsWith("http");
        return (
            <ListItem
                button={isLink}
                title={title}
                onClick={isExternal ? () => window.open(href) : isLink ? () => push(href) : null}>
                {!!Icon && (
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                )}
                <ListItemText primary={title} />
                {LARGER && (
                    <ListItemIcon>
                        <span />
                    </ListItemIcon>
                )}
            </ListItem>
        );
    }
    return (
        <ListItem>
            <ListItemText primary={type} secondary="Unknown type" />
        </ListItem>
    );
};