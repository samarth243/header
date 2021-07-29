import React from 'react'
import AddProductForm from './AddProductForm'
import {shallow  ,configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import  {render ,screen ,fireEvent} from '@testing-library/react'


configure({ adapter: new Adapter() });

const mockedsetdata=jest.fn();

describe("testing", () =>{
 test("renders",()=>{
        const wrapper = shallow(<AddProductForm />);
        expect(wrapper.exists()).toBe(true);
    });

test("basic ",() =>{
      render(<AddProductForm 
             
                // data={[]}
                // setdata={mockedsetdata}
            />); 
     const linkelement= screen.getByPlaceholderText(/Enter Product Name/i);
     fireEvent.change(linkelement, {target: { value: "grocery"}})
     expect(linkelement.value).toBe("grocery");

} );
test("basic to do ",() =>{
    render(<AddProductForm 
           
              data={[]}
              errors={[]}
              categoryValue={[]}
              setdata={mockedsetdata}
          />); 
   const linkelement= screen.getByPlaceholderText(/Enter Product Name/i);
//    fireEvent.change(linkelement, {target: { value: "grocery"}})
   expect(linkelement).toBeInTheDocument();

} );

test("basic ",() =>{
    render(<AddProductForm 
           
              // data={[]}
              // setdata={mockedsetdata}
          />); 
   const linkelement= screen.getByPlaceholderText(/Enter Product Name/i);
   fireEvent.change(linkelement, {target: { value: "grocery"}})
   expect(linkelement.value).toBe("grocery");

} );
test("basic ",() =>{
    render(<AddProductForm 
           
              // data={[]}
              // setdata={mockedsetdata}
          />); 
   const linkelement= screen.getByPlaceholderText(/Enter Product Name/i);
   fireEvent.change(linkelement, {target: { value: "grocery"}})
   expect(linkelement.value).toBe("grocery");

} );

test("basic ",() =>{
    render(<AddProductForm 
           
              // data={[]}
              // setdata={mockedsetdata}
          />); 
   const linkelement= screen.getByPlaceholderText(/Enter Price/i);
   fireEvent.change(linkelement, {target: { value: "grocery"}})
   expect(linkelement.value).toBe("grocery");

} );
test("basic ",() =>{
    render(<AddProductForm 
           
              // data={[]}
              // setdata={mockedsetdata}
          />); 
   const linkelement= screen.getByPlaceholderText(/Enter the Quantity/i);
   fireEvent.change(linkelement, {target: { value: "grocery"}})
   expect(linkelement.value).toBe("grocery");

} );
test("basic ",() =>{
    render(<AddProductForm 
           
              // data={[]}
              // setdata={mockedsetdata}
          />); 
   const linkelement= screen.getByPlaceholderText(/Enter PDF Link/i);
   fireEvent.change(linkelement, {target: { value: "grocery"}})
   expect(linkelement.value).toBe("grocery");

} );
// test("basic ",() =>{
//     render(<AddProductForm 
           
//               // data={[]}
//               // setdata={mockedsetdata}
//           />); 
//    const linkelement= screen.getByPlaceholderText(/Enter Product Name/i);
//    const Buttonelement=screen.getByRole("Button" , {name: /Add Product/i });
//    fireEvent.click(Buttonelement, {target: { value: "grocery"}})
//    expect(linkelement.value).toBe("");

// } );
// t);
//   test("child button is there", () =>{
//     const wrapper = shallow(<AddProductForm />);
//     expect(wrapper.find("Button").text()).toBe("Add Product");

//   });est("includes two paragraphs", () => {
//     const wrapper = shallow(<AddProductForm />);
//     expect(wrapper.find("Form").length).toEqual(1);
//   }
});
