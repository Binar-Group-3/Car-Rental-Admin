import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../redux/actions/dataAction";
import Card from "../../components/Card";
import ModalDelete from "../../components/Card/ModalDelete";
import ListHeader from "../../components/ListHeader";
import { getCars } from "../../hooks/useFetch";
import CardLoading from "../../components/Card/CardLoading/CardLoading";

const ListCar = () => {
  const dispatch = useDispatch();
  const { dataUser } = useSelector((state) => state);
  const { searchQuery: name } = useSelector((state) => state.searchQuery);

  const [show, setShow] = useState(false);
  const [carId, setCarId] = useState(null);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");

  const modalDeleteClose = () => setShow(false);
  const modalDeleteShow = (id) => {
    setShow(true);
    setCarId(id);
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  // fetch query
  const { isLoading, data, isPreviousData } = useQuery(
    ["cars", name, category, page],
    () => getCars(name, category, page),
    {
      keepPreviousData: true,
    }
  );

  const props = {
    page,
    category,
    setPage,
    setCategory,
    data,
    isLoading,
    isPreviousData,
  };

  return (
    <React.Suspense fallback={<p>Loading application...</p>}>
      <div style={{ height: "auto", overflowX: "hidden" }}>
        <ListHeader {...props} />
        <div className="row" style={{ padding: 10 }}>
          {data?.cars.map((item) => (
            <div
              className="col-md-3"
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 8,
                marginBottom: 40,
                justifyContent: "center",
              }}
            >
              <Card {...props} item={item} handleDelete={modalDeleteShow} />
            </div>
          ))}
          {isLoading && <CardLoading />}
        </div>
      </div>
      <ModalDelete show={show} handleClose={modalDeleteClose} carId={carId} />
    </React.Suspense>
  );
};

export default ListCar;
