import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useSearchParams, useNavigate } from "react-router-dom";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const Container = styled.div`
  width: 70%;
  max-width: 500px;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 3rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  outline: none;
  margin-top: 0.625rem;
  padding: 10px 15px;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;

const FormInput = ({ sliderInput }) => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const referredBy = searchParams.get("referredBy");

  var initialFieldValues = {
    fullName: "",
    email: "",
    mobileNumber: "",
    sliderInput: {},
    referrals: [""],
    referCount: 0,
  };
  var [values, setValues] = useState(initialFieldValues);

  const usersCollectionRef = collection(db, "users");
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const createUser = async () => {
    await setDoc(doc(usersCollectionRef, values.mobileNumber), values);
  };

  //get Users

  //update refer

  const updateRef = async () => {
    const refDoc = doc(db, "users", referredBy);

    const referredByUser = await getDoc(refDoc);

    if (referredByUser.exists()) {
      const newFields = {
        referrals: arrayUnion(values.mobileNumber),
        referCount: (referredByUser.data().referCount || 0) + 1,
      };
      await updateDoc(refDoc, newFields);
    }
  };

  const check = async () => {
    // console.log(sliderInput);
    const docRef = doc(db, "users", values.mobileNumber);
    const findCurrentUser = await getDoc(docRef);
    if (!findCurrentUser.exists()) {
      createUser();
    }
    if (referredBy) {
      updateRef();
    }
    navigate(`/users/${values.mobileNumber}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    values.sliderInput = { sliderInput };
    check();
  };
  return (
    <Container>
      <Form autoComplete={0} onSubmit={handleFormSubmit}>
        <Input
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
          autoComplete={0}
        />
        <Input
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          autoComplete={0}
        />
        <Input
          placeholder="Mobile Number"
          name="mobileNumber"
          value={values.mobileNumber}
          onChange={handleInputChange}
          autoComplete={0}
        />
        <Input type="submit" value="Save" />
      </Form>
    </Container>
  );
};

export default FormInput;
