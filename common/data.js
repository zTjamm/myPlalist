const playlist = {
    title: "Hip-Hop Hits",
    coverImageUrl: "./playlist1.png",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "track1.png",
            artistName: "Eminem",
            title: "Rap God",
            fileUrl: "Eminem_-_Rap_God.mp3",
            inTrend: true,
        },
        {
            coverImageUrl: "track2.png",
            artistName: "50cent",
            title: "In da Club",
            fileUrl: "50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
            inTrend: true,
        },
    ],
};
export const playlists = [playlist, playlist]

export function createElement(el,text,cssClass, append){
    const element = document.createElement(el)
    text ? element.innerText = text : ``
    cssClass ? element.className = cssClass : ``
    append ? append.appendChild(element) : ``

    return element
}