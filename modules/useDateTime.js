const useDateTime = () => {
    const d = new Date();
    const date =
        d.getDate() % 10 === 1
            ? `${d.getDate()}st`
            : d.getDate() % 10 === 2
            ? `${d.getDate()}nd`
            : d.getDate() % 10 === 3
            ? `${d.getDate()}rd`
            : `${d.getDate()}th`;

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const month = [months[d.getMonth()]];

    const min = d.getMinutes() < 10 ? `0${d.getMinutes(0)}` : d.getMinutes();
    const h = d.getHours() === 0 ? 12 : d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    const hour = h < 10 ? `0${h}` : h;
    const postFix = d.getHours() === 0 ? " am" : d.getHours() >= 12 ? " pm" : " am";
    const time = hour + " : " + min + postFix;

    const dateTime = date + " " + month + " | " + time;

    return dateTime;
};

export default useDateTime;
