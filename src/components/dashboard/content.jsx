import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import BoxContainer from "../element/boxContainer";
import NewItem from "./newItem";
import ProgressBar from "./progressBar";
import TodoList from "./todoList";
import { create, load, save } from "../utils/localStorage/items";
import { get as getOption } from "../utils/localStorage/options";

export default function DashboardContent() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        load()
        .then(items => items.filter(({ deleted }) => !deleted))
        .then(items => setItems(items))
        .catch(err => {
            enqueueSnackbar(err.message, { variant: "error" });
        });
    }, [enqueueSnackbar]);

    useEffect(() => {
        save(items).catch(err => {
            enqueueSnackbar(err.message, { variant: "error" });
        });
    }, [enqueueSnackbar, items, items.length]);

    const handleCreatedItem = value => {
        create(value)
        .then(item => setItems([...items, item]))
        .catch(err => {
            enqueueSnackbar(err.message, { variant: "error" });
        });
    };
    
    const handleFilter = value => setFilter(value);
    const handleChangeItems = items => setItems(items.slice());

    return (
        <BoxContainer>
            <NewItem onChange={handleFilter} onEnter={handleCreatedItem} />
            <ProgressBar items={items} />
            <TodoList filter={getOption("filter", v => v === "true") ? filter : ""}
            items={items}
            onChange={handleChangeItems}/>
        </BoxContainer>
    );
}