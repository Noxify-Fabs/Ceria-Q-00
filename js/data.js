// Story Data Structure - Islamic Theme
const storyData = {
    part1: {
        title: "Kejujuran adalah Kunci Surga",
        pages: [
            {
                id: 1,
                title: "Ubay dan Ujian Kejujuran",
                text: "Pada suatu hari, Ubay menemukan dompet di masjid. Di dalamnya ada uang yang cukup banyak. 'Aku harus mengembalikannya,' kata Ubay. 'Rasulullah mengajarkan kejujuran itu indah.'",
                illustration: "🕌👦💰",
                illustrationSvg: "assets/images/story-illustration-1.svg",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_1",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
            },
            {
                id: 2,
                title: "Mencari Pemiliknya",
                text: "Ubay bertanya kepada pengurus masjid, 'Pak Haji, ada yang kehilangan dompet?' Pak Haji tersenyum, 'Anak sholeh, besok kita umumkan di pengajian.'",
                illustration: "👳‍♂️🕌📢",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_2",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
            },
            {
                id: 3,
                title: "Doa Sebelum Tidur",
                text: "Malam itu, Ubay membaca doa sebelum tidur. 'Allahumma bismika amutu wa ahyaa.' Lala, adiknya bertanya, 'Kak, kenapa harus berdoa?' 'Karena semua milik Allah, Dik.'",
                illustration: "🛏️🤲🌙",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_3",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
            },
            {
                id: 4,
                title: "Pemilik Datang",
                text: "Besoknya, Pak Umar datang ke masjid. 'Dompet saya kemarin hilang!' Ubay senang, 'Ini dompetnya, Pak.' Pak Umar terharu, 'Terima kasih anak jujur, Allah sayang kamu.'",
                illustration: "👨‍🦳😊🤝",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_4",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
            },
            {
                id: 5,
                title: "Hadiah dari Allah",
                text: "Pak Umar memberikan Ubay hadiah. 'Ini untuk kejujuranmu.' Ubay tersenyum, 'Hadiah terbaik adalah ridho Allah.' Ia pun bersedekah sebagian hadiahnya.",
                illustration: "🎁💝🕌",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_5",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5"
            }
        ]
    },
    part2: {
        title: "Kasih Sayang Sesama Muslim",
        pages: [
            {
                id: 6,
                title: "Lala dan Tetangga Sakit",
                text: "Lala melihat tetangganya, Nenek Siti, sedang sakit. 'Aku harus membantunya,' kata Lala. Ia membawa bubur ayam untuk nenek itu.",
                illustration: "👧👵🍲",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_6",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6"
            },
            {
                id: 7,
                title: "Belajar Kasih Sayang",
                text: "Ibu Lala mengajarkan, 'Sayangilah tetangga seperti sayang pada diri sendiri. Itu ajaran Islam.' Lala mengangguk, 'Aku akan sering menengok Nenek Siti.'",
                illustration: "👩‍👧❤️🏠",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_7",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_7"
            },
            {
                id: 8,
                title: "Zikir Pagi",
                text: "Pagi itu, Lala mengajak Nenek Siti berzikir bersama. 'Subhanallah, Alhamdulillah, Allahu Akbar.' Nenek Siti tersenyum, 'Hatiku jadi tenang.'",
                illustration: "🌅🤲🕌",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_8",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_8"
            },
            {
                id: 9,
                title: "Bantuan Datang",
                text: "Tetangga lain ikut membantu Nenek Siti. Ada yang membersihkan rumah, ada yang membelikan obat. 'Inilah kekuatan persaudaraan Islam,' kata Pak RT.",
                illustration: "🤝🏘️💪",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_9",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_9"
            },
            {
                id: 10,
                title: "Pahala Berlipat",
                text: "Nenek Siti sembuh. 'Terima kasih anak-anak sholeh. Allah akan memberikan pahala berlipat untuk kalian.' Lala dan teman-teman senang, karena mereka telah berbuat baik.",
                illustration: "😊🌟🕌",
                audio: "https://drive.google.com/uc?export=download&id=YOUR_AUDIO_ID_10",
                video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_10"
            }
        ]
    }
};

// Get story part based on URL parameter or default
function getStoryPart() {
    const urlParams = new URLSearchParams(window.location.search);
    const part = urlParams.get('part') || '1';
    return part === '1' ? storyData.part1 : storyData.part2;
}

// Get specific page from story part
function getPage(partNumber, pageNumber) {
    const part = partNumber === 1 ? storyData.part1 : storyData.part2;
    return part.pages[pageNumber - 1];
}

// Get total pages for a part
function getTotalPages(partNumber) {
    const part = partNumber === 1 ? storyData.part1 : storyData.part2;
    return part.pages.length;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { storyData, getStoryPart, getPage, getTotalPages };
}
