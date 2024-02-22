import { Button } from "react-bootstrap";

const SiteButton = ({ text = "Click here", children }) => {
    return (
        <>
            {text}
            <Button>{children}</Button>
        </>
    )
}

export default SiteButton;

// Prop Drilling
// To overcome prop drilling -> useContxt and redux