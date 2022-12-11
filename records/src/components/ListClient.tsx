import { useEffect, useState } from "react";
import Table from "./Table";

interface ListClientProps {
  list: { name: string }[];
}

const ListClient = (props: ListClientProps) => {
  useEffect(() => {
    document.title = "Lista de clientes";
  }, []);

  return <Table header={[]} rows={props.list} title={"Lista de clientes"} />;
};

export default ListClient;
