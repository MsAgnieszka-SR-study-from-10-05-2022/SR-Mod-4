import React from 'react';

function OperationTable({ className, tableOfData, deleteItem }) {
    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Kwota [PLN]</th>
                    <th>Kategoria</th>
                    <th className='empty-place'></th>
                </tr>
            </thead>
            <tbody>
            {tableOfData.map((element) => {
                return (
                    <tr key={element.id}>
                        <td>
                            {element.nameOfOperation}
                        </td>
                        <td>
                            {Number(element.valueOfOperation).toFixed(2)}
                        </td>
                        <td>
                            {element.selectCategory}
                        </td>
                        <td className='delete-btn'>
                            <button onClick={() => deleteItem(element)}>❌</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

 export default OperationTable;