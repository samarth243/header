import React from 'react';
import AddProductForm from '../../components/addproductform/AddProductForm';
import Navigationbar from '../../components/navigationbar/Navigationbar';


const AddProductPage=(props)=>{
    return (
        <div>
            <Navigationbar/>
            <AddProductForm/>
        </div>
    );
}

export default AddProductPage;