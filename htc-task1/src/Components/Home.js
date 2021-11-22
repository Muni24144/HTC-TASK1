import React, { useState } from "react";
import "./Home.css";
import SortableTree from "react-sortable-tree-patch-react-17";
import "react-sortable-tree-patch-react-17/style.css";
function Home() {
  const [GeneralInformation, setGeneralInformation] = useState({
    username: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [AddressInformation, setAddressInformation] = useState({
    StreetAddress: "",
    City: "",
    State: "",
    Pincode: "",
  });
  const [EducationInformation, setEducationInformation] = useState({
    Degree: "",
    College: "",
    Year: "",
  });
  const [Data, setData] = useState([
    {
      treeData: [
        {
          title: "General Information",
          children: [
            {
              subtitle: "User Name",
            },
            {
              subtitle: "Email Address",
            },
            { subtitle: "Phone Number" },
          ],
        },
        {
          title: "Address Information",
          children: [
            {
              subtitle: "Street Address",
            },
            {
              subtitle: "City",
            },
            { subtitle: "State" },
            { subtitle: "Pincode" },
          ],
        },
        {
          title: "Educational Information",
          children: [
            {
              subtitle: "Degree",
            },
            { subtitle: "College" },
            { subtitle: "Year" },
          ],
        },
      ],
    },
  ]);
  //Handle Change functions
  const GIchangeHanduler = (e) => {
    const { name, value } = e.target;
    setGeneralInformation({ ...GeneralInformation, [name]: value });
  };
  const AIchangeHanduler = (e) => {
    const { name, value } = e.target;
    setAddressInformation({ ...AddressInformation, [name]: value });
  };
  const EIchangeHanduler = (e) => {
    const { name, value } = e.target;
    setEducationInformation({ ...EducationInformation, [name]: value });
  };
  //Form Submit function
  const submitHanduler = (e) => {
    e.preventDefault();
    console.log(Data);
    setData([
      ...Data,
      {
        treeData: [
          {
            title: "General Information",
            children: [
              {
                title: GeneralInformation.username,
                subtitle: "User Name",
              },
              {
                title: GeneralInformation.emailAddress,
                subtitle: "Email Address",
              },
              {
                title: GeneralInformation.phoneNumber,
                subtitle: "Phone Number",
              },
            ],
          },
          {
            title: "Address Information",
            children: [
              {
                title: AddressInformation.StreetAddress,
                subtitle: "Street Address",
              },
              {
                title: AddressInformation.City,
                subtitle: "City Name",
              },
              {
                title: AddressInformation.State,
                subtitle: "State Name",
              },
              { title: AddressInformation.Pincode, subtitle: "Area Pincode" },
            ],
          },
          {
            title: "Educational Information",
            children: [
              {
                title: EducationInformation.Degree,
                subtitle: "Degree",
              },
              {
                title: EducationInformation.College,
                subtitle: "College Name",
              },
              { title: EducationInformation.Year, subtitle: "Year Of Pass" },
            ],
          },
        ],
      },
    ]);
    console.log(Data);
  };

  const Sortable_Tree_Change_Handler = (treeData) => {
    setData([{ treeData }]);
    localStorage.setItem("Data", JSON.stringify(Data));
  };
  return (
    <div className="main_div">
      <div className="sortable_tree">
        {Data.map((D) => (
          <SortableTree
            key={Math.random()}
            treeData={D.treeData}
            onChange={Sortable_Tree_Change_Handler}
          />
        ))}
      </div>
      <div className="form_div">
        <form onSubmit={submitHanduler} className="form_tag">
          <label>General information</label>
          <input
            placeholder="User Name"
            type="text"
            name="username"
            value={GeneralInformation.username}
            onChange={GIchangeHanduler}
          />
          <input
            placeholder="Email Address"
            type="text"
            name="emailAddress"
            value={GeneralInformation.emailAddress}
            onChange={GIchangeHanduler}
          />
          <input
            placeholder="Phone Number"
            type="number"
            name="phoneNumber"
            value={GeneralInformation.phoneNumber}
            onChange={GIchangeHanduler}
          />
          <label>Address Information</label>
          <textarea
            placeholder="Street Address"
            name="StreetAddress"
            value={AddressInformation.StreetAddress}
            onChange={AIchangeHanduler}
          />
          <input
            placeholder="Enter City"
            type="text"
            name="City"
            value={AddressInformation.City}
            onChange={AIchangeHanduler}
          />
          <input
            placeholder="Enter State"
            type="text"
            name="State"
            value={AddressInformation.State}
            onChange={AIchangeHanduler}
          />
          <input
            placeholder="PinCode"
            type="number"
            name="Pincode"
            value={AddressInformation.Pincode}
            onChange={AIchangeHanduler}
          />
          <label>Educational Information</label>
          <input
            placeholder="Enter Degree"
            type="text"
            name="Degree"
            value={EducationInformation.Degree}
            onChange={EIchangeHanduler}
          />
          <input
            placeholder="Enter College Name"
            type="text"
            name="College"
            value={EducationInformation.College}
            onChange={EIchangeHanduler}
          />
          <input
            placeholder="Year"
            type="text"
            name="Year"
            value={EducationInformation.Year}
            onChange={EIchangeHanduler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
