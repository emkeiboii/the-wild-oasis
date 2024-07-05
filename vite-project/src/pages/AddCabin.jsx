import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import CabinTable from "../features/cabins/CabinTable";
function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="cabin-table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="cabin-table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
