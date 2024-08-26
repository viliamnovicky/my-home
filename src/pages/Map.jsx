import styled from "styled-components"
import Button from "../ui/Button"
import { FaMinus, FaPlus } from "react-icons/fa"
import MapCont from "../ui/MapCont"
import { useState } from "react"
import { useHillsData } from "../features/useHillsData"
import NewHillForm from "../features/NewHillForm"
import Sidebar from "../ui/Sidebar"


const StyledMap = styled.div`
    position: relative;
`

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
`

function Map() {

  const [openNewHillForm, setOpenNewHillForm] = useState(false)

  const {isLoadingHills, hills, errorHills} = useHillsData()
  console.log(hills)

    const [zoom, setZoom] = useState(9);
    const [clickCoordinates, setClickCoordinates] = useState(null);

    if(hills){ return (
      <>
      <Sidebar>
      {openNewHillForm && <NewHillForm setOpenNewHillForm={setOpenNewHillForm}/>}
      </Sidebar>
      <StyledMap>
        <Buttons>
            <Button size="square" onClick={() => zoom < 22 ? setZoom(zoom + 1) : zoom}><FaPlus /></Button>
            <Button size="square" onClick={() => zoom > 1 ? setZoom(zoom - 1) : zoom}><FaMinus /></Button>
        </Buttons>
        <MapCont zoom={zoom} setClickCoordinates={setClickCoordinates} hills={hills} setOpenNewHillForm={setOpenNewHillForm}></MapCont>
      </StyledMap>
      </>
    )}
}

export default Map
