import SiteButton from "../../Component/Button/SiteButton";

const HomeContactUs = ({ btnTitle }) => {
    return (
        <>
            <h1>We run all kinds of IT services that vow your success</h1>
            {/* <SiteButton text={btnTitle} /> */}
            <SiteButton text="ABCD">{btnTitle}</SiteButton>
        </>
    )
}

export default HomeContactUs;