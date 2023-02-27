export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Sunt mollit enim magna commodo. Velit in laborum magna cupidatat enim enim elit. Nostrud id cupidatat quis aliquip dolor est officia do ut aliquip tempor aliqua deserunt adipisicing. Non fugiat duis labore labore. Minim in minim veniam laboris aute in adipisicing cupidatat quis excepteur est deserunt proident.',
            picture: null, 
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Occaecat nostrud do ipsum ea culpa nostrud elit est occaecat aute. Occaecat reprehenderit do amet commodo. Aliquip labore nulla exercitation pariatur Lorem non. Est officia occaecat deserunt magna est aliqua voluptate pariatur aliqua anim ex cillum culpa.',
            picture: null, 
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Eiusmod elit irure in mollit. Magna tempor sit deserunt irure aliqua et deserunt consequat esse. Lorem enim veniam occaecat amet consequat occaecat exercitation tempor irure ullamco proident.',
            picture: null, 
        },
    ],
})