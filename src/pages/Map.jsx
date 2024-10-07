import styled from "styled-components";
import Button from "../ui/Button";
import { FaMinus, FaPlus } from "react-icons/fa";
import MapCont from "../ui/MapCont";
import { useState } from "react";
import { useHillsData } from "../features/map/useHillsData";
import NewHillForm from "../features/map/NewHillForm";
import Sidebar from "../ui/Sidebar";
import { useLocation } from "react-router";
import Modal from "../ui/Modal";
import HillModal from "../features/map/HillModal";
import { useUpdateQuery, useDeleteQuery } from "../helpers/updateQuery";


const StyledMap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 2;
  width: auto;
  height: auto;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

function Map({ menuVisibility, setMenuVisibility }) {
  const [openNewHillForm, setOpenNewHillForm] = useState(false);
  const [isOpenHillModal, setIsOpenHillModal] = useState(false);
  const [openHill, setOpenHill] = useState("")
  const updateQuery = useUpdateQuery()
  const deleteQuery = useDeleteQuery()

  const color = useLocation().pathname.split("/")[1];

  const { isLoadingHills, hills, errorHills, refetchHills } = useHillsData();
  

  console.log(hills);

  const [zoom, setZoom] = useState(9);
  const [clickCoordinates, setClickCoordinates] = useState(null);

  function handleOpenHillDetails(hill) {
    setOpenHill(hill.tag)
    setIsOpenHillModal(true)
    updateQuery("hill", hill)
  }

  function handleCloseModal() {
    setIsOpenHillModal(false)
    deleteQuery("hill")
  }

  if (hills) {
    return (
      <>
        <Sidebar>
          {openNewHillForm && menuVisibility && (
            <NewHillForm
              color={color}
              setOpenNewHillForm={setOpenNewHillForm}
              clickCoordinates={clickCoordinates}
              setMenuVisibility={setMenuVisibility}
              refetch={refetchHills}
            />
          )}
        </Sidebar>
        <StyledMap setMenuVisibility={setMenuVisibility}>
          <Buttons>
            <Button
              size="square"
              color={color}
              onClick={() => (zoom < 22 ? setZoom(zoom + 1) : zoom)}
            >
              <FaPlus />
            </Button>
            <Button
              size="square"
              color={color}
              onClick={() => (zoom > 1 ? setZoom(zoom - 1) : zoom)}
            >
              <FaMinus />
            </Button>
          </Buttons>
          <MapCont
            onShowDetails={handleOpenHillDetails}
            zoom={zoom}
            setClickCoordinates={setClickCoordinates}
            hills={hills}
            setOpenNewHillForm={setOpenNewHillForm}
            setMenuVisibility={setMenuVisibility}
          ></MapCont>
        </StyledMap>
        {isOpenHillModal && <Modal onClose={handleCloseModal}>
          <HillModal></HillModal>
        </Modal>}
      </>
    );
  }
}

export default Map;
