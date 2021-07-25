function Row({ rowData, remove_function }) {
  return (
    <>
      <tr>
        <td>{rowData.name}</td>
        <td><a href={rowData.post_id} target="_blank" rel="noreferrer">{rowData.post_id}</a></td>
        <td><a href={rowData.image} target="_blank" rel="noreferrer">{rowData.image}</a></td>
        <td>
          <button className="btn btn-danger" onClick={() => remove_function(rowData.name)}>Remove</button>
        </td>
      </tr>
    </>
  );
}

function CompaniesTable({ columnNames, data, remove_function }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            { columnNames.map((column => <th key={column} >{column}</th>)) }
          </tr>
        </thead>
        <tbody>
          { data.map((rowData) => <Row key={rowData.name} rowData={rowData} remove_function={remove_function }/>) }
        </tbody>
      </table>
    </div>
  );
}

export default CompaniesTable;