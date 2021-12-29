import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from './PageHeader'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        marign:theme.spacing(5),
        padding: theme.spacing(3)
    }
}))
function Employees() {
    const classes = useStyles();
    return (
        <>
        <PageHeader  title="New Employee" subTitle="Form design with validation" icon={<PeopleOutlineIcon  fontSize="large"/>}/>
        <Paper className={classes.pageContent}>
        <EmployeeForm />
        </Paper>
        
        </>
        
    )
}

export default Employees
