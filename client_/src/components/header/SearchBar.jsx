import { InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/styles";
import alpha from "@material-ui/styles/styled";

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
}))

const SearchBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search for product, brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
            />
        </div>
    )
}

export default SearchBar;