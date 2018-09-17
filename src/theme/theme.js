export default {
    primary: '#05aa9e',
    primaryDark: '#067a71',
    secondary: '#09847A',
    modalBackground: 'rgba(0,0,0, 0.7)',
    colors: {
        black: 'rgb(0, 0, 0)',
        green: 'rgb(67, 160, 71)',
        grey: 'rgba(0, 0, 0, 0.54)',
        greyDark: 'rgb(38, 50, 56)',
        indigo: 'rgb(26, 35, 126)',
        orange: 'rgb(255, 193, 7)',
        primary: 'rgb(5, 170, 158)',
        red: 'rgb(211, 47, 47)',
        secondary: 'rgb(9, 132, 122)',
        teal300: 'rgb(77, 182, 172)',
        white: 'rgb(255, 255, 255)',
    },
    mixins: {
        flexCenter: `
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        `,
        flexCenterCenter: `
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        `,
        flexCenterBetween: `
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        `,
        flexCenterAround: `
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        `,
        flexCenterStart: `
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        `,
        flexCenterEnd: `
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
        `,
        flexColumnBetween: `
            display: flex;
            flex-direction: column;    
            justify-content: space-between;
        `,
    },
}
