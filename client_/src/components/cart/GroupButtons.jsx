import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
    component: {
        marginTop: 30,
    },
    button: {
        borderRadius: '50%',

    }
})

const GroupButtons = () => {
    const classes = useStyles();
    const [counter, setcounter] = useState(1);

    const handleDecrement = () => {
        setcounter(counter=> counter- 1);
    }
    const handleIncrement  = () => {
        setcounter(counter => counter+1);
    }
    return (
        <>
            <ButtonGroup className={classes.component}>
                <Button className={classes.button} onClick={() => handleDecrement()} disabled={counter===1}>-</Button>
                <Button>{counter}</Button>
                <Button className={classes.button} onClick={() => handleIncrement()}>+</Button>
            </ButtonGroup>
        </>
    );
}

export default GroupButtons;

