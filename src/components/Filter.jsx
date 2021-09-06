function Filter(
  {
    isGreasedFiltered = false,
    isNameSorted = true,
    onIsGreasedFilteredChanged = f => f,
    onIsNameSortedChanged = f => f }) {
  return (
    <div className="filterWrapper">
      <div className="ui toggle checkbox" >
        <input type="checkbox" name="public" checked={isGreasedFiltered} onChange={onIsGreasedFilteredChanged} />
        <label>Show only greased pigs</label>
      </div>
      <button className="ui button" onClick={onIsNameSortedChanged}>Sort by {isNameSorted ? "Weight" : "Name"}</button>
    </div>
  )
}

export default Filter;