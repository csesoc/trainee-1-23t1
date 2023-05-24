// render column headings (time)
export const showTime = () => {
    let content = [];
    for (let i = 8; i < 24; i++) {
        content.push(<div className="bg-theme-white h-7 overflow-hidden">{i == 12 ? 12 : i % 12} {i >=12 ? "pm" : "am"}</div>);
    }
    return content;
}

// render row headings (day of week)
export const weekDays = (numDays: Number) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days
        .filter(day => days.indexOf(day) < numDays)
        .map(day => <div>{day}</div>);
}
