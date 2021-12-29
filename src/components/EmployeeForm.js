import React, {useState, useEffect} from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Input from './Input';
import RadioGroup from './RadioGroup';
import Select from './Select';
//import * as employeeService from '../services/employeeService'
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import Button from './Button';
const useStyles = makeStyles(theme => ({

root: {
'& .MuiFormControl-root': {
    width: '80%',
    margin: theme.spacing(1)
}
}

}))

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
const getDepartmentCollection = [
    { id: '1', title: 'Development'},
    {id: '2', title: 'Marketing'},
    {id: '3', title: 'Accounting'},
    {id: '4', title: 'HR'}
]

const initialFValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'',
    departmendId:'',
    hireDate:new Date(),
    isPermanent: false,
}

function EmployeeForm() {
   // const [values, setValues] = useState(initialFValues);
    //const classes = useStyles();


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    } 

    const { 
        values, 
        setValues, 
        handleInputChange,
        errors,
        setErrors,
        resetForm 
    } = useForm(initialFValues,true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
          //  employeeService.insertEmployee(values)
            resetForm()
        }
    }
   
    return (
        
            <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Input name="fullName"  label="Name"  value={values.fullName} onChange={handleInputChange} error={errors.fullName}/>

                    <Input variant="outlined" label="Email"  name="email" value={values.email} onChange={handleInputChange}  error={errors.email}/>
                    <Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                 <RadioGroup  name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems} />
                  <Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={getDepartmentCollection}
                        error={errors.departmentId}
                        /> 
                        <DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    
                    />      
                    <Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                 <div>
                        <Button
                            type="submit"
                            text="Submit" />
                        <Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
            </Form>
            
            
        
    )
}

export default EmployeeForm
