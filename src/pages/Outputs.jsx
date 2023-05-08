import { useState } from "react";
import { Flex } from "../components/Flex";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Column } from 'primereact/column';
import { Wrapper } from '../components/Wrapper';
import { OUTPUTS_KEY, OutputsArray, ProductsObj, INVENTORY_KEY } from "../utils";

export const Outputs = () => {
  const [newInputCode, setNewInputCode] = useState('');
  const [newQuantity, setNewQuantity] = useState(null);
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorQuantity, setErrorQuantity] = useState(false);
  const [errorStock, setErrorStock] = useState(false);
  const [products, setProducts] = useState(() => {
    const json = localStorage.getItem(OUTPUTS_KEY);
    try {
      if (!!json) {
        const parsed = JSON.parse(json);
        return parsed;
      }
    } catch (e) {
      return OutputsArray;
    }
    return OutputsArray;
  });
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <Flex justifyContent={"space-between"}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" style={{ color: 'green' }}></i>
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Busca un producto" />
        </span>
        <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
      </Flex>
    );
  };
  const updateInventory = (code, quantity, arr) => {
    setErrorMessage(false);
    setErrorStock(false);
    const json = localStorage.getItem(INVENTORY_KEY);
    let currInventory = ProductsObj;
    if (!!json) {
      currInventory = JSON.parse(json);
    }
    let idxToUpdate = currInventory.findIndex((item) => {
      return item.code === code
    });

    if (idxToUpdate >= 0) {
      currInventory[idxToUpdate].stock -= Number(quantity);
      if (currInventory[idxToUpdate].stock >= 0) {
        arr = [...arr, { code: code, quantity: quantity }]
        setProducts(arr);
        localStorage.setItem(OUTPUTS_KEY, JSON.stringify(arr));
        setVisible(false);
        localStorage.setItem(INVENTORY_KEY, JSON.stringify(currInventory));
      } else {
        setErrorStock(true);
      }
    } else {
      setErrorMessage(true)
    }

  }

  const storeInput = () => {
    if (newInputCode.length === 0 || newQuantity === 0 || newQuantity == null) return;
    const current = localStorage.getItem(OUTPUTS_KEY);
    let arr = products;
    if (!!current) {
      arr = JSON.parse(current);
    }
    setNewInputCode('');
    setNewQuantity('');
    updateInventory(newInputCode, newQuantity, arr);
  };

  const onUpdateInputCode = (e) => {
    setErrorMessage(false);
    setErrorStock(false);
    setNewInputCode(e.target.value);
  };

  const onUpdateQuantity = (e) => {
    setErrorQuantity(false);
    setErrorStock(false);
    const validation = Number(e.target.value);
    if (Number.isNaN(validation)) {
      setErrorQuantity(true);
      return
    }
    setNewQuantity(e.target.value);
  }

  const onClose = () => {
    setVisible(false)
    setErrorMessage(false);
  }

  const footerContent = (
    <div>
      <Button label="Guardar" onClick={storeInput} className="p-button-text" />
    </div>
  );
  const header = renderHeader();

  return (
    <Wrapper>
      <Flex justifyContent={"flex-end"} >
        <Dialog header="Agrega una salida" visible={visible} style={{ width: '50vw' }}
          onHide={onClose} footer={footerContent}>
          <Flex flexDirection={"column"} justifyContent={"center"}>
            <InputText
              type="text"
              className="p-inputtext-lg"
              placeholder="Codigo de producto"
              value={newInputCode}
              onChange={onUpdateInputCode}
            />
            <div className="error-message">
              {errorMessage && 'Ingresa un código de producto válido.'}
            </div>
            <InputText
              type="text"
              className="p-inputtext-lg mt-3"
              placeholder="Cantidad"
              value={newQuantity}
              onChange={onUpdateQuantity}
            />
            <div className="error-message">
              {errorQuantity && 'Validar que sea un número dentro del Stock.'}
              {errorStock && 'No se puede registrar la salida, no hay suficientes productos en Stock'}
            </div>
          </Flex>

        </Dialog>
      </Flex>
      <DataTable
        className="p-datatable-inventory"
        value={products}
        editMode="row"
        filters={filters}
        globalFilterFields={['name', 'code', 'representative.name', 'status']}
        dataKey="code"
        onRowEditComplete={onRowEditComplete}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        header={header}
        tableStyle={{ minWidth: '90rem' }}
        emptyMessage="No se encontraron productos."
      >
        <Column field="code" header="Codigo"></Column>
        <Column field="quantity" header="Cantidad Ingresada"></Column>
        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
      </DataTable>
    </Wrapper>
  )
}
