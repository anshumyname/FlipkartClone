import { InputBase, ListItem, List } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, StylesContext } from "@material-ui/styles";
import alpha from "@material-ui/styles/styled";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getProducts as listProducts } from '../../redux/actions/productActions.js';
import { useState } from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
    },
    searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
    },
    inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
    list: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        margin: '20px 0 0 0',
        marginTop: '36px'
    }
}))

const SearchBar = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const { products } = useSelector(state => state.getProducts);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    const getText = (text) => {
        setText(text);
        setOpen(true);

    }

    const [open, setOpen] = useState(false);

    return (
        <div className={classes.search}>

            <InputBase
                placeholder="Search for product, brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            {
                text.length &&
                <List className={classes.list} hidden={!open}>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link
                                    to={`/product/${product.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => setOpen(false)}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }

                </List>
            }
        </div>

    )
}

export default SearchBar;