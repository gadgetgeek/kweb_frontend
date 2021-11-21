import { accessState } from "../atom"
import { useRecoilState } from "recoil"

const Access = (props) => {
    const [access, setAccess] = useRecoilState(accessState)
    // track state to render a div in header that acts as a logout button
}

export default Access