import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "ALL" },
          { value: "discount", label: "DISCOUNT" },
          { value: "no-discount", label: "NO DISCOUNT" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name(A-Z)" },
          { value: "name-desc", label: "Sort by name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price(ascending)" },
          { value: "regularPrice-desc", label: "Sort by price(descending)" },
          { value: "maxCapacity-asc", label: "Sort by capacity(ascending)" },
          { value: "maxCapacity-desc", label: "Sort by capacity(descending)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
