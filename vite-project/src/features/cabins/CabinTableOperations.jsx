import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

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
    </TableOperations>
  );
}

export default CabinTableOperations;
