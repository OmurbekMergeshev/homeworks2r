import React from 'react'

class Table extends React.Component {
  renderCell(row, col) {
    const cellNum = row * + col + 1
    return <td key={cellNum}>{cellNum}</td>
  }

  renderRow(row) {
    const cells = []
    for (let col = 0; col < 6; col++) {
      cells.push(this.renderCell(row, col))
    }
    return <tr key={row}>{cells}</tr>
  }

  render() {
    const status = 'Таблицы'
    const rows = []
    for (let row = 0; row < 6; row++) {
      rows.push(this.renderRow(row))
    }

    return(
        <>
          <div className='status'>{status}</div>
          <table className='table'>
            <tbody>{rows}</tbody>
          </table>
        </>
    )
  }
}

export default Table