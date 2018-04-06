import React from 'react'
import './Tooltip.css'

export default ({hoveredBar, scales}) => {
  const { xScale, yScale } = scales
  const styles = {
    left: `${xScale(hoveredBar.title) - 30}px`,
    top: `${yScale(hoveredBar.value)}px`
  }

  return (
    <div className="Tooltip" style={styles}>
      <table>
        <thead>
          <tr>
            <th colSpan="2">{hoveredBar.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="1">Bodies</td>
            <td colSpan="1">{hoveredBar.value}</td>
          </tr>
          <tr>
            <td colSpan="1">Year</td>
            <td colSpan="1">{hoveredBar.year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
