import { useMediaQuery } from "@material-ui/core";

export default function useStyles() {
    const mobile = useMediaQuery("(max-width:600px)");

    const topBarConatinerStyle = {
        width: "100%",
        background: "#0067E0",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.25)",
    };

    const topBarStyle = {
        width: "90%",
        margin: "0 auto",
        padding: "0.5rem 0",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const iconButtonStyle = {
        background: "white",
        boxShadow: "0 0 15px rgba(0,0,0,0.25)",
        color: "#0067E0",
    };

    const cardStyle = {
        width: mobile ? "90%" : "40rem",
        margin: "1rem auto",
        background: "#0067E0",
        borderRadius: "10px",
        color: "white",
        padding: "1rem 0.5rem",
        boxShadow: "0 0 15px rgba(0,0,0,0.25)",
    };

    const cardHeadingStyle = {
        textAlign: "center",
        textTransform: "capitalize",
    };

    const belowLineStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };
    const dateTimeStyle = {
        display: "flex",
        flexDirection: "column",
        fontSize: "0.7rem",
    };
    const buttonStyle = {
        color: "#0067E0",
        background: "white",
        textTransform: "initial",
        fontFamily: '"Lobster Two", cursive',
    };

    const modalShadowStyle = {
        position: "fixed",
        // inset: "0",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        background: "rgba(0, 103, 224, 0.3)",
        backdropFilter: "blur(2px)",
        paddingTop: "3rem",
        zIndex: "999",
    };
    const modalStyle = {
        width: mobile ? "90%" : "40rem",
        margin: "0 auto",
        background: "#0067E0",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 0 25px rgba(0,0,0,0.25)",
    };
    const modalHeadingStyle = {
        textAlign: "center",
        color: "white",
    };
    const modalTextFieldStyle = {
        width: "90%",
        margin: "0 5%",
        background: "white",
        borderRadius: "10px",
        padding: "1rem 0.5rem",
    };
    const modalButtonContainerStyle = {
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: "1rem",
    };

    const settingsModalStyle = {
        width: mobile ? "60%" : "20rem",
        marginLeft: "auto",
        marginRight: "10%",
        background: "#0067E0",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 0 25px rgba(0,0,0,0.25)",
    };
    const settingsModalCloseStyle = {
        background: "white",
        boxShadow: "0 0 15px rgba(0,0,0,0.25)",
        width: "1rem",
        height: "1rem",
    };

    return {
        topBarConatinerStyle,
        topBarStyle,
        iconButtonStyle,
        cardStyle,
        cardHeadingStyle,
        belowLineStyle,
        dateTimeStyle,
        buttonStyle,
        modalShadowStyle,
        modalStyle,
        modalHeadingStyle,
        modalTextFieldStyle,
        modalButtonContainerStyle,
        settingsModalStyle,
        settingsModalCloseStyle,
    };
}
