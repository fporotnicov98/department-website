export let getDate = () => {
    let Data = new Date();
    let Year = Data.getFullYear();
    let Month = Data.getMonth();
    let Day = Data.getDate();
    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();
    return {datetime: `${Day}.${Month}.${Year} ${Hour}:${Minutes}`}
}
