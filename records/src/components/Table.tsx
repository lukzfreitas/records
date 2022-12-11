import { useEffect, useState } from "react";
import Input from "./Input";
import Title from "./Title";

interface TableProps {
  title: string;
  header: { name: string }[];
  rows: { name: string }[];
}

const Table = (props: TableProps) => {
  return (
    <div className="p-3">
      <Title label={props.title} />
      <div className="row">
        <div className="col-8">
          <Input key="search" placeholder="Pesquisar" />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            Pesquisar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="list-group" id="list-tab" role="tablist">
            <section
              className="list-group-item list-group-item-secondary"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              style={{ cursor: "pointer" }}
              aria-controls="home"
            >
              <div className="row">
                <div className="col">Nome</div>
                <div className="col">Tipo</div>
                <div className="col">E-mail</div>
                <div className="col">Tipo de cliente</div>
              </div>
            </section>
            {props.rows.map((item) => (
              <section
                key={item.name}
                className="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                role="tab"
                style={{ cursor: "pointer" }}
                aria-controls="home"
              >
                <div className="row">
                  <div className="col">{item.name}</div>
                  <div className="col">{item.name}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
