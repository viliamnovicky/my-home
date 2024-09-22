import styled from "styled-components"
import Button from "../../ui/Button"

const StyledCoffeSidebar = styled.div`

button {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
}
`

function CoffeeSidebar({openForm, setOpenForm}) {
    return (
        <StyledCoffeSidebar>
            <Button size="medium" color="coffee" onClick={() => setOpenForm(!openForm)}>add coffe</Button>
        </StyledCoffeSidebar>
    )
}

export default CoffeeSidebar
