import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import { useState } from "react";

function Cabins() {

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinTableOperations />
    </Row>
    <Row>
      <CabinTable></CabinTable>

      <AddCabin/>

    </Row>
    </>
  );
}

export default Cabins;
